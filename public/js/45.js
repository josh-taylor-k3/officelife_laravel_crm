(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"7Whh":function(t,e,a){"use strict";var s=a("djBg");a.n(s).a},"DR/N":function(t,e,a){"use strict";a.r(e);var s={components:{Layout:a("+SZM").a},props:{notifications:{type:Array,default:null},teams:{type:Array,default:null}},data:function(){return{}},mounted:function(){localStorage.success&&(this.$snotify.success(localStorage.success,{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),localStorage.clear())},methods:{load:function(t){this.$inertia.visit("/"+this.$page.auth.company.id+"/employees/"+t.id)}}},i=(a("7Whh"),a("KHd+")),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",{attrs:{title:"Home",notifications:t.notifications}},[a("div",{staticClass:"ph2 ph5-ns"},[a("div",{staticClass:"mt4-l mt1 mw6 br3 center breadcrumb relative z-0 f6 pb2",class:{"bg-white box":0==t.teams.length}},[a("ul",{staticClass:"list ph0 tc-l tl"},[a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/dashboard"}},[t._v(t._s(t.$page.auth.company.name))])],1),t._v(" "),a("li",{staticClass:"di"},[t._v("\n          "+t._s(t.$t("app.breadcrumb_team_list"))+"\n        ")])])]),t._v(" "),a("div",{staticClass:"cf mw7 center",class:{"bg-white box relative z-1":0==t.teams.length}},[t._l(t.teams,(function(e){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.teams.length>0,expression:"teams.length > 0"}],key:e.id,staticClass:"bg-white box mb4 pa3"},[a("div",{},[a("inertia-link",{attrs:{href:"/"+t.$page.auth.company.id+"/teams/"+e.id}},[t._v(t._s(e.name))]),t._v(" "),a("span",[t._v("("+t._s(e.employees.length)+" members)")])],1),t._v(" "),a("div",{domProps:{innerHTML:t._s(e.parsed_description)}}),t._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.employees.length>0,expression:"team.employees.length > 0"}],staticClass:"list relative pl0 mb0"},t._l(e.employees,(function(e){return a("li",{key:e.id,staticClass:"di relative"},[a("img",{staticClass:"br-100 avatar pointer",attrs:{src:e.avatar},on:{click:function(a){return a.preventDefault(),t.load(e)}}})])})),0)])})),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.teams.length,expression:"teams.length == 0"}]},[a("p",{staticClass:"tc measure center mb4 lh-copy"},[t._v("\n          "+t._s(t.$t("team.team_list_blank"))+"\n        ")]),t._v(" "),a("img",{staticClass:"db center mb4",attrs:{srcset:"/img/company/account/blank-team-1x.png, /img/company/account/blank-team-2x.png 2x"}})])],2)])])}),[],!1,null,"70b58743",null);e.default=n.exports},djBg:function(t,e,a){var s=a("tWdC");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(t.exports=s.locals)},tWdC:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".avatar[data-v-70b58743] {\n  border: 2px solid #fff;\n  height: 20px;\n  width: 20px;\n}",""])}}]);
//# sourceMappingURL=45.js.map?id=c2044e2ff6cdf7e14e91