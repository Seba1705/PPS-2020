(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-list-details-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/list/details/details.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/list/details/details.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow>\n  <ion-toolbar translucent mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"navCtrl.navigateForward(['/list', post.type])\"></ion-back-button>\n    </ion-buttons>\n    <ion-title><ion-icon slot=\"start\" src=\"assets/img/bildin-text.svg\"></ion-icon></ion-title>    \n      <div class=\"avatar\" slot=\"end\">\n        <img [src]=\"user ? user.imageUrl : 'Cargando...'\" (click)=\"presentAlertLogout()\"> \n      </div> \n  </ion-toolbar>\n</ion-header>\n\n\n<div class=\"blank\" *ngIf=\"spinner\">\n  <ion-spinner color=\"primary\"></ion-spinner>\n</div>\n\n\n<ion-content>\n  <div text-center *ngIf=\"isLoading\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <ion-grid no-padding *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=\"3\" no-padding>\n        <ion-img class=\"foto\" [src]=\"post.imageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n\n    <ion-list padding class=\"informacion\">\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"post.user.imageUrl\">\n        </ion-avatar>\n        <ion-label>\n          <h2>{{post.user.name ? post.user.name : 'sin usuario'}}</h2>\n        </ion-label>\n        <ion-icon class=\"corazon\" *ngIf=\"!voted\" (click)=\"onVote()\" slot=\"end\" src=\"assets/img/heart.svg\"></ion-icon>\n        <ion-icon class=\"corazon\" *ngIf=\"voted\" (click)=\"onCancelVote()\" slot=\"end\" src=\"assets/img/heart-full.svg\"></ion-icon>\n      </ion-item>\n\n      <ion-item class=\"titulo\" lines=\"none\">\n        <ion-label>\n          <h1>{{post.title}}</h1>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n          <p>{{post.description}}</p>\n      </ion-item>\n\n      <ion-item >\n        <ion-label>\n          <h2>Fecha de carga:</h2>\n          <p style=\"font-weight: 800\">{{post.date | date: 'medium'}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </ion-grid>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/gallery/list/details/details.module.ts":
/*!********************************************************!*\
  !*** ./src/app/gallery/list/details/details.module.ts ***!
  \********************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/gallery/list/details/details.page.ts");







const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]
    }
];
let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/gallery/list/details/details.page.scss":
/*!********************************************************!*\
  !*** ./src/app/gallery/list/details/details.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-back-button {\n  background: white;\n  border-radius: 10px;\n  margin-left: 5px;\n}\n\nion-toolbar {\n  --background: transparent;\n  margin-bottom: -5rem;\n}\n\n.scroll-content {\n  padding-top: 0px !important;\n}\n\n.avatar img {\n  border-radius: 10px;\n  height: 47px;\n  width: 47px;\n  margin-right: 5px;\n  margin-top: 4px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.informacion {\n  border-radius: 25px 25px 0 0;\n  margin-top: -30px;\n}\n\n.titulo h1 {\n  font-weight: 600;\n}\n\n.corazon {\n  color: #ff4040;\n}\n\n.blank {\n  width: 100%;\n  height: 100%;\n  background-color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 9;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9saXN0L2RldGFpbHMvQzpcXFVzZXJzXFxjYW1hclxcRG9jdW1lbnRzXFxQUFNcXGJpbGRpbi9zcmNcXGFwcFxcZ2FsbGVyeVxcbGlzdFxcZGV0YWlsc1xcZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2dhbGxlcnkvbGlzdC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtFQUNBLG9CQUFBO0FDRUo7O0FEQUE7RUFDSSwyQkFBQTtBQ0dKOztBREFFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNHSjs7QUREQTtFQUNJLDRCQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QUREQTtFQUNJLGdCQUFBO0FDSUo7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FEREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvbGlzdC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhY2stYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbmlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLTVyZW07XG59XG4uc2Nyb2xsLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hdmF0YXIgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiA0N3B4O1xuICAgIHdpZHRoOiA0N3B4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5pbmZvcm1hY2lvbntcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4udGl0dWxvIGgxe1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb3Jhem9ue1xuICAgIGNvbG9yOiAjZmY0MDQwO1xufVxuXG4uYmxhbmt7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHotaW5kZXg6IDk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIiwiaW9uLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLWJvdHRvbTogLTVyZW07XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmF2YXRhciBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHdpZHRoOiA0N3B4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmluZm9ybWFjaW9uIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi50aXR1bG8gaDEge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY29yYXpvbiB7XG4gIGNvbG9yOiAjZmY0MDQwO1xufVxuXG4uYmxhbmsge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/gallery/list/details/details.page.ts":
/*!******************************************************!*\
  !*** ./src/app/gallery/list/details/details.page.ts ***!
  \******************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");






let DetailsPage = class DetailsPage {
    constructor(route, navCtrl, database, toastController) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.database = database;
        this.toastController = toastController;
        this.isLoading = false;
        this.postId = '';
        this.voted = false;
        this.spinner = true;
    }
    ngOnInit() {
        // this.user = JSON.parse(localStorage.getItem('user-bd'));
        _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Storage.get({ key: 'user-bd' }).then((userData) => {
            this.user = JSON.parse(userData.value);
        }, () => {
            this.navCtrl.navigateBack('login');
        });
        this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('postId')) {
                this.navCtrl.navigateBack('/gallery');
                return;
            }
            this.isLoading = true;
            this.postId = paramMap.get('postId');
            this.database.TraerUno('picbild-posts', this.postId).then(post => {
                // console.log('este es el post ' + JSON.stringify(post));
                this.post = post;
                this.voted = (this.post.votes || this.post.votes.length < 1) ? this.post.votes.includes(this.user.id) : false;
                this.isLoading = false;
                setTimeout(() => this.spinner = false, 1000);
            });
        });
    }
    onVote() {
        if (!this.post.votes) {
            this.post.votes = [];
        }
        this.post.votes.push(this.user.id);
        console.log(this.post);
        this.database.ModificarUno(JSON.parse(JSON.stringify(this.post)), 'picbild-posts')
            .then(() => {
            this.voted = true;
            this.presentToast();
        });
    }
    onCancelVote() {
        const index = this.post.votes.indexOf(this.user.id);
        if (index > -1) {
            this.post.votes.splice(index);
            this.database.ModificarUno(JSON.parse(JSON.stringify(this.post)), 'picbild-posts')
                .then(() => {
                this.voted = false;
            });
        }
    }
    ngOnDestroy() {
        if (this.postSub) {
            this.postSub.unsubscribe();
        }
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: '¡Muchas gracias por tu voto!',
                duration: 2000
            });
            toast.present();
        });
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/list/details/details.page.html"),
        styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/gallery/list/details/details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=gallery-list-details-details-module-es2015.js.map