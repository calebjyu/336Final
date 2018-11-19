(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _bartenders_page_bartenders_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bartenders-page/bartenders-page.component */ "./src/app/bartenders-page/bartenders-page.component.ts");
/* harmony import */ var _beers_page_beers_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beers-page/beers-page.component */ "./src/app/beers-page/beers-page.component.ts");
/* harmony import */ var _drinker_page_drinker_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drinker-page/drinker-page.component */ "./src/app/drinker-page/drinker-page.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _manf_page_manf_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manf-page/manf-page.component */ "./src/app/manf-page/manf-page.component.ts");
/* harmony import */ var _manf_details_manf_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manf-details/manf-details.component */ "./src/app/manf-details/manf-details.component.ts");
/* harmony import */ var _modify_page_modify_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modify-page/modify-page.component */ "./src/app/modify-page/modify-page.component.ts");
/* harmony import */ var _query_page_query_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./query-page/query-page.component */ "./src/app/query-page/query-page.component.ts");
/* harmony import */ var _bar_page_bar_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bar-page/bar-page.component */ "./src/app/bar-page/bar-page.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _bartender_details_bartender_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bartender-details/bartender-details.component */ "./src/app/bartender-details/bartender-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [{
        path: '',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    }, {
        path: 'static',
        pathMatch: 'full',
        redirectTo: ''
    }, {
        path: 'bars',
        pathMatch: 'full',
        component: _bar_page_bar_page_component__WEBPACK_IMPORTED_MODULE_12__["BarPageComponent"]
    }, {
        path: 'bars/:bar',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    }, {
        path: 'bartenders',
        pathMatch: 'full',
        component: _bartenders_page_bartenders_page_component__WEBPACK_IMPORTED_MODULE_4__["BartendersPageComponent"]
    }, {
        path: 'bartenders/:bartender',
        pathMatch: 'full',
        component: _bartender_details_bartender_details_component__WEBPACK_IMPORTED_MODULE_14__["BartenderDetailsComponent"]
    }, {
        path: 'beers',
        pathMatch: 'full',
        component: _beers_page_beers_page_component__WEBPACK_IMPORTED_MODULE_5__["BeersPageComponent"]
    }, {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_13__["BeerDetailsComponent"]
    }, {
        path: 'drinker',
        pathMatch: 'full',
        component: _drinker_page_drinker_page_component__WEBPACK_IMPORTED_MODULE_6__["DrinkerPageComponent"]
    }, {
        path: 'drinker/:drinker',
        pathMatch: 'full',
        component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_7__["DrinkerDetailsComponent"]
    }, {
        path: 'manf',
        pathMatch: 'full',
        component: _manf_page_manf_page_component__WEBPACK_IMPORTED_MODULE_8__["ManfPageComponent"]
    }, {
        path: 'manf/:manf',
        pathMatch: 'full',
        component: _manf_details_manf_details_component__WEBPACK_IMPORTED_MODULE_9__["ManfDetailsComponent"]
    }, {
        path: 'modify',
        pathMatch: 'full',
        component: _modify_page_modify_page_component__WEBPACK_IMPORTED_MODULE_10__["ModifyPageComponent"]
    }, {
        path: 'query',
        pathMatch: 'full',
        component: _query_page_query_page_component__WEBPACK_IMPORTED_MODULE_11__["QueryPageComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Transaction Bar Beer Drinker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/drinker\">Drinkers</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/bars\">Bars</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/beers\">Beers</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/bartenders\">Bartenders</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/manf\">Manufacturers</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\">Query</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/modify\">Modify</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TransactionBarBeerDrinkerUI';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _drinker_page_drinker_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drinker-page/drinker-page.component */ "./src/app/drinker-page/drinker-page.component.ts");
/* harmony import */ var _beers_page_beers_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./beers-page/beers-page.component */ "./src/app/beers-page/beers-page.component.ts");
/* harmony import */ var _bartenders_page_bartenders_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bartenders-page/bartenders-page.component */ "./src/app/bartenders-page/bartenders-page.component.ts");
/* harmony import */ var _manf_page_manf_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manf-page/manf-page.component */ "./src/app/manf-page/manf-page.component.ts");
/* harmony import */ var _query_page_query_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./query-page/query-page.component */ "./src/app/query-page/query-page.component.ts");
/* harmony import */ var _modify_page_modify_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modify-page/modify-page.component */ "./src/app/modify-page/modify-page.component.ts");
/* harmony import */ var _bar_page_bar_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bar-page/bar-page.component */ "./src/app/bar-page/bar-page.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _manf_details_manf_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./manf-details/manf-details.component */ "./src/app/manf-details/manf-details.component.ts");
/* harmony import */ var _bartender_details_bartender_details_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bartender-details/bartender-details.component */ "./src/app/bartender-details/bartender-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_12__["BarDetailsComponent"],
                _drinker_page_drinker_page_component__WEBPACK_IMPORTED_MODULE_13__["DrinkerPageComponent"],
                _beers_page_beers_page_component__WEBPACK_IMPORTED_MODULE_14__["BeersPageComponent"],
                _bartenders_page_bartenders_page_component__WEBPACK_IMPORTED_MODULE_15__["BartendersPageComponent"],
                _manf_page_manf_page_component__WEBPACK_IMPORTED_MODULE_16__["ManfPageComponent"],
                _query_page_query_page_component__WEBPACK_IMPORTED_MODULE_17__["QueryPageComponent"],
                _modify_page_modify_page_component__WEBPACK_IMPORTED_MODULE_18__["ModifyPageComponent"],
                _bar_page_bar_page_component__WEBPACK_IMPORTED_MODULE_19__["BarPageComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_20__["DrinkerDetailsComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_21__["BeerDetailsComponent"],
                _manf_details_manf_details_component__WEBPACK_IMPORTED_MODULE_22__["ManfDetailsComponent"],
                _bartender_details_bartender_details_component__WEBPACK_IMPORTED_MODULE_23__["BartenderDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutoCompleteModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">{{barName}}</h1>\n      <p class=\"bar-details\" *ngIf=\"barDetails\">\n        {{barDetails?.address}}<span *ngIf=\"barDetails.address && barDetails.city\">|</span>{{barDetails?.city}}\n        <br>\n        {{barDetails?.phone}}\n      </p>\n    </div>\n  </div>\n\n  <div class=\"container\">\n      <div class=\"dropdown\">\n          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Day\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" (click)=\"setDay('Monday')\">Monday</a>\n            <a class=\"dropdown-item\" (click)=\"setDay('Tuesday')\">Tuesday</a>\n            <a class=\"dropdown-item\" (click)=\"setDay('Wednesday')\">Wednesday</a>\n            <a class=\"dropdown-item\" (click)=\"setDay('Thursday')\">Thursday</a>\n            <a class=\"dropdown-item\" (click)=\"setDay('Friday')\">Friday</a>\n            <a class=\"dropdown-item\" (click)=\"setDay('Saturday')\">Saturday</a>\n            <a class=\"dropdown-item\" (click)=\"setDay('Sunday')\">Sunday</a>\n        </div>\n        {{day}}\n      </div>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Manufacturers\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton2\">\n          <a class=\"dropdown-item\" (click)=\"setManf('Blue Moon')\">Blue Moon</a>\n          <a class=\"dropdown-item\" (click)=\"setManf('Pabst')\">Pabst</a>\n          <a class=\"dropdown-item\" (click)=\"setManf('Anheuser-Bush')\">Anheuser-Bush</a>\n          <a class=\"dropdown-item\" (click)=\"setManf('Coors')\">Coors</a>\n          <a class=\"dropdown-item\" (click)=\"setManf('Grupo Modelo')\">Grupo Modelo</a>\n          <a class=\"dropdown-item\" (click)=\"setManf('Heineken')\">Heineken</a>\n          <a class=\"dropdown-item\" (click)=\"setManf('Diago')\">Diago</a>\n          <a class=\"dropdown-item\" (click)=\"setManf('Miller')\">Miller</a>\n          <a class=\"dropdown-item\" (click)=\"setManf('Steel Brewing')\">Steel Brewing</a>\n          <a class=\"dropdown-item\" (click)=\"setManf('Yuengling')\">Yuengling</a>\n        </div>\n        {{manf}}\n        <button pButton type=\"button\" label=\"Render\" (click)=\"render($event)\"></button>\n      </div>\n      <br>\n      <div id=\"bargraph2\"></div>\n      <br>\n      <div id=\"bargraph5\"></div>\n      <br>\n      <div id=\"bargraph\"></div>\n      <br>\n      <div id=\"bargraph3\"></div>\n      <br>\n      <div id=\"bargraph4\"></div>\n  </div>\n  <br><br>"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe((function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert("Bar not found");
                }
                else {
                    console.error(error.status + " - " + error.body);
                    alert("An error occurred on the server, please check the console.");
                }
            });
            /*barService.getMenu(this.barName).subscribe(
              data => {
                this.menu = data;
              }
            );*/
            barService.getLargestSpenders(_this.barName).subscribe(function (data) {
                var spent = [];
                var drinkers = [];
                data.forEach(function (spends) {
                    drinkers.push(spends.drinker);
                    spent.push(spends.total_spent);
                });
                _this.renderChart(drinkers, spent, 'Largest Spenders', 'Drinker', 'Amount', 'bargraph');
            });
            if (_this.day) {
                barService.getBeerRank(_this.barName, _this.day).subscribe(function (data) {
                    var brand = [];
                    var sales = [];
                    data.forEach(function (rank) {
                        brand.push(rank.attr);
                        sales.push(rank.tot_beers);
                    });
                    _this.renderChart(brand, sales, 'Most Popular Beer Brands per Bar', 'Brand', 'Number of Sales', 'bargraph2');
                });
            }
            barService.getBusiestTimes(_this.barName).subscribe(function (data) {
                var days = [];
                var sales = [];
                data.forEach(function (rank) {
                    sales.push(rank.count);
                    days.push(rank.day_of_week);
                });
                _this.renderChart(days, sales, 'Time Distribution of Sales', 'Day', 'Number of Sales', 'bargraph3');
            });
            barService.getBusiestTimeOfDay(_this.barName).subscribe(function (data) {
                var days = [];
                var sales = [];
                data.forEach(function (rank) {
                    sales.push(rank.count);
                    days.push(rank.day_of_week);
                });
                _this.renderChart(days, sales, 'Time Distribution of Sales', 'Hour', 'Number of Sales', 'bargraph4');
            });
        }));
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
    };
    BarDetailsComponent.prototype.setDay = function (day) {
        this.day = day;
    };
    BarDetailsComponent.prototype.render = function () {
        var _this = this;
        if (this.day) {
            this.barService.getBeerRank(this.barName, this.day).subscribe(function (data) {
                var brand = [];
                var sales = [];
                data.forEach(function (rank) {
                    brand.push(rank.attr);
                    sales.push(rank.tot_beers);
                });
                _this.renderChart(brand, sales, 'Most Popular Beer Brands per Bar', 'Brand', 'Number of Sales', 'bargraph2');
            });
        }
        if (this.manf && this.day) {
            this.barService.getBarAnalytics(this.manf, this.day).subscribe(function (data) {
                var brand = [];
                var sales = [];
                data.forEach(function (rank) {
                    brand.push(rank.attr);
                    sales.push(rank.tot_beers);
                });
                _this.renderChart(brand, sales, 'Bars Ranked by Manufacturer and Day', 'Bar', 'Number of Sales', 'bargraph5');
            });
        }
    };
    BarDetailsComponent.prototype.setManf = function (manf) {
        this.manf = manf;
    };
    BarDetailsComponent.prototype.renderChart = function (xData, yData, title, x, y, id) {
        Highcharts.chart(id, {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: {
                categories: xData,
                title: {
                    text: x
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: y
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: yData
                }]
        });
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bar-page/bar-page.component.css":
/*!*************************************************!*\
  !*** ./src/app/bar-page/bar-page.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1wYWdlL2Jhci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-page/bar-page.component.html":
/*!**************************************************!*\
  !*** ./src/app/bar-page/bar-page.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Bars</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n\n  <p-table [value]=\"bars\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>Name</th>\n            <th>License</th>\n            <th>State</th>\n            <th>City</th>\n            <th>Phone</th>\n            <th>Address</th>\n          </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n        <tr>\n            <td>\n              <a routerLink=\"/bars/{{bar.name}}\">              \n                {{bar.name}}\n              </a>\n            </td>\n            <td>{{bar.license}}</td>\n            <td>{{bar.state}}</td>\n            <td>{{bar.city}}</td>\n            <td>{{bar.phone}}</td>\n            <td>{{bar.address}}</td>\n          </tr>\n    </ng-template>\n  </p-table>\n  \n</div>\n<br><br>"

/***/ }),

