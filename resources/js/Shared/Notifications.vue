<style lang="scss" scoped>
.notifications {
  background-color: #f4f3fb;

  &.more {
    background-color: #fde19d;
  }
}
</style>

<template>
  <div class="di">
    <span v-if="notifications" class="mr2 f6 notifications pv1 ph2 br3 pointer" :class="{'more':(notifications.length > 0)}">
      🔥 {{ notifications.length }}
    </span>
    <span v-else class="mr2 f6 notifications pv1 ph2 br3 pointer">
      🔥 0
    </span>
  </div>
</template>

<script>

export default {
  props: {
    notifications: {
      type: Array,
      default: null,
    },
  },

  data() {
    return {
    };
  },
};
</script>
