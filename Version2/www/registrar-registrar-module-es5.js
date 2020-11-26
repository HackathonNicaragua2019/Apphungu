(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registrar-registrar-module"], {
    /***/
    "5zMm":
    /*!***********************************************!*\
      !*** ./src/app/registrar/registrar.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function zMm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhci9yZWdpc3RyYXIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "9Uor":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrar/registrar.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function Uor(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>registrar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "SruG":
    /*!***********************************************!*\
      !*** ./src/app/registrar/registrar.module.ts ***!
      \***********************************************/

    /*! exports provided: RegistrarPageModule */

    /***/
    function SruG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrarPageModule", function () {
        return RegistrarPageModule;
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


      var _registrar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registrar-routing.module */
      "SysP");
      /* harmony import */


      var _registrar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registrar.page */
      "wDLk");

      var RegistrarPageModule = function RegistrarPageModule() {
        _classCallCheck(this, RegistrarPageModule);
      };

      RegistrarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registrar_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrarPageRoutingModule"]],
        declarations: [_registrar_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarPage"]]
      })], RegistrarPageModule);
      /***/
    },

    /***/
    "SysP":
    /*!*******************************************************!*\
      !*** ./src/app/registrar/registrar-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: RegistrarPageRoutingModule */

    /***/
    function SysP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrarPageRoutingModule", function () {
        return RegistrarPageRoutingModule;
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


      var _registrar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registrar.page */
      "wDLk");

      var routes = [{
        path: '',
        component: _registrar_page__WEBPACK_IMPORTED_MODULE_3__["RegistrarPage"]
      }];

      var RegistrarPageRoutingModule = function RegistrarPageRoutingModule() {
        _classCallCheck(this, RegistrarPageRoutingModule);
      };

      RegistrarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistrarPageRoutingModule);
      /***/
    },

    /***/
    "wDLk":
    /*!*********************************************!*\
      !*** ./src/app/registrar/registrar.page.ts ***!
      \*********************************************/

    /*! exports provided: RegistrarPage */

    /***/
    function wDLk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrarPage", function () {
        return RegistrarPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_registrar_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./registrar.page.html */
      "9Uor");
      /* harmony import */


      var _registrar_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registrar.page.scss */
      "5zMm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RegistrarPage = /*#__PURE__*/function () {
        function RegistrarPage() {
          _classCallCheck(this, RegistrarPage);
        }

        _createClass(RegistrarPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RegistrarPage;
      }();

      RegistrarPage.ctorParameters = function () {
        return [];
      };

      RegistrarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registrar',
        template: _raw_loader_registrar_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registrar_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegistrarPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=registrar-registrar-module-es5.js.map