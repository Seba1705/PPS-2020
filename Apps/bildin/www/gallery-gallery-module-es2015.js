(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/gallery.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--<ion-header>\n  <ion-toolbar mode=\"ios\" color=\"dark\">\n    <ion-title size=\"large\">picBild</ion-title>\n    <ion-avatar slot=\"end\" style=\"height:40px; width: 40px; margin-right: 8px;\" *ngIf=\"user\">\n      <img [src]=\"user ? user.imageUrl : 'Loading...'\" (click)=\"presentAlertLogout()\"> \n    </ion-avatar> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding fullscreen>\n  <ion-grid  style=\"height: 100%\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-col>\n        <ion-row size=\"12\">\n          <ion-col text-center size-sm=\"6\" offset-sm=\"3\">\n            <div class=\"container prettyAndUgly pretty\" (click)=\"navCtrl.navigateForward(['/list', 'pretty'])\">\n              <img src=\"/assets/img/lindo.jpg\" alt=\"Cinque Terre\">\n              <div class=\"center\">cosas lindas</div>\n              <div class=\"center2\">del edificio</div>      \n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col text-center size-sm=\"6\" offset-sm=\"3\">\n            <div class=\"container prettyAndUgly ugly\" (click)=\"navCtrl.navigateForward(['/list', 'ugly'])\">\n              <img src=\"/assets/img/feo.jpg\" alt=\"Cinque Terre\">\n              <div class=\"center\">cosas feas</div>\n              <div class=\"center2\" style=\"top: 70%!important;\">del edificio</div>              \n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col> -->\n      \n      <!-- <ion-row>\n        <ion-col text-center>\n          Welcome to Dashboard!\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center>\n          Your Registered EmailID : {{userEmail}}\n        </ion-col>\n      </ion-row>\n    -->\n    \n    <!-- </ion-row>\n    </ion-grid>  \n    \n  </ion-content> -->\n  \n  <!--<ion-content no-padding>\n    \n    <ion-row class=\"\">\n      <ion-col class=\"bloque height-25 p-5\" size=\"6\">\n        <div class=\"fondo\">\n          <div class=\"info\">\n            <h1>POSITIVO</h1>\n            <p>Cuidemos lo que tenemos...</p>\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col class=\"bloque height-25 right\" size=\"6\">\n        <img src=\"assets/img/cosas1.jpg\" alt=\"\">\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"\">\n      <ion-col class=\"bloque height-25\" size=\"6\">\n        <img src=\"assets/img/cosas7.jpg\" alt=\"\">\n      </ion-col>\n      <ion-col class=\"bloque height-25 right\" size=\"6\">\n        <img src=\"assets/img/cosas3.jpg\" alt=\"\">\n        \n      </ion-col>\n    </ion-row>\n    <ion-row class=\"\">\n      <ion-col class=\"bloque height-25\" size=\"6\">\n        <img src=\"assets/img/cosas4.jpg\" alt=\"\">\n        \n      </ion-col>\n      <ion-col class=\"bloque height-25 right\" size=\"6\">\n        \n        <img src=\"assets/img/cosas5.jpg\" alt=\"\">\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"\">\n      <ion-col class=\"bloque height-25\" size=\"6\">\n        \n        <img src=\"assets/img/cosas6.jpg\" alt=\"\">\n      </ion-col>\n      <ion-col class=\"bloque height-25 p-5 right\" size=\"6\">      \n        <div class=\"fondo\">\n          <div class=\"info\">\n            <h1>NEGATIVO</h1>\n            <p>Mejoremos lo que podamos...</p>\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    \n  </ion-content> -->\n\n\n  <ion-toolbar>\n    <ion-item class=\"logo\" lines=\"none\">\n      <h4>MI <span style=\"color: #b2c6fd;\"> EDIFICIO</span></h4>\n    </ion-item>\n    <div class=\"avatar\" slot=\"end\">\n      <img [src]=\"user ? user.imageUrl : 'Cargando...'\" (click)=\"presentAlertLogout()\"> \n    </div>\n  </ion-toolbar>\n\n  \n  <ion-content scroll-y=\"false\" >\n    <div class=\"center-align\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"lindas\" (click)=\"navCtrl.navigateForward(['/list', 'pretty'])\">\n          <img src=\"assets/img/cosas3.jpg\" alt=\"\">\n          <div class=\"titulo\">\n            <h1>COSAS <br> LINDAS</h1>\n          </div>  \n          \n          <ion-icon slot=\"\" name=\"md-arrow-forward\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"feas\" (click)=\"navCtrl.navigateForward(['/list', 'ugly'])\">\n          <img src=\"assets/img/cosas8.jpg\" alt=\"\">\n          <div class=\"titulo\">\n            <h1>COSAS <br> FEAS</h1>\n          </div> \n          <ion-icon slot=\"\" name=\"md-arrow-back\"></ion-icon>\n        </ion-col>         \n      </ion-row>\n    </ion-grid>\n  </div>\n  </ion-content>\n \n<!--\n  <ion-content scroll-y=\"false\" >\n    <div class=\"bg\">\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"botones\" (click)=\"navCtrl.navigateForward(['/list', 'pretty'])\">\n          <ion-item lines=\"none\">\n            <ion-label><h1>SI</h1></ion-label>\n            <ion-icon  name=\"arrow-forward\"></ion-icon>            \n          </ion-item>  \n        </ion-col>\n        <ion-col size=\"10\" class=\"desc\">        \n          <p>En esta seccion podras ver y compartir aspectos positivos sobre tu edificio.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"botones\" (click)=\"navCtrl.navigateForward(['/list', 'ugly'])\">\n          <ion-item lines=\"none\">\n            <ion-label><h1>NO</h1></ion-label>\n            <ion-icon  name=\"arrow-forward\"></ion-icon>            \n          </ion-item>\n        </ion-col>\n        <ion-col size=\"10\" class=\"desc\">\n          <p>Hay algo que no te gusta? Hazlo publico y ayuda a mejorar tu edifico.  </p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  </ion-content>\n\n-->\n\n\n"

/***/ }),

