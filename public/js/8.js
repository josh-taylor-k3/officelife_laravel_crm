(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1krx":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".error-explanation[data-v-baf4edc2] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-baf4edc2]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}",""])},"3QM4":function(e,t,a){"use strict";var s={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-area-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},datacy:{type:String,default:""},label:{type:String,default:""},help:{type:String,default:""},required:{type:Boolean,default:!1},rows:{type:Number,default:3},errors:{type:Array,default:function(){return[]}}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(e,t){this.$refs.input.setSelectionRange(e,t)}}},o=(a("9cby"),a("KHd+")),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb3"},[e.label?a("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:e.id}},[e._v("\n    "+e._s(e.label)+"\n  ")]):e._e(),e._v(" "),a("textarea",e._b({ref:"input",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",class:{error:e.errors.length},attrs:{id:e.id,required:e.required?"required":"",type:e.type,"data-cy":e.datacy,rows:e.rows},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},"textarea",e.$attrs,!1)),e._v(" "),e.errors.length?a("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[e._v("\n    "+e._s(e.errors[0])+"\n  ")]):e._e(),e._v(" "),e.help?a("p",{staticClass:"f7 mb3 lh-title"},[e._v("\n    "+e._s(e.help)+"\n  ")]):e._e()])}),[],!1,null,"baf4edc2",null);t.a=r.exports},"9cby":function(e,t,a){"use strict";var s=a("Y36v");a.n(s).a},"OOk+":function(e,t,a){"use strict";a.r(t);var s=a("dAlk"),o=a("mObZ"),r={components:{Layout:a("+SZM").a,MyWorklogs:s.default,MyMorale:o.default},props:{worklogCount:{type:Number,default:0},moraleCount:{type:Number,default:0},notifications:{type:Array,default:null},ownerPermissionLevel:{type:Number,default:0}}},n=(a("oQho"),a("KHd+")),i=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout",{attrs:{title:"Home",notifications:e.notifications}},[a("div",{staticClass:"ph2 ph0-ns"},[a("div",{staticClass:"cf mt4 mw7 center"},[a("h2",{staticClass:"tc fw5"},[e._v("\n        "+e._s(e.$page.auth.company.name)+"\n      ")])]),e._v(" "),a("div",{staticClass:"cf mw7 center br3 mb5 tc"},[a("div",{staticClass:"cf dib btn-group"},[a("inertia-link",{staticClass:"f6 fl ph3 pv2 dib pointer",class:{selected:"me"==e.$page.auth.user.default_dashboard_view},attrs:{href:"/"+e.$page.auth.company.id+"/dashboard/me"}},[e._v("\n          Me\n        ")]),e._v(" "),a("inertia-link",{staticClass:"f6 fl ph3 pv2 dib pointer",class:{selected:"team"==e.$page.auth.user.default_dashboard_view},attrs:{href:"/"+e.$page.auth.company.id+"/dashboard/team","data-cy":"dashboard-team-tab"}},[e._v("\n          My team\n        ")]),e._v(" "),a("inertia-link",{staticClass:"f6 fl ph3 pv2 dib pointer",class:{selected:"company"==e.$page.auth.user.default_dashboard_view},attrs:{href:"/"+e.$page.auth.company.id+"/dashboard/company","data-cy":"dashboard-company-tab"}},[e._v("\n          My company\n        ")]),e._v(" "),a("inertia-link",{staticClass:"f6 fl ph3 pv2 dib pointer",class:{selected:"hr"==e.$page.auth.user.default_dashboard_view},attrs:{href:"/"+e.$page.auth.company.id+"/dashboard/hr","data-cy":"dashboard-hr-tab"}},[e._v("\n          HR area\n        ")])],1)]),e._v(" "),a("my-worklogs",{staticClass:"mb5",attrs:{"worklog-count":e.worklogCount}}),e._v(" "),a("my-morale",{attrs:{"morale-count":e.moraleCount}}),e._v(" "),a("div",{staticClass:"cf mt4 mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("h2",[e._v("Team")]),e._v(" "),a("ul",[a("li",[e._v("team agenda")]),e._v(" "),a("li",[e._v("anniversaires")]),e._v(" "),a("li",[e._v("latest news")]),e._v(" "),a("li",[e._v("view who is at work or from home")]),e._v(" "),a("li",[e._v("manager: view time off requests")]),e._v(" "),a("li",[e._v("manager: view morale")]),e._v(" "),a("li",[e._v("manager: expense approval")]),e._v(" "),a("li",[e._v("manager: one on one")]),e._v(" "),a("li",[e._v("revue 360 de son boss ou d'employées")])])])]),e._v(" "),a("div",{staticClass:"cf mt4 mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("h2",[e._v("Me")]),e._v(" "),a("ul",[a("li",[e._v("View holidays")]),e._v(" "),a("li",[e._v("Book time off")]),e._v(" "),a("li",[e._v("Log morale")]),e._v(" "),a("li",[e._v("Reply to what you've done this week")]),e._v(" "),a("li",[e._v("Log an expense")]),e._v(" "),a("li",[e._v("View one on ones")]),e._v(" "),a("li",[e._v("View all my tasks")])])])])],1)])}),[],!1,null,"da58a1f6",null);t.default=i.exports},Y36v:function(e,t,a){var s=a("1krx");"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,o);s.locals&&(e.exports=s.locals)},dAlk:function(e,t,a){"use strict";a.r(t);var s=a("Z84v"),o=a("3QM4"),r={components:{LoadingButton:s.a,TextArea:o.a},props:{worklogCount:{type:Number,default:0}},data:function(){return{editorShown:!1,form:{content:null,errors:[]},updatedWorklogCount:0,updatedEmployee:null,loadingState:"",successMessage:!1}},created:function(){this.updatedWorklogCount=this.worklogCount,this.updatedEmployee=this.$page.auth.employee},methods:{updateText:function(e){this.form.content=e},showEditor:function(){var e=this;this.editorShown=!0,this.$nextTick((function(){e.$refs.editor.$refs.input.focus()}))},store:function(){var e=this;this.loadingState="loading",this.successMessage=!0,this.editorShown=!1,this.updatedEmployee.has_logged_worklog_today=!0,axios.post("/"+this.$page.auth.company.id+"/dashboard/worklog",this.form).then((function(t){e.$snotify.success(e.$t("dashboard.worklog_success_message"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),e.updatedWorklogCount=e.updatedWorklogCount+1,e.updatedEmployee=t.data.data,e.loadingState=null})).catch((function(t){e.loadingState=null,e.successMessage=!1,e.editorShown=!0,e.updatedEmployee.has_logged_worklog_today=!1,e.form.errors=_.flatten(_.toArray(t.response.data))}))}}},n=a("KHd+"),i=Object(n.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"cf mw7 center mb2 fw5"},[e._v("\n    🔨 "+e._s(e.$t("dashboard.worklog_title"))+"\n  ")]),e._v(" "),a("div",{staticClass:"cf mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[a("p",{directives:[{name:"show",rawName:"v-show",value:!e.editorShown&&!e.updatedEmployee.has_logged_worklog_today,expression:"!editorShown && !updatedEmployee.has_logged_worklog_today"}],staticClass:"db mt0"},[a("span",{staticClass:"dib-ns db mb0-ns mb2"},[e._v("\n          "+e._s(e.$t("dashboard.worklog_placeholder"))+"\n        ")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:0!=e.updatedWorklogCount,expression:"updatedWorklogCount != 0"}],staticClass:"ml2-ns pointer"},[e._v("\n          "+e._s(e.$t("dashboard.worklog_read_previous_entries"))+"\n        ")])]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.editorShown&&e.updatedEmployee.has_logged_worklog_today&&!e.successMessage,expression:"!editorShown && updatedEmployee.has_logged_worklog_today && !successMessage"}],staticClass:"db mb0 mt0"},[a("span",{staticClass:"dib-ns db mb0-ns mb2"},[e._v("\n          "+e._s(e.$t("dashboard.worklog_already_logged"))+"\n        ")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:0!=e.updatedWorklogCount,expression:"updatedWorklogCount != 0"}],staticClass:"ml2-ns pointer"},[e._v("\n          "+e._s(e.$t("dashboard.worklog_read_previous_entries"))+"\n        ")])]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:!e.editorShown&&!e.updatedEmployee.has_logged_worklog_today,expression:"!editorShown && !updatedEmployee.has_logged_worklog_today"}],staticClass:"ma0"},[a("a",{staticClass:"btn btn-secondary dib",attrs:{"data-cy":"log-worklog-cta"},on:{click:function(t){return t.preventDefault(),e.showEditor(t)}}},[e._v("\n          "+e._s(e.$t("dashboard.worklog_cta"))+"\n        ")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.editorShown&&!e.successMessage,expression:"editorShown && !successMessage"}]},[a("form",{on:{submit:function(t){return t.preventDefault(),e.store()}}},[a("text-area",{ref:"editor",attrs:{datacy:"worklog-content"},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}}),e._v(" "),a("p",{staticClass:"db lh-copy f6"},[e._v("\n            👋 "+e._s(e.$t("dashboard.worklog_entry_description"))+"\n          ")]),e._v(" "),a("p",{staticClass:"ma0"},[a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 pv2 ph3 mr2",state:e.loadingState,text:e.$t("app.save"),"cypress-selector":"submit-log-worklog"}}),e._v(" "),a("a",{staticClass:"pointer",on:{click:function(t){t.preventDefault(),e.editorShown=!1}}},[e._v("\n              "+e._s(e.$t("app.cancel"))+"\n            ")])],1)],1)]),e._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.successMessage,expression:"successMessage"}],staticClass:"db mb3 mt4 tc"},[e._v("\n        "+e._s(e.$t("dashboard.worklog_added"))+"\n      ")])])])])}),[],!1,null,"6f51497c",null);t.default=i.exports},e0PL:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\n.dummy[data-v-da58a1f6] {\n  right: 40px;\n  bottom: 20px;\n}\n",""])},mObZ:function(e,t,a){"use strict";a.r(t);var s={components:{Errors:a("rrJu").a},props:{moraleCount:{type:Number,default:0}},data:function(){return{showEditor:!1,form:{emotion:null,errors:[]},updatedEmployee:null,successMessage:!1}},created:function(){this.updatedEmployee=this.$page.auth.employee},methods:{store:function(e){var t=this;this.successMessage=!0,this.form.emotion=e,axios.post("/"+this.$page.auth.company.id+"/dashboard/morale",this.form).then((function(e){t.moraleCount=t.moraleCount+1,t.updatedEmployee=e.data.data})).catch((function(e){t.successMessage=!1,t.form.errors=e.response.data.errors}))}}},o=a("KHd+"),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"cf mw7 center mb2 fw5"},[e._v("\n    🙃 "+e._s(e.$t("dashboard.morale_title"))+"\n  ")]),e._v(" "),a("div",{staticClass:"cf mw7 center br3 mb3 bg-white box"},[a("div",{staticClass:"pa3"},[e.successMessage?a("div",{staticClass:"tc"},[a("p",[e._v("🙌")]),e._v(" "),a("p",[e._v(e._s(e.$t("dashboard.morale_success_message")))])]):e._e(),e._v(" "),e.updatedEmployee.has_logged_morale_today&&!e.successMessage?a("div",{staticClass:"tc"},[a("p",[e._v("🙌")]),e._v(" "),a("p",[e._v(e._s(e.$t("dashboard.morale_already_logged")))])]):e._e(),e._v(" "),e.updatedEmployee.has_logged_morale_today||e.successMessage?e._e():a("div",[a("errors",{attrs:{errors:e.form.errors}}),e._v(" "),a("div",{staticClass:"flex-ns justify-center mt3 mb3"},[a("span",{staticClass:"btn mr3-ns mb0-ns mb2 dib-l db",attrs:{"data-cy":"log-morale-bad"},on:{click:function(t){return t.preventDefault(),e.store(1)}}},[e._v("\n            😡 "+e._s(e.$t("dashboard.morale_emotion_bad"))+"\n          ")]),e._v(" "),a("span",{staticClass:"btn mr3-ns mb0-ns mb2 dib-l db",attrs:{"data-cy":"log-morale-normal"},on:{click:function(t){return t.preventDefault(),e.store(2)}}},[e._v("\n            😌 "+e._s(e.$t("dashboard.morale_emotion_normal"))+"\n          ")]),e._v(" "),a("span",{staticClass:"btn dib-l db mb0-ns",attrs:{"data-cy":"log-morale-good"},on:{click:function(t){return t.preventDefault(),e.store(3)}}},[e._v("\n            🥳 "+e._s(e.$t("dashboard.morale_emotion_good"))+"\n          ")])])],1),e._v(" "),e.updatedEmployee.has_logged_morale_today||e.successMessage?e._e():a("p",{staticClass:"f7 mb0"},[e._v("\n        "+e._s(e.$t("dashboard.morale_rules"))+"\n      ")])])])])}),[],!1,null,"a27e89c6",null);t.default=r.exports},oQho:function(e,t,a){"use strict";var s=a("xzsh");a.n(s).a},rrJu:function(e,t,a){"use strict";var s={props:{errors:{type:Array,default:function(){return[]}}}},o=a("KHd+"),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.errors.length>0?a("div",[a("p",[e._v("app.error_title")]),e._v(" "),a("br"),e._v("\n  "+e._s(e.errors[0])+"\n  "),a("ul",e._l(e.errors[1],(function(t){return a("li",{key:t.id},[e._v("\n      "+e._s(t[0])+"\n    ")])})),0)]):e._e()}),[],!1,null,null,null);t.a=r.exports},xzsh:function(e,t,a){var s=a("e0PL");"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,o);s.locals&&(e.exports=s.locals)}}]);
//# sourceMappingURL=8.js.map?id=e0947d81d6f522c11efe