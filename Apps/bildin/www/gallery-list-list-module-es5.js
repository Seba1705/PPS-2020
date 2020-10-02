(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/list/list.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/list/list.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow >\n  <ion-toolbar translucent mode=\"ios\">\n      <div class=\"avatar\" slot=\"end\">\n        <img [src]=\"user ? user.imageUrl : 'Cargando...'\" (click)=\"presentAlertLogout()\"> \n      </div>\n      <ion-title><h4>MI <span style=\"color: #b2c6fd;\"> EDIFICIO</span></h4></ion-title> \n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n              <ion-back-button defaultHref=\"/gallery\"></ion-back-button>\n          </ion-buttons>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"blank\" *ngIf=\"spinner\">\n  <ion-spinner color=\"primary\"></ion-spinner>\n</div>\n\n<ion-content fullscreen>\n\n  <ion-grid *ngIf=\"isLoading\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!isLoading && (!posts || posts.length <= 0)\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <p>Todavia no se han cargado fotos.</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!isLoading && posts.length > 0\">\n\n    <ion-row class=\"featured\">\n      <ion-col size=\"12\">\n        <div (click)= \"navCtrl.navigateForward(['/details', featured.id])\">\n        <img class=\"featured-img\" [src]=\"featured.imageUrl\">\n        <div class=\"bottom-line\">\n          <p>\n            Más votada\n          </p>\n          <ion-item  class=\"top-line\" lines=\"none\">          \n        <ion-icon class=\"corazon\" *ngIf=\"!votada(featured)\" slot=\"end\" src=\"assets/img/heart.svg\"></ion-icon>\n        <ion-icon class=\"corazon\" *ngIf=\"votada(featured)\"  slot=\"end\" src=\"assets/img/heart-full.svg\"></ion-icon>\n            <ion-label text-right>\n              {{featured.votes.length}}\n            </ion-label>\n          </ion-item>\n        </div>\n      </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <div class=\"pins\">\n      <div class=\"pin\" size=\"6\" *ngFor=\"let post of posts\">\n          <div  [routerLink]=\"['/', 'details', post.id]\">\n              <img [src]=\"post.imageUrl\">\n          </div>      \n      <div class=\"info\">\n        <ion-item lines=\"none\">          \n        <ion-icon class=\"corazon\" *ngIf=\"!votada(post)\" slot=\"end\" src=\"assets/img/heart.svg\"></ion-icon>\n        <ion-icon class=\"corazon\" *ngIf=\"votada(post)\" slot=\"end\" src=\"assets/img/heart-full.svg\"></ion-icon>\n          <ion-label text-right *ngIf=\"post.votes && post.votes.length > 0\">\n            {{post.votes.length}}\n          </ion-label>\n        </ion-item>\n      </div>\n    </div>\n  </div>\n    </ion-row>\n\n<!--end nuevo-->\n\n    <!--<ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <ion-virtual-scroll\n        [items]=\"posts\"\n        approxItemHeight=\"70px\"\n      >\n          <ion-item\n            [routerLink]=\"['/', 'details', post.id]\"\n            detail\n            *virtualItem=\"let post\"\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"post.imageUrl\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{ post.title }}</h2>\n              <p style=\"font-weight: 800\">{{ post.date ? (post.date | date: 'medium') : '' }}</p>\n            </ion-label>\n            <ion-badge *ngIf=\"post.votes && post.votes.length > 0\" slot=\"end\" mode=\"ios\">{{post.votes.length}}</ion-badge>\n          </ion-item>\n        </ion-virtual-scroll>\n      </ion-col>\n    </ion-row>-->\n\n\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/', 'new-post', type]\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/gallery/list/list.module.ts":
/*!*********************************************!*\
  !*** ./src/app/gallery/list/list.module.ts ***!
  \*********************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/gallery/list/list.page.ts");







var routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
    }
];
var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/gallery/list/list.page.scss":
/*!*********************************************!*\
  !*** ./src/app/gallery/list/list.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  border-radius: 5px;\n}\n\nion-thumbnail {\n  --border-radius: 8px;\n}\n\n.bottom-line {\n  position: absolute;\n  color: white;\n  --background: transparent;\n  bottom: 0;\n  width: 100%;\n}\n\n.top-line {\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: white;\n  --background: transparent;\n  width: 100%;\n}\n\n.top-line .line {\n  display: block;\n  width: 50%;\n  height: 3px;\n  background: #fff;\n  margin-left: 7%;\n}\n\n.top-line ion-icon, .bottom-line ion-icon {\n  color: #ff4040;\n  right: 0;\n  margin-left: 5px;\n}\n\n.top-line ion-label, .bottom-line ion-label {\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: 5px;\n  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);\n}\n\n.bottom-line p {\n  text-transform: uppercase;\n  font-weight: 700;\n  letter-spacing: 5px;\n  font-size: 16px;\n  margin-left: 20px;\n  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);\n}\n\nion-back-button {\n  background: white;\n  border-radius: 10px;\n  margin-left: 5px;\n}\n\nion-toolbar {\n  margin-bottom: -10px;\n}\n\n.scroll-content {\n  padding-top: 0px !important;\n}\n\n.pins {\n  -webkit-column-count: 2;\n     -moz-column-count: 2;\n          column-count: 2;\n  margin: 0 15px;\n}\n\n.pin img {\n  border-radius: 5px;\n}\n\n.pin {\n  margin-bottom: 10px;\n}\n\n.info {\n  color: white;\n  margin: -30% 0 8% 5%;\n}\n\n.info ion-icon {\n  color: #ff4040;\n  margin-left: 5px;\n}\n\n.info ion-item {\n  --background:transparent;\n}\n\n.info ion-label {\n  color: white;\n  font-weight: 700;\n}\n\n.avatar img {\n  border-radius: 10px;\n  height: 47px;\n  width: 47px;\n  margin-right: 5px;\n  margin-top: 4px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\nion-fab-button {\n  --background: #3e3e3e !important;\n}\n\nion-title ion-icon {\n  font-size: 5.5rem;\n  margin-top: 5px;\n}\n\n.blank {\n  width: 100%;\n  height: 100%;\n  background-color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 9;\n  position: absolute;\n}\n\n.featured {\n  margin: 10px 10px 5px;\n}\n\n.featured-img {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9saXN0L0M6XFxVc2Vyc1xcY2FtYXJcXERvY3VtZW50c1xcUFBTXFxiaWxkaW4vc3JjXFxhcHBcXGdhbGxlcnlcXGxpc3RcXGxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9nYWxsZXJ5L2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FDS0o7O0FERkE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtBQ0tKOztBREhBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxvQkFBQTtBQ09KOztBRExBO0VBQ0ksMkJBQUE7QUNRSjs7QUROQTtFQUNJLHVCQUFBO0tBQUEsb0JBQUE7VUFBQSxlQUFBO0VBQ0EsY0FBQTtBQ1NKOztBRFBBO0VBQ0ksa0JBQUE7QUNVSjs7QURSQTtFQUNJLG1CQUFBO0FDV0o7O0FEVEE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUNZSjs7QURWQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ2FKOztBRFhBO0VBQ0ksd0JBQUE7QUNjSjs7QURaQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ2VKOztBRGJBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNnQko7O0FEYkE7RUFDSSxnQ0FBQTtBQ2dCSjs7QURiQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ2dCSjs7QURiQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ2dCSjs7QURiQTtFQUNJLHFCQUFBO0FDZ0JKOztBRGJBO0VBQ0ksa0JBQUE7QUNnQkoiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2xpc3QvbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmJvdHRvbS1saW5le1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udG9wLWxpbmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi50b3AtbGluZSAubGluZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xufVxuLnRvcC1saW5lIGlvbi1pY29uLCAuYm90dG9tLWxpbmUgaW9uLWljb257XG4gICAgY29sb3I6ICNmZjQwNDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi50b3AtbGluZSBpb24tbGFiZWwsIC5ib3R0b20tbGluZSBpb24tbGFiZWx7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMCwwLDAsMC42KTtcbn1cblxuLmJvdHRvbS1saW5lIHB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHRleHQtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsMCwwLDAuNik7XG59XG5pb24tYmFjay1idXR0b257XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuaW9uLXRvb2xiYXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG59XG4uc2Nyb2xsLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbi5waW5ze1xuICAgIGNvbHVtbi1jb3VudDogMjtcbiAgICBtYXJnaW46IDAgMTVweDtcbn1cbi5waW4gaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5waW57XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pbmZve1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IC0zMCUgMCA4JSA1JTtcbn1cbi5pbmZvIGlvbi1pY29ue1xuICAgIGNvbG9yOiAjZmY0MDQwO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uaW5mbyBpb24taXRlbXtcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG59XG4uaW5mbyBpb24tbGFiZWx7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uYXZhdGFyIGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogNDdweDtcbiAgICB3aWR0aDogNDdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICMzZTNlM2UgIWltcG9ydGFudDsgXG59XG5cbmlvbi10aXRsZSBpb24taWNvbntcbiAgICBmb250LXNpemU6IDUuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5ibGFua3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogOTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5mZWF0dXJlZHtcbiAgICBtYXJnaW46IDEwcHggMTBweCA1cHg7XG59XG5cbi5mZWF0dXJlZC1pbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSIsImlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5pb24tdGh1bWJuYWlsIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5ib3R0b20tbGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9wLWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b3AtbGluZSAubGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDclO1xufVxuXG4udG9wLWxpbmUgaW9uLWljb24sIC5ib3R0b20tbGluZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmY0MDQwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnRvcC1saW5lIGlvbi1sYWJlbCwgLmJvdHRvbS1saW5lIGlvbi1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHRleHQtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5ib3R0b20tbGluZSBwIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgdGV4dC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnBpbnMge1xuICBjb2x1bW4tY291bnQ6IDI7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuXG4ucGluIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBpbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbmZvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IC0zMCUgMCA4JSA1JTtcbn1cblxuLmluZm8gaW9uLWljb24ge1xuICBjb2xvcjogI2ZmNDA0MDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmluZm8gaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG59XG5cbi5pbmZvIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmF2YXRhciBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIHdpZHRoOiA0N3B4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMzZTNlM2UgIWltcG9ydGFudDtcbn1cblxuaW9uLXRpdGxlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA1LjVyZW07XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmJsYW5rIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmZlYXR1cmVkIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggNXB4O1xufVxuXG4uZmVhdHVyZWQtaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/gallery/list/list.page.ts":
/*!*******************************************!*\
  !*** ./src/app/gallery/list/list.page.ts ***!
  \*******************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");







var ListPage = /** @class */ (function () {
    function ListPage(database, auth, navCtrl, route, alertController, toastController) {
        this.database = database;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.route = route;
        this.alertController = alertController;
        this.toastController = toastController;
        this.isLoading = false;
        this.posts = [];
        this.type = '';
        this.voted = false;
        this.spinner = true;
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        // this.user = JSON.parse(localStorage.getItem('user-bd'));
        _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Storage.get({ key: 'user-bd' }).then(function (userData) {
            _this.user = JSON.parse(userData.value);
        }, function () {
            _this.navCtrl.navigateBack('');
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('type')) {
                _this.navCtrl.navigateBack('/gallery');
                return;
            }
            _this.isLoading = true;
            _this.type = paramMap.get('type');
            _this.postsSub = _this.database.TraerTodos('picbild-posts').subscribe(function (posts) {
                _this.posts = posts.filter(function (p) { return p.type === _this.type; }).sort(function (a, b) { return b.date.localeCompare(a.date); });
                console.log(_this.posts);
                _this.featured = _this.posts.reduce(function (prev, current) {
                    return (prev.votes && prev.votes.length ? prev.votes.length : 0) >
                        (current.votes && current.votes.length ? current.votes.length : 0) ? prev : current;
                });
                if (!_this.featured.votes.length || _this.featured.votes.length === 0) {
                    _this.featured = _this.posts[0];
                }
                _this.isLoading = false;
                setTimeout(function () { return _this.spinner = false; }, 2000);
            });
        });
    };
    ListPage.prototype.votada = function (item) {
        var votada = (item.votes || item.votes.length < 1) ? item.votes.includes(this.user.id) : false;
        console.log(votada);
        return votada;
    };
    ListPage.prototype.logout = function () {
        var _this = this;
        this.auth.logoutUser()
            .then(function (res) {
            console.log(res);
            _this.navCtrl.navigateBack('');
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ListPage.prototype.presentAlertLogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cerrar sesión',
                            message: '¿Quieres cerrar sesión?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        _this.logout();
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListPage.prototype.ngOnDestroy = function () {
        if (this.postsSub) {
            this.postsSub.unsubscribe();
        }
    };
    ListPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Gracias por tu voto!',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListPage.ctorParameters = function () { return [
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
        { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/gallery/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=gallery-list-list-module-es5.js.map