(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/demo/demo.component.html":
/*!**************************************!*\
  !*** ./src/demo/demo.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <div class=\"container\">\r\n        Input file demo\r\n    </div>\r\n</mat-toolbar>\r\n<div class=\"container mt-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <pre>Configuration - fileAccept: '*', fileLimit: 4</pre>\r\n            <input-file inputId=\"input-file\" placeholder=\"Your files\"></input-file>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n            <pre>Configuration - fileAccept: 'image/*', fileLimit: 2</pre>\r\n            <input-file inputId=\"input-file\" fileAccept=\"image/*\" fileLimit=\"2\" placeholder=\"My favorite album photo\"></input-file>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n            <pre>Configuration - disabled: true</pre>\r\n            <input-file inputId=\"input-file\" [disabled]=\"true\"></input-file>\r\n        </div>\r\n\r\n        <div class=\"col-12 mb-3\">\r\n            <pre class=\"htmlcode\">Configuration - width: 100, height: 100, internalPlaceholder: '&lt;b&gt;Drag & Drop&lt;/b&gt; or &lt;b&gt;Click&lt;/b&gt; to add an element'</pre>\r\n            In this example we want to set a specific height (500px) for our input file button. You can achieve this using a div with style height (500px) and then set <i>height: 100</i> to input-file.\r\n            <div style=\"height: 500px;\">\r\n                <input-file inputId=\"input-file\" width=100 height=100 internalPlaceholder=\"<b>Drag & Drop</b> or <b>Click</b> to add an element\"></input-file>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/demo/demo.component.ts":
/*!************************************!*\
  !*** ./src/demo/demo.component.ts ***!
  \************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.model = new Array();
    }
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/demo/demo.component.html")
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/demo/demo.module.ts":
/*!*********************************!*\
  !*** ./src/demo/demo.module.ts ***!
  \*********************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.component */ "./src/demo/demo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _lib_input_file_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/input-file.module */ "./src/lib/input-file.module.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var config = {
    fileAccept: '*',
    fileLimit: 4
};
var routes = [
    {
        path: '',
        component: _demo_component__WEBPACK_IMPORTED_MODULE_1__["DemoComponent"],
    }
];
var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _lib_input_file_module__WEBPACK_IMPORTED_MODULE_3__["InputFileModule"].forRoot(config),
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)
            ],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_1__["DemoComponent"]],
            bootstrap: [_demo_component__WEBPACK_IMPORTED_MODULE_1__["DemoComponent"]],
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/lib/components/input-file/input-file.component.html":
/*!*****************************************************************!*\
  !*** ./src/lib/components/input-file/input-file.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-file-container\" [style.width.%]=\"width\" [style.height.%]=\"height\">\r\n    <label class=\"mat-orphan-label\" [for]=\"inputId\" [class.active]=\"files?.length\" [innerHtml]=\"placeholder\" *ngIf=\"placeholder\"></label>\r\n    <div class=\"files-container\" [style.width.%]=\"width\" [style.height.%]=\"height\">\r\n\r\n        <ng-container *ngFor=\"let file of files; let i = index\">\r\n            <div class=\"file-container bounce-in\" [style.width.%]=\"widthPreview\" [style.height.%]=\"heightPreview\">\r\n                <button mat-button inputFileDropZone class=\"replace-button\" type=\"button\" (click)=\"fileReplace.click()\" (itemDrop)=\"onReplaceFile($event, i,replaceButton)\"\r\n                    [disabled]=\"disabled\" (itemDragOver)=\"onDragOver(replaceButton)\" (itemDragLeave)=\"onDragLeave(replaceButton)\"\r\n                    #replaceButton>\r\n                    <img class=\"image-preview\" [src]=\"file.preview\" *ngIf=\"file.preview; else noPreview\">\r\n                    <ng-template #noPreview>\r\n                        <mat-icon class=\"input-icon\">insert_drive_file</mat-icon>\r\n                        <div class=\"file-name text-truncate\" [innerHtml]=\"file.file.name\" *ngIf=\"file.file\"></div>\r\n                    </ng-template>\r\n\r\n                </button>\r\n                <button mat-button class=\"delete-button\" type=\"button\" [style.width.%]=\"widthPreview\" (click)=\"onDeleteFile(i)\" [disabled]=\"disabled\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n            </div>\r\n            <input [accept]=\"fileAccept\" hidden type=\"file\" #fileReplace (change)=\"onReplaceFile($event.target.files, i, replaceButton, fileReplace)\">\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"canAddFile\">\r\n            <button mat-button inputFileDropZone class=\"file-button\" type=\"button\" (click)=\"fileInput.click()\" (itemDrop)=\"onSelectFile($event, selectButton)\"\r\n                (itemDragOver)=\"onDragOver(selectButton)\" (itemDragLeave)=\"onDragLeave(selectButton)\" [style.width.%]=\"width\" [style.height.%]=\"height\"\r\n                 [disabled]=\"disabled\" #selectButton>\r\n                <mat-icon class=\"input-icon\">add</mat-icon>\r\n                <div [innerHtml]=\"internalPlaceholder\" *ngIf=\"internalPlaceholder\"></div>\r\n            </button>\r\n            <input [id]=\"inputId\" [accept]=\"fileAccept\" hidden type=\"file\" [attr.multiple]=\"fileLimit > 1 ? true : null\" #fileInput (change)=\"onSelectFile($event.target.files, selectButton)\">\r\n        </ng-container>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/lib/components/input-file/input-file.component.ts":
/*!***************************************************************!*\
  !*** ./src/lib/components/input-file/input-file.component.ts ***!
  \***************************************************************/