/***/ "./src/app/bar-page/bar-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/bar-page/bar-page.component.ts ***!
  \************************************************/
/*! exports provided: BarPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarPageComponent", function() { return BarPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarPageComponent = /** @class */ (function () {
    function BarPageComponent(barService) {
        this.barService = barService;
        this.getBars();
    }
    BarPageComponent.prototype.ngOnInit = function () {
    };
    BarPageComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert("Could not retrieve a list of bars");
        });
    };
    BarPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-page',
            template: __webpack_require__(/*! ./bar-page.component.html */ "./src/app/bar-page/bar-page.component.html"),
            styles: [__webpack_require__(/*! ./bar-page.component.css */ "./src/app/bar-page/bar-page.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], BarPageComponent);
    return BarPageComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('/api/bar/' + bar);
    };
    BarsService.prototype.getMenu = function (bar) {
        return this.http.get('/api/menu/' + bar);
    };
    BarsService.prototype.getLargestSpenders = function (bar) {
        return this.http.get('/api/bar/spend/' + bar);
    };
    BarsService.prototype.getBeerRank = function (bar, day) {
        return this.http.get('/api/bar/' + bar + '/' + day);
    };
    BarsService.prototype.getBusiestTimes = function (bar) {
        return this.http.get('api/bar/busy/' + bar);
    };
    BarsService.prototype.getBusiestTimeOfDay = function (bar) {
        return this.http.get('api/bar/busyDay/' + bar);
    };
    BarsService.prototype.getBarAnalytics = function (manf, day) {
        return this.http.get('api/bar/anal/' + manf + '/' + day);
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/bartender-details/bartender-details.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/bartender-details/bartender-details.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci1kZXRhaWxzL2JhcnRlbmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bartender-details/bartender-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/bartender-details/bartender-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{bartenderName}}</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"dropdown\">\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        Bars\n      </button>\n      <div id=\"bar-dropdown\" class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      </div>\n    </div>\n</div>\n<div class=\"container\">\n    <br>\n    <div id=\"bargraph\"></div>\n</div>\n<div class=\"container\">\n  <p-table [value]=\"shifts\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>Shift</th>\n            <th>Brand</th>\n            <th>Amount Sold</th>\n          </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-shifts>\n        <tr>\n            <td>{{shifts.shift}}</td>\n            <td>{{shifts.attr}}</td>\n            <td>{{shifts.amount_of_beers}}</td>\n          </tr>\n    </ng-template>\n  </p-table>\n</div>\n<br><br>"

/***/ }),

/***/ "./src/app/bartender-details/bartender-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/bartender-details/bartender-details.component.ts ***!
  \******************************************************************/
/*! exports provided: BartenderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderDetailsComponent", function() { return BartenderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bartenders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bartenders.service */ "./src/app/bartenders.service.ts");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BartenderDetailsComponent = /** @class */ (function () {
    function BartenderDetailsComponent(bartenderService, barsService, route) {
        var _this = this;
        this.bartenderService = bartenderService;
        this.barsService = barsService;
        this.route = route;
        route.paramMap.subscribe((function (paramMap) {
            _this.bartenderName = paramMap.get('bartender');
            barsService.getBars().subscribe(function (data) {
                _this.bars = data;
                _this.bars.forEach(function (bar) {
                    var element = document.createElement('a');
                    element.className = "dropdown-item";
                    element.innerHTML = bar.name;
                    element.addEventListener("click", function (e) { return _this.setBar(bar.name); });
                    document.getElementById("bar-dropdown").append(element);
                });
            });
        }));
    }
    BartenderDetailsComponent.prototype.setBar = function (bar) {
        var _this = this;
        this.bar = bar;
        this.bartenderService.get_shifts(this.bartenderName, this.bar).subscribe(function (data) {
            var shiftss = [];
            var amounts = [];
            data.forEach(function (shift) {
                shift.shift = shift.start + '-' + shift.end;
                shiftss.push(shift.shift);
                amounts.push(shift.amount_of_beers);
            });
            _this.shifts = data;
            _this.renderChart(shiftss, amounts, 'Beers Sold Per Shift', 'Shift', 'Amount of Beer', 'bargraph');
        });
    };
    BartenderDetailsComponent.prototype.ngOnInit = function () {
    };
    BartenderDetailsComponent.prototype.get_shifts = function () {
        var _this = this;
        this.bar = document.getElementById("bar_name").value;
        if (this.bar != "") {
            this.bartenderService.get_shifts(this.bartenderName, this.bar).subscribe(function (data) {
                var shiftss = [];
                var amounts = [];
                data.forEach(function (shift) {
                    shiftss.push(shift.shift);
                    amounts.push(shift.amount_of_beers);
                });
                _this.renderChart(shiftss, amounts, 'Beers Sold Per Shift', 'Shift', 'Amount of Beer', 'bargraph');
            });
        }
    };
    BartenderDetailsComponent.prototype.renderChart = function (xData, yData, title, x, y, id) {
        Highcharts.chart(id, {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: {
                categories: xData,
                title: {
                    text: x
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: y
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: yData
                }]
        });
    };
    BartenderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bartender-details',
            template: __webpack_require__(/*! ./bartender-details.component.html */ "./src/app/bartender-details/bartender-details.component.html"),
            styles: [__webpack_require__(/*! ./bartender-details.component.css */ "./src/app/bartender-details/bartender-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bartenders_service__WEBPACK_IMPORTED_MODULE_1__["BartendersService"],
            _bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BartenderDetailsComponent);
    return BartenderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bartenders-page/bartenders-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/bartenders-page/bartenders-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlcnMtcGFnZS9iYXJ0ZW5kZXJzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bartenders-page/bartenders-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/bartenders-page/bartenders-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\">Bartenders</h1>\n    </div>\n  </div>\n  \n  <div class=\"container\">\n  \n    <p-table [value]=\"bartenders\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n              <th>Name</th>\n              <th>License</th>\n            </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-bartender>\n          <tr>\n              <td>\n                <a routerLink=\"/bartenders/{{bartender.name}}\">              \n                  {{bartender.name}}\n                </a>\n              </td>\n              <td>{{bartender.bartender_license}}</td>\n            </tr>\n      </ng-template>\n    </p-table>\n    \n  </div>\n  <br><br>"

/***/ }),

/***/ "./src/app/bartenders-page/bartenders-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/bartenders-page/bartenders-page.component.ts ***!
  \**************************************************************/
/*! exports provided: BartendersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartendersPageComponent", function() { return BartendersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bartenders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bartenders.service */ "./src/app/bartenders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BartendersPageComponent = /** @class */ (function () {
    function BartendersPageComponent(barService) {
        this.barService = barService;
        this.getBartenders();
    }
    BartendersPageComponent.prototype.ngOnInit = function () {
    };
    BartendersPageComponent.prototype.getBartenders = function () {
        var _this = this;
        this.barService.getBartenders().subscribe(function (data) {
            _this.bartenders = data;
        }, function (error) {
            alert("Could not retrieve a list of bartenders");
        });
    };
    BartendersPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bartenders-page',
            template: __webpack_require__(/*! ./bartenders-page.component.html */ "./src/app/bartenders-page/bartenders-page.component.html"),
            styles: [__webpack_require__(/*! ./bartenders-page.component.css */ "./src/app/bartenders-page/bartenders-page.component.css")]
        }),
        __metadata("design:paramtypes", [_bartenders_service__WEBPACK_IMPORTED_MODULE_1__["BartendersService"]])
    ], BartendersPageComponent);
    return BartendersPageComponent;
}());



