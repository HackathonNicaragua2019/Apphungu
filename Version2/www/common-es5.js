(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "0/6H":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-e806d1f6.js */
      "A36C");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "7ebX":
    /*!**************************************!*\
      !*** ./src/app/pipes/filtro.pipe.ts ***!
      \**************************************/

    /*! exports provided: FiltroPipe */

    /***/
    function ebX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltroPipe", function () {
        return FiltroPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FiltroPipe = /*#__PURE__*/function () {
        function FiltroPipe() {
          _classCallCheck(this, FiltroPipe);
        }

        _createClass(FiltroPipe, [{
          key: "transform",
          value: function transform(palabras, texto) {
            if (texto.length === 0) {
              return palabras;
            }

            texto = texto.toLocaleLowerCase();
            return palabras.filter(function (pala) {
              return pala.espaniol.includes(texto);
            });
          }
        }]);

        return FiltroPipe;
      }();

      FiltroPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filtro'
      })], FiltroPipe);
      /***/
    },

    /***/
    "9dVn":
    /*!*************************************************************************!*\
      !*** ./src/app/diccionario/dic-espaniol/dic-espaniol-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: DicEspaniolPageRoutingModule */

    /***/
    function dVn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DicEspaniolPageRoutingModule", function () {
        return DicEspaniolPageRoutingModule;
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


      var _dic_espaniol_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dic-espaniol.page */
      "UH8v");

      var routes = [{
        path: '',
        component: _dic_espaniol_page__WEBPACK_IMPORTED_MODULE_3__["DicEspaniolPage"]
      }];

      var DicEspaniolPageRoutingModule = function DicEspaniolPageRoutingModule() {
        _classCallCheck(this, DicEspaniolPageRoutingModule);
      };

      DicEspaniolPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DicEspaniolPageRoutingModule);
      /***/
    },

    /***/
    "DO7j":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/diccionario/dic-espaniol/dic-espaniol.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DO7j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <p>Bienvenido,</p>\r\n      <h3>Samuel Vallecillo</h3>\r\n    </ion-label>  \r\n  </ion-item>\r\n  <ion-searchbar placeholder=\"Buscar...\" #search (ionChange)=\"ionChange($event)\"></ion-searchbar>\r\n</ion-header>\r\n<ion-header>\r\n  <ion-segment [(ngModel)]=\"selectTabs\">   \r\n    \r\n    <ion-segment-button value=\"espaniol\">\r\n      <ion-label>Español | Miskito</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"miskito\">\r\n      <ion-label>Miskito | Español</ion-label>\r\n    </ion-segment-button>\r\n\r\n  </ion-segment>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n    <ion-list *ngIf=\"palabras_spaniol.length === 0\">\r\n      <ion-item *ngFor= \"let i of [1,1,1,1,1,1,1,1,1,1,1,1,1,1]\">\r\n        <ion-skeleton-text animated  width=\"95%\"></ion-skeleton-text>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  <div *ngIf=\"selectTabs == 'espaniol'\">\r\n\r\n    \r\n  <ion-list *ngIf=\"palabras_spaniol.length > 0\">\r\n    <ion-item *ngFor = \"let paniol of palabras_spaniol | filtro:textoBuscar\" >\r\n      <ion-label><b>{{paniol.espaniol}}: </b>{{paniol.miskito}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"selectTabs == 'miskito'\">\r\n\r\n    <ion-list *ngIf=\"palabras_miskito.length > 0\">\r\n      <ion-item *ngFor = \"let miski of palabras_miskito | filtro:textoBuscar\" >\r\n        <ion-label><b>{{miski.miskito}}: </b>{{miski.espaniol}}</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n  </div>\r\n    \r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "UH8v":
    /*!***************************************************************!*\
      !*** ./src/app/diccionario/dic-espaniol/dic-espaniol.page.ts ***!
      \***************************************************************/

    /*! exports provided: DicEspaniolPage */

    /***/
    function UH8v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DicEspaniolPage", function () {
        return DicEspaniolPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dic_espaniol_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dic-espaniol.page.html */
      "DO7j");
      /* harmony import */


      var _dic_espaniol_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dic-espaniol.page.scss */
      "xK0p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/firebase.service */
      "Z2Br");

      var DicEspaniolPage = /*#__PURE__*/function () {
        function DicEspaniolPage(activateRoute, diccionario) {
          _classCallCheck(this, DicEspaniolPage);

          this.activateRoute = activateRoute;
          this.diccionario = diccionario;
          this.palabras_spaniol = [];
          this.palabras_miskito = [];
          this.textoBuscar = '';
          this.selectTabs = 'espaniol';
        }

        _createClass(DicEspaniolPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activateRoute.paramMap.subscribe(function (paramMap) {
              var recipeID = paramMap.get('dicId'); //console.log(recipeID)

              _this.diccionario.getPalabrasEspaniol(recipeID).subscribe(function (palabras) {
                palabras.map(function (paniol) {
                  var datos = paniol.payload.doc.data(); //datos.espaniol = pala.payload.doc.miskito;
                  //console.log(datos)

                  _this.palabras_spaniol.push(datos);
                });
              });

              _this.diccionario.getPalabrasMiskita(recipeID).subscribe(function (palabras) {
                palabras.map(function (miski) {
                  var datos = miski.payload.doc.data(); //datos.espaniol = pala.payload.doc.miskito;
                  //console.log(datos)

                  _this.palabras_miskito.push(datos);
                });
              });
            });
          }
        }, {
          key: "ionChange",
          value: function ionChange(event) {
            var texto = event.target.value;
            this.textoBuscar = texto;
          }
        }]);

        return DicEspaniolPage;
      }();

      DicEspaniolPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]
        }];
      };

      DicEspaniolPage.propDecorators = {
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['search', {
            "static": false
          }]
        }]
      };
      DicEspaniolPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dic-espaniol',
        template: _raw_loader_dic_espaniol_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dic_espaniol_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DicEspaniolPage);
      /***/
    },

    /***/
    "Z2Br":
    /*!**********************************************!*\
      !*** ./src/app/services/firebase.service.ts ***!
      \**********************************************/

    /*! exports provided: FirebaseService */

    /***/
    function Z2Br(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
        return FirebaseService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var FirebaseService = /*#__PURE__*/function () {
        function FirebaseService(db) {
          _classCallCheck(this, FirebaseService);

          this.db = db;
        }

        _createClass(FirebaseService, [{
          key: "getPalabrasEspaniol",
          value: function getPalabrasEspaniol(vocal) {
            if (vocal == "A") {
              return this.db.collection('letra_a', function (ref) {
                return ref.orderBy('espaniol', 'desc');
              }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
            } else if (vocal == "B") {
              return this.db.collection('letra_b', function (ref) {
                return ref.orderBy('espaniol', 'desc');
              }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
            }
          }
        }, {
          key: "getPalabrasMiskita",
          value: function getPalabrasMiskita(vocal) {
            if (vocal == "A") {
              return this.db.collection('miskito_a', function (ref) {
                return ref.orderBy('miskito', 'desc');
              }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1200));
            } else if (vocal == "B") {
              return this.db.collection('letra_b', function (ref) {
                return ref.orderBy('espaniol', 'desc');
              }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1200));
            }
          }
        }, {
          key: "getTraduccion",
          value: function getTraduccion(palabra) {
            return this.db.collection('traductor');
          }
        }]);

        return FirebaseService;
      }();

      FirebaseService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      FirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FirebaseService);
      /***/
    },

    /***/
    "ZaV5":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function ZaV5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!delegate) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context2.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context2.next = 11;
                    break;
                  }

                  _context2.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context2.abrupt("return", el);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "gA1h":
    /*!*****************************************************************!*\
      !*** ./src/app/diccionario/dic-espaniol/dic-espaniol.module.ts ***!
      \*****************************************************************/

    /*! exports provided: DicEspaniolPageModule */

    /***/
    function gA1h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DicEspaniolPageModule", function () {
        return DicEspaniolPageModule;
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


      var _dic_espaniol_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dic-espaniol-routing.module */
      "9dVn");
      /* harmony import */


      var _dic_espaniol_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dic-espaniol.page */
      "UH8v");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/shared-components.module */
      "IA6j");

      var DicEspaniolPageModule = function DicEspaniolPageModule() {
        _classCallCheck(this, DicEspaniolPageModule);
      };

      DicEspaniolPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dic_espaniol_routing_module__WEBPACK_IMPORTED_MODULE_5__["DicEspaniolPageRoutingModule"], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentsModule"]],
        declarations: [_dic_espaniol_page__WEBPACK_IMPORTED_MODULE_6__["DicEspaniolPage"]]
      })], DicEspaniolPageModule);
      /***/
    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "iTUp":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function iTUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
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


      var _filtro_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./filtro.pipe */
      "7ebX");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filtro_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroPipe"]],
        exports: [_filtro_pipe__WEBPACK_IMPORTED_MODULE_2__["FiltroPipe"]]
      })], PipesModule);
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "xK0p":
    /*!*****************************************************************!*\
      !*** ./src/app/diccionario/dic-espaniol/dic-espaniol.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function xK0p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  background: #ffffff;\n  --background:#ffffff;\n}\nion-header ion-item {\n  --background:radial-gradient(#F49B27, #ED7F23);\n  background: radial-gradient(#F49B27, #ED7F23);\n  padding: 0 10px;\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n  color: #fff;\n}\nion-header ion-item p {\n  font-weight: 500;\n  font-size: 14px;\n  color: #fff;\n}\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGljY2lvbmFyaW8vZGljLWVzcGFuaW9sL2RpYy1lc3BhbmlvbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFBSTtFQUNJLDhDQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0FBRVI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFBWjtBQUdRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQURaO0FBR1E7RUFDSSxvQkFBQTtBQURaIiwiZmlsZSI6InNyYy9hcHAvZGljY2lvbmFyaW8vZGljLWVzcGFuaW9sL2RpYy1lc3BhbmlvbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDojZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KCNGNDlCMjcsICNFRDdGMjMpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KCNGNDlCMjcsICNFRDdGMjMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map