(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{Ca2d:function(t,e,a){"use strict";a.r(e);var n={components:{Layout:a("+SZM").a},props:{employees:{type:Array,default:null},notifications:{type:Array,default:null}}},s=(a("Me/L"),a("KHd+")),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",{attrs:{title:"Home","no-menu":!0,notifications:t.notifications}},[a("div",{staticClass:"ph2 ph0-ns"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.employees.length,expression:"employees.length == 0"}],staticClass:"cf mt4 mt5-l mw7 center"},[a("div",{staticClass:"fl w-100 w-25-m w-50-l pr2-l"},[a("inertia-link",{attrs:{href:"/company/create"}},[a("div",{staticClass:"pa3-l"},[a("div",{staticClass:"br3 mb3 bg-white box pa3 tc relative home-box",attrs:{"data-cy":"create-company-blank-state"}},[a("h3",[t._v(t._s(t.$t("home.create_company")))]),t._v(" "),a("p",[t._v(t._s(t.$t("home.create_company_desc")))]),t._v(" "),a("img",{staticClass:"home-company absolute",attrs:{src:"/img/home/create-company.png"}})])])])],1),t._v(" "),a("div",{staticClass:"fl w-100 w-25-m w-50-l"},[a("inertia-link",{attrs:{href:"/company/create"}},[a("div",{staticClass:"pa3-l"},[a("div",{staticClass:"br3 mb3 bg-white box pa3 tc relative home-box"},[a("h3",[t._v(t._s(t.$t("home.join_company")))]),t._v(" "),a("p",[t._v(t._s(t.$t("home.join_company_desc")))]),t._v(" "),a("img",{staticClass:"home-join absolute",attrs:{src:"/img/home/join-company.png"}})])])])],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.employees.length,expression:"employees.length != 0"}]},[a("div",{staticClass:"mt4 mt5-l mw7 center section-btn relative"},[a("p",[a("span",{staticClass:"pr2"},[t._v("\n            "+t._s(t.$t("home.companies_part_of"))+"\n          ")]),t._v(" "),a("inertia-link",{staticClass:"btn absolute db-l dn",attrs:{href:"/company/create"}},[t._v("\n            "+t._s(t.$t("home.create_company_cta"))+"\n          ")])],1)]),t._v(" "),a("div",{staticClass:"cf mt4 mw7 center"},t._l(t.employees,(function(e){return a("div",{key:e.id,staticClass:"fl w-100 w-25-m w-third-l pr2"},[a("inertia-link",{attrs:{href:"/"+e.company_id+"/dashboard"}},[a("div",{staticClass:"br3 mb3 bg-white box pa3 home-index-company fw5 relative"},[t._v("\n              "+t._s(e.company_name)+"\n              "),a("span",{staticClass:"absolute normal f6"},[t._v("\n                "+t._s(t.$tc("home.number_of_employees",e.number_of_employees,{count:e.number_of_employees}))+"\n              ")])])])],1)})),0),t._v(" "),a("div",{staticClass:"w-100 dn-ns db mt2"},[a("inertia-link",{staticClass:"btn br3 pa3 white no-underline bb-0 db tc",attrs:{href:"/company/create"}},[t._v("\n          "+t._s(t.$t("home.create_company_cta"))+"\n        ")])],1)])])])}),[],!1,null,"1803d503",null);e.default=o.exports},"Me/L":function(t,e,a){"use strict";var n=a("y1q8");a.n(n).a},YzRd:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"\n.home-box[data-v-1803d503] {\n  color: #4d4d4f;\n  height: 300px;\n  width: 300px;\n}\n@media (max-width: 480px) {\n.home-box[data-v-1803d503] {\n    width: 100%;\n}\n}\n.home-company[data-v-1803d503] {\n  left: -20px;\n  bottom: -20px;\n}\n@media (max-width: 480px) {\n.home-company img[data-v-1803d503] {\n    bottom: 0;\n}\n}\n.home-join[data-v-1803d503] {\n  left: 14px;\n  bottom: 11px;\n}\n@media (max-width: 480px) {\n.home-join img[data-v-1803d503] {\n    bottom: 0;\n}\n}\n",""])},y1q8:function(t,e,a){var n=a("YzRd");"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,s);n.locals&&(t.exports=n.locals)}}]);
//# sourceMappingURL=36.js.map?id=f2468dd6df5926fedeb2