(window.webpackJsonp=window.webpackJsonp||[]).push([[24,50],{"8phj":function(e,t,a){"use strict";var n=a("qRiv");a.n(n).a},IQOQ:function(e,t,a){e.exports=function(){var e="__v-click-outside",t="undefined"!=typeof window,a="undefined"!=typeof navigator,n=t&&("ontouchstart"in window||a&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function o(t,a){var o=function(e){var t="function"==typeof e;if(!t&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||n,isActive:!(!1===e.isActive)}}(a.value),r=o.handler,s=o.middleware;o.isActive&&(t[e]=o.events.map((function(e){return{event:e,handler:function(e){return function(e){var t=e.el,a=e.event,n=e.handler,o=e.middleware;a.target!==t&&!t.contains(a.target)&&o(a,t)&&n(a,t)}({event:e,el:t,handler:r,middleware:s})}}})),t[e].forEach((function(e){var t=e.event,a=e.handler;return setTimeout((function(){return document.documentElement.addEventListener(t,a,!1)}),0)})))}function r(t){(t[e]||[]).forEach((function(e){return document.documentElement.removeEventListener(e.event,e.handler,!1)})),delete t[e]}var s={bind:o,update:function(e,t){var a=t.value,n=t.oldValue;JSON.stringify(a)!==JSON.stringify(n)&&(r(e),o(e,{value:a}))},unbind:r};return{install:function(e){e.directive("click-outside",s)},directive:s}}()},Q8Pl:function(e,t,a){"use strict";a.r(t);var n=a("IQOQ"),o=a.n(n),r=a("cwCQ"),s=(a("rrJu"),a("Z84v"),{directives:{clickOutside:o.a.directive},components:{SelectBox:r.a},props:{employee:{type:Object,default:null}},data:function(){return{modal:!1,search:"",form:{year:1,month:1,day:1},updatedEmployee:Object}},created:function(){this.updatedEmployee=this.employee},methods:{toggleModal:function(){this.modal=!1},assign:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/pronoun",e).then((function(e){t.$snotify.success(t.$t("employee.pronoun_modal_assign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},reset:function(e){var t=this;axios.delete("/"+this.$page.auth.company.id+"/employees/"+this.employee.id+"/pronoun/"+e.id).then((function(e){t.$snotify.success(t.$t("employee.pronoun_modal_unassign_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedEmployee=e.data.data})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},isAssigned:function(e){return!!this.updatedEmployee.pronoun&&this.updatedEmployee.pronoun.id==e},employeeOrAtLeastHR:function(){return this.$page.auth.employee.permission_level<=200||this.$page.auth.user.id==this.employee.user.id}}}),i=(a("8phj"),a("KHd+")),l=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"di relative"},[e.employeeOrAtLeastHR()&&e.updatedEmployee.birthdate?a("ul",{staticClass:"ma0 pa0 di"},[a("li",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer di",attrs:{"data-cy":"open-birthdate-modal"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v(e._s(e.$t("employee.birthdate_title")))]),e._v(" "),a("li",{staticClass:"di",attrs:{"data-cy":"birthdate-name-right-permission"}},[e._v("\n      "+e._s(e.updatedEmployee.birthdate.label)+"\n    ")])]):e._e(),e._v(" "),!e.employeeOrAtLeastHR()&&e.updatedEmployee.pronoun?a("ul",{staticClass:"ma0 pa0 di"},[a("li",{staticClass:"di"},[e._v(e._s(e.$t("employee.pronoun_title")))]),e._v(" "),a("li",{staticClass:"di",attrs:{"data-cy":"pronoun-name-wrong-permission"}},[e._v("\n      "+e._s(e.updatedEmployee.pronoun.label)+"\n    ")])]):e._e(),e._v(" "),e.employeeOrAtLeastHR()?a("a",{directives:[{name:"show",rawName:"v-show",value:!e.updatedEmployee.birthdate,expression:"!updatedEmployee.birthdate"}],staticClass:"pointer",attrs:{"data-cy":"open-birthdate-modal-blank"},on:{click:function(t){t.preventDefault(),e.modal=!0}}},[e._v("No birthdate")]):e._e(),e._v(" "),e.modal?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.toggleModal,expression:"toggleModal"}],staticClass:"popupmenu absolute br2 bg-white z-max tl bounceIn faster"},[a("p",{staticClass:"pa2 ma0 bb bb-gray"},[e._v("\n      Indicate the birthdate\n    ")]),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[a("div",{staticClass:"relative pv2 ph2 bb bb-gray"},[a("div",{staticClass:"dt-ns dt--fixed di"},[a("div",{staticClass:"dtc-ns pr2-ns pb0-ns w-100 pb3"},[a("select-box",{attrs:{id:"year",options:e.countries,name:"year",errors:e.$page.errors.year,label:e.$t("employee.edit_information_country"),placeholder:e.$t("app.choose_value"),required:!0,value:e.form.country_id,datacy:"country_selector"},model:{value:e.form.year,callback:function(t){e.$set(e.form,"year",t)},expression:"form.year"}})],1),e._v(" "),a("div",{staticClass:"dtc-ns pr2-ns pb0-ns w-100 pb3"},[a("select-box",{attrs:{id:"month",options:e.countries,name:"month",errors:e.$page.errors.month,label:e.$t("employee.edit_information_country"),placeholder:e.$t("app.choose_value"),required:!0,value:e.form.country_id,datacy:"country_selector"},model:{value:e.form.month,callback:function(t){e.$set(e.form,"month",t)},expression:"form.month"}})],1),e._v(" "),a("div",{staticClass:"dtc-ns pr2-ns pb0-ns w-100 pb3"},[a("select-box",{attrs:{id:"day",options:e.countries,name:"day",errors:e.$page.errors.day,label:e.$t("employee.edit_information_country"),placeholder:e.$t("app.choose_value"),required:!0,value:e.form.country_id,datacy:"country_selector"},model:{value:e.form.day,callback:function(t){e.$set(e.form,"day",t)},expression:"form.day"}})],1)])])])]):e._e()])}),[],!1,null,"02698854",null);t.default=l.exports},Z84v:function(e,t,a){"use strict";a("zHN7");var n={components:{BallPulseLoader:a("mM8D").a},props:{text:{type:String,default:""},state:{type:String,default:""},classes:{type:String,default:""},cypressSelector:{type:String,default:""}}},o=a("KHd+"),r=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"di"},[a("button",{class:e.classes,attrs:{name:"save",type:"submit","data-cy":e.cypressSelector}},["loading"==e.state?a("ball-pulse-loader",{attrs:{color:"#fff",size:"7px"}}):e._e(),e._v(" "),"loading"!=e.state?a("span",[e._v("\n      "+e._s(e.text)+"\n    ")]):e._e()],1)])}),[],!1,null,null,null);t.a=r.exports},gXyy:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.popupmenu[data-v-02698854] {\n  right: 2px;\n  top: 26px;\n  width: 280px;\n}\n",""])},qRiv:function(e,t,a){var n=a("gXyy");"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,o);n.locals&&(e.exports=n.locals)}}]);
//# sourceMappingURL=24.js.map?id=37b236d119fb7f74f0fe