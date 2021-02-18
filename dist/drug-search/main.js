(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-drug-search-tw></app-drug-search-tw>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drug-details-tw/drug-details-tw.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drug-details-tw/drug-details-tw.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"drug\">\n    <div class=\"w-full rounded shadow-lg\">\n        <img class=\"p-3 h-24 w-24 flex-none bg-cover\" src=\"../../assets/drug.png\" alt=\"Drug Information\">\n        <div class=\"px-6 py-4\">\n            <div class=\"font-bold text-xl mb-2\">{{drug.brandName}}</div>\n            <table class=\"table-auto w-full text-xl\">\n                <tbody>\n                    <tr>\n                        <td class=\"px-4 py-2\">Current Status</td>\n                        <td class=\"px-4 py-2\">{{drug.statuses[0].status}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"px-4 py-2\">Status Date</td>\n                        <td class=\"px-4 py-2\">{{drug.statuses[0].historyDate | date:'yyyy-MM-dd'}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"px-4 py-2\">DIN</td>\n                        <td class=\"px-4 py-2\">{{drug.din}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"px-4 py-2\">Class</td>\n                        <td class=\"px-4 py-2\">{{drug.class}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"px-4 py-2\">Product Name</td>\n                        <td class=\"px-4 py-2\">{{drug.brandName}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"px-4 py-2\">Company Name</td>\n                        <td class=\"px-4 py-2\">{{drug.manufacturer.companyName}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"px-4 py-2\">Dosage Form</td>\n                        <td class=\"px-4 py-2\">{{drug.forms[0].pharmaceuticalForm}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"px-4 py-2\">Schedule</td>\n                        <td class=\"px-4 py-2\">{{drug.schedules[0]}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"px-4 py-2\">Route of Administration</td>\n                        <td class=\"px-4 py-2\">{{drug.routes[0] ? drug.routes[0].name : \"\"}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"px-4 py-2\">American Hospital Formulary Service (AHFS)</td>\n                        <td class=\"px-4 py-2\">{{drug.therapeuticClasses[0] ? drug.therapeuticClasses[0].ahfs : \"\"}}\n                            {{drug.therapeuticClasses[0] ? drug.therapeuticClasses[0].ahfsNumber : \"\"}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"px-4 py-2\">Anatomical Therapeutical Chemical (ATC)</td>\n                        <td class=\"px-4 py-2\">{{drug.therapeuticClasses[0] ? drug.therapeuticClasses[0].atc : \"\"}}\n                            {{drug.therapeuticClasses[0] ? drug.therapeuticClasses[0].atcNumber : \"\"}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"px-4 py-2\">Active Ingredient Group Number (AIG)</td>\n                        <td class=\"px-4 py-2\">{{drug.activeIngredientGroupNo}}</td>\n                    </tr>\n                    <tr>\n                        <td class=\"px-4 py-2\">Number of Active Ingredients</td>\n                        <td class=\"px-4 py-2\">{{drug.numbOfIngredients}}</td>\n                    </tr>\n                </tbody>\n            </table>\n            \n            <div *ngIf=\"drug.activeIngredients\">\n                <table class=\"table-auto w-full text-xl\">\n                    <thead>\n                        <tr class=\"text-left\">\n                            <th>Active Ingredient</th>\n                            <th>Strength</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let ingredient of drug.activeIngredients\">\n                            <td>{{ingredient.name}}</td>\n                            <td>{{ingredient.strength}}{{ingredient.strengthUnit}}</td>\n                        </tr>\n                    </tbody>    \n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/drug-search-tw/drug-search-tw.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drug-search-tw/drug-search-tw.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex items-center flex-wrap bg-teal-500 p-3\">\r\n    <div class=\"flex items-center text-white\">\r\n        <div class=\"\">\r\n            <div class=\"h-24 w-24 flex-none bg-cover\" style=\"background-image: url('../../assets/drug.png')\"\r\n                title=\"Find your drug\">\r\n            </div>\r\n        </div>\r\n        <span class=\"p-3 font-semibold text-3xl tracking-tight\">Search Marketed Drugs by Brand Name</span>\r\n    </div>\r\n    <div class=\"pt-3 lg:pt-0 w-full block flex-grow lg:flex lg:items-center lg:w-auto\">\r\n        <div class=\"mr-3 flex-grow\">\r\n            <div class=\"relative\">\r\n                <input type=\"text\" class=\"rounded-lg w-full pl-12 py-2 px-3 text-2xl text-gray-800 \" id=\"text\"\r\n                    name=\"text\" placeholder=\"cold or fever\" [(ngModel)]=\"search.text\" (keyup.enter)=\"searchDrug()\">\r\n                <div class=\"pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center\">\r\n                    <svg class=\"fill-current pointer-events-none text-gray-600 w-6 h-6\"\r\n                        xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">\r\n                        <path\r\n                            d=\"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z\" />\r\n                        </svg>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--div class=\"pt-3 lg:pt-0\">\r\n            <button (click)=\"searchDrug()\" type=\"button\"\r\n                class=\"text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded\">\r\n                Go\r\n            </button>\r\n        </div-->\r\n    </div>\r\n</div>\r\n\r\n<div class=\"bg-gray-100 overflow-hidden p-4 \">\r\n    <table class=\"table-auto w-full text-xl\">\r\n        <thead *ngIf=\"drugList.length > 0\">\r\n            <tr>\r\n                <th class=\"px-4 py-2\">DIN</th>\r\n                <th class=\"px-4 py-2\">Brand Name</th>\r\n                <th class=\"px-4 py-2\">Manufacturer</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let drug of drugList\" (click)=\"selectDrug(drug)\">\r\n                <td class=\"border px-4 py-2 text-blue-500 font-bold\"><a href=\"#{{drug.din}}\">{{drug.din}}</a></td>\r\n                <td class=\"border px-4 py-2\">{{drug.brandName}}</td>\r\n                <td class=\"border px-4 py-2\">{{drug.manufacturer.companyName}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<div class=\"{{getVisibility()}} fixed custom-transparent inset-0 z-50 overflow-auto bg-gray-100 flex\">\r\n    <div class=\"relative bg-gray-100 w-full max-w-md lg:max-w-3xl m-auto flex-col flex\">\r\n        <span class=\"absolute top-0 right-0 pr-3 pt-3\" (click)=\"hide()\">\r\n            <svg class=\"h-12 w-12 fill-current text-grey hover:text-grey-darkest\" role=\"button\"\r\n                xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">\r\n                <title>Close</title>\r\n                <path\r\n                    d=\"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z\" />\r\n            </svg>\r\n        </span>\r\n        <app-drug-details-tw [drug]=\"selectedDrug\"></app-drug-details-tw>\r\n    </div>\r\n</div>\r\n");

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'drug-search';
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _drug_search_tw_drug_search_tw_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drug-search-tw/drug-search-tw.component */ "./src/app/drug-search-tw/drug-search-tw.component.ts");
/* harmony import */ var _shared_drug_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/drug-data.service */ "./src/app/shared/drug-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _drug_details_tw_drug_details_tw_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drug-details-tw/drug-details-tw.component */ "./src/app/drug-details-tw/drug-details-tw.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _drug_search_tw_drug_search_tw_component__WEBPACK_IMPORTED_MODULE_3__["DrugSearchTwComponent"],
                _drug_details_tw_drug_details_tw_component__WEBPACK_IMPORTED_MODULE_8__["DrugDetailsTwComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ],
            providers: [
                _shared_drug_data_service__WEBPACK_IMPORTED_MODULE_4__["DrugDataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/drug-details-tw/drug-details-tw.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drug-details-tw/drug-details-tw.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RydWctZGV0YWlscy10dy9kcnVnLWRldGFpbHMtdHcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/drug-details-tw/drug-details-tw.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drug-details-tw/drug-details-tw.component.ts ***!
  \**************************************************************/
/*! exports provided: DrugDetailsTwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugDetailsTwComponent", function() { return DrugDetailsTwComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DrugDetailsTwComponent = /** @class */ (function () {
    function DrugDetailsTwComponent() {
    }
    DrugDetailsTwComponent.prototype.ngOnInit = function () {
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DrugDetailsTwComponent.prototype, "drug", void 0);
    DrugDetailsTwComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drug-details-tw',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./drug-details-tw.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drug-details-tw/drug-details-tw.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./drug-details-tw.component.css */ "./src/app/drug-details-tw/drug-details-tw.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DrugDetailsTwComponent);
    return DrugDetailsTwComponent;
}());



/***/ }),

/***/ "./src/app/drug-search-tw/drug-search-tw.component.css":
/*!*************************************************************!*\
  !*** ./src/app/drug-search-tw/drug-search-tw.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-transparent {\r\n    background-color: rgba(255,255,255,0.75);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJ1Zy1zZWFyY2gtdHcvZHJ1Zy1zZWFyY2gtdHcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUF3QztBQUM1QyIsImZpbGUiOiJzcmMvYXBwL2RydWctc2VhcmNoLXR3L2RydWctc2VhcmNoLXR3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43NSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/drug-search-tw/drug-search-tw.component.ts":
/*!************************************************************!*\
  !*** ./src/app/drug-search-tw/drug-search-tw.component.ts ***!
  \************************************************************/
/*! exports provided: DrugSearchTwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugSearchTwComponent", function() { return DrugSearchTwComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_drug_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/drug-data.service */ "./src/app/shared/drug-data.service.ts");
/* harmony import */ var _shared_drug_data_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/drug-data.model */ "./src/app/shared/drug-data.model.ts");




