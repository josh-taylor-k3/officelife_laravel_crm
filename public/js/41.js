(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{mHpa:function(t,n,o){"use strict";o.r(n);var a=o("Z84v");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i={components:{Layout:o("+SZM").a,LoadingButton:a.a},props:{notifications:{type:Array,default:null},invitationLink:{type:String,default:""}},data:function(){return{loadingState:""}},methods:{submit:function(){var t=this;this.loadingState="loading",axios.post("/invite/employee/"+this.invitationLink+"/accept").then((function(n){t.$inertia.visit("/home")})).catch((function(n){t.loadingState=null,"object"===e(n.response.data)?t.form.errors=_.flatten(_.toArray(n.response.data)):t.form.errors=[t.$t("app.error_try_again")]}))}}},r=o("KHd+"),s=Object(r.a)(i,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("layout",{attrs:{title:"Home",notifications:t.notifications}},[o("div",{staticClass:"ph2 ph0-ns"},[o("div",{staticClass:"cf mw6 center br3 mb3 bg-white box"},[o("div",{staticClass:"pa3"},[o("p",[t._v(t._s(t.$t("auth.invitation_logged_accept_title",{name:t.$page.auth.company.name}))+"Would you like to join "+t._s(t.$page.auth.company.name)+"?")]),t._v(" "),o("form",{on:{submit:function(n){return n.preventDefault(),t.submit(n)}}},[o("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3",state:t.loadingState,text:t.$t("auth.invitation_logged_accept_cta")}})],1)])])])])}),[],!1,null,null,null);n.default=s.exports}}]);
//# sourceMappingURL=41.js.map?id=46f3457f40aeaa3c24f3