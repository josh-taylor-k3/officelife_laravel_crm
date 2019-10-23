(window.webpackJsonp=window.webpackJsonp||[]).push([[22,41],{"95PS":function(e,t,n){"use strict";n.r(t);var a=n("IQOQ"),s={directives:{clickOutside:n.n(a).a.directive},props:{employee:{type:Object,default:null},notifications:{type:Array,default:null},teams:{type:Array,default:null}},data:function(){return{modal:!1,search:"",updatedEmployee:Object}},computed:{filteredList:function(){var e=this;return this.teams.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())})).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))}},created:function(){this.updatedEmployee=this.employee},methods:{toggleModal:function(){this.modal=!1},assign:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/team",e).then((function(e){t.$snotify.success(t.$t("employee.team_modal_assign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},reset:function(e){var t=this;axios.delete("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/team/"+e.id).then((function(e){t.$snotify.success(t.$t("employee.team_modal_unassign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},isAssigned:function(e){for(var t=0;t<this.updatedEmployee.teams.length;t++)if(this.updatedEmployee.teams[t].id==e)return!0;return!1}}},i=(n("zbDZ"),n("KHd+")),r=Object(i.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"di relative"},[e.$page.auth.employee.permission_level<=200?n("ul",{staticClass:"ma0 pa0 di existing-teams"},[n("li",{directives:[{name:"show",rawName:"v-show",value:0!=e.updatedEmployee.teams.length,expression:"updatedEmployee.teams.length != 0"}],staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer di",attrs:{"data-cy":"open-team-modal"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v("\n      "+e._s(e.$t("employee.team_title"))+"\n    ")]),e._v(" "),e._l(e.updatedEmployee.teams,(function(t){return n("li",{key:t.id,staticClass:"di"},[e._v("\n      "+e._s(t.name)+"\n    ")])}))],2):n("ul",{staticClass:"ma0 pa0 existing-teams di"},[n("li",{directives:[{name:"show",rawName:"v-show",value:0!=e.updatedEmployee.teams.length,expression:"updatedEmployee.teams.length != 0"}],staticClass:"di"},[e._v("\n      "+e._s(e.$t("employee.team_title"))+"\n    ")]),e._v(" "),e._l(e.updatedEmployee.teams,(function(t){return n("li",{key:t.id,staticClass:"di"},[e._v("\n      "+e._s(t.name)+"\n    ")])}))],2),e._v(" "),e.$page.auth.employee.permission_level<=200?n("a",{directives:[{name:"show",rawName:"v-show",value:0==e.updatedEmployee.teams.length,expression:"updatedEmployee.teams.length == 0"}],staticClass:"pointer",attrs:{"data-cy":"open-team-modal-blank"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v("\n    "+e._s(e.$t("employee.team_modal_title"))+"\n  ")]):n("span",{directives:[{name:"show",rawName:"v-show",value:0==e.updatedEmployee.teams.length,expression:"updatedEmployee.teams.length == 0"}]},[e._v("\n    "+e._s(e.$t("employee.team_modal_blank"))+"\n  ")]),e._v(" "),e.modal?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleModal,expression:"toggleModal"}],staticClass:"popupmenu absolute br2 bg-white z-max tl bounceIn faster"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.teams.length,expression:"teams.length != 0"}]},[n("p",{staticClass:"pa2 ma0 bb bb-gray"},[e._v("\n        "+e._s(e.$t("employee.team_modal_title"))+"\n      ")]),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[n("div",{staticClass:"relative pv2 ph2 bb bb-gray"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("employee.team_modal_filter")},domProps:{value:e.search},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleModal(t)},input:function(t){t.target.composing||(e.search=t.target.value)}}})])]),e._v(" "),n("ul",{staticClass:"pl0 list ma0 overflow-auto relative teams-list"},e._l(e.filteredList,(function(t){return n("li",{key:t.id,attrs:{"data-cy":"list-team-"+t.id}},[e.isAssigned(t.id)?n("div",{staticClass:"pv2 ph3 bb bb-gray-hover bb-gray pointer relative",on:{click:function(n){return e.reset(t)}}},[e._v("\n            "+e._s(t.name)+"\n\n            "),n("img",{staticClass:"pr1 absolute right-1",attrs:{src:"/img/check.svg"}})]):n("div",{staticClass:"pv2 ph3 bb bb-gray-hover bb-gray pointer relative",on:{click:function(n){return e.assign(t)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])])})),0)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0==e.teams.length,expression:"teams.length == 0"}]},[n("p",{staticClass:"pa2 tc lh-copy",attrs:{"data-cy":"modal-blank-state-copy"}},[e._v("\n        "+e._s(e.$t("employee.team_modal_blank_title"))+" "),n("inertia-link",{attrs:{href:"/"+e.$page.auth.company.id+"/account/teams","data-cy":"modal-blank-state-cta"}},[e._v("\n          "+e._s(e.$t("employee.team_modal_blank_cta"))+"\n        ")])],1),e._v(" "),n("img",{staticClass:"db center mb4",attrs:{srcset:"/img/company/account/blank-team-1x.png, /img/company/account/blank-team-2x.png 2x"}})])]):e._e()])}),[],!1,null,"2c76db36",null);t.default=r.exports},IQOQ:function(e,t,n){e.exports=function(){var e="undefined"!=typeof window,t="undefined"!=typeof navigator,n=e&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"],a=function(e){return e},s={instances:[]};function i(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||a,events:e.events||n,isActive:!(!1===e.isActive)}}function r(e){var t=e.el,n=e.event,a=e.handler,s=e.middleware;n.target!==t&&!t.contains(n.target)&&s(n,t)&&a(n,t)}function o(e){var t=e.el,n=e.handler,a=e.middleware;return{el:t,eventHandlers:e.events.map((function(e){return{event:e,handler:function(e){return r({event:e,el:t,handler:n,middleware:a})}}}))}}function l(e){var t=s.instances.findIndex((function(t){return t.el===e}));-1!==t&&(s.instances[t].eventHandlers.forEach((function(e){return document.removeEventListener(e.event,e.handler)})),s.instances.splice(t,1))}return s.bind=function(e,t){var n=i(t.value);if(n.isActive){var a=o({el:e,events:n.events,handler:n.handler,middleware:n.middleware});a.eventHandlers.forEach((function(e){var t=e.event,n=e.handler;return setTimeout((function(){return document.addEventListener(t,n)}),0)})),s.instances.push(a)}},s.update=function(e,t){var n=t.value,a=t.oldValue;if(JSON.stringify(n)!==JSON.stringify(a)){var d=i(n),c=d.events,u=d.handler,m=d.middleware;if(d.isActive){var p=s.instances.find((function(t){return t.el===e}));p?(p.eventHandlers.forEach((function(e){return document.removeEventListener(e.event,e.handler)})),p.eventHandlers=c.map((function(t){return{event:t,handler:function(t){return r({event:t,el:e,handler:u,middleware:m})}}}))):(p=o({el:e,events:c,handler:u,middleware:m}),s.instances.push(p)),p.eventHandlers.forEach((function(e){var t=e.event,n=e.handler;return setTimeout((function(){return document.addEventListener(t,n)}),0)}))}else l(e)}},s.unbind=l,{install:function(e){e.directive("click-outside",s)},directive:s}}()},"KHd+":function(e,t,n){"use strict";function a(e,t,n,a,s,i,r,o){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),a&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=l):s&&(l=o?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,t){return l.call(t),c(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:d}}n.d(t,"a",(function(){return a}))},NGeq:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n.teams-list[data-v-2c76db36] {\n  max-height: 150px;\n}\n.popupmenu[data-v-2c76db36] {\n  right: 2px;\n  top: 26px;\n  width: 280px;\n}\n.c-delete[data-v-2c76db36]:hover {\n  border-bottom-width: 0;\n}\n.existing-teams li[data-v-2c76db36]:not(:last-child) {\n  margin-right: 5px;\n}\n",""])},tQ8a:function(e,t,n){var a=n("NGeq");"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,s);a.locals&&(e.exports=a.locals)},zbDZ:function(e,t,n){"use strict";var a=n("tQ8a");n.n(a).a}}]);
//# sourceMappingURL=22.js.map?id=652c023b39b98059a6ae