/***/ }),

/***/ "./src/app/bartenders.service.ts":
/*!***************************************!*\
  !*** ./src/app/bartenders.service.ts ***!
  \***************************************/
/*! exports provided: BartendersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartendersService", function() { return BartendersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BartendersService = /** @class */ (function () {
    function BartendersService(http) {
        this.http = http;
    }
    BartendersService.prototype.getBartenders = function () {
        return this.http.get('/api/bartender');
    };
    BartendersService.prototype.getBartender = function (bartender) {
        return this.http.get('/api/bartender/' + bartender);
    };
    BartendersService.prototype.get_shifts = function (bartender, bar) {
        return this.http.get('/api/bartender/' + bartender + '/' + bar);
    };
    BartendersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BartendersService);
    return BartendersService;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItZGV0YWlscy9iZWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{beerName}}</h1>\n    <p class=\"beer-details\" * ngIf=\"manufacturer\">\n      Made by <i> {{manufacturer}}</i>\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <br>\n  <div>\n    <span class=\"font-weight-light\">\n      Sold at {{beerLocations?.length}} bars.\n    </span>\n    <p-dropdown class=\"float-right text-left\" *ngIf=\"filterOptions\" [options]=\"filterOptions\" (onChange)=\"sortBy($event.value)\">\n\n    </p-dropdown>\n  </div>\n  <br>\n  <p-table [value]=\"beerLocations\" sortMode=\"multiple\" sortField=\"price\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Bar</th>\n        <th>Price</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n      <tr>\n        <td><a routerLink=\"/bars/{{ bar.bar}}\">{{bar.bar}}</a></td>\n        <td>{{bar.price | currency }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>\n<br><br>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Bars that sell the most {{beerName}}</h2>\n  <br>\n  <p-table [value]=\"soldMost\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Bar</th>\n        <th>Amount of Beer</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-soldMost>\n        <tr>\n          <td>{{soldMost.bar}}</td>\n          <td>{{soldMost.count_of_beers}}</td>\n        </tr>\n      </ng-template>\n  </p-table>\n</div>\n<br><br>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Drinkers who drink the most {{beerName}}</h2>\n  <br>\n  <p-table [value]=\"drinkers\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Drinker</th>\n        <th>Amount of Beer</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-drinkers>\n        <tr>\n          <td>{{drinkers.drinker}}</td>\n          <td>{{drinkers.count_of_beers}}</td>\n        </tr>\n      </ng-template>\n  </p-table>\n</div>\n<br><br>\n\n<div class=\"container\">\n  <br>\n  <div id=\"bargraph\"></div>\n</div>\n<br><br>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _beer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beer.service */ "./src/app/beer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        route.paramMap.subscribe((function (paramMap) {
            _this.beerName = paramMap.get('beer');
            beerService.getBeer(_this.beerName).subscribe(function (data) {
                _this.beerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert("Beer not found");
                }
                else {
                    console.error(error.status + " - " + error.body);
                    alert("An error occurred on the server, please check the console.");
                }
            });
            beerService.getBarsSelling(_this.beerName).subscribe(function (data) {
                _this.beerLocations = data;
            });
            beerService.where_beer_is_sold_most(_this.beerName).subscribe(function (data) {
                _this.soldMost = data;
            });
            beerService.who_drinks_beer_most(_this.beerName).subscribe(function (data) {
                _this.drinkers = data;
            });
            beerService.get_when_is_beer_consumed_most(_this.beerName).subscribe(function (data) {
                var times = [];
                var amounts = [];
                data.forEach(function (time) {
                    times.push(time.hour);
                    amounts.push(time.amount);
                });
                _this.renderChart(times, amounts, 'Time Distribution of Beer Sold', 'Hours', 'Number of Beers', 'bargraph');
            });
            _this.filterOptions = [
                {
                    'label': 'Low price first',
                    'value': 'Low price'
                },
                {
                    'label': 'High price first',
                    'value': 'High price'
                }
            ];
        }));
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent.prototype.sortBy = function (selectedOption) {
        if (selectedOption === 'Low price') {
            this.beerLocations.sort(function (a, b) { return a.price - b.price; });
        }
        else if (selectedOption === 'High price') {
            this.beerLocations.sort(function (a, b) { return b.price - a.price; });
        }
    };
    BeerDetailsComponent.prototype.renderChart = function (xData, yData, title, x, y, id) {
        Highcharts.chart(id, {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: {
                categories: xData,
                title: {
                    text: x
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: y
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: yData
                }]
        });
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beer_service__WEBPACK_IMPORTED_MODULE_2__["BeerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beer.service.ts":
/*!*********************************!*\
  !*** ./src/app/beer.service.ts ***!
  \*********************************/
/*! exports provided: BeerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerService", function() { return BeerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerService = /** @class */ (function () {
    function BeerService(http) {
        this.http = http;
    }
    BeerService.prototype.getBarsSelling = function (beer) {
        return this.http.get('/api/bars-selling/' + beer);
    };
    BeerService.prototype.getBeers = function () {
        return this.http.get('/api/beer');
    };
    BeerService.prototype.getItems = function () {
        return this.http.get('/api/items');
    };
    BeerService.prototype.getBeer = function (beer) {
        return this.http.get('/api/beer/' + beer);
    };
    BeerService.prototype.where_beer_is_sold_most = function (beer) {
        return this.http.get("/api/beer/sold_most/" + beer);
    };
    BeerService.prototype.who_drinks_beer_most = function (beer) {
        return this.http.get('/api/beer/drinks_most/' + beer);
    };
    BeerService.prototype.get_when_is_beer_consumed_most = function (beer) {
        return this.http.get('/api/beer/time/' + beer);
    };
    BeerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeerService);
    return BeerService;
}());



/***/ }),

/***/ "./src/app/beers-page/beers-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/beers-page/beers-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJzLXBhZ2UvYmVlcnMtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/beers-page/beers-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/beers-page/beers-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Beers</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n\n  <p-table [value]=\"beer\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>Name</th>\n            <th>Manufacturer</th>\n          </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n        <tr>\n            <td>\n              <a routerLink=\"/beers/{{beer.name}}\">              \n                {{beer.name}}\n              </a>\n            </td>\n            <td><a routerLink=\"/manf/{{beer.attr}}\">\n              {{beer.attr}}\n            </a></td>\n          </tr>\n    </ng-template>\n  </p-table>\n  \n</div>\n<br><br>"

/***/ }),

/***/ "./src/app/beers-page/beers-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/beers-page/beers-page.component.ts ***!
  \****************************************************/
/*! exports provided: BeersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersPageComponent", function() { return BeersPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beer.service */ "./src/app/beer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersPageComponent = /** @class */ (function () {
    function BeersPageComponent(beerService) {
        this.beerService = beerService;
        this.getBeers();
    }
    BeersPageComponent.prototype.ngOnInit = function () {
    };
    BeersPageComponent.prototype.getBeers = function () {
        var _this = this;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beer = data;
        }, function (error) {
            alert("Could not retrieve a list of beers");
        });
    };
    BeersPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beers-page',
            template: __webpack_require__(/*! ./beers-page.component.html */ "./src/app/beers-page/beers-page.component.html"),
            styles: [__webpack_require__(/*! ./beers-page.component.css */ "./src/app/beers-page/beers-page.component.css")]
        }),
        __metadata("design:paramtypes", [_beer_service__WEBPACK_IMPORTED_MODULE_1__["BeerService"]])
    ], BeersPageComponent);
    return BeersPageComponent;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItZGV0YWlscy9kcmlua2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{drinkerName}}</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Transactions</h2>\n  <br>\n  <p-table [value]=\"transaction\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Bill</th>\n        <th>Bar</th>\n        <th>Time</th>\n        <th>Date</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-transaction>\n        <tr>\n          <td>{{transaction.transaction_id}}</td>\n          <td><a routerLink=\"/bars/{{transaction.bar}}\">{{transaction.bar}}</a></td>\n          <td>{{transaction.time}}</td>\n          <td>{{transaction.date}}</td>\n        </tr>\n      </ng-template>\n  </p-table>\n</div>\n\n<div class=\"container\">\n  <br>\n  <div id=\"bargraph\"></div>\n</div>\n<div class=\"container\">\n  <br>\n  <div id=\"bargraph2\"></div>\n</div>\n\n<br><br>"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        route.paramMap.subscribe((function (paramMap) {
            _this.drinkerName = paramMap.get('drinker');
            drinkerService.getDrinker(_this.drinkerName).subscribe(function (data) {
                _this.drinkerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert("Drinker not found");
                }
                else {
                    console.error(error.status + " - " + error.body);
                    alert("An error occurred on the server, please check the console.");
                }
            });
            drinkerService.getTransactions(_this.drinkerName).subscribe(function (data) {
                _this.transaction = data;
            });
            drinkerService.getFavoriteBeers(_this.drinkerName).subscribe(function (data) {
                var beers = [];
                var amounts = [];
                data.forEach(function (favBeer) {
                    beers.push(favBeer.item);
                    amounts.push(favBeer.count);
                });
                _this.renderChart(beers, amounts, 'Favorite Beers', 'Beers', 'Number of Beers', 'bargraph');
            });
            drinkerService.getDrinkerSpend(_this.drinkerName).subscribe(function (data) {
                var spent = [];
                var bars = [];
                data.forEach(function (spends) {
                    spent.push(spends.total);
                    bars.push(spends.bar);
                });
                _this.renderChart(bars, spent, 'Amount spent at Bars', 'Bars', 'Amount', 'bargraph2');
            });
        }));
    }
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
    };
    DrinkerDetailsComponent.prototype.renderChart = function (xData, yData, title, x, y, id) {
        Highcharts.chart(id, {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: {
                categories: xData,
                title: {
                    text: x
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: y
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: yData
                }]
        });
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_2__["DrinkersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinker-page/drinker-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/drinker-page/drinker-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItcGFnZS9kcmlua2VyLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-page/drinker-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/drinker-page/drinker-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Drinkers</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n\n  <p-table [value]=\"drinkers\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>Name</th>\n            <th>State</th>\n            <th>City</th>\n            <th>Phone</th>\n            <th>Address</th>\n          </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-drinker>\n        <tr>\n            <td>\n              <a routerLink=\"/drinker/{{drinker.name}}\">              \n                {{drinker.name}}\n              </a>\n            </td>\n            <td>{{drinker.state}}</td>\n            <td>{{drinker.city}}</td>\n            <td>{{drinker.phone}}</td>\n            <td>{{drinker.address}}</td>\n          </tr>\n    </ng-template>\n  </p-table>\n  \n</div>\n<br><br>"

/***/ }),