/*! exports provided: InputFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFileComponent", function() { return InputFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dto_input_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dto/input-file */ "./src/lib/dto/input-file.ts");
/* harmony import */ var _enums_input_file_rejected_reason__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enums/input-file-rejected-reason */ "./src/lib/enums/input-file-rejected-reason.ts");
/* harmony import */ var _services_input_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/input-file.service */ "./src/lib/services/input-file.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InputFileComponent = /** @class */ (function () {
    function InputFileComponent(inputFileService) {
        this.inputFileService = inputFileService;
        this.acceptedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deletedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rejectedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.files = new Array();
        this.onChange = function (files) { };
        this.onTouched = function () { };
    }
    InputFileComponent_1 = InputFileComponent;
    Object.defineProperty(InputFileComponent.prototype, "fileAccept", {
        get: function () {
            return this._fileAccept || this.inputFileService.config.fileAccept || '*';
        },
        set: function (fileAccept) {
            this._fileAccept = fileAccept;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "fileLimit", {
        get: function () {
            return this._fileLimit || this.inputFileService.config.fileLimit || 1;
        },
        set: function (fileLimit) {
            this._fileLimit = fileLimit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "sizeLimit", {
        get: function () {
            return this._sizeLimit || this.inputFileService.config.sizeLimit || null;
        },
        set: function (sizeLimit) {
            this._sizeLimit = sizeLimit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "canAddFile", {
        get: function () {
            return this.files && this.files.length < this.fileLimit;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * On delete a file event handler.
     * @param index
     */
    InputFileComponent.prototype.onDeleteFile = function (index) {
        if (!this.disabled) {
            var files = this.files.slice();
            this.deletedFile.emit(files[index]);
            files.splice(index, 1);
            this.writeValue(files);
        }
    };
    /**
     * On drag over event handler.
     * Adds a ripple effect on the button.
     */
    InputFileComponent.prototype.onDragOver = function (button) {
        button.ripple.launch({ centered: true, persistent: true });
    };
    /**
     * On drag leave event handler.
     * Fades the ripple effect of the button.
     */
    InputFileComponent.prototype.onDragLeave = function (button) {
        button.ripple.fadeOutAll();
    };
    /**
     * On replace one file event handler.
     * Writes the value.
     * @param fileList
     * @param index
     * @param fileInput
     */
    InputFileComponent.prototype.onReplaceFile = function (fileList, index, button, fileInput) {
        if (!this.disabled) {
            // Copies the array without reference.
            var files = this.files.slice();
            // Assumes that a single file can be replaced by a single file.
            var inputFile = new _dto_input_file__WEBPACK_IMPORTED_MODULE_2__["InputFile"](null, null, fileList.item(0));
            button.ripple.fadeOutAll();
            if (this.fileGuard(files, inputFile, true)) {
                files[index] = inputFile;
                this.acceptedFile.emit(inputFile);
            }
            this.writeValue(files);
            if (fileInput) {
                fileInput.value = '';
            }
        }
    };
    /**
     * On select one or more files event handler.
     * Writes the value.
     * @param fileList
     */
    InputFileComponent.prototype.onSelectFile = function (fileList, button) {
        var _this = this;
        if (!this.disabled) {
            button.ripple.fadeOutAll();
            // Copies the array without reference.
            var files_1 = this.files.slice();
            Array.from(fileList).forEach(function (file) {
                var inputFile = new _dto_input_file__WEBPACK_IMPORTED_MODULE_2__["InputFile"](null, null, file);
                if (_this.fileGuard(files_1, inputFile)) {
                    files_1.push(inputFile);
                    _this.acceptedFile.emit(inputFile);
                }
            });
            this.writeValue(files_1);
            this.fileInput.nativeElement.value = '';
        }
    };
    /**
     * Implementation of ControlValueAccessor.
     * @param fn
     */
    InputFileComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * Implementation of ControlValueAccessor.
     * @param fn
     */
    InputFileComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Implementation of ControlValueAccessor.
     * @param isDisabled
     */
    InputFileComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * Implementation of ControlValueAccessor.
     * @param files
     */
    InputFileComponent.prototype.writeValue = function (files) {
        if (!this.disabled) {
            this.files = files;
            this.setFilePreview();
            this.onChange(this.files);
        }
    };
    /**
     * Whether the file can be added to the model.
     * @param files
     * @param file,
     * @param bypassLimit
     */
    InputFileComponent.prototype.fileGuard = function (files, file, bypassLimit) {
        if (!bypassLimit && !this.inputFileService.limitGuard(files, this.fileLimit)) {
            this.rejectedFile.emit({ reason: _enums_input_file_rejected_reason__WEBPACK_IMPORTED_MODULE_3__["InputFileRejectedReason"].limitReached, file: file });
            return false;
        }
        if (!this.inputFileService.sizeGuard(file.file, this.sizeLimit)) {
            this.rejectedFile.emit({ reason: _enums_input_file_rejected_reason__WEBPACK_IMPORTED_MODULE_3__["InputFileRejectedReason"].sizeReached, file: file });
            return false;
        }
        if (!this.inputFileService.typeGuard(file.file, this.fileAccept)) {
            this.rejectedFile.emit({ reason: _enums_input_file_rejected_reason__WEBPACK_IMPORTED_MODULE_3__["InputFileRejectedReason"].badFile, file: file });
            return false;
        }
        return true;
    };
    /**
     * Sets the file preview with FileReader.
     */
    InputFileComponent.prototype.setFilePreview = function () {
        var _this = this;
        var _loop_1 = function (index) {
            if (this_1.files[index].file != null && this_1.inputFileService.typeGuard(this_1.files[index].file, 'image/*')) {
                var fr_1 = new FileReader();
                fr_1.onload = function () {
                    _this.files[index].preview = fr_1.result;
                };
                fr_1.readAsDataURL(this_1.files[index].file);
            }
        };
        var this_1 = this;
        for (var index in this.files) {
            _loop_1(index);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputFileComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputFileComponent.prototype, "inputId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputFileComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputFileComponent.prototype, "internalPlaceholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InputFileComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InputFileComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InputFileComponent.prototype, "widthPreview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InputFileComponent.prototype, "heightPreview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], InputFileComponent.prototype, "fileAccept", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], InputFileComponent.prototype, "fileLimit", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], InputFileComponent.prototype, "sizeLimit", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InputFileComponent.prototype, "acceptedFile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InputFileComponent.prototype, "deletedFile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], InputFileComponent.prototype, "rejectedFile", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InputFileComponent.prototype, "fileInput", void 0);
    InputFileComponent = InputFileComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-file',
            template: __webpack_require__(/*! ./input-file.component.html */ "./src/lib/components/input-file/input-file.component.html"),
            styles: [__webpack_require__(/*! ./input-file.scss */ "./src/lib/components/input-file/input-file.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InputFileComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_services_input_file_service__WEBPACK_IMPORTED_MODULE_4__["InputFileService"]])
    ], InputFileComponent);
    return InputFileComponent;
    var InputFileComponent_1;
}());



/***/ }),

/***/ "./src/lib/components/input-file/input-file.scss":
/*!*******************************************************!*\
  !*** ./src/lib/components/input-file/input-file.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-file-container {\n  position: relative; }\n  .input-file-container .files-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding-top: 1.25rem; }\n  .input-file-container .file-button, .input-file-container .file-container {\n    align-items: center;\n    display: flex;\n    height: 10rem;\n    justify-content: center;\n    width: 10rem; }\n  .input-file-container .delete-button {\n    width: 10rem; }\n  .input-file-container .file-container {\n    flex-direction: column;\n    margin-right: 1rem; }\n  .input-file-container .replace-button {\n    flex: 1;\n    width: 10rem; }\n  .input-file-container .mat-button:focus {\n    outline: 0; }\n  .input-file-container .file-name {\n    width: calc(10rem - 2.5rem); }\n  .input-file-container .image-preview {\n    margin: 0 -16px;\n    height: 10rem;\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 10rem; }\n  .input-file-container .input-icon {\n    font-size: calc(10rem / 4);\n    height: calc(10rem / 4);\n    width: calc(10rem / 4); }\n  .input-file-container .mat-orphan-label {\n    color: rgba(0, 0, 0, 0.54);\n    display: block;\n    font-size: 1rem;\n    left: 0;\n    margin: 0;\n    position: absolute;\n    top: 0;\n    -webkit-transform-origin: 0;\n            transform-origin: 0;\n    transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n  .input-file-container .mat-orphan-label.active {\n      -webkit-transform: scale(0.75);\n              transform: scale(0.75); }\n  @-webkit-keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n            transform: scale3d(0.97, 0.97, 0.97); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1); } }\n  @keyframes bounceIn {\n  from,\n  20%,\n  40%,\n  60%,\n  80%,\n  to {\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n            transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n            transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n            transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n            transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n            transform: scale3d(0.97, 0.97, 0.97); }\n  to {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1); } }\n  .bounce-in {\n  -webkit-animation-duration: .75s;\n          animation-duration: .75s;\n  -webkit-animation-name: bounceIn;\n          animation-name: bounceIn; }\n"

/***/ }),

