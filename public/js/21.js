(window.webpackJsonp=window.webpackJsonp||[]).push([[21,41],{IQOQ:function(e,t,n){e.exports=function(){var e="undefined"!=typeof window,t="undefined"!=typeof navigator,n=e&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],s=function(e){return e},a={instances:[]};function i(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||s,events:e.events||n,isActive:!(!1===e.isActive)}}function o(e){var t=e.el,n=e.event,s=e.handler,a=e.middleware;n.target!==t&&!t.contains(n.target)&&a(n,t)&&s(n,t)}function r(e){var t=e.el,n=e.handler,s=e.middleware;return{el:t,eventHandlers:e.events.map((function(e){return{event:e,handler:function(e){return o({event:e,el:t,handler:n,middleware:s})}}}))}}function l(e){var t=a.instances.findIndex((function(t){return t.el===e}));-1!==t&&(a.instances[t].eventHandlers.forEach((function(e){return document.removeEventListener(e.event,e.handler)})),a.instances.splice(t,1))}return a.bind=function(e,t){var n=i(t.value);if(n.isActive){var s=r({el:e,events:n.events,handler:n.handler,middleware:n.middleware});s.eventHandlers.forEach((function(e){var t=e.event,n=e.handler;return setTimeout((function(){return document.addEventListener(t,n)}),0)})),a.instances.push(s)}},a.update=function(e,t){var n=t.value,s=t.oldValue;if(JSON.stringify(n)!==JSON.stringify(s)){var d=i(n),u=d.events,c=d.handler,p=d.middleware;if(d.isActive){var v=a.instances.find((function(t){return t.el===e}));v?(v.eventHandlers.forEach((function(e){return document.removeEventListener(e.event,e.handler)})),v.eventHandlers=u.map((function(t){return{event:t,handler:function(t){return o({event:t,el:e,handler:c,middleware:p})}}}))):(v=r({el:e,events:u,handler:c,middleware:p}),a.instances.push(v)),v.eventHandlers.forEach((function(e){var t=e.event,n=e.handler;return setTimeout((function(){return document.addEventListener(t,n)}),0)}))}else l(e)}},a.unbind=l,{install:function(e){e.directive("click-outside",a)},directive:a}}()},"KHd+":function(e,t,n){"use strict";function s(e,t,n,s,a,i,o,r){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),s&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=l):a&&(l=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(d.functional){d._injectStyles=l;var u=d.render;d.render=function(e,t){return l.call(t),u(e,t)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:d}}n.d(t,"a",(function(){return s}))},PDwx:function(e,t,n){"use strict";n.r(t);var s=n("IQOQ"),a={directives:{clickOutside:n.n(s).a.directive},props:{employee:{type:Object,default:null},notifications:{type:Array,default:null},statuses:{type:Array,default:null}},data:function(){return{modal:!1,search:"",updatedEmployee:Object}},computed:{filteredList:function(){var e=this;return this.statuses.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())})).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))}},created:function(){this.updatedEmployee=this.employee},methods:{toggleModal:function(){this.modal=!1},assign:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/employeestatuses",e).then((function(e){t.$snotify.success(t.$t("employee.status_modal_assign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},reset:function(e){var t=this;axios.delete("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/employeestatuses/"+e.id).then((function(e){t.$snotify.success(t.$t("employee.status_modal_unassign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},isAssigned:function(e){return!!this.updatedEmployee.status&&this.updatedEmployee.status.id==e}}},i=(n("ZAOo"),n("KHd+")),o=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"di relative"},[e.$page.auth.employee.permission_level<=200&&e.updatedEmployee.status?n("ul",{staticClass:"ma0 pa0 di existing-statuses"},[n("li",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer di",attrs:{"data-cy":"open-status-modal"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v("\n      "+e._s(e.$t("employee.status_title"))+"\n    ")]),e._v(" "),n("li",{staticClass:"di",attrs:{"data-cy":"status-name-right-permission"}},[e._v("\n      "+e._s(e.updatedEmployee.status.name)+"\n    ")])]):e._e(),e._v(" "),e.$page.auth.employee.permission_level>200&&e.updatedEmployee.status?n("ul",{staticClass:"ma0 pa0 existing-statuses di"},[n("li",{staticClass:"di"},[e._v("\n      "+e._s(e.$t("employee.status_title"))+"\n    ")]),e._v(" "),n("li",{staticClass:"di",attrs:{"data-cy":"status-name-wrong-permission"}},[e._v("\n      "+e._s(e.updatedEmployee.status.name)+"\n    ")])]):e._e(),e._v(" "),e.$page.auth.employee.permission_level<=200?n("a",{directives:[{name:"show",rawName:"v-show",value:!e.updatedEmployee.status,expression:"!updatedEmployee.status"}],staticClass:"pointer",attrs:{"data-cy":"open-status-modal-blank"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v("\n    "+e._s(e.$t("employee.status_modal_cta"))+"\n  ")]):n("span",{directives:[{name:"show",rawName:"v-show",value:!e.updatedEmployee.status,expression:"!updatedEmployee.status"}]},[e._v("\n    "+e._s(e.$t("employee.status_modal_blank"))+"\n  ")]),e._v(" "),e.modal?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleModal,expression:"toggleModal"}],staticClass:"popupmenu absolute br2 bg-white z-max tl bounceIn faster"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.statuses.length,expression:"statuses.length != 0"}]},[n("p",{staticClass:"pa2 ma0 bb bb-gray"},[e._v("\n        "+e._s(e.$t("employee.status_modal_title"))+"\n      ")]),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[n("div",{staticClass:"relative pv2 ph2 bb bb-gray"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("employee.status_modal_filter")},domProps:{value:e.search},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleModal(t)},input:function(t){t.target.composing||(e.search=t.target.value)}}})])]),e._v(" "),n("ul",{staticClass:"pl0 list ma0 overflow-auto relative statuses-list"},[e._l(e.filteredList,(function(t){return n("li",{key:t.id,attrs:{"data-cy":"list-status-"+t.id}},[e.isAssigned(t.id)?n("div",{staticClass:"pv2 ph3 bb bb-gray-hover bb-gray pointer relative",on:{click:function(n){return e.reset(t)}}},[e._v("\n            "+e._s(t.name)+"\n\n            "),n("img",{staticClass:"pr1 absolute right-1",attrs:{src:"/img/check.svg"}})]):n("div",{staticClass:"pv2 ph3 bb bb-gray-hover bb-gray pointer relative",on:{click:function(n){return e.assign(t)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])])})),e._v(" "),n("li",[e.updatedEmployee.status?n("a",{staticClass:"pointer pv2 ph3 db no-underline c-delete bb-0",attrs:{"data-cy":"status-reset-button"},on:{click:function(t){return e.reset(e.updatedEmployee.status)}}},[e._v("\n            "+e._s(e.$t("employee.status_modal_reset"))+"\n          ")]):e._e()])],2)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0==e.statuses.length,expression:"statuses.length == 0"}]},[n("p",{staticClass:"pa2 tc lh-copy",attrs:{"data-cy":"modal-blank-state-copy"}},[e._v("\n        "+e._s(e.$t("employee.status_modal_blank_title"))+" "),n("a",{attrs:{href:"/"+e.$page.auth.company.id+"/account/employeestatuses","data-cy":"modal-blank-state-cta"}},[e._v("\n          "+e._s(e.$t("employee.status_modal_blank_cta"))+"\n        ")])])])]):e._e()])}),[],!1,null,"5dbbe95b",null);t.default=o.exports},ZAOo:function(e,t,n){"use strict";var s=n("wdGL");n.n(s).a},fCcE:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n.statuses-list[data-v-5dbbe95b] {\n  max-height: 150px;\n}\n.popupmenu[data-v-5dbbe95b] {\n  right: 2px;\n  top: 26px;\n  width: 280px;\n}\n.c-delete[data-v-5dbbe95b]:hover {\n  border-bottom-width: 0;\n}\n.existing-statuses li[data-v-5dbbe95b]:not(:last-child) {\n  margin-right: 5px;\n}\n",""])},wdGL:function(e,t,n){var s=n("fCcE");"string"==typeof s&&(s=[[e.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(s,a);s.locals&&(e.exports=s.locals)}}]);
//# sourceMappingURL=21.js.map?id=1909c62c024cf14d8894