(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8qMU":function(e,t,a){"use strict";var s=a("kYq9");a.n(s).a},"95PS":function(e,t,a){"use strict";a.r(t);var s=a("IQOQ"),i={directives:{clickOutside:a.n(s).a.directive},props:{employee:{type:Object,default:null},notifications:{type:Array,default:null},teams:{type:Array,default:null}},data:function(){return{modal:!1,search:"",updatedEmployee:Object}},computed:{filteredList:function(){var e=this;return this.teams.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())})).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))}},created:function(){this.updatedEmployee=this.employee},methods:{toggleModal:function(){this.modal=!1},assign:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/team",e).then((function(e){t.$snotify.success(t.$t("employee.team_modal_assign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},reset:function(e){var t=this;axios.delete("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/team/"+e.id).then((function(e){t.$snotify.success(t.$t("employee.team_modal_unassign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},isAssigned:function(e){for(var t=0;t<this.updatedEmployee.teams.length;t++)if(this.updatedEmployee.teams[t].id==e)return!0;return!1}}},o=(a("NXSR"),a("KHd+")),n=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"di relative"},[e.$page.auth.employee.permission_level<=200?a("ul",{staticClass:"ma0 pa0 di existing-teams"},[a("li",{directives:[{name:"show",rawName:"v-show",value:0!=e.updatedEmployee.teams.length,expression:"updatedEmployee.teams.length != 0"}],staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer di",attrs:{"data-cy":"open-team-modal"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v("\n      "+e._s(e.$t("employee.team_title"))+"\n    ")]),e._v(" "),e._l(e.updatedEmployee.teams,(function(t){return a("li",{key:t.id,staticClass:"di"},[e._v("\n      "+e._s(t.name)+"\n    ")])}))],2):a("ul",{staticClass:"ma0 pa0 existing-teams di"},[a("li",{directives:[{name:"show",rawName:"v-show",value:0!=e.updatedEmployee.teams.length,expression:"updatedEmployee.teams.length != 0"}],staticClass:"di"},[e._v("\n      "+e._s(e.$t("employee.team_title"))+"\n    ")]),e._v(" "),e._l(e.updatedEmployee.teams,(function(t){return a("li",{key:t.id,staticClass:"di"},[e._v("\n      "+e._s(t.name)+"\n    ")])}))],2),e._v(" "),e.$page.auth.employee.permission_level<=200?a("a",{directives:[{name:"show",rawName:"v-show",value:0==e.updatedEmployee.teams.length,expression:"updatedEmployee.teams.length == 0"}],staticClass:"pointer",attrs:{"data-cy":"open-team-modal-blank"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v(e._s(e.$t("employee.team_modal_title")))]):a("span",{directives:[{name:"show",rawName:"v-show",value:0==e.updatedEmployee.teams.length,expression:"updatedEmployee.teams.length == 0"}]},[e._v(e._s(e.$t("employee.team_modal_blank")))]),e._v(" "),e.modal?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleModal,expression:"toggleModal"}],staticClass:"popupmenu absolute br2 bg-white z-max tl bounceIn faster"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.teams.length,expression:"teams.length != 0"}]},[a("p",{staticClass:"pa2 ma0 bb bb-gray"},[e._v("\n        "+e._s(e.$t("employee.team_modal_title"))+"\n      ")]),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[a("div",{staticClass:"relative pv2 ph2 bb bb-gray"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("employee.team_modal_filter")},domProps:{value:e.search},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleModal(t)},input:function(t){t.target.composing||(e.search=t.target.value)}}})])]),e._v(" "),a("ul",{staticClass:"pl0 list ma0 overflow-auto relative teams-list"},e._l(e.filteredList,(function(t){return a("li",{key:t.id,attrs:{"data-cy":"list-team-"+t.id}},[e.isAssigned(t.id)?a("div",{staticClass:"pv2 ph3 bb bb-gray-hover bb-gray pointer relative",on:{click:function(a){return e.reset(t)}}},[e._v("\n            "+e._s(t.name)+"\n\n            "),a("img",{staticClass:"pr1 absolute right-1",attrs:{src:"/img/check.svg"}})]):a("div",{staticClass:"pv2 ph3 bb bb-gray-hover bb-gray pointer relative",on:{click:function(a){return e.assign(t)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])])})),0)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.teams.length,expression:"teams.length == 0"}]},[a("p",{staticClass:"pa2 tc lh-copy",attrs:{"data-cy":"modal-blank-state-copy"}},[e._v("\n        "+e._s(e.$t("employee.team_modal_blank_title"))+" "),a("a",{attrs:{href:"/"+e.$page.auth.company.id+"/account/teams","data-cy":"modal-blank-state-cta"}},[e._v(e._s(e.$t("employee.team_modal_blank_cta")))])]),e._v(" "),a("img",{staticClass:"db center mb4",attrs:{srcset:"/img/company/account/blank-team-1x.png, /img/company/account/blank-team-2x.png 2x"}})])]):e._e()])}),[],!1,null,"3279aea2",null);t.default=n.exports},AQdR:function(e,t,a){"use strict";var s=a("Fh92");a.n(s).a},B1NW:function(e,t,a){"use strict";var s=a("r0kY");a.n(s).a},Df8J:function(e,t,a){var s=a("ec2E");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(e.exports=s.locals)},Fh92:function(e,t,a){var s=a("ZRpA");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(e.exports=s.locals)},I7lW:function(e,t,a){var s=a("v1wK");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(e.exports=s.locals)},LYJk:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.avatar[data-v-263ebdae] {\n  width: 80px;\n  height: 80px;\n  top: 19%;\n  left: 50%;\n  margin-top: -40px; /* Half the height */\n  margin-left: -40px; /* Half the width */\n}\n",""])},NXSR:function(e,t,a){"use strict";var s=a("oN0c");a.n(s).a},PDwx:function(e,t,a){"use strict";a.r(t);var s=a("IQOQ"),i={directives:{clickOutside:a.n(s).a.directive},props:{employee:{type:Object,default:null},notifications:{type:Array,default:null},statuses:{type:Array,default:null}},data:function(){return{modal:!1,search:"",updatedEmployee:Object}},computed:{filteredList:function(){var e=this;return this.statuses.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())})).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))}},created:function(){this.updatedEmployee=this.employee},methods:{toggleModal:function(){this.modal=!1},assign:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/employeestatuses",e).then((function(e){t.$snotify.success(t.$t("employee.status_modal_assign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},reset:function(e){var t=this;axios.delete("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/employeestatuses/"+e.id).then((function(e){t.$snotify.success(t.$t("employee.status_modal_unassign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},isAssigned:function(e){return!!this.updatedEmployee.status&&this.updatedEmployee.status.id==e}}},o=(a("yNAf"),a("KHd+")),n=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"di relative"},[e.$page.auth.employee.permission_level<=200&&e.updatedEmployee.status?a("ul",{staticClass:"ma0 pa0 di existing-statuses"},[a("li",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer di",attrs:{"data-cy":"open-status-modal"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v("\n      "+e._s(e.$t("employee.status_title"))+"\n    ")]),e._v(" "),a("li",{staticClass:"di",attrs:{"data-cy":"status-name-right-permission"}},[e._v("\n      "+e._s(e.updatedEmployee.status.name)+"\n    ")])]):e._e(),e._v(" "),e.$page.auth.employee.permission_level>200&&e.updatedEmployee.status?a("ul",{staticClass:"ma0 pa0 existing-statuses di"},[a("li",{staticClass:"di"},[e._v("\n      "+e._s(e.$t("employee.status_title"))+"\n    ")]),e._v(" "),a("li",{staticClass:"di",attrs:{"data-cy":"status-name-wrong-permission"}},[e._v("\n      "+e._s(e.updatedEmployee.status.name)+"\n    ")])]):e._e(),e._v(" "),e.$page.auth.employee.permission_level<=200?a("a",{directives:[{name:"show",rawName:"v-show",value:!e.updatedEmployee.status,expression:"!updatedEmployee.status"}],staticClass:"pointer",attrs:{"data-cy":"open-status-modal-blank"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v(e._s(e.$t("employee.status_modal_cta")))]):a("span",{directives:[{name:"show",rawName:"v-show",value:!e.updatedEmployee.status,expression:"!updatedEmployee.status"}]},[e._v(e._s(e.$t("employee.status_modal_blank")))]),e._v(" "),e.modal?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleModal,expression:"toggleModal"}],staticClass:"popupmenu absolute br2 bg-white z-max tl bounceIn faster"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.statuses.length,expression:"statuses.length != 0"}]},[a("p",{staticClass:"pa2 ma0 bb bb-gray"},[e._v("\n        "+e._s(e.$t("employee.status_modal_title"))+"\n      ")]),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[a("div",{staticClass:"relative pv2 ph2 bb bb-gray"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("employee.status_modal_filter")},domProps:{value:e.search},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleModal(t)},input:function(t){t.target.composing||(e.search=t.target.value)}}})])]),e._v(" "),a("ul",{staticClass:"pl0 list ma0 overflow-auto relative statuses-list"},[e._l(e.filteredList,(function(t){return a("li",{key:t.id,attrs:{"data-cy":"list-status-"+t.id}},[e.isAssigned(t.id)?a("div",{staticClass:"pv2 ph3 bb bb-gray-hover bb-gray pointer relative",on:{click:function(a){return e.reset(t)}}},[e._v("\n            "+e._s(t.name)+"\n\n            "),a("img",{staticClass:"pr1 absolute right-1",attrs:{src:"/img/check.svg"}})]):a("div",{staticClass:"pv2 ph3 bb bb-gray-hover bb-gray pointer relative",on:{click:function(a){return e.assign(t)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])])})),e._v(" "),a("li",[e.updatedEmployee.status?a("a",{staticClass:"pointer pv2 ph3 db no-underline c-delete bb-0",attrs:{"data-cy":"status-reset-button"},on:{click:function(t){return e.reset(e.updatedEmployee.status)}}},[e._v(e._s(e.$t("employee.status_modal_reset")))]):e._e()])],2)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.statuses.length,expression:"statuses.length == 0"}]},[a("p",{staticClass:"pa2 tc lh-copy",attrs:{"data-cy":"modal-blank-state-copy"}},[e._v("\n        "+e._s(e.$t("employee.status_modal_blank_title"))+" "),a("a",{attrs:{href:"/"+e.$page.auth.company.id+"/account/employeestatuses","data-cy":"modal-blank-state-cta"}},[e._v(e._s(e.$t("employee.status_modal_blank_cta")))])])])]):e._e()])}),[],!1,null,"5d0e1007",null);t.default=n.exports},Wf3K:function(e,t,a){"use strict";a.r(t);var s={props:{notifications:{type:Array,default:null},worklogs:{type:Array,default:null}},data:function(){return{}},methods:{}},i=(a("AQdR"),a("KHd+")),o=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb4 relative"},[a("span",{staticClass:"tc db fw5 mb2"},[e._v("🔨 Work logs")]),e._v(" "),a("div",{staticClass:"br3 bg-white box z-1 pa3"},[0==e.worklogs.length?a("p",{staticClass:"lh-copy ma0 f6 tc"},[e._v("\n      "+e._s(e.$t("employee.worklog_blank"))+"\n    ")]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.worklogs.length,expression:"worklogs.length != 0"}],attrs:{"data-cy":"list-worklogs"}},[a("ul",{staticClass:"list mv0 pa0"},e._l(e.worklogs,(function(t){return a("li",{key:t.id,staticClass:"mb3 relative worklog-item"},[a("p",{staticClass:"f7 mb1"},[e._v("\n            "+e._s(e._f("moment")(t.created_at,"dddd, MMMM Do YYYY"))+"\n          ")]),e._v(" "),a("div",{staticClass:"parsed-content",domProps:{innerHTML:e._s(t.parsed_content)}})])})),0)])])])}),[],!1,null,"243ea23b",null);t.default=o.exports},ZRpA:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".content[data-v-243ea23b] {\n  background-color: #f3f9fc;\n  padding: 1px 10px;\n}\n.worklog-item[data-v-243ea23b]:last-child {\n  margin-bottom: 0;\n}",""])},bjMk:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.list-employees > ul[data-v-47d498be] {\n  padding-left: 43px;\n}\n.list-employees li[data-v-47d498be]:last-child {\n  margin-bottom: 0;\n}\n.avatar[data-v-47d498be] {\n  top: 1px;\n  left: -44px;\n  width: 35px;\n}\n.list-employees-action[data-v-47d498be] {\n  top: 15px;\n}\n.list-employees-modal[data-v-47d498be] {\n  right: -6px;\n  top: 27px;\n}\n.icon-delete[data-v-47d498be] {\n  top: 2px;\n}\n.ball-pulse[data-v-47d498be] {\n  right: 8px;\n  top: 10px;\n  position: absolute;\n}\n",""])},dPCr:function(e,t,a){"use strict";a.r(t);var s=a("IQOQ"),i={directives:{clickOutside:a.n(s).a.directive},props:{employee:{type:Object,default:null},notifications:{type:Array,default:null},positions:{type:Array,default:null}},data:function(){return{modal:!1,search:"",title:"",updatedEmployee:Object}},computed:{filteredList:function(){var e=this;return this.positions.filter((function(t){return t.title.toLowerCase().includes(e.search.toLowerCase())})).sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0}))}},mounted:function(){null!=this.employee.position&&(this.title=this.employee.position.title),this.updatedEmployee=this.$page.auth.employee},methods:{toggleModal:function(){this.modal=!1},assign:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/position",e).then((function(e){t.$snotify.success(t.$t("employee.position_modal_assign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.title=e.data.data.position.title,t.updatedEmployee=e.data.data,t.modal=!1})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},reset:function(){var e=this;axios.delete("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/position/"+this.updatedEmployee.position.id).then((function(t){e.$snotify.success(e.$t("employee.position_modal_unassign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),e.title="",e.modal=!1,e.updatedEmployee=t.data.data})).catch((function(t){e.form.errors=_.flatten(_.toArray(t.response.data))}))}}},o=(a("jbmt"),a("KHd+")),n=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"di relative"},[e.$page.auth.employee.permission_level<=200?a("span",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer",attrs:{"data-cy":"open-position-modal"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v(e._s(e.title))]):a("span",{attrs:{"data-cy":"position-title"}},[e._v(e._s(e.title))]),e._v(" "),e.$page.auth.employee.permission_level<=200?a("a",{directives:[{name:"show",rawName:"v-show",value:""==e.title,expression:"title == ''"}],staticClass:"pointer",attrs:{"data-cy":"open-position-modal-blank"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v(e._s(e.$t("employee.position_modal_title")))]):a("span",{directives:[{name:"show",rawName:"v-show",value:""==e.title,expression:"title == ''"}]},[e._v(e._s(e.$t("employee.position_blank")))]),e._v(" "),e.modal?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleModal,expression:"toggleModal"}],staticClass:"popupmenu absolute br2 bg-white z-max tl bounceIn faster"},[a("p",{staticClass:"pa2 ma0 bb bb-gray"},[e._v("\n      "+e._s(e.$t("employee.position_modal_title"))+"\n    ")]),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[a("div",{staticClass:"relative pv2 ph2 bb bb-gray"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("employee.position_modal_filter")},domProps:{value:e.search},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleModal(t)},input:function(t){t.target.composing||(e.search=t.target.value)}}})])]),e._v(" "),a("ul",{staticClass:"pl0 list ma0 overflow-auto relative positions-list"},e._l(e.filteredList,(function(t){return a("li",{key:t.id,staticClass:"pv2 ph3 bb bb-gray-hover bb-gray pointer",attrs:{"data-cy":"list-position-"+t.id},on:{click:function(a){return e.assign(t)}}},[e._v("\n        "+e._s(t.title)+"\n      ")])})),0),e._v(" "),""!=e.title?a("a",{staticClass:"pointer pv2 ph3 db no-underline c-delete bb-0",attrs:{"data-cy":"position-reset-button"},on:{click:e.reset}},[e._v(e._s(e.$t("employee.position_modal_reset")))]):e._e()]):e._e()])}),[],!1,null,"b268b002",null);t.default=n.exports},e2Ki:function(e,t,a){"use strict";a.r(t);var s=a("IQOQ"),i=a.n(s),o=(a("zHN7"),{components:{BallPulseLoader:a("mM8D").a},directives:{clickOutside:i.a.directive},props:{employee:{type:Object,default:null},notifications:{type:Array,default:null},managers:{type:Array,default:null},directReports:{type:Array,default:null}},data:function(){return{modal:"hide",processingSearch:!1,searchManagers:[],searchDirectReports:[],form:{searchTerm:null,errors:[]},managerModalId:0,directReportModalId:0,deleteEmployeeConfirmation:!1}},methods:{toggleModals:function(){"hide"==this.modal?this.modal="menu":this.modal="hide",this.searchManagers=[],this.searchDirectReports=[],this.form.searchTerm=null},displayManagerModal:function(){var e=this;this.modal="manager",this.$nextTick((function(){e.$refs.search.focus()}))},displayDirectReportModal:function(){var e=this;this.modal="directReport",this.$nextTick((function(){e.$refs.search.focus()}))},hideManagerModal:function(){this.managerModalId=0},hideDirectReportModal:function(){this.directReportModalId=0},search:_.debounce((function(){var e=this;""!=this.form.searchTerm&&(this.processingSearch=!0,axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/search/hierarchy",this.form).then((function(t){"manager"==e.modal&&(e.searchManagers=t.data.data),"directReport"==e.modal&&(e.searchDirectReports=t.data.data),e.processingSearch=!1})).catch((function(t){e.form.errors=_.flatten(_.toArray(t.response.data)),e.processingSearch=!1})))}),500),assignManager:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/assignManager",e).then((function(e){t.$snotify.success(t.$t("employee.hierarchy_modal_add_manager_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.managers.push(e.data.data),t.modal="hide"})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},assignDirectReport:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/assignDirectReport",e).then((function(e){t.$snotify.success(t.$t("employee.hierarchy_modal_add_direct_report_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.directReports.push(e.data.data),t.modal="hide"})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},unassignManager:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/unassignManager",e).then((function(e){t.$snotify.success(t.$t("employee.hierarchy_modal_remove_manager_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.managers.splice(t.managers.indexOf(e.data.data),1),t.deleteEmployeeConfirmation=!1,t.managerModalId=0})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},unassignDirectReport:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/unassignDirectReport",e).then((function(e){t.$snotify.success(t.$t("employee.hierarchy_modal_remove_direct_report_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.directReports.splice(t.directReports.indexOf(e.data.data),1),t.deleteEmployeeConfirmation=!1,t.directReportModalId=0})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))}}}),n=(a("8qMU"),a("KHd+")),r=Object(n.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb4 relative"},[a("span",{staticClass:"tc db fw5 mb2"},[e._v(e._s(e.$t("employee.hierarchy_title")))]),e._v(" "),a("img",{directives:[{name:"show",rawName:"v-show",value:e.$page.auth.employee.permission_level<=200,expression:"$page.auth.employee.permission_level <= 200"}],staticClass:"box-plus-button absolute br-100 pa2 bg-white pointer",attrs:{src:"/img/plus_button.svg","data-cy":"add-hierarchy-button"},on:{click:function(t){return t.preventDefault(),e.toggleModals()}}}),e._v(" "),"menu"==e.modal?a("div",{staticClass:"popupmenu absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[a("ul",{staticClass:"list ma0 pa0"},[a("li",{staticClass:"pv2"},[a("a",{staticClass:"pointer",attrs:{"data-cy":"add-manager-button"},on:{click:function(t){return t.preventDefault(),e.displayManagerModal()}}},[e._v(e._s(e.$t("employee.hierarchy_modal_add_manager")))])]),e._v(" "),a("li",{staticClass:"pv2"},[a("a",{staticClass:"pointer",attrs:{"data-cy":"add-direct-report-button"},on:{click:function(t){return t.preventDefault(),e.displayDirectReportModal()}}},[e._v(e._s(e.$t("employee.hierarchy_modal_add_direct_report")))])])])]):e._e(),e._v(" "),"manager"==e.modal?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleModals,expression:"toggleModals"}],staticClass:"popupmenu absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[a("div",{staticClass:"mb3 relative"},[a("p",[e._v(e._s(e.$t("employee.hierarchy_modal_add_manager_search",{name:e.employee.first_name})))]),e._v(" "),a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.searchTerm,expression:"form.searchTerm"}],ref:"search",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("employee.hierarchy_search_placeholder"),required:"","data-cy":"search-manager"},domProps:{value:e.form.searchTerm},on:{keyup:e.search,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleModals()},input:function(t){t.target.composing||e.$set(e.form,"searchTerm",t.target.value)}}}),e._v(" "),e.processingSearch?a("ball-pulse-loader",{attrs:{color:"#5c7575",size:"7px"}}):e._e()],1)])]),e._v(" "),a("ul",{staticClass:"pl0 list ma0"},[a("li",{staticClass:"fw5 mb3"},[a("span",{staticClass:"f6 mb2 dib"},[e._v(e._s(e.$t("employee.hierarchy_search_results")))]),e._v(" "),e.searchManagers.length>0?a("ul",{staticClass:"list ma0 pl0"},e._l(e.searchManagers,(function(t){return a("li",{key:t.id,staticClass:"bb relative pv2 ph1 bb-gray bb-gray-hover"},[e._v("\n            "+e._s(t.name)+"\n            "),a("a",{staticClass:"absolute right-1 pointer",attrs:{"data-cy":"potential-manager-button"},on:{click:function(a){return a.preventDefault(),e.assignManager(t)}}},[e._v(e._s(e.$t("app.choose")))])])})),0):a("div",{staticClass:"silver"},[e._v("\n          "+e._s(e.$t("app.no_results"))+"\n        ")])])])]):e._e(),e._v(" "),"directReport"==e.modal?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleModals,expression:"toggleModals"}],staticClass:"popupmenu absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[a("div",{staticClass:"mb3 relative"},[a("p",[e._v(e._s(e.$t("employee.hierarchy_modal_add_direct_report_search",{name:e.employee.first_name})))]),e._v(" "),a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.searchTerm,expression:"form.searchTerm"}],ref:"search",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("employee.hierarchy_search_placeholder"),required:"","data-cy":"search-direct-report"},domProps:{value:e.form.searchTerm},on:{keyup:e.search,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleModals()},input:function(t){t.target.composing||e.$set(e.form,"searchTerm",t.target.value)}}}),e._v(" "),e.processingSearch?a("ball-pulse-loader",{attrs:{color:"#5c7575",size:"7px"}}):e._e()],1)])]),e._v(" "),a("ul",{staticClass:"pl0 list ma0"},[a("li",{staticClass:"fw5 mb3"},[a("span",{staticClass:"f6 mb2 dib"},[e._v(e._s(e.$t("employee.hierarchy_search_results")))]),e._v(" "),e.searchDirectReports.length>0?a("ul",{staticClass:"list ma0 pl0"},e._l(e.searchDirectReports,(function(t){return a("li",{key:t.id,staticClass:"bb relative pv2 ph1 bb-gray bb-gray-hover"},[e._v("\n            "+e._s(t.name)+"\n            "),a("a",{staticClass:"absolute right-1 pointer",attrs:{"data-cy":"potential-direct-report-button"},on:{click:function(a){return a.preventDefault(),e.assignDirectReport(t)}}},[e._v(e._s(e.$t("app.choose")))])])})),0):a("div",{staticClass:"silver"},[e._v("\n          "+e._s(e.$t("app.no_results"))+"\n        ")])])])]):e._e(),e._v(" "),a("div",{staticClass:"br3 bg-white box z-1 pa3 list-employees"},[0==e.managers.length&&0==e.directReports.length?a("p",{staticClass:"lh-copy mb0 f6"},[e._v("\n      "+e._s(e.$t("employee.hierarchy_blank"))+"\n    ")]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.managers.length,expression:"managers.length != 0"}],attrs:{"data-cy":"list-managers"}},[a("p",{staticClass:"mt0 mb2 f6"},[e._v("\n        "+e._s(e.$tc("employee.hierarchy_list_manager_title",e.managers.length))+"\n      ")]),e._v(" "),a("ul",{staticClass:"list mv0"},e._l(e.managers,(function(t){return a("li",{key:t.id,staticClass:"mb3 relative"},[a("img",{staticClass:"br-100 absolute avatar",attrs:{src:t.avatar}}),e._v(" "),a("a",{staticClass:"mb2",attrs:{href:"/"+e.$page.auth.company.id+"/employees/"+t.id}},[e._v(e._s(t.name))]),e._v(" "),null!==t.position?a("span",{staticClass:"title db f7 mt1"},[e._v(e._s(t.position.title))]):a("span",{staticClass:"title db f7 mt1"},[e._v(e._s(e.$t("app.no_position_defined")))]),e._v(" "),a("img",{staticClass:"absolute right-0 pointer list-employees-action",attrs:{src:"/img/common/triple-dots.svg","data-cy":"display-remove-manager-modal"},on:{click:function(a){e.managerModalId=t.id}}}),e._v(" "),e.managerModalId==t.id?a("div",{directives:[{name:"show",rawName:"v-show",value:e.$page.auth.employee.permission_level<=200,expression:"$page.auth.employee.permission_level <= 200"},{name:"click-outside",rawName:"v-click-outside",value:e.hideManagerModal,expression:"hideManagerModal"}],staticClass:"popupmenu absolute br2 bg-white z-max tl pv2 ph3 bounceIn list-employees-modal"},[a("ul",{staticClass:"list ma0 pa0"},[a("li",{directives:[{name:"show",rawName:"v-show",value:!e.deleteEmployeeConfirmation,expression:"!deleteEmployeeConfirmation"}],staticClass:"pv2 relative"},[a("icon-delete",{attrs:{classes:"icon-delete relative",width:15,height:15}}),e._v(" "),a("a",{staticClass:"pointer ml1 c-delete",attrs:{"data-cy":"remove-manager-button"},on:{click:function(t){t.preventDefault(),e.deleteEmployeeConfirmation=!0}}},[e._v(e._s(e.$t("employee.hierarchy_modal_remove_manager")))])],1),e._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:e.deleteEmployeeConfirmation,expression:"deleteEmployeeConfirmation"}],staticClass:"pv2"},[e._v("\n                "+e._s(e.$t("app.sure"))+"\n                "),a("a",{staticClass:"c-delete mr1 pointer",attrs:{"data-cy":"confirm-remove-manager"},on:{click:function(a){return a.preventDefault(),e.unassignManager(t)}}},[e._v(e._s(e.$t("app.yes")))]),e._v(" "),a("a",{staticClass:"pointer",on:{click:function(t){t.preventDefault(),e.deleteEmployeeConfirmation=!1}}},[e._v(e._s(e.$t("app.no")))])])])]):e._e()])})),0)]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.directReports.length,expression:"directReports.length != 0"}],class:0!=e.managers.length?"mt3":"",attrs:{"data-cy":"list-direct-reports"}},[a("p",{staticClass:"mt0 mb2 f6"},[e._v("\n        "+e._s(e.$tc("employee.hierarchy_list_direct_report_title",e.directReports.length))+"\n      ")]),e._v(" "),a("ul",{staticClass:"list mv0"},e._l(e.directReports,(function(t){return a("li",{key:t.id,staticClass:"mb3 relative"},[a("img",{staticClass:"br-100 absolute avatar",attrs:{src:t.avatar}}),e._v(" "),a("a",{staticClass:"mb2",attrs:{href:"/"+e.$page.auth.company.id+"/employees/"+t.id}},[e._v(e._s(t.name))]),e._v(" "),null!==t.position?a("span",{staticClass:"title db f7 mt1"},[e._v(e._s(t.position.title))]):a("span",{staticClass:"title db f7 mt1"},[e._v(e._s(e.$t("app.no_position_defined")))]),e._v(" "),a("img",{staticClass:"absolute right-0 pointer list-employees-action",attrs:{src:"/img/common/triple-dots.svg","data-cy":"display-remove-directreport-modal"},on:{click:function(a){e.directReportModalId=t.id}}}),e._v(" "),e.directReportModalId==t.id?a("div",{directives:[{name:"show",rawName:"v-show",value:e.$page.auth.employee.permission_level<=200,expression:"$page.auth.employee.permission_level <= 200"},{name:"click-outside",rawName:"v-click-outside",value:e.hideDirectReportModal,expression:"hideDirectReportModal"}],staticClass:"popupmenu absolute br2 bg-white z-max tl pv2 ph3 bounceIn list-employees-modal"},[a("ul",{staticClass:"list ma0 pa0"},[a("li",{directives:[{name:"show",rawName:"v-show",value:!e.deleteEmployeeConfirmation,expression:"!deleteEmployeeConfirmation"}],staticClass:"pv2 relative"},[a("icon-delete",{attrs:{classes:"icon-delete relative",width:15,height:15}}),e._v(" "),a("a",{staticClass:"pointer ml1 c-delete",attrs:{"data-cy":"remove-directreport-button"},on:{click:function(t){t.preventDefault(),e.deleteEmployeeConfirmation=!0}}},[e._v(e._s(e.$t("employee.hierarchy_modal_remove_direct_report")))])],1),e._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:e.deleteEmployeeConfirmation,expression:"deleteEmployeeConfirmation"}],staticClass:"pv2"},[e._v("\n                "+e._s(e.$t("app.sure"))+"\n                "),a("a",{staticClass:"c-delete mr1 pointer",attrs:{"data-cy":"confirm-remove-directreport"},on:{click:function(a){return a.preventDefault(),e.unassignDirectReport(t)}}},[e._v(e._s(e.$t("app.yes")))]),e._v(" "),a("a",{staticClass:"pointer",on:{click:function(t){t.preventDefault(),e.deleteEmployeeConfirmation=!1}}},[e._v(e._s(e.$t("app.no")))])])])]):e._e()])})),0)])])])}),[],!1,null,"47d498be",null);t.default=r.exports},ec2E:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.statuses-list[data-v-5d0e1007] {\n  max-height: 150px;\n}\n.popupmenu[data-v-5d0e1007] {\n  right: 2px;\n  top: 26px;\n  width: 280px;\n}\n.c-delete[data-v-5d0e1007]:hover {\n  border-bottom-width: 0;\n}\n.existing-statuses li[data-v-5d0e1007]:not(:last-child) {\n  margin-right: 5px;\n}\n",""])},"j/m5":function(e,t,a){"use strict";a.r(t);var s=a("IQOQ"),i=a.n(s),o=a("+SZM"),n=a("dPCr"),r=a("PDwx"),l=a("95PS"),c=a("e2Ki"),p=a("Wf3K"),d={components:{Layout:o.a,AssignEmployeePosition:n.default,AssignEmployeeStatus:r.default,AssignEmployeeTeam:l.default,AssignEmployeeHierarchy:c.default,Worklogs:p.default},directives:{clickOutside:i.a.directive},props:{employee:{type:Object,default:null},notifications:{type:Array,default:null},managers:{type:Array,default:null},directReports:{type:Array,default:null},positions:{type:Array,default:null},teams:{type:Array,default:null},worklogs:{type:Array,default:null},statuses:{type:Array,default:null}},data:function(){return{profileMenu:!1}},mounted:function(){localStorage.success&&(this.$snotify.success(localStorage.success,{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),localStorage.clear())},methods:{toggleProfileMenu:function(){this.profileMenu=!1}}},m=(a("B1NW"),a("KHd+")),u=Object(m.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout",{attrs:{title:"Home",notifications:e.notifications}},[a("div",{staticClass:"ph2 ph5-ns"},[a("div",{staticClass:"mt4-l mt1 mw7 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[a("ul",{staticClass:"list ph0 tc-l tl"},[a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+e.$page.auth.company.id+"/dashboard"}},[e._v("\n            "+e._s(e.$page.auth.company.name)+"\n          ")])],1),e._v(" "),a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+e.$page.auth.company.id+"/employees"}},[e._v("\n            "+e._s(e.$t("app.breadcrumb_employee_list"))+"\n          ")])],1),e._v(" "),a("li",{staticClass:"di"},[e._v("\n          "+e._s(e.employee.name)+"\n        ")])])]),e._v(" "),a("div",{staticClass:"mw9 center br3 mb4 bg-white box relative z-1"},[a("div",{staticClass:"pa3 relative pt5"},[a("img",{directives:[{name:"show",rawName:"v-show",value:e.$page.auth.employee.permission_level<=200||e.$page.auth.user.user_id==e.employee.user.id,expression:"$page.auth.employee.permission_level <= 200 || $page.auth.user.user_id == employee.user.id"}],staticClass:"box-edit-button absolute br-100 pa2 bg-white pointer",attrs:{src:"/img/menu_button.svg","data-cy":"edit-profile-button"},on:{click:function(t){e.profileMenu=!0}}}),e._v(" "),e.profileMenu?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleProfileMenu,expression:"toggleProfileMenu"}],staticClass:"popupmenu absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[a("ul",{staticClass:"list ma0 pa0"},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.$page.auth.employee.permission_level<=200,expression:"$page.auth.employee.permission_level <= 200"}],staticClass:"pv2"},[a("a",{staticClass:"pointer",attrs:{"data-cy":"add-manager-button"}},[e._v("Edit")])]),e._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:e.$page.auth.employee.permission_level<=200,expression:"$page.auth.employee.permission_level <= 200"}],staticClass:"pv2"},[a("a",{staticClass:"pointer",attrs:{"data-cy":"add-direct-report-button"}},[e._v("Delete")])]),e._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:e.$page.auth.employee.permission_level<=200||e.$page.auth.user.user_id==e.employee.user.id,expression:"$page.auth.employee.permission_level <= 200 || $page.auth.user.user_id == employee.user.id"}],staticClass:"pv2"},[a("inertia-link",{staticClass:"pointer",attrs:{href:"/"+e.$page.auth.company.id+"/employees/"+e.employee.id+"/logs","data-cy":"view-log-button"}},[e._v("\n                View change log\n              ")])],1)])]):e._e(),e._v(" "),a("img",{staticClass:"avatar absolute br-100 db center",attrs:{src:e.employee.avatar,width:"80",height:"80"}}),e._v(" "),a("h2",{staticClass:"tc normal mb1"},[e._v("\n          "+e._s(e.employee.name)+"\n        ")]),e._v(" "),a("ul",{staticClass:"list tc pa0 f6 mb0"},[a("li",{staticClass:"di-l db mb0-l mb2 mr2"},[a("assign-employee-position",{attrs:{employee:e.employee,positions:e.positions}})],1),e._v(" "),a("li",{staticClass:"di-l db mb0-l mb2 mr2"},[e._v("\n            No hire date\n          ")]),e._v(" "),a("li",{staticClass:"di-l db mb0-l mb2 mr2"},[a("assign-employee-status",{attrs:{employee:e.employee,statuses:e.statuses}})],1),e._v(" "),a("li",{staticClass:"di-l db mb0-l mb2"},[a("assign-employee-team",{attrs:{employee:e.employee,teams:e.teams}})],1)])])]),e._v(" "),a("div",{staticClass:"cf mw9 center"},[a("div",{staticClass:"fl w-40-l w-100"},[a("assign-employee-hierarchy",{attrs:{employee:e.employee,managers:e.managers,"direct-reports":e.directReports}})],1),e._v(" "),a("div",{staticClass:"fl w-60-l w-100 pl4-l"},[a("worklogs",{attrs:{worklogs:e.worklogs}})],1)])])])}),[],!1,null,"263ebdae",null);t.default=u.exports},jbmt:function(e,t,a){"use strict";var s=a("I7lW");a.n(s).a},kYq9:function(e,t,a){var s=a("bjMk");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(e.exports=s.locals)},oN0c:function(e,t,a){var s=a("vkc/");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(e.exports=s.locals)},r0kY:function(e,t,a){var s=a("LYJk");"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(e.exports=s.locals)},v1wK:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.positions-list[data-v-b268b002] {\n  max-height: 150px;\n}\n.popupmenu[data-v-b268b002] {\n  right: 2px;\n  top: 26px;\n  width: 280px;\n}\n.c-delete[data-v-b268b002]:hover {\n  border-bottom-width: 0;\n}\n",""])},"vkc/":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.teams-list[data-v-3279aea2] {\n  max-height: 150px;\n}\n.popupmenu[data-v-3279aea2] {\n  right: 2px;\n  top: 26px;\n  width: 280px;\n}\n.c-delete[data-v-3279aea2]:hover {\n  border-bottom-width: 0;\n}\n.existing-teams li[data-v-3279aea2]:not(:last-child) {\n  margin-right: 5px;\n}\n",""])},yNAf:function(e,t,a){"use strict";var s=a("Df8J");a.n(s).a}}]);
//# sourceMappingURL=4.js.map?id=83542c6b9645af1129c4