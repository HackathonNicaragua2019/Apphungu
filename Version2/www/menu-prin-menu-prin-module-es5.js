(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-prin-menu-prin-module"], {
    /***/
    "KBUW":
    /*!***********************************************!*\
      !*** ./src/app/menu-prin/menu-prin.module.ts ***!
      \***********************************************/

    /*! exports provided: MenuPrinPageModule */

    /***/
    function KBUW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPrinPageModule", function () {
        return MenuPrinPageModule;
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


      var _menu_prin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-prin-routing.module */
      "dhyp");
      /* harmony import */


      var _menu_prin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu-prin.page */
      "dmk+");
      /* harmony import */


      var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/shared-components.module */
      "IA6j");

      var MenuPrinPageModule = function MenuPrinPageModule() {
        _classCallCheck(this, MenuPrinPageModule);
      };

      MenuPrinPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_prin_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPrinPageRoutingModule"], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_menu_prin_page__WEBPACK_IMPORTED_MODULE_6__["MenuPrinPage"]]
      })], MenuPrinPageModule);
      /***/
    },

    /***/
    "V2D0":
    /*!***********************************************!*\
      !*** ./src/app/menu-prin/menu-prin.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function V2D0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*.backdrop {\n    width: 100%;\n    height: 100%;\n    background: #00000094;\n    z-index: 10;\n    position: absolute;\n}*/\n.fade {\n  transition: 0.5s linear all;\n  opacity: 0;\n  z-index: -1;\n}\n.fade-in {\n  transition: 0.5s linear all;\n  opacity: 1;\n}\n.contendor {\n  display: flex;\n  background: #ffffff;\n}\n.contendor .logo img {\n  max-width: 85%;\n  vertical-align: middle;\n}\n.contendor .titulo h3 {\n  font-size: 22px;\n  color: #ED7F23;\n  vertical-align: middle;\n}\nion-header ion-item {\n  --background:radial-gradient(#F49B27, #ED7F23);\n  background: radial-gradient(#F49B27, #ED7F23);\n  padding: 0 10px;\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n  color: #fff;\n}\nion-header ion-item p {\n  font-weight: 500;\n  font-size: 14px;\n  color: #fff;\n}\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\nion-content {\n  --background: #FFFFFF;\n}\nion-content .slides {\n  background: radial-gradient(#F49B27, #ED7F23);\n  padding: 4px 10px 0px 10px;\n}\nion-content ion-card {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n  padding: 30px;\n  background: white;\n}\nion-content ion-card img {\n  width: 70%;\n}\nion-content ion-fab-button {\n  --background: #F49B27;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1wcmluL21lbnUtcHJpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQUFBO0FBUUE7RUFDSSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUo7QUFHQTtFQUNJLDJCQUFBO0VBQ0EsVUFBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVRO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0FBQVo7QUFLUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFIWjtBQVNJO0VBQ0ksOENBQUE7RUFDQSw2Q0FBQTtFQUNBLGVBQUE7QUFOUjtBQVVRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVJaO0FBV1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBVFo7QUFXUTtFQUNJLG9CQUFBO0FBVFo7QUFjQTtFQUNJLHFCQUFBO0FBWEo7QUFZSTtFQUNJLDZDQUFBO0VBQ0EsMEJBQUE7QUFWUjtBQWNJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFaUjtBQWFRO0VBQ0ksVUFBQTtBQVhaO0FBaUJJO0VBQ0kscUJBQUE7QUFmUiIsImZpbGUiOiJzcmMvYXBwL21lbnUtcHJpbi9tZW51LXByaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouYmFja2Ryb3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOTQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufSovXHJcblxyXG4uZmFkZXtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgbGluZWFyIGFsbDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmZhZGUtaW57XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGxpbmVhciBhbGw7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY29udGVuZG9ye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6ODUlO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGl0dWxve1xyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRUQ3RjIzO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoI0Y0OUIyNywgI0VEN0YyMyk7XHJcbiAgICAgICAgYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoI0Y0OUIyNywgI0VEN0YyMyk7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYXZhdGFye1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgLnNsaWRlc3tcclxuICAgICAgICBiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCgjRjQ5QjI3LCAjRUQ3RjIzKTtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMTBweCAwcHggMTBweDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1mYWItYnV0dG9ue1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI0Y0OUIyNztcclxuICAgIH1cclxuXHJcbiAgICBcclxufSJdfQ== */";
      /***/
    },

    /***/
    "ZtoT":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-prin/menu-prin.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZtoT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <p>Bienvenido,</p>\r\n      <h3>Samuel Vallecillo</h3>\r\n    </ion-label>  \r\n  </ion-item>\r\n  \r\n</ion-header>\r\n\r\n\r\n<ion-content scrollY=\"false\">\r\n\r\n  <div class=\"slides ion-margin-bottom\">\r\n    <ion-slides [options] = \"slidesOptions\">\r\n      <ion-slide>\r\n       \r\n        <ion-card>\r\n          <img src=\"https://i.ibb.co/VMrRV6k/grupo.jpg\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"ion-text-left\">Curso 1</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content class=\"ion-text-left\">\r\n            Haz realizado las actividades 1 y 2 del curso.\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-slide>\r\n      <ion-slide>\r\n       \r\n        <ion-card>\r\n          <img src=\"https://i.ibb.co/VMrRV6k/grupo.jpg\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"ion-text-left\">Curso 1</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content class=\"ion-text-left\">\r\n            Haz realizado las actividades 1 y 2 del curso.\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-slide>\r\n      <ion-slide>\r\n       \r\n        <ion-card>\r\n          <img src=\"https://i.ibb.co/VMrRV6k/grupo.jpg\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"ion-text-left\">Curso 1</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content class=\"ion-text-left\">\r\n            Haz realizado las actividades 1 y 2 del curso.\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-slide>\r\n      <ion-slide>\r\n       \r\n        <ion-card>\r\n          <img src=\"https://i.ibb.co/VMrRV6k/grupo.jpg\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"ion-text-left\">Curso 1</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content class=\"ion-text-left\">\r\n            Haz realizado las actividades 1 y 2 del curso.\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-slide>\r\n      <ion-slide>\r\n       \r\n        <ion-card>\r\n          <img src=\"https://i.ibb.co/VMrRV6k/grupo.jpg\">\r\n          <ion-card-header>\r\n            <ion-card-title class=\"ion-text-left\">Curso 1</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content class=\"ion-text-left\">\r\n            Haz realizado las actividades 1 y 2 del curso.\r\n          </ion-card-content>\r\n        </ion-card>\r\n\r\n      </ion-slide>\r\n    </ion-slides>\r\n\r\n  </div>\r\n\r\n<div class=\"contendor\">\r\n  <div class=\"logo\">\r\n\r\n    <img src=\"https://i.ibb.co/ydgkqm9/logo.png\"/>\r\n        \r\n  </div>\r\n\r\n  <div class=\"titulo\">\r\n    <h3>Estas son las últimas actividades que has realizado</h3>\r\n  </div>\r\n</div>\r\n<!--\r\n<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\"expand=\"full\">\r\n  <ion-fab-button>\r\n    <ion-icon name=\"menu-sharp\">ssss</ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n-->\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"drawer.toggleDrawer()\" expand=\"full\">\r\n  <ion-fab-button>\r\n    <ion-icon name=\"menu-sharp\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n  \r\n  <app-drawer #drawer></app-drawer>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "dhyp":
    /*!*******************************************************!*\
      !*** ./src/app/menu-prin/menu-prin-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: MenuPrinPageRoutingModule */

    /***/
    function dhyp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPrinPageRoutingModule", function () {
        return MenuPrinPageRoutingModule;
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


      var _menu_prin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu-prin.page */
      "dmk+");

      var routes = [{
        path: '',
        component: _menu_prin_page__WEBPACK_IMPORTED_MODULE_3__["MenuPrinPage"]
      }];

      var MenuPrinPageRoutingModule = function MenuPrinPageRoutingModule() {
        _classCallCheck(this, MenuPrinPageRoutingModule);
      };

      MenuPrinPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuPrinPageRoutingModule);
      /***/
    },

    /***/
    "dmk+":
    /*!*********************************************!*\
      !*** ./src/app/menu-prin/menu-prin.page.ts ***!
      \*********************************************/

    /*! exports provided: MenuPrinPage */

    /***/
    function dmk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPrinPage", function () {
        return MenuPrinPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menu_prin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menu-prin.page.html */
      "ZtoT");
      /* harmony import */


      var _menu_prin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu-prin.page.scss */
      "V2D0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MenuPrinPage = /*#__PURE__*/function () {
        function MenuPrinPage(ChangeDetectorRef) {
          _classCallCheck(this, MenuPrinPage);

          this.ChangeDetectorRef = ChangeDetectorRef;
          this.backdropVisible = true;
          this.slidesOptions = {
            slidesPerView: 1.5
          };
        }

        _createClass(MenuPrinPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MenuPrinPage;
      }();

      MenuPrinPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      MenuPrinPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-prin',
        template: _raw_loader_menu_prin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_prin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MenuPrinPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=menu-prin-menu-prin-module-es5.js.map