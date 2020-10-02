(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-list-new-post-new-post-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/list/new-post/new-post.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/list/new-post/new-post.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"navCtrl.navigateForward(['/list', type])\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nuevo post</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row padding>\n        <ion-col size-sm=\"8\" offset-sm=\"2\" style=\"padding-top: 20px;\">\n          <app-image-picker\n            [showPreview]=\"form.get('image').value\"\n            (imagePick)=\"onImagePicked($event)\"\n          ></app-image-picker>\n        </ion-col>\n      </ion-row>\n      <ion-row padding>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\">Título</ion-label>\n            <ion-input\n              type=\"text\"\n              autocomplete\n              autocorrect\n              formControlName=\"title\"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\">Descripción</ion-label>\n            <ion-textarea\n            rows=\"6\"\n              autocomplete\n              autocorrect\n              formControlName=\"description\"\n            ></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      \n    <ion-item lines=\"none\" class=\"publicar\">\n      <ion-button\n        (click)=\"onCreatePost()\"\n        [disabled]=\"!form.valid || !form.get('image').value\"\n      >\n      <ion-label>Publicar</ion-label>\n        <ion-icon name=\"md-arrow-forward\" slot=\"end\"></ion-icon>\n      </ion-button>\n    </ion-item>\n      \n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/pickers/image-picker/image-picker.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/pickers/image-picker/image-picker.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"picker\">\n  <ion-img\n    role=\"button\"\n    class=\"image\"\n    (click)=\"onPickImage()\"\n    [src]=\"selectedImage\"\n    *ngIf=\"selectedImage && showPreview\"\n  ></ion-img>\n  <ion-button mode=\"ios\" color=\"primary\" (click)=\"onPickImage()\" *ngIf=\"!selectedImage || !showPreview\">\n    <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n    <ion-label>Tomar foto</ion-label>\n  </ion-button>\n</div>\n<input\n  type=\"file\"\n  accept=\"image/jpeg\"\n  *ngIf=\"usePicker\"\n  #filePicker\n  (change)=\"onFileChosen($event)\"\n/>"

/***/ }),

/***/ "./src/app/gallery/list/new-post/new-post.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/gallery/list/new-post/new-post.module.ts ***!
  \**********************************************************/
/*! exports provided: NewPostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostPageModule", function() { return NewPostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-post.page */ "./src/app/gallery/list/new-post/new-post.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _new_post_page__WEBPACK_IMPORTED_MODULE_6__["NewPostPage"]
    }
];
var NewPostPageModule = /** @class */ (function () {
    function NewPostPageModule() {
    }
    NewPostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [_new_post_page__WEBPACK_IMPORTED_MODULE_6__["NewPostPage"]]
        })
    ], NewPostPageModule);
    return NewPostPageModule;
}());



/***/ }),

/***/ "./src/app/gallery/list/new-post/new-post.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/gallery/list/new-post/new-post.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --ion-background-color: var(--ion-color-lisght);\n  --ion-text-color: var(--ion-color-dark);\n}\n\n.publicar ion-button {\n  margin: 0 auto;\n  font-size: 1rem;\n  height: 2.5rem;\n  width: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9saXN0L25ldy1wb3N0L0M6XFxVc2Vyc1xcY2FtYXJcXERvY3VtZW50c1xcUFBTXFxiaWxkaW4vc3JjXFxhcHBcXGdhbGxlcnlcXGxpc3RcXG5ldy1wb3N0XFxuZXctcG9zdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2dhbGxlcnkvbGlzdC9uZXctcG9zdC9uZXctcG9zdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwrQ0FBQTtFQUNBLHVDQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2xpc3QvbmV3LXBvc3QvbmV3LXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpc2dodCk7IC8vdHJhbnNwYXJlbnRlXG4gICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4ucHVibGljYXIgaW9uLWJ1dHRvbntcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IDEwcmVtO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpc2dodCk7XG4gIC0taW9uLXRleHQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLnB1YmxpY2FyIGlvbi1idXR0b24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgd2lkdGg6IDEwcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/gallery/list/new-post/new-post.page.ts":
/*!********************************************************!*\
  !*** ./src/app/gallery/list/new-post/new-post.page.ts ***!
  \********************************************************/
