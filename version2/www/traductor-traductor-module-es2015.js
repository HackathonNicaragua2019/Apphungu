(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["traductor-traductor-module"],{

/***/ "AE3h":
/*!*******************************************************!*\
  !*** ./src/app/traductor/traductor-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TraductorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraductorPageRoutingModule", function() { return TraductorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _traductor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./traductor.page */ "FeqI");




const routes = [
    {
        path: '',
        component: _traductor_page__WEBPACK_IMPORTED_MODULE_3__["TraductorPage"]
    }
];
let TraductorPageRoutingModule = class TraductorPageRoutingModule {
};
TraductorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TraductorPageRoutingModule);



/***/ }),

/***/ "FeqI":
/*!*********************************************!*\
  !*** ./src/app/traductor/traductor.page.ts ***!
  \*********************************************/
/*! exports provided: TraductorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraductorPage", function() { return TraductorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_traductor_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./traductor.page.html */ "LxbQ");
/* harmony import */ var _traductor_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traductor.page.scss */ "ztxJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "VGJl");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let TraductorPage = class TraductorPage {
    constructor(speechRecognition, toastCtrl, cd) {
        this.speechRecognition = speechRecognition;
        this.toastCtrl = toastCtrl;
        this.cd = cd;
        this.estatico = 'Dí algo....';
        this.espaniol = 'Dí algo....';
        this.miskito = '';
        this.traduccion = [];
        this.silaba = ["aaa", "bbbbb"];
    }
    /*
      ngOnChanges(){
        this.estatico = this.espaniol;
        alert(this.estatico);
      }*/
    ngOnInit() {
    }
    Escuchar() {
        this.Permisos();
        this.speechRecognition.startListening().subscribe((speeches) => {
            this.estatico = speeches[0] + "";
            this.cd.detectChanges();
        }, (err) => {
            JSON.stringify(err);
        });
    }
    Permisos() {
        this.speechRecognition.hasPermission().then((permission) => {
            if (permission) {
            }
            else {
                this.speechRecognition.requestPermission().then((data) => {
                    JSON.stringify(data);
                }, (err) => {
                    JSON.stringify(err);
                });
            }
        }, (err) => {
            JSON.stringify(err);
        });
    }
};
TraductorPage.ctorParameters = () => [
    { type: _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_4__["SpeechRecognition"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
TraductorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-traductor',
        template: _raw_loader_traductor_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_traductor_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TraductorPage);



/***/ }),

/***/ "LxbQ":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/traductor/traductor.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <p>Bienvenido,</p>\r\n      <h3>Samuel Vallecillo</h3>\r\n    </ion-label>  \r\n  </ion-item>\r\n  \r\n</ion-header>\r\n\r\n<ion-content scrollY=\"false\">\r\n<ion-content scrollY=\"false\" style=\"height: 90%\">\r\n  <br>\r\n  <ion-card class=\"espaniol\" >\r\n    <img src=\"https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/ImagenesGames%2Fuhung_blanco.png?alt=media&token=4fbd009b-7ff2-46b8-92e6-a4d98be463ba\">   \r\n    \r\n      <ion-card-subtitle>Español</ion-card-subtitle>\r\n      <p>{{estatico}}</p>\r\n    \r\n    \r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"center\" horizontal=\"center\" slot=\"fixed\" (click)=\"Escuchar()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"mic-sharp\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-card class=\"miskito\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>Miskito</ion-card-subtitle>\r\n      <ion-card-title>.....</ion-card-title>\r\n    </ion-card-header>\r\n  </ion-card>\r\n    \r\n    \r\n  </ion-content>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" routerLink=\"/menu-prin\" routerDirection=\"back\">\r\n      <ion-fab-button>\r\n        <ion-icon name=\"home-sharp\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n    \r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"drawer.toggleDrawer()\" expand=\"full\">\r\n      <ion-fab-button>\r\n        <ion-icon name=\"menu-sharp\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n      \r\n      <app-drawer #drawer>\r\n      </app-drawer>\r\n    \r\n</ion-content>\r\n");

/***/ }),

/***/ "gsNF":
/*!***********************************************!*\
  !*** ./src/app/traductor/traductor.module.ts ***!
  \***********************************************/
/*! exports provided: TraductorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraductorPageModule", function() { return TraductorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _traductor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./traductor-routing.module */ "AE3h");
/* harmony import */ var _traductor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./traductor.page */ "FeqI");
/* harmony import */ var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared-components.module */ "IA6j");








let TraductorPageModule = class TraductorPageModule {
};
TraductorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _traductor_routing_module__WEBPACK_IMPORTED_MODULE_5__["TraductorPageRoutingModule"],
            _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_traductor_page__WEBPACK_IMPORTED_MODULE_6__["TraductorPage"]]
    })
], TraductorPageModule);



/***/ }),

/***/ "ztxJ":
/*!***********************************************!*\
  !*** ./src/app/traductor/traductor.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-item {\n  --background:radial-gradient(#F49B27, #ED7F23);\n  background: radial-gradient(#F49B27, #ED7F23);\n  padding: 0 10px;\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n  color: #fff;\n}\nion-header ion-item p {\n  font-weight: 500;\n  font-size: 14px;\n  color: #fff;\n}\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\n.espaniol {\n  height: 45%;\n  --background:radial-gradient(#F49B27, #ED7F23);\n}\n.espaniol img {\n  position: absolute;\n  top: 50%;\n  width: 50%;\n  opacity: 0.4;\n}\n.espaniol ion-card-subtitle {\n  color: #ffffff;\n  position: absolute;\n  top: 5%;\n  padding-left: 3%;\n}\n.espaniol p {\n  position: absolute;\n  color: #ffffff;\n  top: 37%;\n  padding-left: 35%;\n  font-size: 25px;\n}\n.miskito {\n  height: 45%;\n  --background:#faf5f2;\n}\n.miskito ion-card-subtitle {\n  color: #000000;\n}\n.miskito ion-card-title {\n  text-align: center;\n  padding: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhZHVjdG9yL3RyYWR1Y3Rvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw4Q0FBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtBQUFSO0FBSVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRlo7QUFLUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFIWjtBQUtRO0VBQ0ksb0JBQUE7QUFIWjtBQVFBO0VBRUksV0FBQTtFQUNBLDhDQUFBO0FBTko7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBTlI7QUFRSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQU5SO0FBVUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBVFI7QUFlRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtBQVpKO0FBY0k7RUFDSSxjQUFBO0FBWlI7QUFlSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQWJSIiwiZmlsZSI6InNyYy9hcHAvdHJhZHVjdG9yL3RyYWR1Y3Rvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCgjRjQ5QjI3LCAjRUQ3RjIzKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCgjRjQ5QjI3LCAjRUQ3RjIzKTtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmVzcGFuaW9se1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDQ1JTsgXHJcbiAgICAtLWJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KCNGNDlCMjcsICNFRDdGMjMpO1xyXG4gICAgXHJcbiAgICBpbWd7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDo1MCU7XHJcbiAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRvcDozNyU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzNSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLm1pc2tpdG97XHJcbiAgICBoZWlnaHQ6IDQ1JTtcclxuICAgIC0tYmFja2dyb3VuZDojZmFmNWYyO1xyXG5cclxuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAyNSU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICAiXX0= */");

/***/ })

}]);
//# sourceMappingURL=traductor-traductor-module-es2015.js.map