/***/ "./src/app/drinker-page/drinker-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/drinker-page/drinker-page.component.ts ***!
  \********************************************************/
/*! exports provided: DrinkerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerPageComponent", function() { return DrinkerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkerPageComponent = /** @class */ (function () {
    function DrinkerPageComponent(drinkersService) {
        this.drinkersService = drinkersService;
        this, this.getDrinkers();
    }
    DrinkerPageComponent.prototype.ngOnInit = function () {
    };
    DrinkerPageComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.drinkersService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        }, function (error) {
            alert("Could not retrieve a list of drinkers");
        });
    };
    DrinkerPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-page',
            template: __webpack_require__(/*! ./drinker-page.component.html */ "./src/app/drinker-page/drinker-page.component.html"),
            styles: [__webpack_require__(/*! ./drinker-page.component.css */ "./src/app/drinker-page/drinker-page.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"]])
    ], DrinkerPageComponent);
    return DrinkerPageComponent;
}());



/***/ }),

/***/ "./src/app/drinkers.service.ts":
/*!*************************************!*\
  !*** ./src/app/drinkers.service.ts ***!
  \*************************************/
/*! exports provided: DrinkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersService", function() { return DrinkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersService = /** @class */ (function () {
    function DrinkersService(http) {
        this.http = http;
    }
    DrinkersService.prototype.getDrinkers = function () {
        return this.http.get('/api/drinker');
    };
    DrinkersService.prototype.getDrinker = function (drinker) {
        return this.http.get('/api/drinker/' + drinker);
    };
    DrinkersService.prototype.getTransactions = function (drinker) {
        return this.http.get('/api/transactions/' + drinker);
    };
    DrinkersService.prototype.getFavoriteBeers = function (drinker) {
        return this.http.get('api/drinker/drinker/' + drinker);
    };
    DrinkersService.prototype.getDrinkerSpend = function (drinker) {
        return this.http.get('api/drinker/spends/' + drinker);
    };
    DrinkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkersService);
    return DrinkersService;
}());



/***/ }),

/***/ "./src/app/manf-details/manf-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/manf-details/manf-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmYtZGV0YWlscy9tYW5mLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/manf-details/manf-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/manf-details/manf-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{manf}}</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Popular Cities(in the last week)</h2>\n  <br>\n  <p-table [value]=\"cities\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>City</th>\n        <th>Amount of Beer</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-cities>\n        <tr>\n          <td>{{cities.city}}</td>\n          <td>{{cities.count_of_beers}}</td>\n        </tr>\n      </ng-template>\n  </p-table>\n</div>\n<br><br>\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Drinkers Who Like {{manf}}</h2>\n  <br>\n  <p-table [value]=\"drinkers\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Drinker</th>\n        <th>Address</th>\n        <th>City</th>\n        <th>State</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-drinkers>\n        <tr>\n          <td>{{drinkers.name}}</td>\n          <td>{{drinkers.address}}</td>\n          <td>{{drinkers.city}}</td>\n          <td>{{drinkers.state}}</td>\n        </tr>\n      </ng-template>\n  </p-table>\n</div>\n<br><br>"

/***/ }),

/***/ "./src/app/manf-details/manf-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manf-details/manf-details.component.ts ***!
  \********************************************************/
/*! exports provided: ManfDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManfDetailsComponent", function() { return ManfDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manf.service */ "./src/app/manf.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManfDetailsComponent = /** @class */ (function () {
    function ManfDetailsComponent(manfService, route) {
        var _this = this;
        this.manfService = manfService;
        this.route = route;
        route.paramMap.subscribe((function (paramMap) {
            _this.manf = paramMap.get('manf');
            manfService.get_cities_sales(_this.manf).subscribe(function (data) {
                _this.cities = data;
            });
            manfService.where_top_drinkers_of_manf_live(_this.manf).subscribe(function (data) {
                _this.drinkers = data;
            });
        }));
    }
    ManfDetailsComponent.prototype.ngOnInit = function () {
    };
    ManfDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manf-details',
            template: __webpack_require__(/*! ./manf-details.component.html */ "./src/app/manf-details/manf-details.component.html"),
            styles: [__webpack_require__(/*! ./manf-details.component.css */ "./src/app/manf-details/manf-details.component.css")]
        }),
        __metadata("design:paramtypes", [_manf_service__WEBPACK_IMPORTED_MODULE_1__["ManfService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ManfDetailsComponent);
    return ManfDetailsComponent;
}());



/***/ }),

/***/ "./src/app/manf-page/manf-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/manf-page/manf-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmYtcGFnZS9tYW5mLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/manf-page/manf-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/manf-page/manf-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Manufacturers</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n\n  <p-table [value]=\"manf\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>Manufacturer</th>\n          </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-manf>\n        <tr>\n            <td>\n              <a routerLink=\"/manf/{{manf.attr}}\">{{manf.attr}}</a>\n            </td>\n          </tr>\n    </ng-template>\n  </p-table>\n  \n</div>\n<br><br>"

/***/ }),

/***/ "./src/app/manf-page/manf-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/manf-page/manf-page.component.ts ***!
  \**************************************************/
/*! exports provided: ManfPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManfPageComponent", function() { return ManfPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manf.service */ "./src/app/manf.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManfPageComponent = /** @class */ (function () {
    function ManfPageComponent(beerService) {
        this.beerService = beerService;
        this.getManfs();
    }
    ManfPageComponent.prototype.ngOnInit = function () {
    };
    ManfPageComponent.prototype.getManfs = function () {
        var _this = this;
        this.beerService.getManfs().subscribe(function (data) {
            _this.manf = data;
        }, function (error) {
            alert("Could not retrieve a list of manufacturers");
        });
    };
    ManfPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manf-page',
            template: __webpack_require__(/*! ./manf-page.component.html */ "./src/app/manf-page/manf-page.component.html"),
            styles: [__webpack_require__(/*! ./manf-page.component.css */ "./src/app/manf-page/manf-page.component.css")]
        }),
        __metadata("design:paramtypes", [_manf_service__WEBPACK_IMPORTED_MODULE_1__["ManfService"]])
    ], ManfPageComponent);
    return ManfPageComponent;
}());



/***/ }),

/***/ "./src/app/manf.service.ts":
/*!*********************************!*\
  !*** ./src/app/manf.service.ts ***!
  \*********************************/
/*! exports provided: ManfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManfService", function() { return ManfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManfService = /** @class */ (function () {
    function ManfService(http) {
        this.http = http;
    }
    ManfService.prototype.getManfs = function () {
        return this.http.get('/api/manf');
    };
    ManfService.prototype.getManf = function (manf) {
        return this.http.get('/api/manf/' + manf);
    };
    ManfService.prototype.get_cities_sales = function (manf) {
        return this.http.get('/api/manf/cities/' + manf);
    };
    ManfService.prototype.where_top_drinkers_of_manf_live = function (manf) {
        return this.http.get('/api/manf/live/' + manf);
    };
    ManfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ManfService);
    return ManfService;
}());



/***/ }),