/*! exports provided: NewPostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostPage", function() { return NewPostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_models_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/post */ "./src/app/models/post.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");








function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 1024;
    var byteCharacters = window.atob(base64Data);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);
        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}
var NewPostPage = /** @class */ (function () {
    function NewPostPage(database, router, loadingCtrl, route, navCtrl) {
        this.database = database;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.route = route;
        this.navCtrl = navCtrl;
    }
    NewPostPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('type')) {
                _this.navCtrl.navigateBack('/gallery');
                return;
            }
            _this.type = paramMap.get('type');
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            // description: new FormControl(null, {
            //   updateOn: 'blur',
            //   validators: [Validators.required, Validators.maxLength(180)]
            // }),
            // location: new FormControl(null, { validators: [Validators.required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null)
        });
    };
    NewPostPage.prototype.onImagePicked = function (imageData) {
        console.log('valor form' + this.form);
        var imageFile;
        if (typeof imageData === 'string') {
            try {
                imageFile = base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
            }
            catch (error) {
                console.log(error);
                alert(error);
                return;
            }
        }
        else {
            imageFile = imageData;
        }
        this.form.patchValue({ image: imageFile });
    };
    NewPostPage.prototype.onCreatePost = function () {
        var _this = this;
        if (!this.form.valid || !this.form.get('image').value) {
            return;
        }
        this.loadingCtrl
            .create({
            message: 'Subiendo foto...'
        })
            .then(function (loadingEl) {
            loadingEl.present();
            var imagen = _this.form.get('image').value;
            if (!document.URL.startsWith('http')) {
                var imageName = (_this.form.value.title).replace(/\s/g, '-') + '-' + Math.floor(Math.random() * (999 - 100 + 1) + 100);
                imagen.name = imageName;
            }
            var uploadTask = _this.database.uploadImage(_this.form.get('image').value);
            uploadTask.task.on('state_changed', function (snapshot) {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }, function (error) {
                // Handle unsuccessful uploads
            }, function () {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                    _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Storage.get({ key: 'user-bd' }).then(function (userData) {
                        _this.database.AgregarUno(JSON.parse(JSON.stringify(new src_app_models_post__WEBPACK_IMPORTED_MODULE_6__["Post"]({
                            date: new Date(),
                            imageUrl: downloadURL,
                            title: _this.form.value.title,
                            description: _this.form.value.description,
                            type: _this.type,
                            user: JSON.parse(userData.value),
                            votes: []
                        }))), 'picbild-posts').then(function () {
                            loadingEl.dismiss();
                            _this.form.reset();
                            _this.router.navigate(['/list', _this.type]);
                        });
                    }, function () {
                        _this.navCtrl.navigateBack('');
                    });
                });
            });
        });
    };
    NewPostPage.ctorParameters = function () { return [
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    NewPostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-post',
            template: __webpack_require__(/*! raw-loader!./new-post.page.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/list/new-post/new-post.page.html"),
            styles: [__webpack_require__(/*! ./new-post.page.scss */ "./src/app/gallery/list/new-post/new-post.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], NewPostPage);
    return NewPostPage;
}());



/***/ }),

/***/ "./src/app/models/post.ts":
/*!********************************!*\
  !*** ./src/app/models/post.ts ***!
  \********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
// export class Post {
//   constructor(
//     public id: string,
//     public imageUrl: string,
//     public title: string,
//     public type: string,
//     public user: string,
//     public votes: string[]
//   ) {}
// }
var Post = /** @class */ (function () {
    function Post(init) {
        Object.assign(this, init);
    }
    Post.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Post;
}());



/***/ }),

