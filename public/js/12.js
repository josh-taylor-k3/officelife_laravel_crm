(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+SZM":function(e,t,a){"use strict";var s=a("5n2/"),n=a.n(s),i={props:{notifications:{type:Array,default:null}},data:function(){return{menu:!1}},created:function(){window.addEventListener("click",this.close)},beforeDestroy:function(){window.removeEventListener("click",this.close)},methods:{close:function(e){this.$el.contains(e.target)||(this.menu=!1)}}},o=(a("z6qC"),a("KHd+")),r={components:{UserMenu:Object(o.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a",{staticClass:"no-color no-underline relative pointer",attrs:{"data-cy":"header-menu"},on:{click:function(t){t.preventDefault(),e.menu=!e.menu}}},[e._v("\n    "+e._s(e.$page.auth.user.email)+" "),a("span",{staticClass:"dropdown-caret"})]),e._v(" "),1==e.menu?a("div",{staticClass:"absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[a("ul",{staticClass:"list ma0 pa0"},[a("li",{staticClass:"pv2"},[a("inertia-link",{staticClass:"no-color no-underline",attrs:{href:"/home","data-cy":"switch-company-button"}},[e._v("\n          "+e._s(e.$t("app.header_switch_company"))+"\n        ")])],1),e._v(" "),a("li",{staticClass:"pv2"},[a("inertia-link",{staticClass:"no-color no-underline",attrs:{href:"/logout","data-cy":"logout-button"}},[e._v("\n          "+e._s(e.$t("app.header_logout"))+"\n        ")])],1)])]):e._e()])},[],!1,null,"8612cfca",null).exports,LoadingButton:a("Z84v").a},directives:{ClickOutside:n.a},props:{title:{type:String,default:""},noMenu:{type:Boolean,default:!1},notifications:{type:Array,default:null}},data:function(){return{loadingState:"",modalFind:!1,showModalNotifications:!1,dataReturnedFromSearch:!1,form:{searchTerm:null,errors:[]},employees:[],teams:[]}},watch:{title:function(e){this.updatePageTitle(e)}},mounted:function(){this.updatePageTitle(this.title),this.popupItem=this.$el},methods:{updatePageTitle:function(e){document.title=e?"".concat(e," | Example app"):"Example app"},showFindModal:function(){var e=this;this.dataReturnedFromSearch=!1,this.form.searchTerm=null,this.employees=[],this.teams=[],this.modalFind=!this.modalFind,this.$nextTick(function(){e.$refs.search.focus()})},showNotifications:function(){var e=this;this.showModalNotifications=!this.showModalNotifications,axios.post("/notifications/read").catch(function(t){e.loadingState=null,e.form.errors=_.flatten(_.toArray(t.response.data))})},hideNotifications:function(){this.showModalNotifications=!1},submit:function(){var e=this;axios.post("/search/employees",this.form).then(function(t){e.dataReturnedFromSearch=!0,e.employees=t.data.data}).catch(function(t){e.loadingState=null,e.form.errors=_.flatten(_.toArray(t.response.data))}),axios.post("/search/teams",this.form).then(function(t){e.dataReturnedFromSearch=!0,e.teams=t.data.data}).catch(function(t){e.loadingState=null,e.form.errors=_.flatten(_.toArray(t.response.data))})}}},l=(a("22nh"),Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vue-snotify"),e._v(" "),a("header",{staticClass:"bg-white dn db-m db-l mb3 relative"},[a("div",{staticClass:"ph3 pt1 w-100"},[a("div",{staticClass:"cf"},[e._m(0),e._v(" "),a("div",{staticClass:"fl w-60 tc"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.noMenu,expression:"noMenu"}],staticClass:"dib w-100"}),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:!e.noMenu,expression:"!noMenu"}],staticClass:"mv2"},[a("li",{staticClass:"di header-menu-item pa2 pointer mr2"},[a("inertia-link",{attrs:{href:"/home"}},[a("span",{staticClass:"fw5"},[a("img",{staticClass:"relative",attrs:{src:"/img/header/icon-home.svg"}}),e._v("\n                  "+e._s(e.$t("app.header_home"))+"\n                ")])])],1),e._v(" "),a("li",{staticClass:"di header-menu-item pa2 pointer mr2",attrs:{"data-cy":"header-find-link"},on:{click:e.showFindModal}},[a("span",{staticClass:"fw5"},[a("img",{staticClass:"relative",attrs:{src:"/img/header/icon-find.svg"}}),e._v("\n                "+e._s(e.$t("app.header_find"))+"\n              ")])]),e._v(" "),a("li",{staticClass:"di header-menu-item pa2 pointer",attrs:{"data-cy":"header-notifications-link"},on:{click:e.showNotifications}},[a("span",{staticClass:"fw5"},[a("img",{staticClass:"relative",attrs:{src:"/img/header/icon-notification.svg"}}),e._v("\n                "+e._s(e.$t("app.header_notifications"))+"\n              ")])]),e._v(" "),e.$page.auth.company&&e.$page.auth.employee.permission_level<=200?a("li",{staticClass:"di header-menu-item pa2 pointer",attrs:{"data-cy":"header-notifications-link"}},[a("inertia-link",{attrs:{href:"/"+e.$page.auth.company.id+"/account"}},[a("span",{staticClass:"fw5"},[a("img",{staticClass:"relative",attrs:{src:"/img/header/icon-notification.svg"}}),e._v("\n                  Adminland\n                ")])])],1):e._e()])]),e._v(" "),a("div",{staticClass:"fl w-20 pa2 tr relative header-menu-settings"},[a("user-menu")],1)])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.modalFind,expression:"modalFind"}],staticClass:"absolute z-max find-box"},[a("div",{staticClass:"br2 bg-white tl pv3 ph3 bounceIn faster"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.searchTerm,expression:"form.searchTerm"}],ref:"search",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("app.header_search_placeholder"),required:""},domProps:{value:e.form.searchTerm},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.modalFind=!1},input:function(t){t.target.composing||e.$set(e.form,"searchTerm",t.target.value)}}}),e._v(" "),a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3 absolute top-0 right-0",state:e.loadingState,text:e.$t("app.search"),"cypress-selector":"header-find-submit"}})],1)]),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.dataReturnedFromSearch,expression:"dataReturnedFromSearch"}],staticClass:"pl0 list ma0 mt3",attrs:{"data-cy":"results"}},[a("li",{staticClass:"b mb3"},[a("span",{staticClass:"f6 mb2 dib"},[e._v(e._s(e.$t("app.header_search_employees")))]),e._v(" "),e.employees.length>0?a("ul",{staticClass:"list ma0 pl0"},e._l(e.employees,function(t){return a("li",{key:t.id},[a("a",{attrs:{href:"/"+t.company.id+"/employees/"+t.id}},[e._v(e._s(t.name))])])}),0):a("div",{staticClass:"silver"},[e._v("\n              "+e._s(e.$t("app.header_search_no_employee_found"))+"\n            ")])]),e._v(" "),a("li",{staticClass:"fw5"},[a("span",{staticClass:"f6 mb2 dib"},[e._v(e._s(e.$t("app.header_search_teams")))]),e._v(" "),e.teams.length>0?a("ul",{staticClass:"list ma0 pl0"},e._l(e.teams,function(t){return a("li",{key:t.id},[a("a",{attrs:{href:"/"+t.company.id+"/teams/"+t.id}},[e._v(e._s(t.name))])])}),0):a("div",{staticClass:"silver"},[e._v("\n              "+e._s(e.$t("app.header_search_no_team_found"))+"\n            ")])])])])]),e._v(" "),e.showModalNotifications?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideNotifications,expression:"hideNotifications"}],staticClass:"absolute z-max notifications-box"},[a("div",{staticClass:"br2 bg-white tl pv3 ph3 bounceIn faster"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.notifications.length,expression:"notifications.length == 0"}]},[a("img",{staticClass:"db center mb2",attrs:{srcset:"/img/header/notification_blank.png, /img/header/notitication_blank@2x.png 2x"}}),e._v(" "),a("p",{staticClass:"tc"},[e._v("\n            All is clear!\n          ")])]),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.notifications.length>0,expression:"notifications.length > 0"}]},e._l(e.notifications,function(t){return a("li",{key:t.id},[e._v("\n            "+e._s(t.action)+"\n          ")])}),0)])]):e._e()]),e._v(" "),e._m(1),e._v(" "),a("div",{class:[e.modalFind?"bg-modal-find":""]}),e._v(" "),e._t("default")],2)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"fl w-20 pa2"},[t("a",{staticClass:"relative header-logo",attrs:{href:""}},[t("img",{attrs:{src:"/img/logo.svg",height:"30"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"bg-white mobile dn-ns mb3"},[a("div",{staticClass:"ph2 pv2 w-100 relative"},[a("div",{staticClass:"pv2 relative menu-toggle"},[a("label",{staticClass:"dib b relative",attrs:{for:"menu-toggle"}},[e._v("Menu")]),e._v(" "),a("input",{attrs:{id:"menu-toggle",type:"checkbox"}}),e._v(" "),a("ul",{staticClass:"list pa0 mt4 mb0",attrs:{id:"mobile-menu"}},[a("li",{staticClass:"pv2 bt b--light-gray"},[a("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[e._v("\n              Home\n            ")])]),e._v(" "),a("li",{staticClass:"pv2 bt b--light-gray"},[a("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[e._v("\n              app.main_nav_people\n            ")])]),e._v(" "),a("li",{staticClass:"pv2 bt b--light-gray"},[a("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[e._v("\n              app.main_nav_journal\n            ")])]),e._v(" "),a("li",{staticClass:"pv2 bt b--light-gray"},[a("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[e._v("\n              app.main_nav_find\n            ")])]),e._v(" "),a("li",{staticClass:"pv2 bt b--light-gray"},[a("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[e._v("\n              app.main_nav_changelog\n            ")])]),e._v(" "),a("li",{staticClass:"pv2 bt b--light-gray"},[a("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[e._v("\n              app.main_nav_settings\n            ")])]),e._v(" "),a("li",{staticClass:"pv2 bt b--light-gray"},[a("a",{staticClass:"no-color b no-underline",attrs:{href:""}},[e._v("\n              app.main_nav_signout\n            ")])])])]),e._v(" "),a("div",{staticClass:"absolute pa2 header-logo"},[a("a",{attrs:{href:""}},[a("img",{attrs:{src:"/img/logo.svg",width:"30",height:"27"}})])])])])}],!1,null,"7ee324ac",null));t.a=l.exports},"22nh":function(e,t,a){"use strict";var s=a("mRVG");a.n(s).a},Ddpy:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,'\n.absolute[data-v-8612cfca] {\n  border: 1px solid rgba(27,31,35,.15);\n  box-shadow: 0 3px 12px rgba(27,31,35,.15);\n  top: 36px;\n}\n.absolute[data-v-8612cfca]:after,\n.absolute[data-v-8612cfca]:before {\n  content: "";\n  display: inline-block;\n  position: absolute;\n}\n.absolute[data-v-8612cfca]:after {\n  border: 7px solid transparent;\n  border-bottom-color: #fff;\n  left: auto;\n  right: 10px;\n  top: -14px;\n}\n.absolute[data-v-8612cfca]:before {\n  border: 8px solid transparent;\n  border-bottom-color: rgba(27,31,35,.15);\n  left: auto;\n  right: 9px;\n  top: -16px;\n}\n',""])},IJ7u:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.flow[data-v-5fe31a05] {\n  background-color: #f4f6fa;\n  box-shadow: inset 1px 2px 2px rgba(0, 0, 0, 0.14);\n  border-radius: 8px;\n}\n.box-plus-button[data-v-5fe31a05] {\n  top: -19px;\n}\n.green-box[data-v-5fe31a05] {\n  border: 2px solid #1cbb70;\n}\n.lh0[data-v-5fe31a05] {\n  line-height: 0;\n}\n",""])},KuJD:function(e,t,a){var s=a("IJ7u");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(e.exports=s.locals)},YWzu:function(e,t,a){"use strict";var s=a("KuJD");a.n(s).a},Z84v:function(e,t,a){"use strict";a("zHN7");var s={components:{BallPulseLoader:a("mM8D").a},props:{text:{type:String,default:""},state:{type:String,default:""},classes:{type:String,default:""},cypressSelector:{type:String,default:""}}},n=a("KHd+"),i=Object(n.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"di"},[a("button",{class:e.classes,attrs:{name:"save",type:"submit","data-cy":e.cypressSelector}},["loading"==e.state?a("ball-pulse-loader",{attrs:{color:"#fff",size:"7px"}}):e._e(),e._v(" "),"loading"!=e.state?a("span",[e._v(e._s(e.text))]):e._e()],1)])},[],!1,null,null,null);t.a=i.exports},mRVG:function(e,t,a){var s=a("ngXL");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(e.exports=s.locals)},ngXL:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.find-box[data-v-7ee324ac] {\n  border: 1px solid rgba(27,31,35,.15);\n  box-shadow: 0 3px 12px rgba(27,31,35,.15);\n  top: 63px;\n  width: 500px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n.notifications-box[data-v-7ee324ac] {\n  border: 1px solid rgba(27,31,35,.15);\n  box-shadow: 0 3px 12px rgba(27,31,35,.15);\n  top: 63px;\n  width: 500px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n.bg-modal-find[data-v-7ee324ac] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n",""])},qQxn:function(e,t,a){var s=a("Ddpy");"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,n);s.locals&&(e.exports=s.locals)},rrJu:function(e,t,a){"use strict";var s={props:{errors:{type:Object,default:null}}},n=a("KHd+"),i=Object(n.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return Object.keys(e.errors).length>0?a("div",[a("p",[e._v("app.error_title")]),e._v(" "),a("br"),e._v(" "),e._l(e.errors,function(t){return a("ul",{key:t.id},e._l(t,function(t){return a("li",{key:t.id},[e._v("\n      "+e._s(t)+"\n    ")])}),0)})],2):e._e()},[],!1,null,null,null);t.a=i.exports},sCcz:function(e,t,a){"use strict";a.r(t);var s=a("rrJu"),n=a("Z84v"),i=a("+SZM"),o=a("xCLS"),r={components:{Layout:i.a,Errors:s.a,LoadingButton:n.a,Actions:o.default},props:{notifications:{type:Array,default:null}},data:function(){return{numberOfSteps:1,isComplete:!1,numberOfBeforeSteps:0,numberOfAfterSteps:0,oldestStep:0,newestStep:0,form:{name:null,type:null,steps:[],errors:[]},loadingState:"",errorTemplate:Error}},computed:{orderedSteps:function(){return _.orderBy(this.form.steps,"id")}},mounted:function(){this.form.steps.push({id:0,type:"same_day",frequency:"days",number:1,actions:[]})},methods:{notFirstAndLastStep:function(e){return(this.oldestStep!=e||1!=this.numberOfSteps)&&this.newestStep!=e},addStepBefore:function(){this.oldestStep=this.oldestStep+-1,this.form.steps.push({id:this.oldestStep,type:"before",frequency:"days",number:1,actions:[]}),this.numberOfSteps=this.numberOfSteps+1,this.numberOfBeforeSteps=this.numberOfBeforeSteps+1},addStepAfter:function(){this.newestStep=this.newestStep+1,this.form.steps.push({id:this.newestStep,type:"after",frequency:"days",number:1,actions:[]}),this.numberOfSteps=this.numberOfSteps+1,this.numberOfAfterSteps=this.numberOfAfterSteps+1},removeStep:function(e){e.id;this.form.steps.splice(this.form.steps.findIndex(function(t){return t.id===e.id}),1),"before"==e.type&&(this.numberOfSteps=this.numberOfSteps-1,this.numberOfBeforeSteps=this.numberOfBeforeSteps-1,e.id==this.oldestStep&&(this.oldestStep=Math.min.apply(Math,this.form.steps.map(function(e){return e.id})))),"after"==e.type&&(this.numberOfSteps=this.numberOfSteps-1,this.numberOfAfterSteps=this.numberOfAfterSteps-1,e.id==this.newestStep&&(this.newestStep=Math.max.apply(Math,this.form.steps.map(function(e){return e.id}))))},submit:function(){var e=this;this.loadingState="loading",axios.post("/"+this.$page.auth.company.id+"/account/flows",this.form).then(function(e){localStorage.success="The flow has been added",Turbolinks.visit("/"+e.data.company_id+"/account/flows")}).catch(function(t){e.loadingState=null,e.form.errors=_.flatten(_.toArray(t.response.data))})},checkComplete:function(e){var t=!0;null==this.form.type&&(t=!1),this.form.name||(t=!1);for(var a=0;a<this.form.steps.length;a++)for(var s=this.form.steps[a].actions,n=0;n<s.length;n++)0!=s[n].complete&&s[n].complete||(t=!1);this.isComplete=t}}},l=(a("YWzu"),a("KHd+")),c=Object(l.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout",{attrs:{title:"Home",notifications:e.notifications}},[a("div",{staticClass:"ph2 ph0-ns"},[a("div",{staticClass:"mt4-l mt1 mw6 br3 bg-white box center breadcrumb relative z-0 f6 pb2"},[a("ul",{staticClass:"list ph0 tc-l tl"},[a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+e.$page.auth.company.id+"/dashboard"}},[e._v("\n            "+e._s(e.$page.auth.company.name)+"\n          ")])],1),e._v(" "),a("li",{staticClass:"di"},[e._v("\n          ...\n        ")]),e._v(" "),a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+e.$page.auth.company.id+"/account/flows"}},[e._v("\n            "+e._s(e.$t("app.breadcrumb_account_manage_flows"))+"\n          ")])],1),e._v(" "),a("li",{staticClass:"di"},[e._v("\n          "+e._s(e.$t("app.breadcrumb_account_add_employee"))+"\n        ")])])]),e._v(" "),a("div",{staticClass:"mw7 center br3 mb5 bg-white box restricted relative z-1"},[a("div",{staticClass:"pa3 mt5 center"},[a("h2",{staticClass:"tc normal mb4"},[e._v("\n          "+e._s(e.$t("account.flows_cta"))+"\n        ")]),e._v(" "),a("errors",{attrs:{errors:e.form.errors}}),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("div",{staticClass:"mb3"},[a("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:"name"}},[e._v(e._s(e.$t("account.flow_new_flow")))]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"name",type:"text",name:"name",required:""},domProps:{value:e.form.name},on:{change:e.checkComplete,input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e._v(" "),a("p",{staticClass:"f7 mb4 lh-title"},[e._v("\n              "+e._s(e.$t("account.flow_new_help"))+"\n            ")])]),e._v(" "),a("div",{staticClass:"mb3 flow pv4"},e._l(e.orderedSteps,function(t){return a("div",{key:t.id},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.oldestStep==t.id,expression:"oldestStep == step.id"}],staticClass:"tc lh0"},[a("img",{staticClass:"center pointer",attrs:{src:"/img/company/account/flow_plus_top.svg"},on:{click:function(t){return e.addStepBefore()}}})]),e._v(" "),a("div",{staticClass:"step tc measure center bg-white br3 ma3 mt0 mb0 relative",class:{"green-box":e.numberOfSteps>1&&"same_day"==t.type}},[a("img",{directives:[{name:"show",rawName:"v-show",value:"same_day"!=t.type,expression:"step.type != 'same_day'"}],staticClass:"box-plus-button absolute br-100 pa2 bg-white pointer",attrs:{src:"/img/trash_button.svg"},on:{click:function(a){return a.preventDefault(),e.removeStep(t)}}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"before"==t.type,expression:"step.type == 'before'"}],staticClass:"condition pa3 bb bb-gray"},[a("ul",{staticClass:"list ma0 pa0 mb2"},[a("li",{staticClass:"di mr2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"step.number"}],staticClass:"tc br2 f5 ba b--black-40 pa2 outline-0",attrs:{id:"",type:"number",min:"1",max:"100",name:"",required:""},domProps:{value:t.number},on:{input:function(a){a.target.composing||e.$set(t,"number",a.target.value)}}})]),e._v(" "),a("li",{staticClass:"di mr2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.frequency,expression:"step.frequency"}],staticClass:"mr1",attrs:{id:"frequency_days_"+t.id,type:"radio",name:"frequency_before_"+t.id,value:"days"},domProps:{checked:e._q(t.frequency,"days")},on:{change:function(a){return e.$set(t,"frequency","days")}}}),e._v(" "),a("label",{attrs:{for:"frequency_days_"+t.id}},[e._v(e._s(e.$t("account.flow_new_days")))])]),e._v(" "),a("li",{staticClass:"di mr2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.frequency,expression:"step.frequency"}],staticClass:"mr1",attrs:{id:"frequency_weeks_"+t.id,type:"radio",name:"frequency_before_"+t.id,value:"weeks"},domProps:{checked:e._q(t.frequency,"weeks")},on:{change:function(a){return e.$set(t,"frequency","weeks")}}}),e._v(" "),a("label",{attrs:{for:"frequency_weeks_"+t.id}},[e._v(e._s(e.$t("account.flow_new_weeks")))])]),e._v(" "),a("li",{staticClass:"di"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.frequency,expression:"step.frequency"}],staticClass:"mr1",attrs:{id:"frequency_months_"+t.id,type:"radio",name:"frequency_before_"+t.id,value:"months"},domProps:{checked:e._q(t.frequency,"months")},on:{change:function(a){return e.$set(t,"frequency","months")}}}),e._v(" "),a("label",{attrs:{for:"frequency_months_"+t.id}},[e._v(e._s(e.$t("account.flow_new_months")))])])]),e._v(" "),a("p",{staticClass:"ma0 pa0"},[e._v("\n                    "+e._s(e.$t("account.flow_new_before"))+" "),a("span",{staticClass:"brush-blue"},[e._v(e._s(e.$t("account.flow_new_type_"+e.form.type)))])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"same_day"==t.type,expression:"step.type == 'same_day'"}],staticClass:"condition pa3 bb bb-gray"},[a("p",{staticClass:"ma0 pa0 mb2"},[e._v("\n                    "+e._s(e.$t("account.flow_new_the_day_event_happens"))+"\n                  ")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.type,expression:"form.type"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.form,"type",t.target.multiple?a:a[0])},e.checkComplete]}},[a("option",{attrs:{value:"employee_joins_company"}},[e._v("\n                      "+e._s(e.$t("account.flow_new_type_employee_joins_company"))+"\n                    ")]),e._v(" "),a("option",{attrs:{value:"employee_leaves_company"}},[e._v("\n                      "+e._s(e.$t("account.flow_new_type_employee_leaves_company"))+"\n                    ")]),e._v(" "),a("option",{attrs:{value:"employee_birthday"}},[e._v("\n                      "+e._s(e.$t("account.flow_new_type_employee_birthday"))+"\n                    ")]),e._v(" "),a("option",{attrs:{value:"employee_joins_team"}},[e._v("\n                      "+e._s(e.$t("account.flow_new_type_employee_joins_team"))+"\n                    ")]),e._v(" "),a("option",{attrs:{value:"employee_leaves_team"}},[e._v("\n                      "+e._s(e.$t("account.flow_new_type_employee_leaves_team"))+"\n                    ")]),e._v(" "),a("option",{attrs:{value:"employee_becomes_manager"}},[e._v("\n                      "+e._s(e.$t("account.flow_new_type_employee_becomes_manager"))+"\n                    ")]),e._v(" "),a("option",{attrs:{value:"employee_new_position"}},[e._v("\n                      "+e._s(e.$t("account.flow_new_type_employee_new_position"))+"\n                    ")]),e._v(" "),a("option",{attrs:{value:"employee_leaves_holidays"}},[e._v("\n                      "+e._s(e.$t("account.flow_new_type_employee_leaves_holidays"))+"\n                    ")]),e._v(" "),a("option",{attrs:{value:"employee_returns_holidays"}},[e._v("\n                      "+e._s(e.$t("account.flow_new_type_employee_returns_holidays"))+"\n                    ")]),e._v(" "),a("option",{attrs:{value:"employee_returns_leave"}},[e._v("\n                      "+e._s(e.$t("account.flow_new_type_employee_returns_leave"))+"\n                    ")])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:"after"==t.type,expression:"step.type == 'after'"}],staticClass:"condition pa3 bb bb-gray"},[a("ul",{staticClass:"list ma0 pa0 mb2"},[a("li",{staticClass:"di mr2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"step.number"}],staticClass:"tc br2 f5 ba b--black-40 pa2 outline-0",attrs:{id:"",type:"number",min:"1",max:"100",name:"",required:""},domProps:{value:t.number},on:{input:function(a){a.target.composing||e.$set(t,"number",a.target.value)}}})]),e._v(" "),a("li",{staticClass:"di mr2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.frequency,expression:"step.frequency"}],staticClass:"mr1",attrs:{id:"frequency_days_"+t.id,type:"radio",name:"frequency_after_"+t.id,value:"days"},domProps:{checked:e._q(t.frequency,"days")},on:{change:function(a){return e.$set(t,"frequency","days")}}}),e._v(" "),a("label",{attrs:{for:"frequency_days_"+t.id}},[e._v(e._s(e.$t("account.flow_new_days")))])]),e._v(" "),a("li",{staticClass:"di mr2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.frequency,expression:"step.frequency"}],staticClass:"mr1",attrs:{id:"frequency_weeks_"+t.id,type:"radio",name:"frequency_after_"+t.id,value:"weeks"},domProps:{checked:e._q(t.frequency,"weeks")},on:{change:function(a){return e.$set(t,"frequency","weeks")}}}),e._v(" "),a("label",{attrs:{for:"frequency_weeks_"+t.id}},[e._v(e._s(e.$t("account.flow_new_weeks")))])]),e._v(" "),a("li",{staticClass:"di"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.frequency,expression:"step.frequency"}],staticClass:"mr1",attrs:{id:"frequency_months_"+t.id,type:"radio",name:"frequency_after_"+t.id,value:"months"},domProps:{checked:e._q(t.frequency,"months")},on:{change:function(a){return e.$set(t,"frequency","months")}}}),e._v(" "),a("label",{attrs:{for:"frequency_months_"+t.id}},[e._v(e._s(e.$t("account.flow_new_months")))])])]),e._v(" "),a("p",{staticClass:"ma0 pa0"},[e._v("\n                    "+e._s(e.$t("account.flow_new_after"))+" "),a("span",{staticClass:"brush-blue"},[e._v(e._s(e.$t("account.flow_new_type_"+e.form.type)))])])]),e._v(" "),a("actions",{on:{completed:function(t){return e.checkComplete(t)}},model:{value:t.actions,callback:function(a){e.$set(t,"actions",a)},expression:"step.actions"}})],1),e._v(" "),e.notFirstAndLastStep(t.id)?a("div",{staticClass:"tc lh0"},[a("img",{staticClass:"center pointer",attrs:{src:"/img/company/account/flow_line.svg"}})]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.newestStep==t.id,expression:"newestStep == step.id"}],staticClass:"tc"},[a("img",{staticClass:"center pointer",attrs:{src:"/img/company/account/flow_plus_bottom.svg"},on:{click:function(t){return e.addStepAfter()}}})])])}),0),e._v(" "),a("div",{staticClass:"mv4"},[a("div",{staticClass:"flex-ns justify-between"},[a("div",[a("a",{staticClass:"btn btn-secondary dib tc w-auto-ns w-100 mb2 pv2 ph3",attrs:{href:"/"+e.$page.auth.company.id+"/account/employees"}},[e._v(e._s(e.$t("app.cancel")))])]),e._v(" "),a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3",state:e.loadingState,text:e.$t("app.save"),"cypress-selector":"submit-add-employee-button"}})],1)])])],1)])])])},[],!1,null,"5fe31a05",null);t.default=c.exports},z6qC:function(e,t,a){"use strict";var s=a("qQxn");a.n(s).a}}]);