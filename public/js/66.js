(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Shared/Layout */ \"./resources/js/Shared/Layout.vue\");\n/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/TextInput */ \"./resources/js/Shared/TextInput.vue\");\n/* harmony import */ var _Shared_Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Errors */ \"./resources/js/Shared/Errors.vue\");\n/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/LoadingButton */ \"./resources/js/Shared/LoadingButton.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    TextInput: _Shared_TextInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Errors: _Shared_Errors__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    LoadingButton: _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  props: {\n    company: {\n      type: Object,\n      \"default\": null\n    },\n    user: {\n      type: Object,\n      \"default\": null\n    },\n    notifications: {\n      type: Array,\n      \"default\": null\n    }\n  },\n  data: function data() {\n    return {\n      form: {\n        name: null,\n        errors: []\n      },\n      loadingState: '',\n      errorTemplate: Error\n    };\n  },\n  methods: {\n    submit: function submit() {\n      var _this = this;\n\n      this.loadingState = 'loading';\n      this.$inertia.post(this.route('company.store'), this.form).then(function () {\n        return _this.loadingState = null;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL1BhZ2VzL0hvbWUvQ3JlYXRlQ29tcGFueS52dWU/YmJmZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0Esa0VBREE7QUFFQSx3RUFGQTtBQUdBLGtFQUhBO0FBSUE7QUFKQSxHQURBO0FBUUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBS0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FMQTtBQVNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBVEEsR0FSQTtBQXVCQSxNQXZCQSxrQkF1QkE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLE9BREE7QUFLQSxzQkFMQTtBQU1BO0FBTkE7QUFRQSxHQWhDQTtBQWtDQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQTtBQUVBLGlFQUNBLElBREEsQ0FDQTtBQUFBLGVBQ0EseUJBREE7QUFBQSxPQURBO0FBSUE7QUFSQTtBQWxDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvUGFnZXMvSG9tZS9DcmVhdGVDb21wYW55LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxsYXlvdXQgdGl0bGU9XCJIb21lXCIgOm5vLW1lbnU9XCJ0cnVlXCIgOm5vdGlmaWNhdGlvbnM9XCJub3RpZmljYXRpb25zXCI+XG4gICAgPGRpdiBjbGFzcz1cInBoMiBwaDAtbnNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjZiBtdDQgbXc3IGNlbnRlciBicjMgbWIzIGJnLXdoaXRlIGJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm4gZmwtbnMgdy01MC1ucyBwYTNcIj5cbiAgICAgICAgICBDcmVhdGUgYSBjb21wYW55XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm4gZmwtbnMgdy01MC1ucyBwYTNcIj5cbiAgICAgICAgICA8IS0tIEZvcm0gRXJyb3JzIC0tPlxuICAgICAgICAgIDxlcnJvcnMgOmVycm9ycz1cImZvcm0uZXJyb3JzXCIgLz5cblxuICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgPHRleHQtaW5wdXQgdi1tb2RlbD1cImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cIiduYW1lJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3JzPVwiJHBhZ2UuZXJyb3JzLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiJHQoJ2NvbXBhbnkubmV3X25hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cmVxdWlyZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDwhLS0gQWN0aW9ucyAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtbnMganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsb2FkaW5nLWJ1dHRvbiA6Y2xhc3Nlcz1cIididG4gYWRkIHctYXV0by1ucyB3LTEwMCBtYjIgcHYyIHBoMydcIiA6c3RhdGU9XCJsb2FkaW5nU3RhdGVcIiA6dGV4dD1cIidyZWdpc3RlcidcIiBkYXRhLWN5PVwiY3JlYXRlLWNvbXBhbnktc3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9TaGFyZWQvTGF5b3V0JztcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnQC9TaGFyZWQvVGV4dElucHV0JztcbmltcG9ydCBFcnJvcnMgZnJvbSAnQC9TaGFyZWQvRXJyb3JzJztcbmltcG9ydCBMb2FkaW5nQnV0dG9uIGZyb20gJ0AvU2hhcmVkL0xvYWRpbmdCdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBMYXlvdXQsXG4gICAgVGV4dElucHV0LFxuICAgIEVycm9ycyxcbiAgICBMb2FkaW5nQnV0dG9uLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgY29tcGFueToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9LFxuICAgIHVzZXI6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgICBub3RpZmljYXRpb25zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3JtOiB7XG4gICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgIGVycm9yczogW10sXG4gICAgICB9LFxuICAgICAgbG9hZGluZ1N0YXRlOiAnJyxcbiAgICAgIGVycm9yVGVtcGxhdGU6IEVycm9yLFxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHN1Ym1pdCgpIHtcbiAgICAgIHRoaXMubG9hZGluZ1N0YXRlID0gJ2xvYWRpbmcnO1xuXG4gICAgICB0aGlzLiRpbmVydGlhLnBvc3QodGhpcy5yb3V0ZSgnY29tcGFueS5zdG9yZScpLCB0aGlzLmZvcm0pXG4gICAgICAgIC50aGVuKCgpID0+XG4gICAgICAgICAgdGhpcy5sb2FkaW5nU3RhdGUgPSBudWxsXG4gICAgICAgICk7XG4gICAgfSxcbiAgfVxufTtcbjwvc2NyaXB0PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"layout\",\n    {\n      attrs: {\n        title: \"Home\",\n        \"no-menu\": true,\n        notifications: _vm.notifications\n      }\n    },\n    [\n      _c(\"div\", { staticClass: \"ph2 ph0-ns\" }, [\n        _c(\"div\", { staticClass: \"cf mt4 mw7 center br3 mb3 bg-white box\" }, [\n          _c(\"div\", { staticClass: \"fn fl-ns w-50-ns pa3\" }, [\n            _vm._v(\"\\n        Create a company\\n      \")\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"fn fl-ns w-50-ns pa3\" },\n            [\n              _c(\"errors\", { attrs: { errors: _vm.form.errors } }),\n              _vm._v(\" \"),\n              _c(\n                \"form\",\n                {\n                  on: {\n                    submit: function($event) {\n                      $event.preventDefault()\n                      return _vm.submit($event)\n                    }\n                  }\n                },\n                [\n                  _c(\"text-input\", {\n                    attrs: {\n                      name: \"name\",\n                      errors: _vm.$page.errors.name,\n                      label: _vm.$t(\"company.new_name\"),\n                      required: true\n                    },\n                    model: {\n                      value: _vm.form.name,\n                      callback: function($$v) {\n                        _vm.$set(_vm.form, \"name\", $$v)\n                      },\n                      expression: \"form.name\"\n                    }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"div\", {}, [\n                    _c(\"div\", { staticClass: \"flex-ns justify-between\" }, [\n                      _c(\n                        \"div\",\n                        [\n                          _c(\"loading-button\", {\n                            attrs: {\n                              classes: \"btn add w-auto-ns w-100 mb2 pv2 ph3\",\n                              state: _vm.loadingState,\n                              text: \"register\",\n                              \"data-cy\": \"create-company-submit\"\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    ])\n                  ])\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ])\n      ])\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvSG9tZS9DcmVhdGVDb21wYW55LnZ1ZT81OWJhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlCQUFpQiw0QkFBNEI7QUFDN0MsbUJBQW1CLHdEQUF3RDtBQUMzRSxxQkFBcUIsc0NBQXNDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNDQUFzQztBQUNuRDtBQUNBLDRCQUE0QixTQUFTLDBCQUEwQixFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSw4QkFBOEI7QUFDOUIsK0JBQStCLHlDQUF5QztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vcmVzb3VyY2VzL2pzL1BhZ2VzL0hvbWUvQ3JlYXRlQ29tcGFueS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmNlNDBiN2EmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImxheW91dFwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICAgICAgXCJuby1tZW51XCI6IHRydWUsXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IF92bS5ub3RpZmljYXRpb25zXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBoMiBwaDAtbnNcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2YgbXQ0IG13NyBjZW50ZXIgYnIzIG1iMyBiZy13aGl0ZSBib3hcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbiBmbC1ucyB3LTUwLW5zIHBhM1wiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgQ3JlYXRlIGEgY29tcGFueVxcbiAgICAgIFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbiBmbC1ucyB3LTUwLW5zIHBhM1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZXJyb3JzXCIsIHsgYXR0cnM6IHsgZXJyb3JzOiBfdm0uZm9ybS5lcnJvcnMgfSB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0LWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IF92bS4kcGFnZS5lcnJvcnMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLiR0KFwiY29tcGFueS5uZXdfbmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7fSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtbnMganVzdGlmeS1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsb2FkaW5nLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFwiYnRuIGFkZCB3LWF1dG8tbnMgdy0xMDAgbWIyIHB2MiBwaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBfdm0ubG9hZGluZ1N0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJyZWdpc3RlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWN5XCI6IFwiY3JlYXRlLWNvbXBhbnktc3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a&\n");

