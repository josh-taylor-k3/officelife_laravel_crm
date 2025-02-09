<style scoped>
</style>

<template>
  <div>
    <div class="cf mw7 center mb2 fw5">
      🔨 {{ $t('dashboard.worklog_title') }}
    </div>

    <div class="cf mw7 center br3 mb3 bg-white box">
      <div class="pa3">
        <!-- employee hasn't logged yet -->
        <p v-show="!editorShown && !updatedEmployee.has_logged_worklog_today" class="db mt0">
          <span class="dib-ns db mb0-ns mb2">
            {{ $t('dashboard.worklog_placeholder') }}
          </span>
          <a v-show="updatedWorklogCount != 0" class="ml2-ns pointer">
            {{ $t('dashboard.worklog_read_previous_entries') }}
          </a>
        </p>

        <!-- employee has already logged -->
        <p v-show="!editorShown && updatedEmployee.has_logged_worklog_today && !successMessage" class="db mb0 mt0">
          <span class="dib-ns db mb0-ns mb2">
            {{ $t('dashboard.worklog_already_logged') }}
          </span>
          <a v-show="updatedWorklogCount != 0" class="ml2-ns pointer">
            {{ $t('dashboard.worklog_read_previous_entries') }}
          </a>
        </p>

        <!-- button to log the worklog -->
        <p v-show="!editorShown && !updatedEmployee.has_logged_worklog_today" class="ma0">
          <a class="btn btn-secondary dib" data-cy="log-worklog-cta" @click.prevent="showEditor">
            {{ $t('dashboard.worklog_cta') }}
          </a>
        </p>

        <!-- Shows the editor -->
        <div v-show="editorShown && !successMessage">
          <form @submit.prevent="store()">
            <text-area ref="editor" v-model="form.content" :datacy="'worklog-content'" />
            <p class="db lh-copy f6">
              👋 {{ $t('dashboard.worklog_entry_description') }}
            </p>
            <p class="ma0">
              <loading-button :classes="'btn add w-auto-ns w-100 pv2 ph3 mr2'" :state="loadingState" :text="$t('app.save')" :cypress-selector="'submit-log-worklog'" />
              <a class="pointer" @click.prevent="editorShown = false">
                {{ $t('app.cancel') }}
              </a>
            </p>
          </form>
        </div>

        <!-- employee just logged the worklog, we display the success message -->
        <p v-show="successMessage" class="db mb3 mt4 tc">
          {{ $t('dashboard.worklog_added') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingButton from '@/Shared/LoadingButton';
import TextArea from '@/Shared/TextArea';

export default {
  components: {
    LoadingButton,
    TextArea,
  },

  props: {
    worklogCount: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      editorShown: false,
      form: {
        content: null,
        errors: [],
      },
      updatedWorklogCount: 0,
      updatedEmployee: null,
      loadingState: '',
      successMessage: false,
    };
  },

  created: function() {
    this.updatedWorklogCount = this.worklogCount;
    this.updatedEmployee = this.$page.auth.employee;
  },

  methods: {
    updateText(text) {
      this.form.content = text;
    },

    showEditor() {
      this.editorShown = true;

      this.$nextTick(() => {
        this.$refs['editor'].$refs['input'].focus();
      });
    },

    store() {
      this.loadingState = 'loading';
      this.successMessage = true;
      this.editorShown = false;
      this.updatedEmployee.has_logged_worklog_today = true;

      axios.post('/' + this.$page.auth.company.id + '/dashboard/worklog', this.form)
        .then(response => {
          this.$snotify.success(this.$t('dashboard.worklog_success_message'), {
            timeout: 2000,
            showProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });
          this.updatedWorklogCount = this.updatedWorklogCount + 1;
          this.updatedEmployee = response.data.data;
          this.loadingState = null;
        })
        .catch(error => {
          this.loadingState = null;
          this.successMessage = false;
          this.editorShown = true;
          this.updatedEmployee.has_logged_worklog_today = false;
          this.form.errors = _.flatten(_.toArray(error.response.data));
        });
    },
  }
};
</script>