var DrugSearchTwComponent = /** @class */ (function () {
    function DrugSearchTwComponent(drugDataService) {
        this.drugDataService = drugDataService;
        this.drugDataService = drugDataService;
        this.drugList = [];
    }
    DrugSearchTwComponent.prototype.ngOnInit = function () {
        this.search = new _shared_drug_data_model__WEBPACK_IMPORTED_MODULE_3__["Search"]();
        this.search.text = "";
        this.visibility = "invisible";
        // fake list
        /*
        this.drugList = [
           {"din": "12345678", "brandName": "Drug for head ache", "manufacturer": { "companyName": "APO Canada"}},
           {"din": "23456789", "brandName": "Drug for serious problem in the neck", "manufacturer": { "companyName": "NEXT Drugs Inc."}},
           {"din": "34567890", "brandName": "Drug for killing Covid-19 virus - will boost morale of the country", "manufacturer": { "companyName": "Johnson & Johnson"}},
          
          ]
        */
    };
    DrugSearchTwComponent.prototype.searchDrug = function () {
        var _this = this;
        this.selectedDrug = null;
        this.drugList = [];
        this.drugDataService.getDrugByBrandName(this.search.text).subscribe(function (drugs) {
            _this.drugList = drugs;
        });
    };
    DrugSearchTwComponent.prototype.selectDrug = function (drug) {
        this.selectedDrug = drug;
        this.visibility = "visible";
        console.log('selected: ', drug);
    };
    DrugSearchTwComponent.prototype.getVisibility = function () {
        return this.visibility;
    };
    DrugSearchTwComponent.prototype.hide = function () {
        this.visibility = "invisible";
    };
    DrugSearchTwComponent.ctorParameters = function () { return [
        { type: _shared_drug_data_service__WEBPACK_IMPORTED_MODULE_2__["DrugDataService"] }
    ]; };
    DrugSearchTwComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drug-search-tw',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./drug-search-tw.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/drug-search-tw/drug-search-tw.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./drug-search-tw.component.css */ "./src/app/drug-search-tw/drug-search-tw.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_drug_data_service__WEBPACK_IMPORTED_MODULE_2__["DrugDataService"]])
    ], DrugSearchTwComponent);
    return DrugSearchTwComponent;
}());



/***/ }),

/***/ "./src/app/shared/drug-data.model.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/drug-data.model.ts ***!
  \*******************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
var Search = /** @class */ (function () {
    function Search() {
    }
    return Search;
}());



/***/ }),

/***/ "./src/app/shared/drug-data.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/drug-data.service.ts ***!
  \*********************************************/
/*! exports provided: DrugDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugDataService", function() { return DrugDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var DrugDataService = /** @class */ (function () {
    function DrugDataService(http) {
        this.http = http;
        // host and port will be replace by tekton pipelines
        this.host = 'DPD_SERVER_HOSTNAME';
        this.port = 80;
        this.http = http;
    }
    DrugDataService.prototype.getDrugByBrandName = function (serachText) {
        // return an Observable for a list of drugs by brand name
        return this.http.get('http://' + this.host + ':' + this.port + '/api/drugs/brand_name/' + serachText);
    };
    DrugDataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DrugDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DrugDataService);
    return DrugDataService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! D:\Dev\github\drug-search-tailwind\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map