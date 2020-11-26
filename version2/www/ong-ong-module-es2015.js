(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ong-ong-module"],{

/***/ "APrq":
/*!***********************************!*\
  !*** ./src/app/ong/ong.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uZy9vbmcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "SAWU":
/*!***********************************!*\
  !*** ./src/app/ong/ong.module.ts ***!
  \***********************************/
/*! exports provided: OngPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngPageModule", function() { return OngPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ong_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ong-routing.module */ "Ye5D");
/* harmony import */ var _ong_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ong.page */ "YuHN");







let OngPageModule = class OngPageModule {
};
OngPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ong_routing_module__WEBPACK_IMPORTED_MODULE_5__["OngPageRoutingModule"]
        ],
        declarations: [_ong_page__WEBPACK_IMPORTED_MODULE_6__["OngPage"]]
    })
], OngPageModule);



/***/ }),

/***/ "Ub05":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ong/ong.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>ong</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "Ye5D":
/*!*******************************************!*\
  !*** ./src/app/ong/ong-routing.module.ts ***!
  \*******************************************/
/*! exports provided: OngPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngPageRoutingModule", function() { return OngPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ong_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ong.page */ "YuHN");




const routes = [
    {
        path: '',
        component: _ong_page__WEBPACK_IMPORTED_MODULE_3__["OngPage"]
    }
];
let OngPageRoutingModule = class OngPageRoutingModule {
};
OngPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OngPageRoutingModule);



/***/ }),

/***/ "YuHN":
/*!*********************************!*\
  !*** ./src/app/ong/ong.page.ts ***!
  \*********************************/
/*! exports provided: OngPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngPage", function() { return OngPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ong_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ong.page.html */ "Ub05");
/* harmony import */ var _ong_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ong.page.scss */ "APrq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let OngPage = class OngPage {
    constructor() { }
    ngOnInit() {
    }
};
OngPage.ctorParameters = () => [];
OngPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ong',
        template: _raw_loader_ong_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ong_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OngPage);



/***/ })

}]);
//# sourceMappingURL=ong-ong-module-es2015.js.map