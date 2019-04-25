webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_transfer__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker_ngx__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker_ngx__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera_ngx__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FileOpener } from '@ionic-native/file-opener';





var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage(camera, imagePicker, filePicker, transfer, file) {
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.filePicker = filePicker;
        this.transfer = transfer;
        this.file = file;
        this.docUri = "";
        this.fileSelected = 0;
    }
    HelloIonicPage.prototype.ngOnInit = function () {
        this.progress = 0;
        this.load = 0;
    };
    HelloIonicPage.prototype.takephoto = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        alert('ios');
        this.camera.getPicture(options).then(function (imageData) {
            alert(imageData);
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            alert(err);
            // Handle error
        });
    };
    HelloIonicPage.prototype.chooseimage = function () {
        alert("ios2");
        // let options: ImagePickerOptions = {
        //   maximumImagesCount: 6,
        //   width: 800
        // };
        //   cordova.imagePicker.getPictures(
        //     function(results) {
        //         for (var i = 0; i < results.length; i++) {
        //             console.log('Image URI: ' + results[i]);
        //         }
        //     }, function (error) {
        //         console.log('Error: ' + error);
        //     }
        // );
        // let options = {
        //   maximumImagesCount: 3,
        //   width: 800
        // }
        window.imagePicker.getPictures(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                alert(results(i));
            }
        }, function (error) {
            console.log('Error: ' + error);
            alert(error);
        });
    };
    HelloIonicPage.prototype.chooseFileIOS = function () {
        var hh = this;
        window.FilePicker.isAvailable(function (avail) {
            if (avail) {
                alert('yes');
                var utis = ["public.data"];
                window.FilePicker.pickFile(function (res) {
                    alert(res);
                    hh.docUri = res;
                    alert(hh.docUri);
                    hh.fileSelected = 1;
                });
            }
        });
    };
    // open(){
    //   FilePicker.isAvailable(function (avail) {
    //     alert(avail ? "YES" : "NO");
    //   });
    //   console.log('open');
    //   this.filePicker.pickFile()
    // .then(uri => console.log(uri))
    // .catch(err => console.log('Error', err));
    // }
    HelloIonicPage.prototype.downloadpdf = function () {
        var _this = this;
        console.log('download_pdf');
        var fileTransfer = this.transfer.create();
        var url = 'http://upload.willdonner.top/upload/WiFi_Uncle/manual_en_google_translated.pdf';
        fileTransfer.onProgress(function (progressEvent) {
            console.log(progressEvent.lengthComputable);
            console.log(progressEvent.loaded);
            console.log(progressEvent.lengthComputable);
            if (progressEvent.lengthComputable) {
                // 下载过程会一直打印，完成的时候会显示 1
                console.log('progressEvent');
                _this.progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                console.log(_this.progress);
            }
            else {
                console.log('下载失败');
            }
        });
        this.timer1 = setInterval(function () {
            _this.load = _this.progress;
            if (_this.progress > 99) {
                clearInterval(_this.timer1);
            }
        }, 300);
        fileTransfer.download(url, this.file.dataDirectory + 'willd.pdf').then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            cordova.plugins.fileOpener2.open(entry.toURL(), _this.getFileMimeType("pdf"))
                .then(function () {
                console.log('打开成功');
            })
                .catch(function () {
                console.log('打开失败');
            });
        }, function (error) {
            // handle error
        });
    };
    HelloIonicPage.prototype.downloaddoc = function () {
        var _this = this;
        console.log('download_doc');
        var fileTransfer = this.transfer.create();
        var url = 'http://upload.willdonner.top/upload/WiFi_Uncle/testwildlonner.doc';
        fileTransfer.onProgress(function (progressEvent) {
            console.log(progressEvent.lengthComputable);
            console.log(progressEvent.loaded);
            console.log(progressEvent.lengthComputable);
            if (progressEvent.lengthComputable) {
                // 下载过程会一直打印，完成的时候会显示 1
                console.log('progressEvent');
                _this.progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                console.log(_this.progress);
            }
            else {
                console.log('下载失败');
            }
        });
        this.timer1 = setInterval(function () {
            _this.load = _this.progress;
            if (_this.progress > 99) {
                clearInterval(_this.timer1);
            }
        }, 300);
        fileTransfer.download(url, this.file.dataDirectory + 'willd.doc').then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            cordova.plugins.fileOpener2.open(entry.toURL(), _this.getFileMimeType("doc"))
                .then(function () {
                console.log('打开成功');
            })
                .catch(function () {
                console.log('打开失败');
            });
        }, function (error) {
            // handle error
        });
    };
    HelloIonicPage.prototype.downloadpic = function () {
        var _this = this;
        console.log('download_pic');
        var fileTransfer = this.transfer.create();
        var url = 'http://upload.willdonner.top/upload/WiFi_Uncle/p2430486605.jpg';
        fileTransfer.onProgress(function (progressEvent) {
            console.log(progressEvent.lengthComputable);
            console.log(progressEvent.loaded);
            console.log(progressEvent.lengthComputable);
            if (progressEvent.lengthComputable) {
                // 下载过程会一直打印，完成的时候会显示 1
                console.log('progressEvent');
                _this.progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                console.log(_this.progress);
            }
            else {
                console.log('下载失败');
            }
        });
        this.timer1 = setInterval(function () {
            _this.load = _this.progress;
            if (_this.progress > 99) {
                clearInterval(_this.timer1);
            }
        }, 300);
        fileTransfer.download(url, this.file.dataDirectory + 'willd.jpg').then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            cordova.plugins.fileOpener2.open(entry.toURL(), _this.getFileMimeType("jpg"))
                .then(function () {
                console.log('打开成功');
            })
                .catch(function () {
                console.log('打开失败');
            });
        }, function (error) {
            // handle error
        });
    };
    HelloIonicPage.prototype.downloadtxt = function () {
        var _this = this;
        console.log('download_txt');
        var fileTransfer = this.transfer.create();
        var url = 'http://upload.willdonner.top/upload/WiFi_Uncle/emma.txt';
        fileTransfer.onProgress(function (progressEvent) {
            console.log(progressEvent.lengthComputable);
            console.log(progressEvent.loaded);
            console.log(progressEvent.lengthComputable);
            if (progressEvent.lengthComputable) {
                // 下载过程会一直打印，完成的时候会显示 1
                console.log('progressEvent');
                _this.progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                console.log(_this.progress);
            }
            else {
                console.log('下载失败');
            }
        });
        this.timer1 = setInterval(function () {
            _this.load = _this.progress;
            if (_this.progress > 99) {
                clearInterval(_this.timer1);
            }
        }, 300);
        fileTransfer.download(url, this.file.dataDirectory + 'willd.txt').then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            cordova.plugins.fileOpener2.open(entry.toURL(), _this.getFileMimeType("txt"))
                .then(function () {
                console.log('打开成功');
            })
                .catch(function () {
                console.log('打开失败');
            });
        }, function (error) {
            // handle error
        });
    };
    HelloIonicPage.prototype.downloadxls = function () {
        var _this = this;
        console.log('download_xls');
        var fileTransfer = this.transfer.create();
        var url = 'http://upload.willdonner.top/upload/WiFi_Uncle/willdonner.xlsx';
        fileTransfer.onProgress(function (progressEvent) {
            console.log(progressEvent.lengthComputable);
            console.log(progressEvent.loaded);
            console.log(progressEvent.lengthComputable);
            if (progressEvent.lengthComputable) {
                // 下载过程会一直打印，完成的时候会显示 1
                console.log('progressEvent');
                _this.progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                console.log(_this.progress);
            }
            else {
                console.log('下载失败');
            }
        });
        this.timer1 = setInterval(function () {
            _this.load = _this.progress;
            if (_this.progress > 99) {
                clearInterval(_this.timer1);
            }
        }, 300);
        fileTransfer.download(url, this.file.dataDirectory + 'willd.xlsx').then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            cordova.plugins.fileOpener2.open(entry.toURL(), _this.getFileMimeType("xlsx"))
                .then(function () {
                console.log('打开成功');
            })
                .catch(function () {
                console.log('打开失败');
            });
        }, function (error) {
            // handle error
        });
    };
    HelloIonicPage.prototype.downloadppt = function () {
        var _this = this;
        console.log('download_ppt');
        var fileTransfer = this.transfer.create();
        var url = 'http://upload.willdonner.top/upload/WiFi_Uncle/ppp.ppt';
        fileTransfer.onProgress(function (progressEvent) {
            console.log(progressEvent.lengthComputable);
            console.log(progressEvent.loaded);
            console.log(progressEvent.lengthComputable);
            if (progressEvent.lengthComputable) {
                // 下载过程会一直打印，完成的时候会显示 1
                console.log('progressEvent');
                _this.progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                console.log(_this.progress);
            }
            else {
                console.log('下载失败');
            }
        });
        this.timer1 = setInterval(function () {
            _this.load = _this.progress;
            if (_this.progress > 99) {
                clearInterval(_this.timer1);
            }
        }, 300);
        fileTransfer.download(url, this.file.dataDirectory + 'willd.ppt').then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            cordova.plugins.fileOpener2.open(entry.toURL(), _this.getFileMimeType("ppt"))
                .then(function () {
                console.log('打开成功');
            })
                .catch(function () {
                console.log('打开失败');
            });
        }, function (error) {
            // handle error
        });
    };
    HelloIonicPage.prototype.getFileMimeType = function (fileType) {
        var mimeType = '';
        switch (fileType) {
            case 'txt':
                mimeType = 'text/plain';
                break;
            case 'docx':
                mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
                break;
            case 'doc':
                mimeType = 'application/msword';
                break;
            case 'pptx':
                mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
                break;
            case 'ppt':
                mimeType = 'application/vnd.ms-powerpoint';
                break;
            case 'xlsx':
                mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                break;
            case 'xls':
                mimeType = 'application/vnd.ms-excel';
                break;
            case 'zip':
                mimeType = 'application/x-zip-compressed';
                break;
            case 'rar':
                mimeType = 'application/octet-stream';
                break;
            case 'pdf':
                mimeType = 'application/pdf';
                break;
            case 'jpg':
                mimeType = 'image/jpeg';
                break;
            case 'png':
                mimeType = 'image/png';
                break;
            default:
                mimeType = 'application/' + fileType;
                break;
        }
        return mimeType;
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"/Users/willdonner/Ionic-In-Development-Issues-Feature/file-opener/src/pages/hello-ionic/hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello Ionic</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <h3>Welcome to your first Ionic app!</h3>\n\n  <p>\n    This starter project is our way of helping you get a functional app running in record time.\n  </p>\n  <p>\n    Follow along on the tutorial section of the Ionic docs!\n  </p>\n  <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p>\n  <button ion-button (click)="downloadpdf()">download_pdf</button>\n  <button ion-button (click)="downloaddoc()">download_doc</button>\n  <button ion-button (click)="downloadpic()">download_pic</button>\n  <button ion-button (click)="downloadtxt()">download_txt</button>\n  <button ion-button (click)="downloadxls()">download_xls</button>\n  <button ion-button (click)="downloadppt()">download_ppt</button>\n  \n  \n  <p>\n    <button ion-button (click)="open()">open</button>\n  </p>\n  <button full ion-button (click)="chooseFileIOS()">chooseFileIOS</button>\n\n\n  <button full ion-button (click)="chooseimage()">chooseimage</button>\n  \n  <button full ion-button (click)="takephoto()">takephoto</button>\n  \n  <!-- <progress-bar [progress]="load"></progress-bar> -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/willdonner/Ionic-In-Development-Issues-Feature/file-opener/src/pages/hello-ionic/hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_camera_ngx__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker_ngx__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_picker_ngx__["a" /* IOSFilePicker */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/willdonner/Ionic-In-Development-Issues-Feature/file-opener/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My First List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/willdonner/Ionic-In-Development-Issues-Feature/file-opener/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"/Users/willdonner/Ionic-In-Development-Issues-Feature/file-opener/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/Users/willdonner/Ionic-In-Development-Issues-Feature/file-opener/src/pages/item-details/item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_opener__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_progress_bar_progress_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_picker_ngx__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_image_picker_ngx__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera_ngx__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_progress_bar_progress_bar__["a" /* ProgressBarComponent */]
            ],
            imports: [
                // ProgressBarModule,
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera_ngx__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_image_picker_ngx__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_picker_ngx__["a" /* IOSFilePicker */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["b" /* FileTransferObject */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello Ionic', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'My First List', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/willdonner/Ionic-In-Development-Issues-Feature/file-opener/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/willdonner/Ionic-In-Development-Issues-Feature/file-opener/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Users/willdonner/Ionic-In-Development-Issues-Feature/file-opener/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n        {{progress}}%\n    </div>\n</div>'/*ion-inline-end:"/Users/willdonner/Ionic-In-Development-Issues-Feature/file-opener/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map