/***/ "./src/lib/directives/drop-zone/drop-zone.directive.ts":
/*!*************************************************************!*\
  !*** ./src/lib/directives/drop-zone/drop-zone.directive.ts ***!
  \*************************************************************/
/*! exports provided: DropZoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZoneDirective", function() { return DropZoneDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropZoneDirective = /** @class */ (function () {
    function DropZoneDirective() {
        this.disabled = false;
        this.itemDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemDragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Prevent dragleave on children, could be better but it's cheap for better performance
        this.whiteListClasses = ['file-button', 'mat-button-wrapper', 'input-icon'];
    }
    /**
     * Drag Over event handler.
     * @param event
     */
    DropZoneDirective.prototype.onDragOver = function (event) {
        this.preventAndStopEventPropagation(event);
        if (!this.isOver && !this.disabled) {
            this.isOver = true;
            this.itemDragOver.emit();
        }
    };
    /**
     * Drag Leave event handler.
     * @param event
     */
    DropZoneDirective.prototype.onDragLeave = function (event) {
        this.preventAndStopEventPropagation(event);
        if (this.isOver && this.isTrueLeave(event) && !this.disabled) {
            this.isOver = false;
            this.itemDragLeave.emit();
        }
    };
    /**
     * Drop event handler.
     * @param event
     */
    DropZoneDirective.prototype.onDrop = function (event) {
        if (!this.disabled && event instanceof DragEvent) {
            this.preventAndStopEventPropagation(event);
            this.isOver = false;
            try {
                this.itemDrop.emit(event.dataTransfer.files);
            }
            catch (e) {
                console.error(e);
            }
        }
    };
    /**
     * Prevents and stops event propagration.
     * @param event
     */
    DropZoneDirective.prototype.preventAndStopEventPropagation = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * Checks if the leave is not trigger by a children.
     * @param event
     */
    DropZoneDirective.prototype.isTrueLeave = function (event) {
        for (var _i = 0, _a = this.whiteListClasses; _i < _a.length; _i++) {
            var c = _a[_i];
            if (event.fromElement != null && event.fromElement.className.indexOf(c) >= 0) {
                return false;
            }
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "itemDragOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "itemDragLeave", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropZoneDirective.prototype, "itemDrop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDragOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('dragleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDragLeave", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDrop", null);
    DropZoneDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[inputFileDropZone]'
        })
    ], DropZoneDirective);
    return DropZoneDirective;
}());



