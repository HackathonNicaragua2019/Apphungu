(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["traduc-dicc-traduc-dicc-module"], {
    /***/
    "2W80":
    /*!***************************************************!*\
      !*** ./src/app/traduc-dicc/traduc-dicc.module.ts ***!
      \***************************************************/

    /*! exports provided: TraducDiccPageModule */

    /***/
    function W80(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TraducDiccPageModule", function () {
        return TraducDiccPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _traduc_dicc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./traduc-dicc-routing.module */
      "xA9z");
      /* harmony import */


      var _traduc_dicc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./traduc-dicc.page */
      "k6eK");
      /* harmony import */


      var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/shared-components.module */
      "IA6j");

      var TraducDiccPageModule = function TraducDiccPageModule() {
        _classCallCheck(this, TraducDiccPageModule);
      };

      TraducDiccPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _traduc_dicc_routing_module__WEBPACK_IMPORTED_MODULE_5__["TraducDiccPageRoutingModule"], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_traduc_dicc_page__WEBPACK_IMPORTED_MODULE_6__["TraducDiccPage"]]
      })], TraducDiccPageModule);
      /***/
    },

    /***/
    "k6eK":
    /*!*************************************************!*\
      !*** ./src/app/traduc-dicc/traduc-dicc.page.ts ***!
      \*************************************************/

    /*! exports provided: TraducDiccPage */

    /***/
    function k6eK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TraducDiccPage", function () {
        return TraducDiccPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_traduc_dicc_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./traduc-dicc.page.html */
      "m422");
      /* harmony import */


      var _traduc_dicc_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./traduc-dicc.page.scss */
      "vm+D");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TraducDiccPage = /*#__PURE__*/function () {
        function TraducDiccPage() {
          _classCallCheck(this, TraducDiccPage);

          this.backdropVisible = false;
        }

        _createClass(TraducDiccPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TraducDiccPage;
      }();

      TraducDiccPage.ctorParameters = function () {
        return [];
      };

      TraducDiccPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-traduc-dicc',
        template: _raw_loader_traduc_dicc_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_traduc_dicc_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TraducDiccPage);
      /***/
    },

    /***/
    "m422":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/traduc-dicc/traduc-dicc.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function m422(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <p>Bienvenido,</p>\r\n      <h3>Samuel Vallecillo</h3>\r\n    </ion-label>  \r\n  </ion-item>\r\n  \r\n</ion-header>\r\n\r\n<ion-content scrollY=\"false\">\r\n<br>\r\n  <ion-card routerLink=\"/traductor\" routerDirection=\"forward\">\r\n    <div class=\"card\">\r\n      <div class=\"img-avatar\">\r\n        <img src=\"https://i.ibb.co/ydgkqm9/logo.png\"/>\r\n      </div>\r\n      <div class=\"card-text\">\r\n        <div class=\"portada\">\r\n        \r\n        </div>\r\n        <div class=\"title-total\">   \r\n          <div class=\"title\">Traductor</div>\r\n          <h2>Traductor español - Miskito</h2>\r\n      \r\n      <div class=\"desc\">¡Vamos! anímate a comunicarte con nuestra Costa Caribe.</div>\r\n    </div>\r\n     \r\n      </div>\r\n    </div>\r\n    \r\n  </ion-card>\r\n<br><br>\r\n  <ion-card routerLink=\"/diccionario\" routerDirection=\"forward\">\r\n    <div class=\"card\">\r\n      <div class=\"img-avatar\">\r\n        <img src=\"https://i.ibb.co/ydgkqm9/logo.png\"/>\r\n      </div>\r\n      <div class=\"card-text\">\r\n        <div class=\"portada\">\r\n        \r\n        </div>\r\n        <div class=\"title-total\">   \r\n          <div class=\"title\">Diccionario</div>\r\n          <h2>Diccionario español - Miskito</h2>\r\n      \r\n      <div class=\"desc\">¡Acompañame! conozcamos el significado de las palabras de nuestra lengua miskita.</div>\r\n    </div>\r\n     \r\n      </div>      \r\n    </div>\r\n    \r\n  </ion-card>\r\n   \r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" routerLink=\"/menu-prin\" routerDirection=\"back\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"home-sharp\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  \r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"drawer.toggleDrawer()\" expand=\"full\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"menu-sharp\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n    \r\n    <app-drawer #drawer>\r\n    </app-drawer>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "vm+D":
    /*!***************************************************!*\
      !*** ./src/app/traduc-dicc/traduc-dicc.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function vmD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Roboto:400,400i,700\");\nion-content {\n  --background: #ffffff;\n}\nion-content ion-card {\n  --background: #ffffff;\n}\nion-header ion-item {\n  --background:radial-gradient(#F49B27, #ED7F23);\n  background: radial-gradient(#F49B27, #ED7F23);\n  padding: 0 10px;\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n  color: #fff;\n}\nion-header ion-item p {\n  font-weight: 500;\n  font-size: 14px;\n  color: #fff;\n}\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\nion-fab-button {\n  --background: #F49B27;\n}\nbody {\n  font-family: Roboto, sans-serif;\n  margin: 0;\n  height: 100vh;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);\n}\n.card {\n  background: #fff;\n  border-radius: 4px;\n  max-width: 400px;\n  display: flex;\n  flex-direction: row;\n  border-radius: 25px;\n  position: relative;\n}\n.card h2 {\n  margin: 0;\n  padding: 0 1rem;\n}\n.card .title {\n  padding: 1rem;\n  text-align: right;\n  color: #ED7F23;\n  font-weight: bold;\n  font-size: 12px;\n}\n.card .desc {\n  padding: 0.5rem 1rem;\n  font-size: 12px;\n}\n.card .actions {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: center;\n  padding: 0.5rem 1rem;\n}\n.img-avatar {\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  border-radius: 50%;\n  border: 6px solid white;\n  background: radial-gradient(#F49B27, #ED7F23);\n  top: 15px;\n  left: 85px;\n}\n.card-text {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n}\n.title-total {\n  padding: 2.5em 1.5em 1.5em 1.5em;\n}\npath {\n  fill: white;\n}\n.img-portada {\n  width: 100%;\n}\n.portada {\n  width: 100%;\n  height: 100%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  background: radial-gradient(#F49B27, #ED7F23);\n  background-position: bottom center;\n  background-size: cover;\n}\nbutton {\n  border: none;\n  background: none;\n  font-size: 24px;\n  color: #8bc34a;\n  cursor: pointer;\n  transition: 0.5s;\n}\nbutton:hover {\n  color: #4CAF50;\n  transform: rotate(22deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhZHVjLWRpY2MvdHJhZHVjLWRpY2MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDUSwwRUFBQTtBQXJDUjtFQUNJLHFCQUFBO0FBRUo7QUFESTtFQUNFLHFCQUFBO0FBR047QUFDSTtFQUNJLDhDQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0FBRVI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBWjtBQUdRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQURaO0FBR1E7RUFDSSxvQkFBQTtBQURaO0FBTUE7RUFDSSxxQkFBQTtBQUhKO0FBU0E7RUFDRSwrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtRUFBQTtBQU5GO0FBUUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7QUFPQTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBSkY7QUFNQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFIRjtBQUtBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBRkY7QUFJQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQURGO0FBSUE7RUFDRSxnQ0FBQTtBQURGO0FBSUE7RUFDRSxXQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0FBREY7QUFJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREY7QUFFRTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvdHJhZHVjLWRpY2MvdHJhZHVjLWRpY2MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgfVxyXG59XHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KCNGNDlCMjcsICNFRDdGMjMpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KCNGNDlCMjcsICNFRDdGMjMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZmFiLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogI0Y0OUIyNztcclxufVxyXG5cclxuXHJcblxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDQwMGksNzAwXCIpO1xyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzk2ZmJjNCAwJSwgI2Y5ZjU4NiAxMDAlKTtcclxufVxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcmQgaDIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuLmNhcmQgLnRpdGxlIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjRUQ3RjIzO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2FyZCAuZGVzYyB7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jYXJkIC5hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxufVxyXG5cclxuLmltZy1hdmF0YXIge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KCNGNDlCMjcsICNFRDdGMjMpO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiA4NXB4O1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxufVxyXG5cclxuLnRpdGxlLXRvdGFsIHtcclxuICBwYWRkaW5nOiAyLjVlbSAxLjVlbSAxLjVlbSAxLjVlbTtcclxufVxyXG5cclxucGF0aCB7XHJcbiAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbi5pbWctcG9ydGFkYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wb3J0YWRhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KCNGNDlCMjcsICNFRDdGMjMpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICM4YmMzNGE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246LjVzO1xyXG4gICY6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzRDQUY1MCAgO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjJkZWcpXHJcbiAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "xA9z":
    /*!***********************************************************!*\
      !*** ./src/app/traduc-dicc/traduc-dicc-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: TraducDiccPageRoutingModule */

    /***/
    function xA9z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TraducDiccPageRoutingModule", function () {
        return TraducDiccPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _traduc_dicc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./traduc-dicc.page */
      "k6eK");

      var routes = [{
        path: '',
        component: _traduc_dicc_page__WEBPACK_IMPORTED_MODULE_3__["TraducDiccPage"]
      }];

      var TraducDiccPageRoutingModule = function TraducDiccPageRoutingModule() {
        _classCallCheck(this, TraducDiccPageRoutingModule);
      };

      TraducDiccPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TraducDiccPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=traduc-dicc-traduc-dicc-module-es5.js.map