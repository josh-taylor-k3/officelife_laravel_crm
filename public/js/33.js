(window.webpackJsonp=window.webpackJsonp||[]).push([[33,57],{"0MSA":function(e,t,n){var i=n("iBXY");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,o);i.locals&&(e.exports=i.locals)},IQOQ:function(e,t,n){e.exports=function(){var e="__v-click-outside",t="undefined"!=typeof window,n="undefined"!=typeof navigator,i=t&&("ontouchstart"in window||n&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function o(t,n){var o=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||i,isActive:!(!1===e.isActive)}}(n.value),a=o.handler,s=o.middleware;o.isActive&&(t[e]=o.events.map((function(e){return{event:e,handler:function(e){return function(e){var t=e.el,n=e.event,i=e.handler,o=e.middleware;n.target!==t&&!t.contains(n.target)&&o(n,t)&&i(n,t)}({event:e,el:t,handler:a,middleware:s})}}})),t[e].forEach((function(e){var t=e.event,n=e.handler;return setTimeout((function(){return document.documentElement.addEventListener(t,n,!1)}),0)})))}function a(t){(t[e]||[]).forEach((function(e){return document.documentElement.removeEventListener(e.event,e.handler,!1)})),delete t[e]}var s={bind:o,update:function(e,t){var n=t.value,i=t.oldValue;JSON.stringify(n)!==JSON.stringify(i)&&(a(e),o(e,{value:n}))},unbind:a};return{install:function(e){e.directive("click-outside",s)},directive:s}}()},"KHd+":function(e,t,n){"use strict";function i(e,t,n,i,o,a,s,r){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=r?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return i}))},iBXY:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n.positions-list[data-v-92405ea6] {\n  max-height: 150px;\n}\n.popupmenu[data-v-92405ea6] {\n  right: 2px;\n  top: 26px;\n  width: 280px;\n}\n.c-delete[data-v-92405ea6]:hover {\n  border-bottom-width: 0;\n}\n",""])},vmv4:function(e,t,n){"use strict";var i=n("0MSA");n.n(i).a},"zPd+":function(e,t,n){"use strict";n.r(t);var i=n("IQOQ"),o={directives:{clickOutside:n.n(i).a.directive},props:{employee:{type:Object,default:null},positions:{type:Array,default:null}},data:function(){return{modal:!1,search:"",title:"",updatedEmployee:Object}},computed:{filteredList:function(){var e=this;return this.positions.filter((function(t){return t.title.toLowerCase().includes(e.search.toLowerCase())})).sort((function(e,t){return e.title<t.title?-1:e.title>t.title?1:0}))}},mounted:function(){null!=this.employee.position&&(this.title=this.employee.position.title),this.updatedEmployee=this.employee},methods:{toggleModal:function(){this.modal=!1},assign:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/position",e).then((function(e){t.$snotify.success(t.$t("employee.position_modal_assign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.title=e.data.data.position.title,t.updatedEmployee=e.data.data,t.modal=!1})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},reset:function(){var e=this;axios.delete("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/position/"+this.updatedEmployee.position.id).then((function(t){e.$snotify.success(e.$t("employee.position_modal_unassign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),e.title="",e.modal=!1,e.updatedEmployee=t.data.data})).catch((function(t){e.form.errors=_.flatten(_.toArray(t.response.data))}))}}},a=(n("vmv4"),n("KHd+")),s=Object(a.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"di relative"},[e.$page.auth.employee.permission_level<=200?n("span",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer",attrs:{"data-cy":"open-position-modal"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v("\n    "+e._s(e.title)+"\n  ")]):n("span",{attrs:{"data-cy":"position-title"}},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),e.$page.auth.employee.permission_level<=200?n("a",{directives:[{name:"show",rawName:"v-show",value:""==e.title,expression:"title == ''"}],staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer",attrs:{"data-cy":"open-position-modal-blank"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v(e._s(e.$t("employee.position_modal_title")))]):n("span",{directives:[{name:"show",rawName:"v-show",value:""==e.title,expression:"title == ''"}]},[e._v("\n    "+e._s(e.$t("employee.position_blank"))+"\n  ")]),e._v(" "),e.modal?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleModal,expression:"toggleModal"}],staticClass:"popupmenu absolute br2 bg-white z-max tl bounceIn faster"},[n("p",{staticClass:"pa2 ma0 bb bb-gray"},[e._v("\n      "+e._s(e.$t("employee.position_modal_title"))+"\n    ")]),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[n("div",{staticClass:"relative pv2 ph2 bb bb-gray"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("employee.position_modal_filter")},domProps:{value:e.search},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleModal(t)},input:function(t){t.target.composing||(e.search=t.target.value)}}})])]),e._v(" "),n("ul",{staticClass:"pl0 list ma0 overflow-auto relative positions-list"},e._l(e.filteredList,(function(t){return n("li",{key:t.id,staticClass:"pv2 ph3 bb bb-gray-hover bb-gray pointer",attrs:{"data-cy":"list-position-"+t.id},on:{click:function(n){return e.assign(t)}}},[e._v("\n        "+e._s(t.title)+"\n      ")])})),0),e._v(" "),""!=e.title?n("a",{staticClass:"pointer pv2 ph3 db no-underline c-delete bb-0",attrs:{"data-cy":"position-reset-button"},on:{click:e.reset}},[e._v("\n      "+e._s(e.$t("employee.position_modal_reset"))+"\n    ")]):e._e()]):e._e()])}),[],!1,null,"92405ea6",null);t.default=s.exports}}]);
//# sourceMappingURL=33.js.map?id=c21badebfffcb5c47785