/***/ "./src/app/modify-page/modify-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modify-page/modify-page.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmeS1wYWdlL21vZGlmeS1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modify-page/modify-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/modify-page/modify-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Modify</h1>\n    <button class=\"font-weight-light\" (click)=\"displayDrinkers()\">Drinkers</button>\n    <button class=\"font-weight-light\" (click)=\"displayBars()\">Bars</button>\n    <button class=\"font-weight-light\" (click)=\"displayItems()\">Items</button>\n    <button class=\"font-weight-light\" (click)=\"displayBartenders()\">Bartenders</button>\n    <button class=\"font-weight-light\" (click)=\"displayBills()\">Bills</button>\n    <button class=\"font-weight-light\" (click)=\"displayFrequents()\">Frequents</button>\n    <button class=\"font-weight-light\" (click)=\"displayHours()\">Hours</button>\n    <button class=\"font-weight-light\" (click)=\"displayInventory()\">Inventory</button>\n    <button class=\"font-weight-light\" (click)=\"displayLikes()\">Likes</button>\n    <button class=\"font-weight-light\" (click)=\"displayOperates()\">Operates</button>\n    <button class=\"font-weight-light\" (click)=\"displayPrintedOn()\">Printed On</button>\n    <button class=\"font-weight-light\" (click)=\"displaySells()\">Sells</button>\n    <button class=\"font-weight-light\" (click)=\"displayTransacts()\">Transacts</button>\n    <button class=\"font-weight-light\" (click)=\"displayWorks()\">Works</button>\n  </div>\n</div>\n\n<div id=\"drinkers\" class=\"container\">\n  <input id=\"drinker_name\" type=\"text\" pInputText />\n  <input id=\"drinker_state\" type=\"text\" pInputText />\n  <input id=\"drinker_city\" type=\"text\" pInputText />\n  <input id=\"drinker_phone\" type=\"text\" pInputText />\n  <input id=\"drinker_address\" type=\"text\" pInputText />\n  <button pButton type=\"button\" label=\"Update\" (click)=\"update_drinker($event)\"></button>\n  <br><br>\n  <div id=\"delete_drinker_div\" hidden=\"true\">\n      <input id=\"delete_drinker\" type=\"text\" pInputText />\n      <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_drinker($event)\"></button>\n  </div>\n  <br>\n  <p-table [value]=\"drinkers\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>Name</th>\n            <th>State</th>\n            <th>City</th>\n            <th>Phone</th>\n            <th>Address</th>\n            <th>Delete?</th>\n          </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-drinker>\n        <tr>\n            <td>\n              <a routerLink=\"/drinker/{{drinker.name}}\">              \n                {{drinker.name}}\n              </a>\n            </td>\n            <td>{{drinker.state}}</td>\n            <td>{{drinker.city}}</td>\n            <td>{{drinker.phone}}</td>\n            <td>{{drinker.address}}</td>\n            <td>\n              <button pButton type=\"button\" label=\"X\" (click)=\"confirm_drinker_delete()\"></button>\n            </td>\n          </tr>\n    </ng-template>\n  </p-table>\n  \n</div>\n<div id=\"bars\" hidden=\"true\" class=\"container\">\n    <input id=\"bar_name\" type=\"text\" pInputText />\n    <input id=\"bar_license\" type=\"text\" pInputText />\n    <input id=\"bar_state\" type=\"text\" pInputText />\n    <input id=\"bar_city\" type=\"text\" pInputText />\n    <input id=\"bar_phone\" type=\"text\" pInputText />\n    <input id=\"bar_address\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_bar($event)\"></button>\n    <br><br>\n    <div id=\"delete_bar_div\" hidden=\"true\">\n        <input id=\"delete_bar\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_bar($event)\"></button>\n    </div>\n    <br>\n    <p-table [value]=\"bars\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Name</th>\n                <th>License</th>\n                <th>State</th>\n                <th>City</th>\n                <th>Phone</th>\n                <th>Address</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-bar>\n            <tr>\n                <td>\n                  <a routerLink=\"/bars/{{bar.name}}\">              \n                    {{bar.name}}\n                  </a>\n                </td>\n                <td>{{bar.license}}</td>\n                <td>{{bar.state}}</td>\n                <td>{{bar.city}}</td>\n                <td>{{bar.phone}}</td>\n                <td>{{bar.address}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_bar_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<div id=\"items\" hidden=\"true\" class=\"container\">\n    <input id=\"item_name\" type=\"text\" pInputText />\n    <input id=\"item_type\" type=\"text\" pInputText />\n    <input id=\"item_attr\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_item($event)\"></button>\n    <br>\n    <div id=\"delete_item_div\" hidden=\"true\">\n        <input id=\"delete_item\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_item($event)\"></button>\n    </div>\n    <br><br>\n    <p-table [value]=\"item\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Name</th>\n                <th>Type</th>\n                <th>Attribute</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-item>\n            <tr>\n                <td>{{item.name}}</td>\n                <td>{{item.type}}</td>\n                <td>{{item.attr}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_item_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<div id=\"bartenders\" hidden=\"true\" class=\"container\">\n    <input id=\"bartender_name\" type=\"text\" pInputText />\n    <input id=\"bartender_license\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_bartender($event)\"></button>\n    <br><br>\n    <div id=\"delete_bartender_div\" hidden=\"true\">\n        <input id=\"delete_bartender\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_bartender($event)\"></button>\n    </div>\n    <br>\n    <p-table [value]=\"bartenders\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Name</th>\n                <th>License</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-bartender>\n            <tr>\n                <td>\n                  {{bartender.name}}\n                </td>\n                <td>{{bartender.bartender_license}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_bartender_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<div id=\"bills\" hidden=\"true\" class=\"container\">\n    <input id=\"bill_id\" type=\"text\" pInputText />\n    <input id=\"bill_time\" type=\"text\" pInputText />\n    <input id=\"bill_date\" type=\"text\" pInputText />\n    <input id=\"bill_subtotal\" type=\"text\" pInputText />\n    <input id=\"bill_tip\" type=\"text\" pInputText />\n    <input id=\"bill_total\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_bill($event)\"></button>\n    <br><br>\n    <div id=\"delete_bill_div\" hidden=\"true\">\n        <input id=\"delete_bill\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_bill($event)\"></button>\n    </div>\n    <br>\n    <p-table [value]=\"bills\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>ID</th>\n                <th>Time</th>\n                <th>Date</th>\n                <th>Subtotal</th>\n                <th>Tip</th>\n                <th>Total</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-bill>\n            <tr>\n                <td>{{bill.transaction_id}}</td>\n                <td>{{bill.time}}</td>\n                <td>{{bill.date}}</td>\n                <td>{{bill.subtotal}}</td>\n                <td>{{bill.tip}}</td>\n                <td>{{bill.total}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_bill_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<div id=\"frequents\" hidden=\"true\" class=\"container\">\n    <input id=\"frequents_attr1\" type=\"text\" pInputText />\n    <input id=\"frequents_attr2\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_frequents($event)\"></button>\n    <br><br>\n    <div id=\"delete_frequents_div\" hidden=\"true\">\n        <input id=\"delete_frequents\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_frequents($event)\"></button>\n    </div>\n    <br>\n    <p-table [value]=\"frequents\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Drinker</th>\n                <th>Bar</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-frequents>\n            <tr>\n                <td>{{frequents.attr1}}</td>\n                <td>{{frequents.attr2}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_frequents_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<div id=\"hours\" hidden=\"true\" class=\"container\">\n    <input id=\"hours_attr1\" type=\"text\" pInputText />\n    <input id=\"hours_attr2\" type=\"text\" pInputText />\n    <input id=\"hours_attr3\" type=\"text\" pInputText />\n    <input id=\"hours_attr4\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_hours($event)\"></button>\n    <br><br>\n    <div id=\"delete_hours_div\" hidden=\"true\">\n        <input id=\"delete_hours\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_hours($event)\"></button>\n    </div>\n    <br>\n    <p-table [value]=\"hours\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Day</th>\n                <th>Bar</th>\n                <th>Open</th>\n                <th>Close</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-hours>\n            <tr>\n                <td>{{hours.attr1}}</td>\n                <td>{{hours.attr2}}</td>\n                <td>{{hours.attr3}}</td>\n                <td>{{hours.attr4}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_hours_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<div id=\"inventory\" hidden=\"true\" class=\"container\">\n    <input id=\"inventory_attr1\" type=\"text\" pInputText />\n    <input id=\"inventory_attr2\" type=\"text\" pInputText />\n    <input id=\"inventory_attr3\" type=\"text\" pInputText />\n    <input id=\"inventory_attr4\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_inventory($event)\"></button>\n    <br><br>\n    <div id=\"delete_inventory_div\" hidden=\"true\">\n        <input id=\"delete_inventory\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_inventory($event)\"></button>\n    </div>\n    <br>\n    <p-table [value]=\"inventory\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Bar</th>\n                <th>Item</th>\n                <th>Amount</th>\n                <th>Date</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-inventory>\n            <tr>\n                <td>{{inventory.attr1}}</td>\n                <td>{{inventory.attr2}}</td>\n                <td>{{inventory.attr3}}</td>\n                <td>{{inventory.attr4}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_inventory_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<div id=\"likes\" hidden=\"true\" class=\"container\">\n    <input id=\"likes_attr1\" type=\"text\" pInputText />\n    <input id=\"likes_attr2\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_likes($event)\"></button>\n    <br><br>\n    <div id=\"delete_likes_div\" hidden=\"true\">\n        <input id=\"delete_likes\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_likes($event)\"></button>\n    </div>\n    <br>\n    <p-table [value]=\"likes\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Drinker</th>\n                <th>Item</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-likes>\n            <tr>\n                <td>{{likes.attr1}}</td>\n                <td>{{likes.attr2}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_likes_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<div id=\"operates\" hidden=\"true\" class=\"container\">\n    <input id=\"operates_attr1\" type=\"text\" pInputText />\n    <input id=\"operates_attr2\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_operates($event)\"></button>\n    <br><br>\n    <div id=\"delete_operates_div\" hidden=\"true\">\n        <input id=\"delete_operates\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_operates($event)\"></button>\n    </div>\n    <br>\n    <p-table [value]=\"operates\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Bar</th>\n                <th>Hour</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-operates>\n            <tr>\n                <td>{{operates.attr1}}</td>\n                <td>{{operates.attr2}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_operates_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<div id=\"printed_on\" hidden=\"true\" class=\"container\">\n    <input id=\"printed_on_attr1\" type=\"text\" pInputText />\n    <input id=\"printed_on_attr2\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_printed_on($event)\"></button>\n    <br><br>\n    <div id=\"delete_printed_on_div\" hidden=\"true\">\n        <input id=\"delete_printed_on\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_printed_on($event)\"></button>\n    </div>\n    <br>\n    <p-table [value]=\"printed_on\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Item</th>\n                <th>Bill</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-printed_on>\n            <tr>\n                <td>{{printed_on.attr1}}</td>\n                <td>{{printed_on.attr2}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_printed_on_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<div id=\"transacts\" hidden=\"true\" class=\"container\">\n    <input id=\"transacts_attr1\" type=\"text\" pInputText />\n    <input id=\"transacts_attr2\" type=\"text\" pInputText />\n    <input id=\"transacts_attr3\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_transacts($event)\"></button>\n    <br><br>\n    <div id=\"delete_transacts_div\" hidden=\"true\">\n        <input id=\"delete_transacts\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_transacts($event)\"></button>\n    </div>\n    <br>\n    <p-table [value]=\"transacts\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Drinker</th>\n                <th>Bill</th>\n                <th>Bar</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-transacts>\n            <tr>\n                <td>{{transacts.attr1}}</td>\n                <td>{{transacts.attr2}}</td>\n                <td>{{transacts.attr3}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_transacts_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<div id=\"works\" hidden=\"true\" class=\"container\">\n    <input id=\"works_attr1\" type=\"text\" pInputText />\n    <input id=\"works_attr2\" type=\"text\" pInputText />\n    <input id=\"works_attr3\" type=\"text\" pInputText />\n    <input id=\"works_attr4\" type=\"text\" pInputText />\n    <input id=\"works_attr5\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_works($event)\"></button>\n    <br><br>\n    <div id=\"delete_works_div\" hidden=\"true\">\n        <input id=\"delete_works\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_works($event)\"></button>\n    </div>\n    <br>\n    <p-table [value]=\"works\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Bar</th>\n                <th>Bartender</th>\n                <th>Date</th>\n                <th>Start</th>\n                <th>End</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-works>\n            <tr>\n                <td>{{works.attr1}}</td>\n                <td>{{works.attr2}}</td>\n                <td>{{works.attr3}}</td>\n                <td>{{works.attr4}}</td>\n                <td>{{works.attr5}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_works_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<div id=\"sells\" hidden=\"true\" class=\"container\">\n    <input id=\"sells_attr1\" type=\"text\" pInputText />\n    <input id=\"sells_attr2\" type=\"text\" pInputText />\n    <input id=\"sells_attr3\" type=\"text\" pInputText />\n    <button pButton type=\"button\" label=\"Update\" (click)=\"update_sells($event)\"></button>\n    <br><br>\n    <div id=\"delete_sells_div\" hidden=\"true\">\n        <input id=\"delete_sells\" type=\"text\" pInputText />\n        <button pButton type=\"button\" label=\"Submit\" (click)=\"delete_sells($event)\"></button>\n    </div>\n    <br>\n    <p-table [value]=\"sells\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Bar</th>\n                <th>Item</th>\n                <th>Price</th>\n                <th>Delete?</th>\n              </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-sells>\n            <tr>\n                <td>{{sells.attr1}}</td>\n                <td>{{sells.attr2}}</td>\n                <td>{{sells.attr3}}</td>\n                <td>\n                    <button pButton type=\"button\" label=\"X\" (click)=\"confirm_sells_delete()\"></button>\n                </td>\n              </tr>\n        </ng-template>\n      </p-table>\n</div>\n<br><br>"

