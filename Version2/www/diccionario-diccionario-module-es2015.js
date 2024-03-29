(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["diccionario-diccionario-module"],{

/***/ "MErU":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/diccionario/diccionario.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <p>Bienvenido,</p>\r\n      <h3>Samuel Vallecillo</h3>\r\n    </ion-label>  \r\n  </ion-item>\r\n  \r\n</ion-header>\r\n\r\n\r\n<ion-content scrollY=\"false\">\r\n  <ion-content>\r\n      <ion-list>\r\n        <ion-item *ngFor = \"let indice of silaba\" [routerLink]=\"['/diccionario', indice.letra]\">\r\n          <ion-avatar slot=\"start\">\r\n            <img src=\"https://i.ibb.co/ydgkqm9/logo.png\"/>\r\n          </ion-avatar>\r\n          <ion-label>Letra: {{indice.letra}}</ion-label>\r\n          <ion-button fill=\"clear\" slot=\"end\">\r\n            <ion-icon slot=\"icon-only\" name=\"arrow-forward-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-list>    \r\n\r\n  </ion-content>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" routerLink=\"/menu-prin\" routerDirection=\"back\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"home-sharp\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  \r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"drawer.toggleDrawer()\" expand=\"full\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"menu-sharp\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n    \r\n    <app-drawer #drawer>\r\n    </app-drawer>\r\n</ion-content>\r\n");

/***/ }),

/***/ "WaYr":
/*!***************************************************!*\
  !*** ./src/app/diccionario/diccionario.module.ts ***!
  \***************************************************/
/*! exports provided: DiccionarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiccionarioPageModule", function() { return DiccionarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _diccionario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diccionario-routing.module */ "hla2");
/* harmony import */ var _diccionario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./diccionario.page */ "elQG");
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared-components.module */ "IA6j");








let DiccionarioPageModule = class DiccionarioPageModule {
};
DiccionarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _diccionario_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiccionarioPageRoutingModule"],
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_diccionario_page__WEBPACK_IMPORTED_MODULE_6__["DiccionarioPage"]]
    })
], DiccionarioPageModule);



/***/ }),

/***/ "elQG":
/*!*************************************************!*\
  !*** ./src/app/diccionario/diccionario.page.ts ***!
  \*************************************************/
/*! exports provided: DiccionarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiccionarioPage", function() { return DiccionarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_diccionario_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./diccionario.page.html */ "MErU");
/* harmony import */ var _diccionario_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diccionario.page.scss */ "odRN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase.service */ "Z2Br");





let DiccionarioPage = class DiccionarioPage {
    constructor(firebase) {
        this.firebase = firebase;
        this.silaba = [{ id: '1', letra: 'A' }, { id: '2', letra: 'B' }, { id: '3', letra: 'C' }, { id: '4', letra: 'D' }, { id: '5', letra: 'E' }, { id: '6', letra: 'F' }, { id: '7', letra: 'G' }, { id: '8', letra: 'H' }, { id: '9', letra: 'I' }, { id: '10', letra: 'J' }, { id: '11', letra: 'K' }, { id: '12', letra: 'L' }, { id: '13', letra: 'M' }, { id: '14', letra: 'N' }, { id: '15', letra: 'Ñ' }, { id: '16', letra: 'O' }, { id: '17', letra: 'P' }, { id: '18', letra: 'Q' }, { id: '19', letra: 'R' }, { id: '20', letra: 'S' }, { id: '21', letra: 'T' }, { id: '22', letra: 'U' }, { id: '23', letra: 'V' }, { id: '24', letra: 'W' }, { id: '25', letra: 'X' }, { id: '26', letra: 'Y' }, { id: '27', letra: 'Z' }];
        this.backdropVisible = false;
    }
    ngOnInit() {
    }
};
DiccionarioPage.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
];
DiccionarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-diccionario',
        template: _raw_loader_diccionario_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_diccionario_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DiccionarioPage);



/***/ }),

/***/ "hla2":
/*!***********************************************************!*\
  !*** ./src/app/diccionario/diccionario-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DiccionarioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiccionarioPageRoutingModule", function() { return DiccionarioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _diccionario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diccionario.page */ "elQG");




const routes = [
    {
        path: '',
        component: _diccionario_page__WEBPACK_IMPORTED_MODULE_3__["DiccionarioPage"]
    },
    {
        path: 'dic-espaniol',
        loadChildren: () => __webpack_require__.e(/*! import() | dic-espaniol-dic-espaniol-module */ "common").then(__webpack_require__.bind(null, /*! ./dic-espaniol/dic-espaniol.module */ "gA1h")).then(m => m.DicEspaniolPageModule)
    }
];
let DiccionarioPageRoutingModule = class DiccionarioPageRoutingModule {
};
DiccionarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DiccionarioPageRoutingModule);



/***/ }),

/***/ "odRN":
/*!***************************************************!*\
  !*** ./src/app/diccionario/diccionario.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-item {\n  --background:radial-gradient(#F49B27, #ED7F23);\n  background: radial-gradient(#F49B27, #ED7F23);\n  padding: 0 10px;\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n  color: #fff;\n}\nion-header ion-item p {\n  font-weight: 500;\n  font-size: 14px;\n  color: #fff;\n}\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\nion-fab-button {\n  --background: #F49B27;\n}\nion-content {\n  --background: #FFFFFF;\n}\nion-content ion-segment {\n  --background: #FFFFFF;\n}\nion-content ion-segment ion-label {\n  color: #F49B27;\n}\nion-content ion-icon {\n  --background: #F49B27;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGljY2lvbmFyaW8vZGljY2lvbmFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksOENBQUE7RUFDQSw2Q0FBQTtFQUNBLGVBQUE7QUFBUjtBQUlRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUZaO0FBS1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSFo7QUFLUTtFQUNJLG9CQUFBO0FBSFo7QUFRQTtFQUNJLHFCQUFBO0FBTEo7QUFRQTtFQUNJLHFCQUFBO0FBTEo7QUFNSTtFQUNJLHFCQUFBO0FBSlI7QUFLUTtFQUNJLGNBQUE7QUFIWjtBQU1JO0VBQ0kscUJBQUE7QUFKUiIsImZpbGUiOiJzcmMvYXBwL2RpY2Npb25hcmlvL2RpY2Npb25hcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KCNGNDlCMjcsICNFRDdGMjMpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KCNGNDlCMjcsICNFRDdGMjMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZmFiLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogI0Y0OUIyNztcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBpb24tc2VnbWVudHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBjb2xvcjogI0Y0OUIyNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNGNDlCMjc7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=diccionario-diccionario-module-es2015.js.map