/***/ }),

/***/ "./resources/js/Pages/Home/CreateCompany.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Home/CreateCompany.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreateCompany_vue_vue_type_template_id_2ce40b7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateCompany.vue?vue&type=template&id=2ce40b7a& */ \"./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a&\");\n/* harmony import */ var _CreateCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateCompany.vue?vue&type=script&lang=js& */ \"./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _CreateCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _CreateCompany_vue_vue_type_template_id_2ce40b7a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _CreateCompany_vue_vue_type_template_id_2ce40b7a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/Pages/Home/CreateCompany.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvSG9tZS9DcmVhdGVDb21wYW55LnZ1ZT9jNDBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzNCO0FBQ0w7OztBQUc1RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL1BhZ2VzL0hvbWUvQ3JlYXRlQ29tcGFueS52dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NyZWF0ZUNvbXBhbnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZTQwYjdhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NyZWF0ZUNvbXBhbnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DcmVhdGVDb21wYW55LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3JlZ2lzLmZyZXlkL2h0ZG9jcy9ob21hcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyY2U0MGI3YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyY2U0MGI3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyY2U0MGI3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ3JlYXRlQ29tcGFueS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmNlNDBiN2EmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmNlNDBiN2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9QYWdlcy9Ib21lL0NyZWF0ZUNvbXBhbnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Pages/Home/CreateCompany.vue\n");

/***/ }),

/***/ "./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateCompany.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvSG9tZS9DcmVhdGVDb21wYW55LnZ1ZT83YTZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSx3Q0FBbU0sQ0FBZ0IseVBBQUcsRUFBQyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9QYWdlcy9Ib21lL0NyZWF0ZUNvbXBhbnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlQ29tcGFueS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlQ29tcGFueS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Pages/Home/CreateCompany.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCompany_vue_vue_type_template_id_2ce40b7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateCompany.vue?vue&type=template&id=2ce40b7a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCompany_vue_vue_type_template_id_2ce40b7a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateCompany_vue_vue_type_template_id_2ce40b7a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvSG9tZS9DcmVhdGVDb21wYW55LnZ1ZT9mMjM3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9QYWdlcy9Ib21lL0NyZWF0ZUNvbXBhbnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZTQwYjdhJi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DcmVhdGVDb21wYW55LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yY2U0MGI3YSZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Pages/Home/CreateCompany.vue?vue&type=template&id=2ce40b7a&\n");

/***/ })

}]);