/***/ "./src/app/shared/pickers/image-picker/image-picker.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shared/pickers/image-picker/image-picker.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".picker {\n  width: 30rem;\n  max-width: 80%;\n  height: 20rem;\n  max-height: 30vh;\n  background-color: rgba(128, 128, 128, 0.3);\n  border-radius: 15px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  overflow: hidden;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\ninput[type=file] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BpY2tlcnMvaW1hZ2UtcGlja2VyL0M6XFxVc2Vyc1xcY2FtYXJcXERvY3VtZW50c1xcUFBTXFxiaWxkaW4vc3JjXFxhcHBcXHNoYXJlZFxccGlja2Vyc1xcaW1hZ2UtcGlja2VyXFxpbWFnZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9waWNrZXJzL2ltYWdlLXBpY2tlci9pbWFnZS1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUVBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDSEo7O0FETUU7RUFDRSxhQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGlja2Vycy9pbWFnZS1waWNrZXIvaW1hZ2UtcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5waWNrZXIge1xuICAgIHdpZHRoOiAzMHJlbTtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDIwcmVtO1xuICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICB9XG4gIFxuICAuaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT0nZmlsZSddIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICIsIi5waWNrZXIge1xuICB3aWR0aDogMzByZW07XG4gIG1heC13aWR0aDogODAlO1xuICBoZWlnaHQ6IDIwcmVtO1xuICBtYXgtaGVpZ2h0OiAzMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/pickers/image-picker/image-picker.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/pickers/image-picker/image-picker.component.ts ***!
  \***********************************************************************/
/*! exports provided: ImagePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePickerComponent", function() { return ImagePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ImagePickerComponent = /** @class */ (function () {
    function ImagePickerComponent(platform) {
        this.platform = platform;
        this.imagePick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // Emits the file (filepicker) or the stringbase64 (camera).
        this.showPreview = false; // after imagePick is emitted the parent component sets value to this property.
        this.usePicker = false;
    }
    ImagePickerComponent.prototype.ngOnInit = function () {
        console.log('Mobile:', this.platform.is('mobile'));
        console.log('Hybrid:', this.platform.is('hybrid'));
        console.log('iOS:', this.platform.is('ios'));
        console.log('Android:', this.platform.is('android'));
        console.log('Desktop:', this.platform.is('desktop'));
        if ((this.platform.is('mobile') && !this.platform.is('hybrid')) ||
            this.platform.is('desktop')) {
            this.usePicker = true;
        }
    };
    ImagePickerComponent.prototype.onPickImage = function () {
        var _this = this;
        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].isPluginAvailable('Camera') || this.usePicker) { // || this.usePicker
            this.filePickerRef.nativeElement.click(); // I make the click in the hidden input, not the user
            return;
        }
        _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera.getPhoto({
            quality: 75,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Prompt,
            correctOrientation: true,
            // height: 320,
            //width: 1200,
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl
        })
            .then(function (image) {
            _this.selectedImage = image.dataUrl;
            // alert(this.selectedImage);
            _this.imagePick.emit(image.dataUrl);
        })
            .catch(function (error) {
            console.log(error);
            if (_this.usePicker) {
                _this.filePickerRef.nativeElement.click();
            }
            return false;
        });
    };
    ImagePickerComponent.prototype.onFileChosen = function (event) {
        var _this = this;
        // console.log(event);
        var pickedFile = event.target.files[0];
        if (!pickedFile) {
            return;
        }
        var fr = new FileReader();
        fr.onload = function () {
            var dataUrl = fr.result.toString();
            _this.selectedImage = dataUrl;
            _this.imagePick.emit(pickedFile);
        };
        fr.readAsDataURL(pickedFile);
    };
    ImagePickerComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filePicker', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ImagePickerComponent.prototype, "filePickerRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImagePickerComponent.prototype, "imagePick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ImagePickerComponent.prototype, "showPreview", void 0);
    ImagePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-picker',
            template: __webpack_require__(/*! raw-loader!./image-picker.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/pickers/image-picker/image-picker.component.html"),
            styles: [__webpack_require__(/*! ./image-picker.component.scss */ "./src/app/shared/pickers/image-picker/image-picker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], ImagePickerComponent);
    return ImagePickerComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pickers/image-picker/image-picker.component */ "./src/app/shared/pickers/image-picker/image-picker.component.ts");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_4__["ImagePickerComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
            exports: [_pickers_image_picker_image_picker_component__WEBPACK_IMPORTED_MODULE_4__["ImagePickerComponent"]],
            entryComponents: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=gallery-list-new-post-new-post-module-es5.js.map