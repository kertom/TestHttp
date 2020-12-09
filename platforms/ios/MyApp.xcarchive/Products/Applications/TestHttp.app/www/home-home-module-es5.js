(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <ion-button (click)=\"this.chooseFile($event)\">Open Files</ion-button>\n    <strong>Ready to create an app?</strong>\n    <p>Start with Ionic <a target=\"_blank\" rel=\"noopener noreferrer\" \n      href=\"https://ionicframework.com/docs/components\">UI Components</a>\n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n      Start with Ionic Start with Ionic Start with Ionic Start with Ionic \n    </p>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/http/ngx */
      "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/file-picker/ngx */
      "./node_modules/@ionic-native/file-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");

      var HomePage = /*#__PURE__*/function () {
        //console.clear();
        //console.log('Running...');
        function HomePage(_http, filePicker, file, fileTransfer, httpClient) {
          _classCallCheck(this, HomePage);

          this._http = _http;
          this.filePicker = filePicker;
          this.file = file;
          this.fileTransfer = fileTransfer;
          this.httpClient = httpClient;
          this.sURL = 'https://dl.dropboxusercontent.com/s/iaxtm7efi73arud/dummy.pdf?dl=0'; // Normal dropbox.com domain would give CORS error

          this.oRequest = new XMLHttpRequest();
          this.silentDownload = false; // silentDownload hides link and clicks without user input

          this.saveMode = true; // toggles between save and read functions
        } //here we choose a file from the file picker


        _createClass(HomePage, [{
          key: "chooseFile",
          value: function chooseFile(event) {
            var _this2 = this;

            this.filePicker.pickFile().then(function (uri) {
              console.log("uri= " + uri);
              var ending = uri.substring(uri.length - 3, 3);
              console.log("ending= " + ending); //if it is a pdf file ,then we download it

              if (ending == 'pdf') {
                //this.downloadAndOpenPdf();
                console.log("ending2= ");
              } else {
                console.log('uri original= ' + uri); //this.downloadAndRead(uri);

                _this2.downloadAndRead(uri, event);
              }
            })["catch"](function (err) {
              return console.log('Error0=', err);
            });
            console.log('hei5');
          } //2nd approach

          /*downloadAndOpenPdf(uri) {
            console.log('IN SAVE MODE. Creating blob link...');
            this.oRequest.open('GET', this.sURL);                                   // Creates the HTTP request
            this.oRequest.responseType = 'blob';
            var _this = this;
            this.oRequest.onload = function() {
              console.log('hei4');
              _this.blob = this.response;                                       // Save response to blob object
              _this.readBlob();                                                 // Read the blob if we like
              console.log('rb2');
              /*const link = document.createElement('a');
              link.href = URL.createObjectURL(_this.blob);                      // Creates a blob link
              console.log('rb3');
              if (!_this.silentDownload) link.innerHTML = 'Download the file';
              link.download = 'my-dummy-file.pdf';                        // Gives the file a name
              console.log('rb4');
              document.body.appendChild(link);
              console.log('hei5');
              
              if (_this.silentDownload){
                console.log('Silently downloading the file...');
                link.click();                                             // Automatically triggers the link
              }/
            }
            //console.log('rb6');
          
            this.oRequest.send();                                              // Initiates the HTTP request
          }*/

          /*downloadAndRead(uri) {
            console.log('IN READ MODE. Reading file');
            this.oRequest.open('GET', this.sURL, false);
            var _this = this;
            this.oRequest.onreadystatechange = function(oEvent){
              if (_this.oRequest.readyState === 4) {
                if (_this.oRequest.status === 200) {
                  console.log(_this.oRequest.responseText);           // This is the document contents
                } else {
                  console.log('Error', _this.oRequest.statusText);    // e.g. if document is not found
                }
              }
            }
          
            //    oRequest.setRequestHeader('User-Agent',navigator.userAgent);
            try {
              this.oRequest.send(null);
            } catch (err) {
              console.error(err);
            }
          }
          readBlob(){
            console.log('Reading the blob...')
            const reader = new FileReader();
            var _this = this;
            reader.addEventListener('loadend', () => {
              console.log('rb1');
              _this.blobText = ''+reader.result;
              console.log(this.blobText);
            });
            //reader.readAsText(_this.blob);
          }*/
          //2nd approach

        }, {
          key: "downloadAndRead",
          value: function downloadAndRead(dropBoxUrl, event) {
            console.log('IN READ MODE. Reading file');
            dropBoxUrl = dropBoxUrl.replace("/private", "file:///private");
            console.log('dropboxurl=', dropBoxUrl);
            this.file.resolveLocalFilesystemUrl(dropBoxUrl).then(function (entry) {
              entry.file(function (file) {
                var reader = new FileReader();
                console.log('hei1');

                reader.onloadend = function (encodedFile) {
                  console.log('hei2');
                  var src = encodedFile.target.result;
                  console.log('src1= ', src);
                  src = src.split("base64,");
                  console.log('src2= ', src);
                  var contentAsBase64EncodedString = src[1];
                  console.log('contentAsBase64EncodedString= ', contentAsBase64EncodedString);
                };

                console.log('hei3');
                reader.readAsDataURL(file);
                console.log('hei4');
              });
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "readPdfFile",
          value: function readPdfFile(file, event) {
            var reader = new FileReader();
            console.log('reader is ', reader);

            reader.onloadend = function () {
              // const imgBlob = new Blob([reader.result], {type: file.type});
              console.log('reader2 is ', reader);
            };

            console.log('reader3 is ', reader); // var blob = new Blob(<BlobPart[]><unknown>new Uint8Array(<ArrayBuffer>
            // file.files[0]), 
            // { type: "application/pdf" });
            // };
            // console.log('new blob is ', file.blob());
            // const Blob = require('blob');
            // let b = new Blob(file);
            // console.log('b= ',b);  
            // reader.readAsDataURL(file); //files[0]

            console.log('event.target.result is ', event.target.result);
            /*reader.onloadend = () => {
                const pdfBlob = new Blob([reader.result], {type: file.type});
                console.log('pdfBlob: ',pdfBlob);
            };
            console.log('file.files= ',file.files);
            console.log('file.files[0]= ',file.files[0]);
            
            reader.readAsArrayBuffer(file.files[0]);*/
          }
        }, {
          key: "readBlob",
          value: function readBlob() {
            var _this3 = this;

            console.log('Reading the blob...');
            var reader = new FileReader();

            var _this = this;

            reader.addEventListener('loadend', function () {
              _this.blobText = '' + reader.result;
              console.log('reader7');
              console.log(_this3.blobText);
            }); //reader.readAsText(_this.blob);
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"]
        }, {
          type: _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["IOSFilePicker"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map