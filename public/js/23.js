(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{IrLC:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".worklog-item[data-v-a37065a8] {\n  padding-left: 28px;\n  padding-top: 6px;\n  padding-right: 10px;\n  padding-bottom: 6px;\n  border: 1px solid transparent;\n}\n.worklog-item.selected[data-v-a37065a8] {\n  background-color: #fffaf5;\n  border: 1px solid #e6e6e6;\n}\n.worklog-item.future[data-v-a37065a8] {\n  color: #9e9e9e;\n}\n.worklog-item.future .dot[data-v-a37065a8] {\n  background-color: #9e9e9e;\n}\n.worklog-item.current[data-v-a37065a8] {\n  font-weight: 500;\n}\n.dot[data-v-a37065a8] {\n  background-color: #ff6d67;\n  height: 13px;\n  width: 13px;\n  left: 9px;\n  top: 18px;\n}\n@media (max-width: 480px) {\n.dot[data-v-a37065a8] {\n    left: -4px;\n    top: 1px;\n    position: relative;\n}\n}\n.dot.yellow[data-v-a37065a8] {\n  background-color: #ffa634;\n}\n.dot.green[data-v-a37065a8] {\n  background-color: #34c08f;\n}\n.content[data-v-a37065a8] {\n  background-color: #f3f9fc;\n  padding: 1px 10px;\n}\n.worklog-entry[data-v-a37065a8]:not(:first-child) {\n  margin-top: 25px;\n}",""])},"KHd+":function(t,e,n){"use strict";function a(t,e,n,a,r,o,s,i){var d,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),a&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=d):r&&(d=i?function(){r.call(this,this.$root.$options.shadowRoot)}:r),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(t,e){return d.call(e),c(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:l}}n.d(e,"a",(function(){return a}))},MkgX:function(t,e,n){"use strict";n.r(e);var a={props:{company:{type:Object,default:null},teams:{type:Array,default:function(){return{}}},worklogDates:{type:Array,default:function(){return{}}},worklogEntries:{type:Array,default:function(){return{}}},currentDate:{type:String,default:null},currentTeam:{type:Number,default:null}},data:function(){return{updatedWorklogEntries:null,updatedCurrentDate:null,currentWorklogDate:{},form:{errors:[]}}},created:function(){this.updatedWorklogEntries=this.worklogEntries,this.currentWorklogDate=this.worklogDates.filter((function(t){return"current"==t.status}))[0],void 0===this.currentWorklogDate&&(this.currentWorklogDate=this.worklogDates[this.worklogDates.length-1]),this.load(this.currentWorklogDate)},methods:{load:function(t){var e=this;axios.get("/"+this.company.id+"/dashboard/team/"+this.currentTeam+"/"+t.friendlyDate).then((function(n){e.updatedWorklogEntries=n.data.worklogEntries,e.updatedCurrentDate=n.data.currentDate,e.currentWorklogDate=t})).catch((function(t){e.form.errors=_.flatten(_.toArray(t.response.data))}))}}},r=(n("kbyK"),n("KHd+")),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.teams.length,expression:"teams.length != 0"}],staticClass:"cf mw7 center br3 mb3 bg-white box"},[n("div",{staticClass:"pa3"},[n("h2",{staticClass:"mt0 fw5 f4"},[t._v("\n      🔨 "+t._s(t.$t("dashboard.team_worklog_title"))+"\n    ")]),t._v(" "),n("div",{staticClass:"flex-ns justify-around pa0 tc mt4 mb3 bb bb-gray pb3"},t._l(t.worklogDates,(function(e){return n("div",{key:e.friendlyDate,staticClass:"dib-ns worklog-item relative pointer br2 db",class:[{selected:e==t.currentWorklogDate},e.status],on:{click:function(n){return n.preventDefault(),t.load(e)}}},[n("span",{staticClass:"dot br-100 dib absolute",class:e.completionRate}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.friendlyDate==t.currentDate,expression:"worklogDate.friendlyDate == currentDate"}],staticClass:"db-ns dib mb1 f6"},[t._v("\n          "+t._s(t.$t("dashboard.team_worklog_today"))+"\n        ")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.friendlyDate!=t.currentDate,expression:"worklogDate.friendlyDate != currentDate"}],staticClass:"db-ns dib mb1 f6"},[t._v("\n          "+t._s(e.day)+"\n        ")]),t._v(" "),n("span",{staticClass:"db0-ns f7 mb1 dib"},[t._v("\n          "+t._s(e.date)+"\n        ")])])})),0),t._v(" "),n("p",{staticClass:"f6 mt0 mb3"},[t._v("\n      "+t._s(t.$t("dashboard.team_worklog_stat"))+" "),n("span",{class:t.currentWorklogDate.completionRate},[t._v("\n        "+t._s(t.currentWorklogDate.numberOfEmployeesWhoHaveLoggedWorklogs)+"/"+t._s(t.currentWorklogDate.numberOfEmployeesInTeam)+"\n      ")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.updatedWorklogEntries.length,expression:"updatedWorklogEntries.length == 0"}],staticClass:"tc mt2"},[t._v("\n      😢 "+t._s(t.$t("dashboard.team_worklog_blank"))+"\n    ")]),t._v(" "),t._l(t.updatedWorklogEntries,(function(e){return n("div",{key:e.id,staticClass:"worklog-entry bb-gray"},[n("small-name-and-avatar",{attrs:{name:e.name,avatar:e.avatar}}),t._v(" "),n("div",{staticClass:"lh-copy content mt2 br3",domProps:{innerHTML:t._s(e.content)}})],1)}))],2)])}),[],!1,null,"a37065a8",null);e.default=o.exports},kbyK:function(t,e,n){"use strict";var a=n("mB3C");n.n(a).a},mB3C:function(t,e,n){var a=n("IrLC");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,r);a.locals&&(t.exports=a.locals)}}]);
//# sourceMappingURL=23.js.map?id=acd98fe92ca5042a3298