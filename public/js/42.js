(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"0ono":function(e,t,n){"use strict";n.r(t);var i={props:{employee:{type:Object,default:null}},data:function(){return{}},methods:{employeeOrAtLeastHR:function(){return this.$page.auth.employee.permission_level<=200||!!this.employee.user&&(this.$page.auth.user.id==this.employee.user.id||void 0)}}},o=(n("gMWq"),n("KHd+")),r=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"di relative"},[e.employee.birthdate?[e.employeeOrAtLeastHR()?n("p",{staticClass:"di",attrs:{"data-cy":"employee-birthdate-information"}},[e._v(e._s(e.$t("employee.birthdate_information_full",{date:e.employee.birthdate.full,age:e.employee.birthdate.age})))]):n("p",{staticClass:"di",attrs:{"data-cy":"employee-birthdate-information"}},[e._v(e._s(e.$t("employee.birthdate_information_partial",{date:e.employee.birthdate.partial})))])]:e._e()],2)}),[],!1,null,"20b8113f",null);t.default=r.exports},"KHd+":function(e,t,n){"use strict";function i(e,t,n,i,o,r,a,s){var p,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),a?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=p):o&&(p=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),p)if(l.functional){l._injectStyles=p;var d=l.render;l.render=function(e,t){return p.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,p):[p]}return{exports:e,options:l}}n.d(t,"a",(function(){return i}))},"R+eQ":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"\n.popupmenu[data-v-20b8113f] {\n  right: 2px;\n  top: 26px;\n  width: 280px;\n}\n",""])},gMWq:function(e,t,n){"use strict";var i=n("rvii");n.n(i).a},rvii:function(e,t,n){var i=n("R+eQ");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,o);i.locals&&(e.exports=i.locals)}}]);
//# sourceMappingURL=42.js.map?id=b8c1723c7da80dbc852e