/***/ }),

/***/ "./src/lib/dto/input-file.ts":
/*!***********************************!*\
  !*** ./src/lib/dto/input-file.ts ***!
  \***********************************/
/*! exports provided: InputFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFile", function() { return InputFile; });
var InputFile = /** @class */ (function () {
    function InputFile(id, preview, file) {
        this.id = id;
        this.preview = preview;
        this.file = file;
    }
    return InputFile;
}());



/***/ }),

/***/ "./src/lib/enums/input-file-rejected-reason.ts":
/*!*****************************************************!*\
  !*** ./src/lib/enums/input-file-rejected-reason.ts ***!
  \*****************************************************/
/*! exports provided: InputFileRejectedReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFileRejectedReason", function() { return InputFileRejectedReason; });
var InputFileRejectedReason;
(function (InputFileRejectedReason) {
    InputFileRejectedReason[InputFileRejectedReason["badFile"] = 0] = "badFile";
    InputFileRejectedReason[InputFileRejectedReason["limitReached"] = 1] = "limitReached";
    InputFileRejectedReason[InputFileRejectedReason["sizeReached"] = 2] = "sizeReached";
})(InputFileRejectedReason || (InputFileRejectedReason = {}));


/***/ }),

/***/ "./src/lib/input-file.module.ts":
/*!**************************************!*\
  !*** ./src/lib/input-file.module.ts ***!
  \**************************************/