/***/ }),

/***/ "./src/app/modify-page/modify-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modify-page/modify-page.component.ts ***!
  \******************************************************/
/*! exports provided: ModifyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyPageComponent", function() { return ModifyPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modify.service */ "./src/app/modify.service.ts");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _bartenders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bartenders.service */ "./src/app/bartenders.service.ts");
/* harmony import */ var _beer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../beer.service */ "./src/app/beer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModifyPageComponent = /** @class */ (function () {
    function ModifyPageComponent(modifyService, drinkersService, barService, beerService, bartenderService) {
        this.modifyService = modifyService;
        this.drinkersService = drinkersService;
        this.barService = barService;
        this.beerService = beerService;
        this.bartenderService = bartenderService;
        this;
        this.getDrinkers();
        this.getItems();
        this.getBars();
        this.getBills();
        this.getBartenders();
        this.getWorks();
        this.getFrequents();
        this.getHours();
        this.getInventory();
        this.getLikes();
        this.getOperates();
        this.getPrintedOn();
        this.getSells();
        this.getTransacts();
    }
    ModifyPageComponent.prototype.ngOnInit = function () {
    };
    ModifyPageComponent.prototype.confirm_drinker_delete = function () {
        var element = document.getElementById("delete_drinker_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_drinker = function () {
        var name = document.getElementById("drinker_name").value;
        var state = document.getElementById("drinker_state").value;
        var city = document.getElementById("drinker_city").value;
        var phone = document.getElementById("drinker_phone").value;
        var address = document.getElementById("drinker_address").value;
        if (this.modifyService.exists(name, '/api/drinker/')) {
            this.modifyService.delete_drinker(name).subscribe();
            this.modifyService.insert_drinker(name, state, city, phone, address).subscribe();
        }
        else {
            this.modifyService.insert_drinker(name, state, city, phone, address).subscribe();
        }
        window.location.reload();
    };
    ModifyPageComponent.prototype.delete_drinker = function () {
        var element = document.getElementById("delete_drinker_div");
        var name = document.getElementById("delete_drinker").value;
        this.modifyService.delete_drinker(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_bar_delete = function () {
        var element = document.getElementById("delete_bar_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_bar = function () {
        var name = document.getElementById("bar_name").value;
        var license = document.getElementById("bar_license").value;
        var state = document.getElementById("bar_state").value;
        var city = document.getElementById("bar_city").value;
        var phone = document.getElementById("bar_phone").value;
        var address = document.getElementById("bar_address").value;
        if (this.modifyService.exists(name, '/api/bar/')) {
            this.modifyService.delete_bar(name).subscribe();
            this.modifyService.insert_bar(name, license, state, city, phone, address).subscribe();
        }
        else {
            this.modifyService.insert_bar(name, license, state, city, phone, address).subscribe();
        }
        window.location.reload();
    };
    ModifyPageComponent.prototype.delete_bar = function () {
        var element = document.getElementById("delete_bar_div");
        var name = document.getElementById("delete_bar").value;
        this.modifyService.delete_bar(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_item_delete = function () {
        var element = document.getElementById("delete_item_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_item = function () {
        var name = document.getElementById("item_name").value;
        var type = document.getElementById("item_type").value;
        var attr = document.getElementById("item_attr").value;
        if (this.modifyService.exists(name, '/api/items/')) {
            this.modifyService.delete_item(name).subscribe();
            this.modifyService.insert_item(name, type, attr).subscribe();
        }
        else {
            this.modifyService.insert_item(name, type, attr).subscribe();
        }
        window.location.reload();
    };
    ModifyPageComponent.prototype.delete_item = function () {
        var element = document.getElementById("delete_item_div");
        var name = document.getElementById("delete_item").value;
        this.modifyService.delete_item(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_bartender_delete = function () {
        var element = document.getElementById("delete_bartender_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_bartender = function () {
        var name = document.getElementById("bartender_name").value;
        var license = document.getElementById("bartender_license").value;
        if (this.modifyService.exists(name, '/api/bartender/')) {
            this.modifyService.delete_bartender(name).subscribe();
            this.modifyService.insert_bartender(name, license).subscribe();
        }
        else {
            this.modifyService.insert_bartender(name, license).subscribe();
        }
        window.location.reload();
    };
    ModifyPageComponent.prototype.delete_bartender = function () {
        var element = document.getElementById("delete_bartender_div");
        var name = document.getElementById("delete_bartender").value;
        this.modifyService.delete_bartender(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_bill_delete = function () {
        var element = document.getElementById("delete_bill_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_bill = function () {
        var name = document.getElementById("bill_id").value;
        var time = document.getElementById("bill_time").value;
        var date = document.getElementById("bill_date").value;
        var subtotal = Number(document.getElementById("bill_subtotal").value);
        var tip = Number(document.getElementById("bill_tip").value);
        var total = Number(document.getElementById("bill_total").value);
        if (this.modifyService.exists(name, '/api/bills/')) {
            this.modifyService.delete_bill(name).subscribe();
            this.modifyService.insert_bill(name, time, date, subtotal, tip, total).subscribe();
        }
        else {
            this.modifyService.insert_bill(name, time, date, subtotal, tip, total).subscribe();
        }
        window.location.reload();
    };
    ModifyPageComponent.prototype.delete_bill = function () {
        var element = document.getElementById("delete_bill_div");
        var name = document.getElementById("delete_bill").value;
        this.modifyService.delete_bill(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_frequents_delete = function () {
        var element = document.getElementById("delete_frequents_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_frequents = function () {
        var attr1 = document.getElementById("frequents_attr1").value;
        var attr2 = document.getElementById("frequents_attr2").value;
        if (this.modifyService.exists(name, '/api/frequents/')) {
            this.modifyService.delete_frequents(name).subscribe();
            this.modifyService.insert_frequents(attr1, attr2).subscribe();
        }
        else {
            this.modifyService.insert_frequents(attr1, attr2).subscribe();
        }
        window.location.reload();
    };
    ModifyPageComponent.prototype.delete_frequents = function () {
        var element = document.getElementById("delete_frequents_div");
        var name = document.getElementById("delete_frequents").value;
        this.modifyService.delete_frequents(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_hours_delete = function () {
        var element = document.getElementById("delete_hours_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_hours = function () {
        var attr1 = document.getElementById("hours_attr1").value;
        var attr2 = document.getElementById("hours_attr2").value;
        var attr3 = document.getElementById("hours_attr3").value;
        var attr4 = document.getElementById("hours_attr4").value;
        if (this.modifyService.exists(name, '/api/hours/')) {
            this.modifyService.delete_hours(name).subscribe();
            this.modifyService.insert_hours(attr1, attr2, attr3, attr4).subscribe();
        }
        else {
            this.modifyService.insert_hours(attr1, attr2, attr3, attr4).subscribe();
        }
        window.location.reload();
    };
    ModifyPageComponent.prototype.delete_hours = function () {
        var element = document.getElementById("delete_hours_div");
        var name = document.getElementById("delete_hours").value;
        this.modifyService.delete_hours(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_inventory_delete = function () {
        var element = document.getElementById("delete_inventory_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_inventory = function () {
        var attr1 = document.getElementById("inventory_attr1").value;
        var attr2 = document.getElementById("inventory_attr2").value;
        var num1 = Number(document.getElementById("inventory_attr3").value);
        var attr4 = document.getElementById("inventory_attr4").value;
        alert("Violates foreign key constraints.");
        if (this.modifyService.exists(name, '/api/inventory/')) {
            this.modifyService.delete_inventory(name).subscribe();
            this.modifyService.insert_inventory(attr1, attr2, num1, attr4).subscribe(function (error) { alert("Violates foreign key constraints."); });
        }
        else {
            this.modifyService.insert_inventory(attr1, attr2, num1, attr4).subscribe(function (error) { alert("Violates foreign key constraints."); });
        }
        //window.location.reload();
    };
    ModifyPageComponent.prototype.delete_inventory = function () {
        var element = document.getElementById("delete_inventory_div");
        var name = document.getElementById("delete_inventory").value;
        this.modifyService.delete_inventory(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_likes_delete = function () {
        var element = document.getElementById("delete_likes_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_likes = function () {
        var attr1 = document.getElementById("likes_attr1").value;
        var attr2 = document.getElementById("likes_attr2").value;
        if (this.modifyService.exists(name, '/api/likes/')) {
            this.modifyService.delete_likes(name).subscribe();
            this.modifyService.insert_likes(attr1, attr2).subscribe();
        }
        else {
            this.modifyService.insert_likes(attr1, attr2).subscribe();
        }
        window.location.reload();
    };
    ModifyPageComponent.prototype.delete_likes = function () {
        var element = document.getElementById("delete_likes_div");
        var name = document.getElementById("delete_likes").value;
        this.modifyService.delete_likes(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_operates_delete = function () {
        var element = document.getElementById("delete_operates_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_operates = function () {
        var attr1 = document.getElementById("operates_attr1").value;
        var attr2 = document.getElementById("operates_attr2").value;
        if (this.modifyService.exists(name, '/api/operates/')) {
            this.modifyService.delete_operates(name).subscribe();
            this.modifyService.insert_operates(attr1, attr2).subscribe();
        }
        else {
            this.modifyService.insert_operates(attr1, attr2).subscribe();
        }
        window.location.reload();
    };
    ModifyPageComponent.prototype.delete_operates = function () {
        var element = document.getElementById("delete_operates_div");
        var name = document.getElementById("delete_operates").value;
        this.modifyService.delete_operates(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_printed_on_delete = function () {
        var element = document.getElementById("delete_printed_onv_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_printed_on = function () {
        var attr1 = document.getElementById("printed_on_attr1").value;
        var attr2 = document.getElementById("printed_on_attr2").value;
        alert("Violates foreign key constraints.");
        if (this.modifyService.exists(name, '/api/printed_on/')) {
            this.modifyService.delete_printed_on(name).subscribe();
            this.modifyService.insert_printed_on(attr1, attr2).subscribe(function (error) { alert("Violates foreign key constraints."); });
        }
        else {
            this.modifyService.insert_printed_on(attr1, attr2).subscribe(function (error) { alert("Violates foreign key constraints."); });
        }
        //window.location.reload();
    };
    ModifyPageComponent.prototype.delete_printed_on = function () {
        var element = document.getElementById("delete_printed_on_div");
        var name = document.getElementById("delete_printed_on").value;
        this.modifyService.delete_printed_on(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_sells_delete = function () {
        var element = document.getElementById("delete_sells_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_sells = function () {
        var attr1 = document.getElementById("sells_attr1").value;
        var attr2 = document.getElementById("sells_attr2").value;
        var num1 = Number(document.getElementById("sells_attr3").value);
        alert("Violates foreign key constraints.");
        if (this.modifyService.exists(name, '/api/sells/')) {
            this.modifyService.delete_sells(name).subscribe();
            this.modifyService.insert_sells(attr1, attr2, num1).subscribe(function (error) { alert("Violates foreign key constraints."); });
        }
        else {
            this.modifyService.insert_sells(attr1, attr2, num1).subscribe(function (error) { alert("Violates foreign key constraints."); });
        }
        //window.location.reload();
    };
    ModifyPageComponent.prototype.delete_sells = function () {
        var element = document.getElementById("delete_sells_div");
        var name = document.getElementById("delete_sells").value;
        this.modifyService.delete_sells(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_transacts_delete = function () {
        var element = document.getElementById("delete_transacts_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_transacts = function () {
        var attr1 = document.getElementById("transacts_attr1").value;
        var attr2 = document.getElementById("transacts_attr2").value;
        var attr3 = document.getElementById("transacts_attr3").value;
        if (this.modifyService.exists(name, '/api/transacts/')) {
            this.modifyService.delete_transacts(name).subscribe();
            this.modifyService.insert_transacts(attr1, attr2, attr3).subscribe();
        }
        else {
            this.modifyService.insert_transacts(attr1, attr2, attr3).subscribe();
        }
        window.location.reload();
    };
    ModifyPageComponent.prototype.delete_transacts = function () {
        var element = document.getElementById("delete_transacts_div");
        var name = document.getElementById("delete_transacts").value;
        this.modifyService.delete_transacts(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.confirm_works_delete = function () {
        var element = document.getElementById("delete_works_div");
        element.hidden = false;
    };
    ModifyPageComponent.prototype.update_works = function () {
        var attr1 = document.getElementById("works_attr1").value;
        var attr2 = document.getElementById("works_attr2").value;
        var attr3 = document.getElementById("works_attr3").value;
        var num1 = Number(document.getElementById("works_attr3").value);
        var num2 = Number(document.getElementById("works_attr3").value);
        if (this.modifyService.exists(name, '/api/works/')) {
            this.modifyService.delete_works(name).subscribe();
            this.modifyService.insert_works(attr1, attr2, attr3, num1, num2).subscribe();
        }
        else {
            this.modifyService.insert_works(attr1, attr2, attr3, num1, num2).subscribe();
        }
        window.location.reload();
    };
    ModifyPageComponent.prototype.delete_works = function () {
        var element = document.getElementById("delete_works_div");
        var name = document.getElementById("delete_works").value;
        this.modifyService.delete_works(name).subscribe();
        element.hidden = true;
        window.location.reload();
    };
    ModifyPageComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.drinkersService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        }, function (error) {
            alert("Could not retrieve a list of drinkers");
        });
    };
    ModifyPageComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert("Could not retrieve a list of bars");
        });
    };
    ModifyPageComponent.prototype.getBartenders = function () {
        var _this = this;
        this.bartenderService.getBartenders().subscribe(function (data) {
            _this.bartenders = data;
        }, function (error) {
            alert("Could not retrieve a list of bartenders");
        });
    };
    ModifyPageComponent.prototype.getItems = function () {
        var _this = this;
        this.beerService.getItems().subscribe(function (data) {
            _this.item = data;
        }, function (error) {
            alert("Could not retrieve a list of beers");
        });
    };
    ModifyPageComponent.prototype.getBills = function () {
        var _this = this;
        this.modifyService.getBills().subscribe(function (data) {
            _this.bills = data;
        }, function (error) {
            alert("Could not retrieve a list of manufacturers");
        });
    };
    ModifyPageComponent.prototype.getFrequents = function () {
        var _this = this;
        this.modifyService.getFrequents().subscribe(function (data) {
            _this.frequents = data;
        }, function (error) {
            alert("Could not retrieve a list of manufacturers");
        });
    };
    ModifyPageComponent.prototype.getHours = function () {
        var _this = this;
        this.modifyService.getHours().subscribe(function (data) {
            _this.hours = data;
        }, function (error) {
            alert("Could not retrieve a list of manufacturers");
        });
    };
    ModifyPageComponent.prototype.getInventory = function () {
        var _this = this;
        this.modifyService.getInventory().subscribe(function (data) {
            _this.inventory = data;
        }, function (error) {
            alert("Could not retrieve a list of manufacturers");
        });
    };
    ModifyPageComponent.prototype.getLikes = function () {
        var _this = this;
        this.modifyService.getLikes().subscribe(function (data) {
            _this.likes = data;
        }, function (error) {
            alert("Could not retrieve a list of manufacturers");
        });
    };
    ModifyPageComponent.prototype.getOperates = function () {
        var _this = this;
        this.modifyService.getOperates().subscribe(function (data) {
            _this.operates = data;
        }, function (error) {
            alert("Could not retrieve a list of manufacturers");
        });
    };
    ModifyPageComponent.prototype.getPrintedOn = function () {
        var _this = this;
        this.modifyService.getPrintedOn().subscribe(function (data) {
            _this.printed_on = data;
        }, function (error) {
            alert("Could not retrieve a list of manufacturers");
        });
    };
    ModifyPageComponent.prototype.getSells = function () {
        var _this = this;
        this.modifyService.getSells().subscribe(function (data) {
            _this.sells = data;
        }, function (error) {
            alert("Could not retrieve a list of manufacturers");
        });
    };
    ModifyPageComponent.prototype.getTransacts = function () {
        var _this = this;
        this.modifyService.getTransacts().subscribe(function (data) {
            _this.transacts = data;
        }, function (error) {
            alert("Could not retrieve a list of manufacturers");
        });
    };
    ModifyPageComponent.prototype.getWorks = function () {
        var _this = this;
        this.modifyService.getWorks().subscribe(function (data) {
            _this.works = data;
        }, function (error) {
            alert("Could not retrieve a list of manufacturers");
        });
    };
    ModifyPageComponent.prototype.displayDrinkers = function () {
        this.hideAll();
        document.getElementById("drinkers").hidden = false;
    };
    ModifyPageComponent.prototype.displayBars = function () {
        this.hideAll();
        document.getElementById("bars").hidden = false;
    };
    ModifyPageComponent.prototype.displayItems = function () {
        this.hideAll();
        document.getElementById("items").hidden = false;
    };
    ModifyPageComponent.prototype.displayBartenders = function () {
        this.hideAll();
        document.getElementById("bartenders").hidden = false;
    };
    ModifyPageComponent.prototype.displayBills = function () {
        this.hideAll();
        document.getElementById("bills").hidden = false;
    };
    ModifyPageComponent.prototype.displayFrequents = function () {
        this.hideAll();
        document.getElementById("frequents").hidden = false;
    };
    ModifyPageComponent.prototype.displayHours = function () {
        this.hideAll();
        document.getElementById("hours").hidden = false;
    };
    ModifyPageComponent.prototype.displayInventory = function () {
        this.hideAll();
        document.getElementById("inventory").hidden = false;
    };
    ModifyPageComponent.prototype.displayLikes = function () {
        this.hideAll();
        document.getElementById("likes").hidden = false;
    };
    ModifyPageComponent.prototype.displayOperates = function () {
        this.hideAll();
        document.getElementById("operates").hidden = false;
    };
    ModifyPageComponent.prototype.displayPrintedOn = function () {
        this.hideAll();
        document.getElementById("printed_on").hidden = false;
    };
    ModifyPageComponent.prototype.displaySells = function () {
        this.hideAll();
        document.getElementById("sells").hidden = false;
    };
    ModifyPageComponent.prototype.displayTransacts = function () {
        this.hideAll();
        document.getElementById("transacts").hidden = false;
    };
    ModifyPageComponent.prototype.displayWorks = function () {
        this.hideAll();
        document.getElementById("works").hidden = false;
    };
    ModifyPageComponent.prototype.hideAll = function () {
        document.getElementById("drinkers").hidden = true;
        document.getElementById("bars").hidden = true;
        document.getElementById("items").hidden = true;
        document.getElementById("bartenders").hidden = true;
        document.getElementById("bills").hidden = true;
        document.getElementById("frequents").hidden = true;
        document.getElementById("hours").hidden = true;
        document.getElementById("inventory").hidden = true;
        document.getElementById("likes").hidden = true;
        document.getElementById("operates").hidden = true;
        document.getElementById("printed_on").hidden = true;
        document.getElementById("sells").hidden = true;
        document.getElementById("transacts").hidden = true;
        document.getElementById("works").hidden = true;
    };
    ModifyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify-page',
            template: __webpack_require__(/*! ./modify-page.component.html */ "./src/app/modify-page/modify-page.component.html"),
            styles: [__webpack_require__(/*! ./modify-page.component.css */ "./src/app/modify-page/modify-page.component.css")]
        }),
        __metadata("design:paramtypes", [_modify_service__WEBPACK_IMPORTED_MODULE_1__["ModifyService"],
            _drinkers_service__WEBPACK_IMPORTED_MODULE_2__["DrinkersService"],
            _bars_service__WEBPACK_IMPORTED_MODULE_3__["BarsService"],
            _beer_service__WEBPACK_IMPORTED_MODULE_5__["BeerService"],
            _bartenders_service__WEBPACK_IMPORTED_MODULE_4__["BartendersService"]])
    ], ModifyPageComponent);
    return ModifyPageComponent;
}());



/***/ }),

/***/ "./src/app/modify.service.ts":
/*!***********************************!*\
  !*** ./src/app/modify.service.ts ***!
  \***********************************/
/*! exports provided: ModifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyService", function() { return ModifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModifyService = /** @class */ (function () {
    function ModifyService(http) {
        this.http = http;
    }
    ModifyService.prototype.getBills = function () {
        return this.http.get('/api/bills');
    };
    ModifyService.prototype.getFrequents = function () {
        return this.http.get('/api/frequents');
    };
    ModifyService.prototype.getHours = function () {
        return this.http.get('/api/hours');
    };
    ModifyService.prototype.getInventory = function () {
        return this.http.get('/api/inventory');
    };
    ModifyService.prototype.getLikes = function () {
        return this.http.get('/api/likes');
    };
    ModifyService.prototype.getOperates = function () {
        return this.http.get('/api/operates');
    };
    ModifyService.prototype.getPrintedOn = function () {
        return this.http.get('/api/printed_on');
    };
    ModifyService.prototype.getSells = function () {
        return this.http.get('/api/sells');
    };
    ModifyService.prototype.getTransacts = function () {
        return this.http.get('/api/transacts');
    };
    ModifyService.prototype.getWorks = function () {
        return this.http.get('/api/works');
    };
    ModifyService.prototype.insert_drinker = function (name, state, city, phone, address) {
        var body = {
            name: name,
            state: state,
            city: city,
            phone: phone,
            address: address
        };
        return this.http.post('/api/addDrinker', body);
    };
    ModifyService.prototype.delete_drinker = function (drinker) {
        return this.http.get('/api/deleteDrinker/' + drinker);
    };
    ModifyService.prototype.insert_bar = function (name, license, state, city, phone, address) {
        var body = {
            name: name,
            license: license,
            state: state,
            city: city,
            phone: phone,
            address: address
        };
        return this.http.post('/api/addBar', body);
    };
    ModifyService.prototype.delete_bar = function (name) {
        return this.http.get('/api/deleteBar/' + name);
    };
    ModifyService.prototype.insert_item = function (name, type, attr) {
        var body = {
            name: name,
            type: type,
            attr: attr,
        };
        return this.http.post('/api/addItem', body);
    };
    ModifyService.prototype.delete_item = function (name) {
        return this.http.get('/api/deleteItem/' + name);
    };
    ModifyService.prototype.insert_bartender = function (name, bartender_license) {
        var body = {
            name: name,
            bartender_license: bartender_license
        };
        return this.http.post('/api/addBartender', body);
    };
    ModifyService.prototype.delete_bartender = function (name) {
        return this.http.get('/api/deleteBartender/' + name);
    };
    ModifyService.prototype.insert_bill = function (transaction_id, time, date, subtotal, tip, total) {
        var body = {
            transaction_id: transaction_id,
            time: time,
            date: date,
            subtotal: subtotal,
            tip: tip,
            total: total
        };
        return this.http.post('/api/addBill', body);
    };
    ModifyService.prototype.delete_bill = function (name) {
        return this.http.get('/api/deleteBill/' + name);
    };
    ModifyService.prototype.insert_frequents = function (attr1, attr2) {
        var body = {
            attr1: attr1,
            attr2: attr2,
        };
        return this.http.post('/api/addfrequents', body);
    };
    ModifyService.prototype.delete_frequents = function (name) {
        return this.http.get('/api/deletefrequents/' + name);
    };
    ModifyService.prototype.insert_hours = function (attr1, attr2, attr3, attr4) {
        var body = {
            attr1: attr1,
            attr2: attr2,
            attr3: attr3,
            attr4: attr4
        };
        return this.http.post('/api/addhours', body);
    };
    ModifyService.prototype.delete_hours = function (name) {
        return this.http.get('/api/deletehours/' + name);
    };
    ModifyService.prototype.insert_inventory = function (attr1, attr2, attr3, attr4) {
        var body = {
            attr1: attr1,
            attr2: attr2,
            attr3: attr3,
            attr4: attr4
        };
        return this.http.post('/api/addinventory', body);
    };
    ModifyService.prototype.delete_inventory = function (name) {
        return this.http.get('/api/deleteinventory/' + name);
    };
    ModifyService.prototype.insert_likes = function (attr1, attr2) {
        var body = {
            attr1: attr1,
            attr2: attr2
        };
        return this.http.post('/api/addlikes', body);
    };
    ModifyService.prototype.delete_likes = function (name) {
        return this.http.get('/api/deletelikes/' + name);
    };
    ModifyService.prototype.insert_operates = function (attr1, attr2) {
        var body = {
            attr1: attr1,
            attr2: attr2
        };
        return this.http.post('/api/addoperates', body);
    };
    ModifyService.prototype.delete_operates = function (name) {
        return this.http.get('/api/deleteoperates/' + name);
    };
    ModifyService.prototype.insert_printed_on = function (attr1, attr2) {
        var body = {
            attr1: attr1,
            attr2: attr2
        };
        return this.http.post('/api/addprinted_on', body);
    };
    ModifyService.prototype.delete_printed_on = function (name) {
        return this.http.get('/api/deleteprinted_on/' + name);
    };
    ModifyService.prototype.insert_sells = function (attr1, attr2, attr3) {
        var body = {
            attr1: attr1,
            attr2: attr2,
            attr3: attr3
        };
        return this.http.post('/api/addsells', body);
    };
    ModifyService.prototype.delete_sells = function (name) {
        return this.http.get('/api/deletesells/' + name);
    };
    ModifyService.prototype.insert_transacts = function (attr1, attr2, attr3) {
        var body = {
            attr1: attr1,
            attr2: attr2,
            attr3: attr3
        };
        return this.http.post('/api/addtransacts', body);
    };
    ModifyService.prototype.delete_transacts = function (name) {
        return this.http.get('/api/deletetransacts/' + name);
    };
    ModifyService.prototype.insert_works = function (attr1, attr2, attr3, attr4, attr5) {
        var body = {
            attr1: attr1,
            attr2: attr2,
            attr3: attr3,
            attr4: attr4,
            attr5: attr5
        };
        return this.http.post('/api/addworks', body);
    };
    ModifyService.prototype.delete_works = function (name) {
        return this.http.get('/api/deleteworks/' + name);
    };
    ModifyService.prototype.exists = function (name, path) {
        //var res = false;
        /*var urlExists = require('url-exists');
        urlExists('/api/drinker/', function(err,exists){
          console.log(exists)
          res = exists;
        });*/
        console.log(this.http.get(path + name));
        return this.http.get(path + name);
    };
    ModifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModifyService);
    return ModifyService;
}());



/***/ }),

/***/ "./src/app/query-page/query-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/query-page/query-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXJ5LXBhZ2UvcXVlcnktcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/query-page/query-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/query-page/query-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  query-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/query-page/query-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/query-page/query-page.component.ts ***!
  \****************************************************/
/*! exports provided: QueryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryPageComponent", function() { return QueryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QueryPageComponent = /** @class */ (function () {
    function QueryPageComponent() {
    }
    QueryPageComponent.prototype.ngOnInit = function () {
    };
    QueryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query-page',
            template: __webpack_require__(/*! ./query-page.component.html */ "./src/app/query-page/query-page.component.html"),
            styles: [__webpack_require__(/*! ./query-page.component.css */ "./src/app/query-page/query-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QueryPageComponent);
    return QueryPageComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to Transaction Bar Beer Drinker</h1>\n    <p class=\"lead\">A Database by Caleb Yu, Arjun Bansil, and Jesse Lin.</p>\n  </div>\n</div>\n\n<br><br>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\caleb\Documents\GitHub\366Final\website\TransactionBarBeerDrinkerUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map