/***/ "./src/app/gallery/gallery.module.ts":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/*! exports provided: GalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery.page */ "./src/app/gallery/gallery.page.ts");







const routes = [
    {
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]
    }
];
let GalleryPageModule = class GalleryPageModule {
};
GalleryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
    })
], GalleryPageModule);

// const routes: Routes = [
//   {
//     path: '',
//     component: GalleryPage,
//     children: [
//       {
//         path: 'list',
//         children: [
//           {
//             path: '',
//               loadChildren: './list/list.module#ListPageModule'
//           },
//           {
//             path: 'details:postId',
//               loadChildren: './list/details/details.module#DetailsPageModule'
//           }
//         ]
//       }
//     ]
//   }
// ];


/***/ }),

/***/ "./src/app/gallery/gallery.page.scss":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  background: var(--ion-color-primary) !important;\n  background: black !important;\n}\n\nion-title {\n  font-size: 35px;\n  font-weight: 200;\n}\n\nion-header {\n  background-color: black !important;\n  background: black;\n}\n\n.container {\n  position: relative;\n  margin-bottom: 30px;\n  text-transform: uppercase;\n}\n\n.center {\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 60px;\n  letter-spacing: 0px;\n  font-weight: 200;\n  line-height: 0.8em;\n}\n\n.center2 {\n  position: absolute;\n  top: 73%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 30px;\n  font-weight: 200;\n  line-height: 0.8em;\n}\n\n.prettyAndUgly {\n  overflow: hidden;\n  border-radius: 15px;\n  background-size: 600px 400px;\n}\n\n.prettyAndUgly img {\n  width: 100%;\n  height: auto;\n  -webkit-filter: brightness(60%);\n          filter: brightness(60%);\n  border-radius: 15px;\n}\n\n.height-25 {\n  height: 25vh;\n}\n\n.bloque {\n  padding: 0;\n}\n\n.height-25 img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 5px 5px 0 5px;\n}\n\n.right img {\n  padding: 5px 5px 0 0;\n}\n\n.fondo {\n  width: 100%;\n  height: 100%;\n  background: skyblue;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.info h1 {\n  margin-top: 0;\n  font-weight: 600;\n}\n\n.info {\n  padding: 10px;\n}\n\n.p-5 {\n  padding: 5px;\n}\n\n.botones ion-icon {\n  font-size: 4rem;\n  margin-top: -2rem;\n  color: black;\n}\n\n.botones h1 {\n  font-size: 7rem;\n}\n\n.botones ion-label {\n  margin: 0;\n}\n\n.botones ion-item {\n  border-top: 3px solid black;\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-toolbar ion-label, ion-toolbar ion-icon {\n  font-size: 1.5rem;\n}\n\nion-toolbar, ion-icon {\n  color: black;\n}\n\n.footer {\n  background: transparent;\n}\n\n.scroll-content {\n  margin-bottom: 0 !important;\n}\n\n.bg {\n  height: 100%;\n  background: url('bg4.png');\n  background-size: contain;\n  background-position: bottom;\n  background-repeat: no-repeat;\n}\n\n.desc p {\n  margin: 0 0 10px;\n}\n\n.lindas img {\n  height: 40vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: 20%;\n  width: 100%;\n  border-radius: 5px;\n}\n\n.feas img {\n  height: 40vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: -20%;\n  width: 100%;\n  border-radius: 5px;\n}\n\n.lindas ion-icon {\n  position: absolute;\n  bottom: 10%;\n  right: 5%;\n  font-size: 3rem;\n  color: white;\n}\n\n.feas ion-icon {\n  position: absolute;\n  bottom: 10%;\n  left: 5%;\n  font-size: 3rem;\n  color: white;\n}\n\n.center-align {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.lindas .titulo {\n  position: absolute;\n  bottom: 0;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 70%;\n  left: 10%;\n}\n\n.titulo h1 {\n  background: white;\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 35px;\n  font-weight: 600;\n}\n\n.feas .titulo {\n  position: absolute;\n  bottom: 0;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 70%;\n  right: 10%;\n}\n\nion-toolbar ion-icon {\n  font-size: 6rem;\n  height: 2rem;\n}\n\n.lindas {\n  margin-bottom: 10px;\n}\n\n.avatar img {\n  border-radius: 10px;\n  height: 47px;\n  width: 47px;\n  margin-right: 5px;\n  margin-top: 4px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9DOlxcVXNlcnNcXGNhbWFyXFxEb2N1bWVudHNcXFBQU1xcYmlsZGluL3NyY1xcYXBwXFxnYWxsZXJ5XFxnYWxsZXJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREdBO0VBQ0ksa0NBQUE7RUFDQSxpQkFBQTtBQ0FKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDREo7O0FES0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ0ZKOztBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURNRTtFQUNFLFlBQUE7QUNISjs7QURNRTtFQUNFLFVBQUE7QUNISjs7QURNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHNCQUFBO0FDSEo7O0FETUU7RUFDRSxvQkFBQTtBQ0hKOztBRE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNISjs7QURNRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRE1FO0VBQ0UsYUFBQTtBQ0hKOztBRE1FO0VBQ0UsWUFBQTtBQ0hKOztBRE1FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1FO0VBQ0UsZUFBQTtBQ0hKOztBREtFO0VBQ0UsU0FBQTtBQ0ZKOztBREtFO0VBQ0UsMkJBQUE7QUNGSjs7QURLRTtFQUNFLHlCQUFBO0FDRko7O0FES0U7RUFDRSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0UsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsdUJBQUE7QUNGRjs7QURLQTtFQUNFLDJCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDRSxZQUFBO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsWUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNGSjs7QURLQTtFQUNFLGtCQUFBO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0ZKOztBREtBO0VBQ0UsaUJBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURNQTtFQUNFLGtCQUFBO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNFLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogYmxhY2shaW1wb3J0YW50O1xuICAgIC8vIGZvbnQtc2l6ZTogNTBweCFpbXBvcnRhbnQ7XG59XG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cblxuaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2shaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgfVxuICBcbiAgLmNlbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcblxuICB9XG4gIC5jZW50ZXIyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3MyU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgfVxuXG4gIC5wcmV0dHlBbmRVZ2x5e1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDYwMHB4IDQwMHB4O1xuICB9XG4gIC5wcmV0dHlBbmRVZ2x5IGltZyB7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvLyBvcGFjaXR5OiAwLjM7XG4gICAgZmlsdGVyOmJyaWdodG5lc3MoNjAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG5cblxuICAuaGVpZ2h0LTI1e1xuICAgIGhlaWdodDogMjV2aDtcbiAgfVxuXG4gIC5ibG9xdWV7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5oZWlnaHQtMjUgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgXG4gICAgcGFkZGluZzogNXB4IDVweCAwIDVweDtcbiAgfVxuXG4gIC5yaWdodCBpbWd7XG4gICAgcGFkZGluZzogNXB4IDVweCAwIDA7XG4gIH1cblxuICAuZm9uZG97XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmluZm8gaDF7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLmluZm97XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5wLTV7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLmJvdG9uZXMgaW9uLWljb257XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIG1hcmdpbi10b3A6IC0ycmVtO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5ib3RvbmVzIGgxe1xuICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgfVxuICAuYm90b25lcyBpb24tbGFiZWx7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmJvdG9uZXMgaW9uLWl0ZW17XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xuICB9XG5cbiAgaW9uLWl0ZW17XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIGlvbi10b29sYmFyIGlvbi1sYWJlbCwgaW9uLXRvb2xiYXIgaW9uLWljb257XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuaW9uLXRvb2xiYXIsIGlvbi1pY29ue1xuICBjb2xvcjpibGFjaztcbn1cblxuLmZvb3RlcntcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xufVxuXG4uYmd7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmc0LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uZGVzYyBwe1xuICBtYXJnaW46IDAgMCAxMHB4XG59XG5cbi5saW5kYXMgaW1ne1xuICBoZWlnaHQ6IDQwdmg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mZWFzIGltZ3tcbiAgaGVpZ2h0OiA0MHZoO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxpbmRhcyBpb24taWNvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwJTtcbiAgcmlnaHQ6IDUlO1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZlYXMgaW9uLWljb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIGxlZnQ6IDUlO1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNlbnRlci1hbGlnbntcbiAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxpbmRhcyAudGl0dWxve1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgbGVmdDogMTAlO1xufVxuXG4udGl0dWxvIGgxe1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcblxufVxuXG4uZmVhcyAudGl0dWxve1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgcmlnaHQ6IDEwJTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWljb257XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuXG4ubGluZGFze1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYXZhdGFyIGltZ3tcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICB3aWR0aDogNDdweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59IiwiaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG5pb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDYwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbn1cblxuLmNlbnRlcjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzMlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbn1cblxuLnByZXR0eUFuZFVnbHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDYwMHB4IDQwMHB4O1xufVxuXG4ucHJldHR5QW5kVWdseSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoNjAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmhlaWdodC0yNSB7XG4gIGhlaWdodDogMjV2aDtcbn1cblxuLmJsb3F1ZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oZWlnaHQtMjUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBhZGRpbmc6IDVweCA1cHggMCA1cHg7XG59XG5cbi5yaWdodCBpbWcge1xuICBwYWRkaW5nOiA1cHggNXB4IDAgMDtcbn1cblxuLmZvbmRvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmluZm8gaDEge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW5mbyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wLTUge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5ib3RvbmVzIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tdG9wOiAtMnJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYm90b25lcyBoMSB7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbn1cblxuLmJvdG9uZXMgaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYm90b25lcyBpb24taXRlbSB7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCBibGFjaztcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tdG9vbGJhciBpb24tbGFiZWwsIGlvbi10b29sYmFyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmlvbi10b29sYmFyLCBpb24taWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5iZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmc0LnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uZGVzYyBwIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cblxuLmxpbmRhcyBpbWcge1xuICBoZWlnaHQ6IDQwdmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZmVhcyBpbWcge1xuICBoZWlnaHQ6IDQwdmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW4tbGVmdDogLTIwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmxpbmRhcyBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIHJpZ2h0OiA1JTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mZWFzIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwJTtcbiAgbGVmdDogNSU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGluZGFzIC50aXR1bG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MCU7XG4gIGxlZnQ6IDEwJTtcbn1cblxuLnRpdHVsbyBoMSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZlYXMgLnRpdHVsbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDcwJTtcbiAgcmlnaHQ6IDEwJTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDZyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cblxuLmxpbmRhcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5hdmF0YXIgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA0N3B4O1xuICB3aWR0aDogNDdweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/gallery/gallery.page.ts":
/*!*****************************************!*\
  !*** ./src/app/gallery/gallery.page.ts ***!
  \*****************************************/
/*! exports provided: GalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPage", function() { return GalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");





let GalleryPage = class GalleryPage {
    constructor(navCtrl, authService, alertController) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertController = alertController;
    }
    ngOnInit() {
        // this.user = JSON.parse(localStorage.getItem('user-bd'));
        _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Storage.get({ key: 'user-bd' }).then((userData) => {
            this.user = JSON.parse(userData.value);
        }, () => {
            this.navCtrl.navigateBack('login');
        });
    }
    logout() {
        this.authService.logoutUser()
            .then(res => {
            // console.log(res);
            this.navCtrl.navigateBack('');
        })
            .catch(error => {
            console.log(error);
        });
    }
    presentAlertLogout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cerrar sesión',
                message: '¿Quieres cerrar sesión?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'OK',
                        handler: () => {
                            this.logout();
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
GalleryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
GalleryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__(/*! raw-loader!./gallery.page.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.page.html"),
        styles: [__webpack_require__(/*! ./gallery.page.scss */ "./src/app/gallery/gallery.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], GalleryPage);



/***/ })

}]);
//# sourceMappingURL=gallery-gallery-module-es2015.js.map