/*! exports provided: InputFileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFileModule", function() { return InputFileModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_drop_zone_drop_zone_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/drop-zone/drop-zone.directive */ "./src/lib/directives/drop-zone/drop-zone.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/input-file/input-file.component */ "./src/lib/components/input-file/input-file.component.ts");
/* harmony import */ var _services_input_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/input-file.service */ "./src/lib/services/input-file.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var InputFileModule = /** @class */ (function () {
    function InputFileModule() {
    }
    InputFileModule_1 = InputFileModule;
    InputFileModule.forRoot = function (config) {
        return {
            ngModule: InputFileModule_1,
            providers: [
                _services_input_file_service__WEBPACK_IMPORTED_MODULE_4__["InputFileService"],
                { provide: 'config', useValue: config }
            ]
        };
    };
    InputFileModule = InputFileModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _directives_drop_zone_drop_zone_directive__WEBPACK_IMPORTED_MODULE_1__["DropZoneDirective"],
                _components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_3__["InputFileComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
            ],
            exports: [
                _components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_3__["InputFileComponent"]
            ],
            providers: [
                _services_input_file_service__WEBPACK_IMPORTED_MODULE_4__["InputFileService"]
            ],
            entryComponents: [_components_input_file_input_file_component__WEBPACK_IMPORTED_MODULE_3__["InputFileComponent"]]
        })
    ], InputFileModule);
    return InputFileModule;
    var InputFileModule_1;
}());



/***/ }),

/***/ "./src/lib/services/input-file.service.ts":
/*!************************************************!*\
  !*** ./src/lib/services/input-file.service.ts ***!
  \************************************************/
/*! exports provided: InputFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFileService", function() { return InputFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var InputFileService = /** @class */ (function () {
    function InputFileService(_config) {
        this._config = _config;
    }
    Object.defineProperty(InputFileService.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Whether the limit is not reached.
     * @param files
     */
    InputFileService.prototype.limitGuard = function (files, fileLimit) {
        return files.length < fileLimit;
    };
    /**
     * Whether the file size is not bigger than the limit.
     * @param file
     * @param sizeLimit
     */
    InputFileService.prototype.sizeGuard = function (file, sizeLimit) {
        return !sizeLimit || file.size < sizeLimit * 1024 * 1024; // TODO : improve
    };
    /**
     * Whether the type of the file is enabled.
     * @param file
     * @param fileAccept
     */
    InputFileService.prototype.typeGuard = function (file, fileAccept) {
        var enabled = fileAccept == null;
        if (fileAccept) {
            var accept = fileAccept.replace('*', '');
            var types = accept.split(',');
            for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
                var type = types_1[_i];
                if (file.type.startsWith(type) || (type.charAt(0) === '.' && file.name != null && file.name.endsWith(type))) {
                    enabled = true;
                    break;
                }
            }
        }
        return enabled;
    };
    InputFileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('config')),
        __metadata("design:paramtypes", [Object])
    ], InputFileService);
    return InputFileService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _demo_demo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo/demo.module */ "./src/demo/demo.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_demo_demo_module__WEBPACK_IMPORTED_MODULE_2__["DemoModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Giacomo\Desktop\Horizon\ngx-input-file\ngx-input-file\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map