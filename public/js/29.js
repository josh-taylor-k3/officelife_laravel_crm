(window.webpackJsonp=window.webpackJsonp||[]).push([[29,51],{"5zVT":function(e,t,s){var a=s("UsWI");"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(a,n);a.locals&&(e.exports=a.locals)},IQOQ:function(e,t,s){e.exports=function(){var e="__v-click-outside",t="undefined"!=typeof window,s="undefined"!=typeof navigator,a=t&&("ontouchstart"in window||s&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function n(t,s){var n=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||a,isActive:!(!1===e.isActive)}}(s.value),i=n.handler,o=n.middleware;n.isActive&&(t[e]=n.events.map((function(e){return{event:e,handler:function(e){return function(e){var t=e.el,s=e.event,a=e.handler,n=e.middleware;s.target!==t&&!t.contains(s.target)&&n(s,t)&&a(s,t)}({event:e,el:t,handler:i,middleware:o})}}})),t[e].forEach((function(e){var t=e.event,s=e.handler;return setTimeout((function(){return document.documentElement.addEventListener(t,s,!1)}),0)})))}function i(t){(t[e]||[]).forEach((function(e){return document.documentElement.removeEventListener(e.event,e.handler,!1)})),delete t[e]}var o={bind:n,update:function(e,t){var s=t.value,a=t.oldValue;JSON.stringify(s)!==JSON.stringify(a)&&(i(e),n(e,{value:s}))},unbind:i};return{install:function(e){e.directive("click-outside",o)},directive:o}}()},"KHd+":function(e,t,s){"use strict";function a(e,t,s,a,n,i,o,r){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=s,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):n&&(l=r?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(u.functional){u._injectStyles=l;var d=u.render;u.render=function(e,t){return l.call(t),d(e,t)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:u}}s.d(t,"a",(function(){return a}))},PDwx:function(e,t,s){"use strict";s.r(t);var a=s("IQOQ"),n={directives:{clickOutside:s.n(a).a.directive},props:{employee:{type:Object,default:null},statuses:{type:Array,default:null}},data:function(){return{modal:!1,search:"",updatedEmployee:Object}},computed:{filteredList:function(){var e=this;return this.statuses.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())})).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))}},created:function(){this.updatedEmployee=this.employee},methods:{toggleModal:function(){this.modal=!1},assign:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/employeestatuses",e).then((function(e){t.$snotify.success(t.$t("employee.status_modal_assign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},reset:function(e){var t=this;axios.delete("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/employeestatuses/"+e.id).then((function(e){t.$snotify.success(t.$t("employee.status_modal_unassign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},isAssigned:function(e){return!!this.updatedEmployee.status&&this.updatedEmployee.status.id==e}}},i=(s("vO6L"),s("KHd+")),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"di relative"},[e.$page.auth.employee.permission_level<=200&&e.updatedEmployee.status?s("ul",{staticClass:"ma0 pa0 di existing-statuses"},[s("li",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer di",attrs:{"data-cy":"open-status-modal"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v("\n      "+e._s(e.$t("employee.status_title"))+"\n    ")]),e._v(" "),s("li",{staticClass:"di",attrs:{"data-cy":"status-name-right-permission"}},[e._v("\n      "+e._s(e.updatedEmployee.status.name)+"\n    ")])]):e._e(),e._v(" "),e.$page.auth.employee.permission_level>200&&e.updatedEmployee.status?s("ul",{staticClass:"ma0 pa0 existing-statuses di"},[s("li",{staticClass:"di"},[e._v("\n      "+e._s(e.$t("employee.status_title"))+"\n    ")]),e._v(" "),s("li",{staticClass:"di",attrs:{"data-cy":"status-name-wrong-permission"}},[e._v("\n      "+e._s(e.updatedEmployee.status.name)+"\n    ")])]):e._e(),e._v(" "),e.$page.auth.employee.permission_level<=200?s("a",{directives:[{name:"show",rawName:"v-show",value:!e.updatedEmployee.status,expression:"!updatedEmployee.status"}],staticClass:"pointer",attrs:{"data-cy":"open-status-modal-blank"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v("\n    "+e._s(e.$t("employee.status_modal_cta"))+"\n  ")]):s("span",{directives:[{name:"show",rawName:"v-show",value:!e.updatedEmployee.status,expression:"!updatedEmployee.status"}]},[e._v("\n    "+e._s(e.$t("employee.status_modal_blank"))+"\n  ")]),e._v(" "),e.modal?s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleModal,expression:"toggleModal"}],staticClass:"popupmenu absolute br2 bg-white z-max tl bounceIn faster"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.statuses.length,expression:"statuses.length != 0"}]},[s("p",{staticClass:"pa2 ma0 bb bb-gray"},[e._v("\n        "+e._s(e.$t("employee.status_modal_title"))+"\n      ")]),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[s("div",{staticClass:"relative pv2 ph2 bb bb-gray"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("employee.status_modal_filter")},domProps:{value:e.search},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleModal(t)},input:function(t){t.target.composing||(e.search=t.target.value)}}})])]),e._v(" "),s("ul",{staticClass:"pl0 list ma0 overflow-auto relative statuses-list"},[e._l(e.filteredList,(function(t){return s("li",{key:t.id,attrs:{"data-cy":"list-status-"+t.id}},[e.isAssigned(t.id)?s("div",{staticClass:"pv2 ph3 bb bb-gray-hover bb-gray pointer relative",on:{click:function(s){return e.reset(t)}}},[e._v("\n            "+e._s(t.name)+"\n\n            "),s("img",{staticClass:"pr1 absolute right-1",attrs:{src:"/img/check.svg"}})]):s("div",{staticClass:"pv2 ph3 bb bb-gray-hover bb-gray pointer relative",on:{click:function(s){return e.assign(t)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])])})),e._v(" "),s("li",[e.updatedEmployee.status?s("a",{staticClass:"pointer pv2 ph3 db no-underline c-delete bb-0",attrs:{"data-cy":"status-reset-button"},on:{click:function(t){return e.reset(e.updatedEmployee.status)}}},[e._v("\n            "+e._s(e.$t("employee.status_modal_reset"))+"\n          ")]):e._e()])],2)]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0==e.statuses.length,expression:"statuses.length == 0"}]},[s("p",{staticClass:"pa2 tc lh-copy",attrs:{"data-cy":"modal-blank-state-copy"}},[e._v("\n        "+e._s(e.$t("employee.status_modal_blank_title"))+" "),s("inertia-link",{attrs:{href:"/"+e.$page.auth.company.id+"/account/employeestatuses","data-cy":"modal-blank-state-cta"}},[e._v("\n          "+e._s(e.$t("employee.status_modal_blank_cta"))+"\n        ")])],1)])]):e._e()])}),[],!1,null,"0b843148",null);t.default=o.exports},UsWI:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"\n.statuses-list[data-v-0b843148] {\n  max-height: 150px;\n}\n.popupmenu[data-v-0b843148] {\n  right: 2px;\n  top: 26px;\n  width: 280px;\n}\n.c-delete[data-v-0b843148]:hover {\n  border-bottom-width: 0;\n}\n.existing-statuses li[data-v-0b843148]:not(:last-child) {\n  margin-right: 5px;\n}\n",""])},vO6L:function(e,t,s){"use strict";var a=s("5zVT");s.n(a).a}}]);
//# sourceMappingURL=29.js.map?id=2b62a658de3e608d90ae