(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cancionero-cancionero-module"], {
    /***/
    "55PQ":
    /*!*************************************************!*\
      !*** ./src/app/cancionero/cancionero.module.ts ***!
      \*************************************************/

    /*! exports provided: CancioneroPageModule */

    /***/
    function PQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancioneroPageModule", function () {
        return CancioneroPageModule;
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


      var _cancionero_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cancionero-routing.module */
      "fHo3");
      /* harmony import */


      var _cancionero_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cancionero.page */
      "VU+r");
      /* harmony import */


      var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/shared-components.module */
      "IA6j");

      var CancioneroPageModule = function CancioneroPageModule() {
        _classCallCheck(this, CancioneroPageModule);
      };

      CancioneroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cancionero_routing_module__WEBPACK_IMPORTED_MODULE_5__["CancioneroPageRoutingModule"], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_cancionero_page__WEBPACK_IMPORTED_MODULE_6__["CancioneroPage"]]
      })], CancioneroPageModule);
      /***/
    },

    /***/
    "C4Bs":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cancionero/cancionero.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function C4Bs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>\r\n      <p>Bienvenido,</p>\r\n      <h3>Samuel Vallecillo</h3>\r\n    </ion-label>  \r\n  </ion-item>\r\n  \r\n</ion-header>\r\n\r\n<ion-content scrollY=\"false\">\r\n\r\n  <ion-content>\r\n\r\n    <ion-item lines=\"none\" *ngFor=\"let song of songs\" (click)=\"playSong(song.title, song.subtitle, song.img, song.path)\">\r\n\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"{{song.img}}\"/>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>{{song.title}}</h2>\r\n        <p>{{song.subtitle}}</p>\r\n      </ion-label>\r\n    </ion-item>  </ion-content>\r\n\r\n  <ion-fab *ngIf=\"!isfull\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"drawer.toggleDrawer()\" expand=\"full\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"menu-sharp\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n    \r\n    <app-drawer #drawer></app-drawer>\r\n\r\n</ion-content>\r\n\r\n<!--Vista completa del reproductor-->\r\n<div class=\"ion-text-center\" id=\"fullPlayer\">\r\n  \r\n<!--Icono para minimizar el reproductor-->\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"minimize()\">\r\n        <ion-icon slot=\"end\" name=\"chevron-down-circle-sharp\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <img src=\"{{currImage}}\" alt=\"\" id=\"currImg\" />\r\n\r\n  <h2>\r\n    {{currTitle}}\r\n  </h2>\r\n  <p>\r\n    {{currSubtitle}}\r\n  </p>\r\n\r\n  <ion-item lines=\"none\">\r\n    <ion-range #range (touchmove)=\"touchMove()\" (touchend)=\"touchEnd()\" (touchstart)=\"touchStart()\" max=\"{{maxRangevalue}}\" [(ngModel)]=\"currRangeTime\">\r\n      <ion-label slot=\"start\">\r\n        <ion-text>\r\n          <b>{{currSecsText}}</b>\r\n        </ion-text>\r\n      </ion-label>\r\n      <ion-label slot=\"end\">\r\n        <ion-text>\r\n          <b>{{durationText}}</b>\r\n        </ion-text>\r\n      </ion-label>\r\n    </ion-range>\r\n  </ion-item>\r\n\r\n  <!--Reprodurcir canción previa-->\r\n  <ion-button fill=\"clear\" (click)=\"playPrev()\">\r\n    <ion-icon name=\"play-skip-back-sharp\" style=\"font-size: 30px;\"></ion-icon>\r\n  </ion-button>\r\n\r\n  <!--Botón del reproductor-->\r\n  <ion-button fill=\"clear\" *ngIf=\"!isPlaying\" (click)=\"play()\">\r\n    <ion-icon name=\"play-sharp\" style=\"font-size: 40px;\"></ion-icon>\r\n  </ion-button>\r\n\r\n  <!--Botón de pausa-->\r\n  <ion-button fill=\"clear\" *ngIf=\"isPlaying\" (click)=\"pause()\">\r\n    <ion-icon name=\"pause-sharp\" style=\"font-size: 40px;\"></ion-icon>\r\n  </ion-button>\r\n\r\n  <!--Botón Reproducir canción siguiente-->\r\n  <ion-button fill=\"clear\" (click)=\"playNext()\">\r\n    <ion-icon name=\"play-skip-forward-sharp\" style=\"font-size: 30px;\"></ion-icon>\r\n  </ion-button>\r\n\r\n  <ion-list-header>\r\n    Siguiente canción\r\n  </ion-list-header>\r\n\r\n  <!--Siguiente canción a reproducir-->\r\n\r\n  <ion-item>\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"{{upNextImg}}\" />\r\n    </ion-thumbnail>\r\n    <ion-label>\r\n      <h2>\r\n        {{upNextTitle}}\r\n      </h2>\r\n      <p>{{upNextSubtitle}}</p>\r\n    </ion-label>\r\n  </ion-item>\r\n</div>\r\n\r\n<!--Minimizar la vista del reproductor-->\r\n<ion-toolbar id=\"miniPlayer\">\r\n  <ion-item>\r\n    <ion-thumbnail slot=\"start\" (click)=\"maximize()\">\r\n      <img src=\"{{currImage}}\" />\r\n    </ion-thumbnail>\r\n    <ion-label (click)=\"maximize()\">\r\n      <h2>{{currTitle}}</h2>\r\n      <p>{{currSubtitle}}</p>\r\n    </ion-label>\r\n\r\n    <!--Botón de reproductor para la vista minimizada-->\r\n    <ion-button (click)=\"play()\"  fill=\"clear\" *ngIf=\"!isPlaying\">\r\n      <ion-icon name=\"play-sharp\" style=\"font-size: x-large;\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <!--Botón de pausa para la vista minimizada-->\r\n    <ion-button (click)=\"pause()\" fill=\"clear\" *ngIf=\"isPlaying\">\r\n      <ion-icon name=\"pause-sharp\" style=\"font-size: x-large;\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <!--Botón de cancelación de la música-->\r\n    <ion-button (click)=\"cancel()\" mode=\"ios\" fill=\"clear\">\r\n      <ion-icon name=\"close-sharp\" style=\"font-size: x-large;\"></ion-icon>\r\n    </ion-button>\r\n  </ion-item>\r\n\r\n  <!--Barra de progreso de la reproducción de la música-->\r\n  <ion-progress-bar value=\"{{progress}}\"></ion-progress-bar>\r\n\r\n</ion-toolbar>\r\n";
      /***/
    },

    /***/
    "VU+r":
    /*!***********************************************!*\
      !*** ./src/app/cancionero/cancionero.page.ts ***!
      \***********************************************/

    /*! exports provided: CancioneroPage */

    /***/
    function VUR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancioneroPage", function () {
        return CancioneroPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cancionero_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cancionero.page.html */
      "C4Bs");
      /* harmony import */


      var _cancionero_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cancionero.page.scss */
      "lJTX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CancioneroPage = /*#__PURE__*/function () {
        function CancioneroPage() {
          _classCallCheck(this, CancioneroPage);

          this.songs = [{
            title: "Dan Dan Kokoro",
            subtitle: "Dragon Ball GT",
            img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/gt.jpg?alt=media&token=a31064a2-a02c-4066-af62-02e538c712c2",
            path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/Dan_Dan.mp3?alt=media&token=344ed1dd-8afa-4280-8b8a-922bc7a23d1c"
          }, {
            title: "Blue Bird",
            subtitle: "Naruto Shippuden",
            img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/blue_bird.jpg?alt=media&token=205ff211-185c-428b-927e-a63d4920fead",
            path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/Blue_Bird.mp3?alt=media&token=52c6a74a-3f19-4109-8aca-d9594dffea4f"
          }, {
            title: "Butterfly",
            subtitle: "Digimon Adventura",
            img: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/digimon.jpg?alt=media&token=2eed1051-01bf-403f-8bb3-8e73de4840ff",
            path: "https://firebasestorage.googleapis.com/v0/b/uhung-ionic.appspot.com/o/Butter_Fly.mp3?alt=media&token=f548a5aa-b25e-41a6-a303-87b09ffd936c"
          }]; //Barra de progreso

          this.progress = 0; //triger para el botón de play/pause

          this.isPlaying = false;
          this.isfull = false; //Pista del ion-range

          this.isTouched = false;
        }

        _createClass(CancioneroPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //Reproducir canción

        }, {
          key: "playSong",
          value: function playSong(title, subTitle, img, song) {
            var _this = this;

            if (this.currSong != null) {
              this.currSong.pause(); //Detener la canción que se esta reproduciendo
            }

            this.isfull = true; //Abrir la vista del reproductor

            document.getElementById("fullPlayer").style.bottom = "0px"; //Colocar detalles de la cación actual

            this.currTitle = title;
            this.currSubtitle = subTitle;
            this.currImage = img; //Audio de la canción actual

            this.currSong = new Audio(song);
            this.currSong.play().then(function () {
              //Duración total de la canción
              _this.durationText = _this.sToTime(_this.currSong.duration); //Colocar el valor maximo (Permite mostrar el progreso de la canción)

              _this.maxRangevalue = Number(_this.currSong.duration.toFixed(2).toString().substring(0, 5)); //Colocar datos de la siguiente canción
              //Obtener canción actual 

              var index = _this.songs.findIndex(function (x) {
                return x.title == _this.currTitle;
              }); //si la canción actual es la última, configura la información de la primera canción para la siguiente canción


              if (index + 1 == _this.songs.length) {
                _this.upNextImg = _this.songs[0].img;
                _this.upNextTitle = _this.songs[0].title;
                _this.upNextSubtitle = _this.songs[0].subtitle;
              } //de lo contrario, se establece la información de la siguiente canción para la siguiente canción
              else {
                  _this.upNextImg = _this.songs[index + 1].img;
                  _this.upNextTitle = _this.songs[index + 1].title;
                  _this.upNextSubtitle = _this.songs[index + 1].subtitle;
                }

              _this.isPlaying = true;
            });
            this.currSong.addEventListener("timeupdate", function () {
              //actualice la información a medida que se reproduce la canción
              //si el ion-range no es tocado el actualiza la información
              if (!_this.isTouched) {
                //Actualizar el valor del ion-range
                _this.currRangeTime = Number(_this.currSong.currentTime.toFixed(2).toString().substring(0, 5)); //Actualiza el texto de lo segundos

                _this.currSecsText = _this.sToTime(_this.currSong.currentTime); //Actualiza la barra de porgreso de la vista minimozada

                _this.progress = Math.floor(_this.currSong.currentTime) / Math.floor(_this.currSong.duration); //Si la canción termina, Reproduce la siguiente canción

                if (_this.currSong.currentTime == _this.currSong.duration) {
                  _this.playNext();
                }
              }
            });
          }
        }, {
          key: "sToTime",
          value: function sToTime(t) {
            return this.padZero(parseInt(String(t / 60 % 60))) + ":" + this.padZero(parseInt(String(t % 60)));
          }
        }, {
          key: "padZero",
          value: function padZero(v) {
            return v < 10 ? "0" + v : v;
          }
        }, {
          key: "playNext",
          value: function playNext() {
            var _this2 = this;

            var index = this.songs.findIndex(function (x) {
              return x.title == _this2.currTitle;
            });

            if (index + 1 == this.songs.length) {
              this.playSong(this.songs[0].title, this.songs[0].subtitle, this.songs[0].img, this.songs[0].path);
            } else {
              var nextIndex = index + 1;
              this.playSong(this.songs[nextIndex].title, this.songs[nextIndex].subtitle, this.songs[nextIndex].img, this.songs[nextIndex].path);
            }
          }
        }, {
          key: "playPrev",
          value: function playPrev() {
            var _this3 = this;

            var index = this.songs.findIndex(function (x) {
              return x.title == _this3.currTitle;
            });

            if (index == 0) {
              var lastIndex = this.songs.length - 1;
              this.playSong(this.songs[lastIndex].title, this.songs[lastIndex].subtitle, this.songs[lastIndex].img, this.songs[lastIndex].path);
            } else {
              var prevIndex = index - 1;
              this.playSong(this.songs[prevIndex].title, this.songs[prevIndex].subtitle, this.songs[prevIndex].img, this.songs[prevIndex].path);
            }
          }
        }, {
          key: "minimize",
          value: function minimize() {
            document.getElementById("fullPlayer").style.bottom = "-1000px";
            document.getElementById("miniPlayer").style.bottom = "0px";
            this.isfull = false;
          }
        }, {
          key: "maximize",
          value: function maximize() {
            document.getElementById("fullPlayer").style.bottom = "0px";
            document.getElementById("miniPlayer").style.bottom = "-100px";
            this.isfull = true;
          }
        }, {
          key: "pause",
          value: function pause() {
            this.currSong.pause();
            this.isPlaying = false;
          }
        }, {
          key: "play",
          value: function play() {
            this.currSong.play();
            this.isPlaying = true;
          }
        }, {
          key: "cancel",
          value: function cancel() {
            document.getElementById("miniPlayer").style.bottom = "-100px";
            this.currImage = "";
            this.currTitle = "";
            this.currSubtitle = "";
            this.progress = 0;
            this.currSong.pause();
            this.isPlaying = false;
          }
        }, {
          key: "touchStart",
          value: function touchStart() {
            this.isTouched = true;
            this.currRangeTime = Number(this.range.value);
          }
        }, {
          key: "touchMove",
          value: function touchMove() {
            this.currSecsText = this.sToTime(this.range.value);
          }
        }, {
          key: "touchEnd",
          value: function touchEnd() {
            this.isTouched = false; //console.log(Number(this.range.value));

            this.currSong.currentTime = Number(this.range.value);
            this.currSecsText = this.sToTime(this.currSong.currentTime);
            this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));

            if (this.isPlaying) {
              this.currSong.play();
            }
          }
        }]);

        return CancioneroPage;
      }();

      CancioneroPage.ctorParameters = function () {
        return [];
      };

      CancioneroPage.propDecorators = {
        range: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["range", {
            "static": false
          }]
        }]
      };
      CancioneroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cancionero',
        template: _raw_loader_cancionero_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cancionero_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CancioneroPage);
      /***/
    },

    /***/
    "fHo3":
    /*!*********************************************************!*\
      !*** ./src/app/cancionero/cancionero-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CancioneroPageRoutingModule */

    /***/
    function fHo3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancioneroPageRoutingModule", function () {
        return CancioneroPageRoutingModule;
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


      var _cancionero_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cancionero.page */
      "VU+r");

      var routes = [{
        path: '',
        component: _cancionero_page__WEBPACK_IMPORTED_MODULE_3__["CancioneroPage"]
      }];

      var CancioneroPageRoutingModule = function CancioneroPageRoutingModule() {
        _classCallCheck(this, CancioneroPageRoutingModule);
      };

      CancioneroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CancioneroPageRoutingModule);
      /***/
    },

    /***/
    "lJTX":
    /*!*************************************************!*\
      !*** ./src/app/cancionero/cancionero.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function lJTX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-item {\n  --background:radial-gradient(#F49B27, #ED7F23);\n  background: radial-gradient(#F49B27, #ED7F23);\n  padding: 0 10px;\n}\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n  color: #fff;\n}\nion-header ion-item p {\n  font-weight: 500;\n  font-size: 14px;\n  color: #fff;\n}\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\nion-button ion-icon {\n  color: #ED7F23;\n}\nion-item {\n  color: #ED7F23;\n}\nion-range {\n  --knob-background: #ED7F23;\n  --bar-background-active: #ED7F23;\n}\nion-progress-bar {\n  --progress-background: #ED7F23;\n}\nion-item ion-thumbnail img {\n  border-radius: 10px;\n}\nion-item ion-label h2, ion-item ion-label p {\n  font-weight: bold;\n}\n#miniPlayer {\n  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 10px 10px 0 0;\n  transition: 0.5s;\n  background-color: #fff;\n  bottom: -100px;\n}\n#miniPlayer ion-progress-bar {\n  z-index: 10;\n}\n#fullPlayer {\n  transition: 0.5s;\n  position: fixed;\n  width: 100%;\n  height: 92%;\n  left: 0;\n  background: #fff;\n  z-index: 20;\n  bottom: -1000px;\n}\n#fullPlayer #currImg {\n  margin-top: 30px;\n  width: 200px;\n  height: 200px;\n  border-radius: 10px;\n}\n#fullPlayer p {\n  color: #8c8c8c;\n  margin: 0;\n}\n#fullPlayer ion-text {\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuY2lvbmVyby9jYW5jaW9uZXJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDhDQUFBO0VBQ0EsNkNBQUE7RUFDQSxlQUFBO0FBQVI7QUFJUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFGWjtBQUtRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUhaO0FBS1E7RUFDSSxvQkFBQTtBQUhaO0FBV0k7RUFDSSxjQUFBO0FBUlI7QUFZRztFQUNDLGNBQUE7QUFUSjtBQVlHO0VBRUMsMEJBQUE7RUFDQSxnQ0FBQTtBQVZKO0FBY0c7RUFDQyw4QkFBQTtBQVhKO0FBaUJRO0VBQ0ksbUJBQUE7QUFkWjtBQW1CUTtFQUNJLGlCQUFBO0FBakJaO0FBc0JBO0VBQ0ksNENBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFHQSxjQUFBO0FBckJKO0FBdUJJO0VBQ0ksV0FBQTtBQXJCUjtBQXlCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUdBLGVBQUE7QUF4Qko7QUEwQkk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF4QlI7QUEyQkk7RUFDSSxjQUFBO0VBQ0EsU0FBQTtBQXpCUjtBQTRCSTtFQUNJLGlCQUFBO0FBMUJSIiwiZmlsZSI6InNyYy9hcHAvY2FuY2lvbmVyby9jYW5jaW9uZXJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KCNGNDlCMjcsICNFRDdGMjMpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmFkaWFsLWdyYWRpZW50KCNGNDlCMjcsICNFRDdGMjMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWF2YXRhcntcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBjb2xvcjogI0VEN0YyMztcclxuICAgIH1cclxuICAgIFxyXG4gICB9XHJcbiAgIGlvbi1pdGVte1xyXG4gICAgY29sb3I6ICNFRDdGMjM7XHJcbiAgIH1cclxuXHJcbiAgIGlvbi1yYW5nZXtcclxuXHJcbiAgICAtLWtub2ItYmFja2dyb3VuZDogI0VEN0YyMztcclxuICAgIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiAjRUQ3RjIzO1xyXG5cclxuICAgfVxyXG5cclxuICAgaW9uLXByb2dyZXNzLWJhcntcclxuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogI0VEN0YyMztcclxuICAgfVxyXG5cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgaW9uLXRodW1ibmFpbHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBoMixwe1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNtaW5pUGxheWVye1xyXG4gICAgYm94LXNoYWRvdzogMHB4IC00cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgLy9vY3VsdGFyIHBvciBkZWZlY3RvXHJcbiAgICBib3R0b206IC0xMDBweDtcclxuXHJcbiAgICBpb24tcHJvZ3Jlc3MtYmFye1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG59XHJcblxyXG4jZnVsbFBsYXllcntcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTIlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuXHJcbiAgICAvL29jdWx0YXIgcG9yIGRlZmVjdG9cclxuICAgIGJvdHRvbTogLTEwMDBweDtcclxuXHJcbiAgICAjY3VyckltZ3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgICBjb2xvcjogIzhjOGM4YztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=cancionero-cancionero-module-es5.js.map