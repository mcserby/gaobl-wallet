"use strict";
(self["webpackChunkgaobl_ui"] = self["webpackChunkgaobl_ui"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);



const routes = [
    {
        path: '',
        redirectTo: '/register',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_icon_mjs"), __webpack_require__.e("src_app_sites_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sites/login/login.module */ 2993)).then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_icon_mjs"), __webpack_require__.e("src_app_sites_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sites/register/register.module */ 2947)).then(m => m.RegisterModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sites_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sites/dashboard/dashboard.module */ 655)).then(m => m.DashboardModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class AppComponent {
    constructor() {
        this.title = 'gaobl-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpLoaderFactory": () => (/* binding */ httpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ 2251);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store-devtools */ 5960);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 8260);
/* harmony import */ var _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers/app.reducer */ 5305);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 466);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);


















function httpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forRoot(_store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_3__.reducers, {
                metaReducers: _store_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_3__.metaReducers,
                runtimeChecks: {}
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__.StoreDevtoolsModule.instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.EffectsModule.forRoot([]),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forRoot({
                defaultLanguage: 'en',
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
                    useFactory: httpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__.StoreDevtoolsModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.EffectsRootModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule] }); })();


/***/ }),

/***/ 9104:
/*!**********************************************!*\
  !*** ./src/app/store/actions/auth.action.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logoutType": () => (/* binding */ logoutType),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "logoutSuccessType": () => (/* binding */ logoutSuccessType),
/* harmony export */   "logoutSuccess": () => (/* binding */ logoutSuccess),
/* harmony export */   "loginType": () => (/* binding */ loginType),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "loginSuccessType": () => (/* binding */ loginSuccessType),
/* harmony export */   "loginSuccess": () => (/* binding */ loginSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9407);

const logoutType = '[AUTH] Logging out...';
const logout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(logoutType);
const logoutSuccessType = '[AUTH] Logout successfully!';
const logoutSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(logoutSuccessType);
const loginType = '[AUTH] Logging in...';
const login = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(loginType, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginSuccessType = '[AUTH] Login successfully!';
const loginSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(logoutSuccessType);


/***/ }),

/***/ 5305:
/*!***********************************************!*\
  !*** ./src/app/store/reducers/app.reducer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "debugReducer": () => (/* binding */ debugReducer),
/* harmony export */   "metaReducers": () => (/* binding */ metaReducers)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 8260);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducer */ 4433);


const reducers = {
    auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authReducer
};
// console.log all actions
function debugReducer(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
const metaReducersList = [];
if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
    metaReducersList.push(debugReducer);
}
const metaReducers = metaReducersList;


/***/ }),

/***/ 4433:
/*!************************************************!*\
  !*** ./src/app/store/reducers/auth.reducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authReducer": () => (/* binding */ authReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _state_auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/auth.state */ 9574);
/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth.action */ 9104);



const authReducerField = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_state_auth_state__WEBPACK_IMPORTED_MODULE_0__.initialAuthState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_action__WEBPACK_IMPORTED_MODULE_1__.login, (state, { payload }) => {
    return Object.assign(Object.assign({}, state), { privateKey: payload });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_actions_auth_action__WEBPACK_IMPORTED_MODULE_1__.logout, (state) => {
    return Object.assign(Object.assign({}, state), { privateKey: '' });
}));
function authReducer(state, action) {
    return authReducerField(state, action);
}


/***/ }),

/***/ 9574:
/*!*******************************************!*\
  !*** ./src/app/store/state/auth.state.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthStateName": () => (/* binding */ AuthStateName),
/* harmony export */   "initialAuthState": () => (/* binding */ initialAuthState)
/* harmony export */ });
const AuthStateName = 'auth';
const initialAuthState = {
    privateKey: ''
};


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map