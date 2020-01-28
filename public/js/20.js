(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0d+L":function(t,e,a){"use strict";a.r(e);var r=a("3QM4"),s=a("Z84v"),n=a("rrJu"),i={components:{TextArea:r.a,LoadingButton:s.a,Errors:n.a},props:{team:{type:Object,default:null},userBelongsToTheTeam:{type:Boolean,default:!1}},data:function(){return{editMode:!1,form:{description:null,errors:[]},loadingState:"",updatedTeam:null}},created:function(){this.updatedTeam=this.team,this.form.description=this.team.raw_description},methods:{showEditMode:function(){var t=this;this.editMode=!0,this.$nextTick((function(){t.$refs.description.focus()}))},submit:function(){var t=this;this.loadingState="loading",axios.post("/"+this.$page.auth.company.id+"/teams/"+this.team.id+"/description",this.form).then((function(e){t.$snotify.success(t.$t("team.description_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedTeam=e.data.data,t.form.description=t.updatedTeam.raw_description,t.editMode=!1,t.loadingState=null})).catch((function(e){t.loadingState=null,t.form.errors=_.flatten(_.toArray(e.response.data))}))},teamMemberOrAtLeastHR:function(){return this.$page.auth.employee.permission_level<=200||0!=this.userBelongsToTheTeam}}},o=a("KHd+"),d=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.updatedTeam.parsed_description&&!t.editMode,expression:"updatedTeam.parsed_description && !editMode"}],staticClass:"bb bb-gray"},[a("div",{staticClass:"lh-copy ma0 pl3 pt3 pr3 parsed-content",class:{mb3:!t.teamMemberOrAtLeastHR()},domProps:{innerHTML:t._s(t.updatedTeam.parsed_description)}}),t._v(" "),t.teamMemberOrAtLeastHR()?a("p",{staticClass:"pl3 pb3 pr3 f6 mb0"},[a("a",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer",attrs:{"data-cy":"team-description-edit"},on:{click:function(e){return e.preventDefault(),t.showEditMode()}}},[t._v(t._s(t.$t("app.edit")))])]):t._e()]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.updatedTeam.parsed_description&&!t.editMode,expression:"!updatedTeam.parsed_description && !editMode"}],staticClass:"lh-copy ma0 pa3 bb bb-gray"},[t.teamMemberOrAtLeastHR()?a("a",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer",attrs:{"data-cy":"add-description-blank-state"},on:{click:function(e){return e.preventDefault(),t.showEditMode()}}},[t._v(t._s(t.$t("team.description_cta")))]):t._e(),t._v(" "),t.teamMemberOrAtLeastHR()?t._e():a("span",{staticClass:"f6"},[t._v("\n      "+t._s(t.$t("team.description_blank"))+"\n    ")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}],staticClass:"pa3 bb bb-gray"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[t.form.errors.length>0?[a("div",{staticClass:"cf pb1 w-100 mb2"},[a("errors",{attrs:{errors:t.form.errors}})],1)]:t._e(),t._v(" "),a("text-area",{ref:"description",attrs:{label:t.$t("team.description_title"),datacy:"team-description-textarea",required:!0,rows:10,help:t.$t("team.description_help")},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),a("div",{staticClass:"mb0"},[a("div",{staticClass:"flex-ns justify-between"},[a("div",[a("a",{staticClass:"btn btn-secondary dib tc w-auto-ns w-100 mb2 pv2 ph3",on:{click:function(e){e.preventDefault(),t.editMode=!1}}},[t._v("\n              "+t._s(t.$t("app.cancel"))+"\n            ")])]),t._v(" "),a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3",state:t.loadingState,text:t.$t("app.publish"),"cypress-selector":"team-description-submit-description-button"}})],1)])],2)])])}),[],!1,null,"010ca257",null);e.default=d.exports},"1krx":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".error-explanation[data-v-baf4edc2] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-baf4edc2]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}",""])},"3QM4":function(t,e,a){"use strict";var r={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-area-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},datacy:{type:String,default:""},label:{type:String,default:""},help:{type:String,default:""},required:{type:Boolean,default:!1},rows:{type:Number,default:3},errors:{type:Array,default:function(){return[]}}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},s=(a("9cby"),a("KHd+")),n=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb3"},[t.label?a("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:t.id}},[t._v("\n    "+t._s(t.label)+"\n  ")]):t._e(),t._v(" "),a("textarea",t._b({ref:"input",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",class:{error:t.errors.length},attrs:{id:t.id,required:t.required?"required":"",type:t.type,"data-cy":t.datacy,rows:t.rows},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"textarea",t.$attrs,!1)),t._v(" "),t.errors.length?a("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[t._v("\n    "+t._s(t.errors[0])+"\n  ")]):t._e(),t._v(" "),t.help?a("p",{staticClass:"f7 mb3 lh-title"},[t._v("\n    "+t._s(t.help)+"\n  ")]):t._e()])}),[],!1,null,"baf4edc2",null);e.a=n.exports},"9cby":function(t,e,a){"use strict";var r=a("Y36v");a.n(r).a},FUPM:function(t,e,a){var r=a("GqqJ");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)},GqqJ:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".border-red[data-v-1482dffa] {\n  background-color: #fff5f5;\n  border-color: #fc8181;\n  color: #c53030;\n}",""])},"SL/y":function(t,e,a){"use strict";var r=a("FUPM");a.n(r).a},Y36v:function(t,e,a){var r=a("1krx");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)},Z84v:function(t,e,a){"use strict";a("zHN7");var r={components:{BallPulseLoader:a("mM8D").a},props:{text:{type:String,default:""},state:{type:String,default:""},classes:{type:String,default:""},cypressSelector:{type:String,default:""}}},s=a("KHd+"),n=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"di"},[a("button",{class:t.classes,attrs:{name:"save",type:"submit","data-cy":t.cypressSelector}},["loading"==t.state?a("ball-pulse-loader",{attrs:{color:"#fff",size:"7px"}}):t._e(),t._v(" "),"loading"!=t.state?a("span",[t._v("\n      "+t._s(t.text)+"\n    ")]):t._e()],1)])}),[],!1,null,null,null);e.a=n.exports},rrJu:function(t,e,a){"use strict";var r={props:{errors:{type:Array,default:function(){return[]}}}},s=(a("SL/y"),a("KHd+")),n=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.errors.length>0?a("div",{staticClass:"border-red ba br3 pa3"},[a("p",{staticClass:"mv0 fw6"},[t._v(t._s(t.$t("app.error_title")))]),t._v(" "),a("p",{staticClass:"mb0"},[t._v(t._s(t.errors[0]))])]):t._e()}),[],!1,null,"1482dffa",null);e.a=n.exports}}]);
//# sourceMappingURL=20.js.map?id=c384a9e0779eff24455f