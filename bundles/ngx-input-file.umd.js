(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('ngx-input-file', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/material/button', '@angular/material/icon'], factory) :
    (factory((global['ngx-input-file'] = {}),global.ng.core,global.ng.forms,global.ng.common,global.ng.material.button,global.ng.material.icon));
}(this, (function (exports,i0,forms,common,button,icon) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var InputFile = (function () {
        function InputFile(id, preview, file) {
            this.id = id;
            this.preview = preview;
            this.file = file;
        }
        return InputFile;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {number} */
    var InputFileRejectedReason = {
        badFile: 0,
        limitReached: 1,
        sizeReached: 2,
    };
    InputFileRejectedReason[InputFileRejectedReason.badFile] = "badFile";
    InputFileRejectedReason[InputFileRejectedReason.limitReached] = "limitReached";
    InputFileRejectedReason[InputFileRejectedReason.sizeReached] = "sizeReached";

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var InputFileService = (function () {
        function InputFileService(_config) {
            this._config = _config;
        }
        Object.defineProperty(InputFileService.prototype, "config", {
            get: /**
             * @return {?}
             */ function () {
                return this._config;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Whether the limit is not reached.
         * @param {?} files
         * @param {?} fileLimit
         * @return {?}
         */
        InputFileService.prototype.limitGuard = /**
         * Whether the limit is not reached.
         * @param {?} files
         * @param {?} fileLimit
         * @return {?}
         */
            function (files, fileLimit) {
                return files.length < fileLimit;
            };
        /**
         * Whether the file size is not bigger than the limit.
         * @param {?} file
         * @param {?} sizeLimit
         * @return {?}
         */
        InputFileService.prototype.sizeGuard = /**
         * Whether the file size is not bigger than the limit.
         * @param {?} file
         * @param {?} sizeLimit
         * @return {?}
         */
            function (file, sizeLimit) {
                return !sizeLimit || file.size < sizeLimit * 1024 * 1024; // TODO : improve
            };
        /**
         * Whether the type of the file is enabled.
         * @param {?} file
         * @param {?} fileAccept
         * @return {?}
         */
        InputFileService.prototype.typeGuard = /**
         * Whether the type of the file is enabled.
         * @param {?} file
         * @param {?} fileAccept
         * @return {?}
         */
            function (file, fileAccept) {
                var /** @type {?} */ enabled = fileAccept == null;
                if (fileAccept) {
                    var /** @type {?} */ accept = fileAccept.replace('*', '');
                    var /** @type {?} */ types = accept.split(',');
                    try {
                        for (var types_1 = __values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
                            var type = types_1_1.value;
                            if (file.type.startsWith(type) || (type.charAt(0) === '.' && file.name != null && file.name.endsWith(type))) {
                                enabled = true;
                                break;
                            }
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (types_1_1 && !types_1_1.done && (_a = types_1.return))
                                _a.call(types_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                return enabled;
                var e_1, _a;
            };
        InputFileService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        InputFileService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: ['config',] }] }
            ];
        };
        /** @nocollapse */ InputFileService.ngInjectableDef = i0.defineInjectable({ factory: function InputFileService_Factory() { return new InputFileService(i0.inject("config")); }, token: InputFileService, providedIn: "root" });
        return InputFileService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var InputFileComponent = (function () {
        function InputFileComponent(inputFileService) {
            this.inputFileService = inputFileService;
            this.acceptedFile = new i0.EventEmitter();
            this.deletedFile = new i0.EventEmitter();
            this.rejectedFile = new i0.EventEmitter();
            this.files = new Array();
            this.onChange = function (files) { };
            this.onTouched = function () { };
        }
        Object.defineProperty(InputFileComponent.prototype, "fileAccept", {
            get: /**
             * @return {?}
             */ function () {
                return this._fileAccept || this.inputFileService.config.fileAccept || '*';
            },
            set: /**
             * @param {?} fileAccept
             * @return {?}
             */ function (fileAccept) {
                this._fileAccept = fileAccept;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "fileLimit", {
            get: /**
             * @return {?}
             */ function () {
                return this._fileLimit || this.inputFileService.config.fileLimit || 1;
            },
            set: /**
             * @param {?} fileLimit
             * @return {?}
             */ function (fileLimit) {
                this._fileLimit = fileLimit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "sizeLimit", {
            get: /**
             * @return {?}
             */ function () {
                return this._sizeLimit || this.inputFileService.config.sizeLimit || null;
            },
            set: /**
             * @param {?} sizeLimit
             * @return {?}
             */ function (sizeLimit) {
                this._sizeLimit = sizeLimit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InputFileComponent.prototype, "canAddFile", {
            get: /**
             * @return {?}
             */ function () {
                return this.files && this.files.length < this.fileLimit;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * On delete a file event handler.
         * @param {?} index
         * @return {?}
         */
        InputFileComponent.prototype.onDeleteFile = /**
         * On delete a file event handler.
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (!this.disabled) {
                    var /** @type {?} */ files = this.files.slice();
                    this.deletedFile.emit(files[index]);
                    files.splice(index, 1);
                    this.writeValue(files);
                }
            };
        /**
         * On drag over event handler.
         * Adds a ripple effect on the button.
         * @param {?} button
         * @return {?}
         */
        InputFileComponent.prototype.onDragOver = /**
         * On drag over event handler.
         * Adds a ripple effect on the button.
         * @param {?} button
         * @return {?}
         */
            function (button$$1) {
                button$$1.ripple.launch({ centered: true, persistent: true });
            };
        /**
         * On drag leave event handler.
         * Fades the ripple effect of the button.
         * @param {?} button
         * @return {?}
         */
        InputFileComponent.prototype.onDragLeave = /**
         * On drag leave event handler.
         * Fades the ripple effect of the button.
         * @param {?} button
         * @return {?}
         */
            function (button$$1) {
                button$$1.ripple.fadeOutAll();
            };
        /**
         * On replace one file event handler.
         * Writes the value.
         * @param {?} fileList
         * @param {?} index
         * @param {?} button
         * @param {?=} fileInput
         * @return {?}
         */
        InputFileComponent.prototype.onReplaceFile = /**
         * On replace one file event handler.
         * Writes the value.
         * @param {?} fileList
         * @param {?} index
         * @param {?} button
         * @param {?=} fileInput
         * @return {?}
         */
            function (fileList, index, button$$1, fileInput) {
                if (!this.disabled) {
                    // Copies the array without reference.
                    var /** @type {?} */ files = this.files.slice();
                    // Assumes that a single file can be replaced by a single file.
                    var /** @type {?} */ inputFile = new InputFile(null, null, fileList.item(0));
                    button$$1.ripple.fadeOutAll();
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
         * @param {?} fileList
         * @param {?} button
         * @return {?}
         */
        InputFileComponent.prototype.onSelectFile = /**
         * On select one or more files event handler.
         * Writes the value.
         * @param {?} fileList
         * @param {?} button
         * @return {?}
         */
            function (fileList, button$$1) {
                var _this = this;
                if (!this.disabled) {
                    button$$1.ripple.fadeOutAll();
                    // Copies the array without reference.
                    var /** @type {?} */ files_1 = this.files.slice();
                    Array.from(fileList).forEach(function (file) {
                        var /** @type {?} */ inputFile = new InputFile(null, null, file);
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
         * @param {?} fn
         * @return {?}
         */
        InputFileComponent.prototype.registerOnChange = /**
         * Implementation of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * Implementation of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */
        InputFileComponent.prototype.registerOnTouched = /**
         * Implementation of ControlValueAccessor.
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * Implementation of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
        InputFileComponent.prototype.setDisabledState = /**
         * Implementation of ControlValueAccessor.
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        /**
         * Implementation of ControlValueAccessor.
         * @param {?} files
         * @return {?}
         */
        InputFileComponent.prototype.writeValue = /**
         * Implementation of ControlValueAccessor.
         * @param {?} files
         * @return {?}
         */
            function (files) {
                if (!this.disabled) {
                    this.files = files;
                    this.setFilePreview();
                    this.onChange(this.files);
                }
            };
        /**
         * Whether the file can be added to the model.
         * @param {?} files
         * @param {?} file
         * @param {?=} bypassLimit
         * @return {?}
         */
        InputFileComponent.prototype.fileGuard = /**
         * Whether the file can be added to the model.
         * @param {?} files
         * @param {?} file
         * @param {?=} bypassLimit
         * @return {?}
         */
            function (files, file, bypassLimit) {
                if (!bypassLimit && !this.inputFileService.limitGuard(files, this.fileLimit)) {
                    this.rejectedFile.emit({ reason: InputFileRejectedReason.limitReached, file: file });
                    return false;
                }
                if (!this.inputFileService.sizeGuard(file.file, this.sizeLimit)) {
                    this.rejectedFile.emit({ reason: InputFileRejectedReason.sizeReached, file: file });
                    return false;
                }
                if (!this.inputFileService.typeGuard(file.file, this.fileAccept)) {
                    this.rejectedFile.emit({ reason: InputFileRejectedReason.badFile, file: file });
                    return false;
                }
                return true;
            };
        /**
         * Sets the file preview with FileReader.
         * @return {?}
         */
        InputFileComponent.prototype.setFilePreview = /**
         * Sets the file preview with FileReader.
         * @return {?}
         */
            function () {
                var _this = this;
                var _loop_1 = function (index) {
                    if (this_1.files[index].file != null && this_1.inputFileService.typeGuard(this_1.files[index].file, 'image/*')) {
                        var /** @type {?} */ fr_1 = new FileReader();
                        fr_1.onload = function () {
                            _this.files[index].preview = fr_1.result;
                        };
                        fr_1.readAsDataURL(this_1.files[index].file);
                    }
                };
                var this_1 = this;
                for (var /** @type {?} */ index in this.files) {
                    _loop_1(index);
                }
            };
        InputFileComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'input-file',
                        template: "<div class=\"input-file-container\" [style.width.%]=\"width\" [style.height.%]=\"height\">\n    <label class=\"mat-orphan-label\" [for]=\"inputId\" [class.active]=\"files?.length\" [innerHtml]=\"placeholder\" *ngIf=\"placeholder\"></label>\n    <div class=\"files-container\" [style.width.%]=\"width\" [style.height.%]=\"height\">\n\n        <ng-container *ngFor=\"let file of files; let i = index\">\n            <div class=\"file-container bounce-in\" [style.width.%]=\"widthPreview\" [style.height.%]=\"heightPreview\">\n                <button mat-button inputFileDropZone class=\"replace-button\" type=\"button\" (click)=\"fileReplace.click()\" (itemDrop)=\"onReplaceFile($event, i,replaceButton)\"\n                    [disabled]=\"disabled\" (itemDragOver)=\"onDragOver(replaceButton)\" (itemDragLeave)=\"onDragLeave(replaceButton)\"\n                    #replaceButton>\n                    <img class=\"image-preview\" [src]=\"file.preview\" *ngIf=\"file.preview; else noPreview\">\n                    <ng-template #noPreview>\n                        <mat-icon class=\"input-icon\">insert_drive_file</mat-icon>\n                        <div class=\"file-name text-truncate\" [innerHtml]=\"file.file.name\" *ngIf=\"file.file\"></div>\n                    </ng-template>\n\n                </button>\n                <button mat-button class=\"delete-button\" type=\"button\" [style.width.%]=\"widthPreview\" (click)=\"onDeleteFile(i)\" [disabled]=\"disabled\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </div>\n            <input [accept]=\"fileAccept\" hidden type=\"file\" #fileReplace (change)=\"onReplaceFile($event.target.files, i, replaceButton, fileReplace)\">\n        </ng-container>\n\n        <ng-container *ngIf=\"canAddFile\">\n            <button mat-button inputFileDropZone class=\"file-button\" type=\"button\" (click)=\"fileInput.click()\" (itemDrop)=\"onSelectFile($event, selectButton)\"\n                (itemDragOver)=\"onDragOver(selectButton)\" (itemDragLeave)=\"onDragLeave(selectButton)\" [style.width.%]=\"width\" [style.height.%]=\"height\"\n                 [disabled]=\"disabled\" #selectButton>\n                <mat-icon class=\"input-icon\">add</mat-icon>\n                <div [innerHtml]=\"internalPlaceholder\" *ngIf=\"internalPlaceholder\"></div>\n            </button>\n            <input [id]=\"inputId\" [accept]=\"fileAccept\" hidden type=\"file\" [attr.multiple]=\"fileLimit > 1 ? true : null\" #fileInput (change)=\"onSelectFile($event.target.files, selectButton)\">\n        </ng-container>\n    </div>\n\n</div>",
                        styles: [".input-file-container{position:relative}.input-file-container .files-container{display:flex;flex-direction:row;flex-wrap:wrap;padding-top:1.25rem}.input-file-container .file-button,.input-file-container .file-container{align-items:center;display:flex;height:10rem;justify-content:center;width:10rem}.input-file-container .delete-button{width:10rem}.input-file-container .file-container{flex-direction:column;margin-right:1rem}.input-file-container .replace-button{flex:1;width:10rem}.input-file-container .mat-button:focus{outline:0}.input-file-container .file-name{width:calc(10rem - 2.5rem)}.input-file-container .image-preview{margin:0 -16px;height:10rem;-o-object-fit:contain;object-fit:contain;width:10rem}.input-file-container .input-icon{font-size:calc(10rem / 4);height:calc(10rem / 4);width:calc(10rem / 4)}.input-file-container .mat-orphan-label{color:rgba(0,0,0,.54);display:block;font-size:1rem;left:0;margin:0;position:absolute;top:0;-webkit-transform-origin:0;transform-origin:0;transition:.4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1)}.input-file-container .mat-orphan-label.active{-webkit-transform:scale(.75);transform:scale(.75)}@-webkit-keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.bounce-in{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}"],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return InputFileComponent; }),
                                multi: true
                            }
                        ]
                    },] },
        ];
        /** @nocollapse */
        InputFileComponent.ctorParameters = function () {
            return [
                { type: InputFileService }
            ];
        };
        InputFileComponent.propDecorators = {
            disabled: [{ type: i0.Input }],
            inputId: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            internalPlaceholder: [{ type: i0.Input }],
            width: [{ type: i0.Input }],
            height: [{ type: i0.Input }],
            widthPreview: [{ type: i0.Input }],
            heightPreview: [{ type: i0.Input }],
            fileAccept: [{ type: i0.Input }],
            fileLimit: [{ type: i0.Input }],
            sizeLimit: [{ type: i0.Input }],
            acceptedFile: [{ type: i0.Output }],
            deletedFile: [{ type: i0.Output }],
            rejectedFile: [{ type: i0.Output }],
            fileInput: [{ type: i0.ViewChild, args: ['fileInput',] }]
        };
        return InputFileComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DropZoneDirective = (function () {
        function DropZoneDirective() {
            this.disabled = false;
            this.itemDragOver = new i0.EventEmitter();
            this.itemDragLeave = new i0.EventEmitter();
            this.itemDrop = new i0.EventEmitter();
            this.whiteListClasses = ['file-button', 'mat-button-wrapper', 'input-icon'];
        }
        /**
         * Drag Over event handler.
         * @param event
         */
        /**
         * Drag Over event handler.
         * @param {?} event
         * @return {?}
         */
        DropZoneDirective.prototype.onDragOver = /**
         * Drag Over event handler.
         * @param {?} event
         * @return {?}
         */
            function (event) {
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
        /**
         * Drag Leave event handler.
         * @param {?} event
         * @return {?}
         */
        DropZoneDirective.prototype.onDragLeave = /**
         * Drag Leave event handler.
         * @param {?} event
         * @return {?}
         */
            function (event) {
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
        /**
         * Drop event handler.
         * @param {?} event
         * @return {?}
         */
        DropZoneDirective.prototype.onDrop = /**
         * Drop event handler.
         * @param {?} event
         * @return {?}
         */
            function (event) {
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
         * @param {?} event
         * @return {?}
         */
        DropZoneDirective.prototype.preventAndStopEventPropagation = /**
         * Prevents and stops event propagration.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                event.preventDefault();
                event.stopPropagation();
            };
        /**
         * Checks if the leave is not trigger by a children.
         * @param {?} event
         * @return {?}
         */
        DropZoneDirective.prototype.isTrueLeave = /**
         * Checks if the leave is not trigger by a children.
         * @param {?} event
         * @return {?}
         */
            function (event) {
                try {
                    for (var _a = __values(this.whiteListClasses), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var c = _b.value;
                        if (event.fromElement != null && event.fromElement.className.indexOf(c) >= 0) {
                            return false;
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                return true;
                var e_1, _c;
            };
        DropZoneDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[inputFileDropZone]'
                    },] },
        ];
        DropZoneDirective.propDecorators = {
            disabled: [{ type: i0.Input }],
            itemDragOver: [{ type: i0.Output }],
            itemDragLeave: [{ type: i0.Output }],
            itemDrop: [{ type: i0.Output }],
            onDragOver: [{ type: i0.HostListener, args: ['dragover', ['$event'],] }],
            onDragLeave: [{ type: i0.HostListener, args: ['dragleave', ['$event'],] }],
            onDrop: [{ type: i0.HostListener, args: ['drop', ['$event'],] }]
        };
        return DropZoneDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var InputFileModule = (function () {
        function InputFileModule() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        InputFileModule.forRoot = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                return {
                    ngModule: InputFileModule,
                    providers: [
                        InputFileService,
                        { provide: 'config', useValue: config }
                    ]
                };
            };
        InputFileModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            DropZoneDirective,
                            InputFileComponent
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            button.MatButtonModule,
                            icon.MatIconModule
                        ],
                        exports: [
                            InputFileComponent
                        ],
                        providers: [
                            InputFileService
                        ],
                        entryComponents: [InputFileComponent]
                    },] },
        ];
        return InputFileModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.InputFile = InputFile;
    exports.InputFileComponent = InputFileComponent;
    exports.InputFileModule = InputFileModule;
    exports.InputFileService = InputFileService;
    exports.ɵb = DropZoneDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWlucHV0LWZpbGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtaW5wdXQtZmlsZS9zcmMvbGliL2R0by9pbnB1dC1maWxlLnRzIixudWxsLCJuZzovL25neC1pbnB1dC1maWxlL3NyYy9saWIvc2VydmljZXMvaW5wdXQtZmlsZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtaW5wdXQtZmlsZS9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQtZmlsZS9pbnB1dC1maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWlucHV0LWZpbGUvc3JjL2xpYi9kaXJlY3RpdmVzL2Ryb3Atem9uZS9kcm9wLXpvbmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtaW5wdXQtZmlsZS9zcmMvbGliL2lucHV0LWZpbGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJbnB1dEZpbGUge1xyXG4gICAgcHVibGljIGlkOiBhbnk7XHJcbiAgICBwdWJsaWMgZmlsZTogRmlsZTtcclxuICAgIHB1YmxpYyBwcmV2aWV3OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaWQ6IGFueSxcclxuICAgICAgICBwcmV2aWV3OiBzdHJpbmcsXHJcbiAgICAgICAgZmlsZT86IEZpbGVcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnByZXZpZXcgPSBwcmV2aWV3O1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICB9XHJcbn1cclxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlIH0gZnJvbSAnLi4vZHRvL2lucHV0LWZpbGUnO1xyXG5pbXBvcnQgeyBJbnB1dEZpbGVDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2lucHV0LWZpbGUtY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRGaWxlU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBfY29uZmlnOiBJbnB1dEZpbGVDb25maWdcclxuICAgICkgeyB9XHJcblxyXG4gICAgZ2V0IGNvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgbGltaXQgaXMgbm90IHJlYWNoZWQuXHJcbiAgICAgKiBAcGFyYW0gZmlsZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpbWl0R3VhcmQoZmlsZXM6IEFycmF5PElucHV0RmlsZT4sIGZpbGVMaW1pdCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmaWxlcy5sZW5ndGggPCBmaWxlTGltaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSBmaWxlIHNpemUgaXMgbm90IGJpZ2dlciB0aGFuIHRoZSBsaW1pdC5cclxuICAgICAqIEBwYXJhbSBmaWxlXHJcbiAgICAgKiBAcGFyYW0gc2l6ZUxpbWl0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaXplR3VhcmQoZmlsZTogRmlsZSwgc2l6ZUxpbWl0OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIXNpemVMaW1pdCB8fCBmaWxlLnNpemUgPCBzaXplTGltaXQgKiAxMDI0ICogMTAyNDsgLy8gVE9ETyA6IGltcHJvdmVcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIHR5cGUgb2YgdGhlIGZpbGUgaXMgZW5hYmxlZC5cclxuICAgICAqIEBwYXJhbSBmaWxlXHJcbiAgICAgKiBAcGFyYW0gZmlsZUFjY2VwdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHlwZUd1YXJkKGZpbGU6IEZpbGUsIGZpbGVBY2NlcHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBlbmFibGVkID0gZmlsZUFjY2VwdCA9PSBudWxsO1xyXG4gICAgICAgIGlmIChmaWxlQWNjZXB0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2VwdCA9IGZpbGVBY2NlcHQucmVwbGFjZSgnKicsICcnKTtcclxuICAgICAgICAgICAgY29uc3QgdHlwZXMgPSBhY2NlcHQuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB0eXBlIG9mIHR5cGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS50eXBlLnN0YXJ0c1dpdGgodHlwZSkgfHwgKHR5cGUuY2hhckF0KDApID09PSAnLicgJiYgZmlsZS5uYW1lICE9IG51bGwgJiYgZmlsZS5uYW1lLmVuZHNXaXRoKHR5cGUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZW5hYmxlZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlIH0gZnJvbSAnLi4vLi4vZHRvL2lucHV0LWZpbGUnO1xyXG5pbXBvcnQgeyBJbnB1dEZpbGVSZWplY3RlZCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5wdXQtZmlsZS1yZWplY3RlZCc7XHJcbmltcG9ydCB7IElucHV0RmlsZVJlamVjdGVkUmVhc29uIH0gZnJvbSAnLi4vLi4vZW51bXMvaW5wdXQtZmlsZS1yZWplY3RlZC1yZWFzb24nO1xyXG5pbXBvcnQgeyBJbnB1dEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5wdXQtZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTnVtYmVyU3ltYm9sIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbnB1dC1maWxlJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImlucHV0LWZpbGUtY29udGFpbmVyXCIgW3N0eWxlLndpZHRoLiVdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0LiVdPVwiaGVpZ2h0XCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJtYXQtb3JwaGFuLWxhYmVsXCIgW2Zvcl09XCJpbnB1dElkXCIgW2NsYXNzLmFjdGl2ZV09XCJmaWxlcz8ubGVuZ3RoXCIgW2lubmVySHRtbF09XCJwbGFjZWhvbGRlclwiICpuZ0lmPVwicGxhY2Vob2xkZXJcIj48L2xhYmVsPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGVzLWNvbnRhaW5lclwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC4lXT1cImhlaWdodFwiPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWxlIG9mIGZpbGVzOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWNvbnRhaW5lciBib3VuY2UtaW5cIiBbc3R5bGUud2lkdGguJV09XCJ3aWR0aFByZXZpZXdcIiBbc3R5bGUuaGVpZ2h0LiVdPVwiaGVpZ2h0UHJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGlucHV0RmlsZURyb3Bab25lIGNsYXNzPVwicmVwbGFjZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImZpbGVSZXBsYWNlLmNsaWNrKClcIiAoaXRlbURyb3ApPVwib25SZXBsYWNlRmlsZSgkZXZlbnQsIGkscmVwbGFjZUJ1dHRvbilcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChpdGVtRHJhZ092ZXIpPVwib25EcmFnT3ZlcihyZXBsYWNlQnV0dG9uKVwiIChpdGVtRHJhZ0xlYXZlKT1cIm9uRHJhZ0xlYXZlKHJlcGxhY2VCdXR0b24pXCJcclxuICAgICAgICAgICAgICAgICAgICAjcmVwbGFjZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1hZ2UtcHJldmlld1wiIFtzcmNdPVwiZmlsZS5wcmV2aWV3XCIgKm5nSWY9XCJmaWxlLnByZXZpZXc7IGVsc2Ugbm9QcmV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub1ByZXZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImlucHV0LWljb25cIj5pbnNlcnRfZHJpdmVfZmlsZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW5hbWUgdGV4dC10cnVuY2F0ZVwiIFtpbm5lckh0bWxdPVwiZmlsZS5maWxlLm5hbWVcIiAqbmdJZj1cImZpbGUuZmlsZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJkZWxldGUtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoUHJldmlld1wiIChjbGljayk9XCJvbkRlbGV0ZUZpbGUoaSlcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IFthY2NlcHRdPVwiZmlsZUFjY2VwdFwiIGhpZGRlbiB0eXBlPVwiZmlsZVwiICNmaWxlUmVwbGFjZSAoY2hhbmdlKT1cIm9uUmVwbGFjZUZpbGUoJGV2ZW50LnRhcmdldC5maWxlcywgaSwgcmVwbGFjZUJ1dHRvbiwgZmlsZVJlcGxhY2UpXCI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjYW5BZGRGaWxlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBpbnB1dEZpbGVEcm9wWm9uZSBjbGFzcz1cImZpbGUtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJmaWxlSW5wdXQuY2xpY2soKVwiIChpdGVtRHJvcCk9XCJvblNlbGVjdEZpbGUoJGV2ZW50LCBzZWxlY3RCdXR0b24pXCJcclxuICAgICAgICAgICAgICAgIChpdGVtRHJhZ092ZXIpPVwib25EcmFnT3ZlcihzZWxlY3RCdXR0b24pXCIgKGl0ZW1EcmFnTGVhdmUpPVwib25EcmFnTGVhdmUoc2VsZWN0QnV0dG9uKVwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC4lXT1cImhlaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgI3NlbGVjdEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImlucHV0LWljb25cIj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIdG1sXT1cImludGVybmFsUGxhY2Vob2xkZXJcIiAqbmdJZj1cImludGVybmFsUGxhY2Vob2xkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxpbnB1dCBbaWRdPVwiaW5wdXRJZFwiIFthY2NlcHRdPVwiZmlsZUFjY2VwdFwiIGhpZGRlbiB0eXBlPVwiZmlsZVwiIFthdHRyLm11bHRpcGxlXT1cImZpbGVMaW1pdCA+IDEgPyB0cnVlIDogbnVsbFwiICNmaWxlSW5wdXQgKGNoYW5nZSk9XCJvblNlbGVjdEZpbGUoJGV2ZW50LnRhcmdldC5maWxlcywgc2VsZWN0QnV0dG9uKVwiPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcblxyXG48L2Rpdj5gLFxyXG4gICAgc3R5bGVzOiBbYC5pbnB1dC1maWxlLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0uaW5wdXQtZmlsZS1jb250YWluZXIgLmZpbGVzLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtd3JhcDp3cmFwO3BhZGRpbmctdG9wOjEuMjVyZW19LmlucHV0LWZpbGUtY29udGFpbmVyIC5maWxlLWJ1dHRvbiwuaW5wdXQtZmlsZS1jb250YWluZXIgLmZpbGUtY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwcmVtO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTByZW19LmlucHV0LWZpbGUtY29udGFpbmVyIC5kZWxldGUtYnV0dG9ue3dpZHRoOjEwcmVtfS5pbnB1dC1maWxlLWNvbnRhaW5lciAuZmlsZS1jb250YWluZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbi1yaWdodDoxcmVtfS5pbnB1dC1maWxlLWNvbnRhaW5lciAucmVwbGFjZS1idXR0b257ZmxleDoxO3dpZHRoOjEwcmVtfS5pbnB1dC1maWxlLWNvbnRhaW5lciAubWF0LWJ1dHRvbjpmb2N1c3tvdXRsaW5lOjB9LmlucHV0LWZpbGUtY29udGFpbmVyIC5maWxlLW5hbWV7d2lkdGg6Y2FsYygxMHJlbSAtIDIuNXJlbSl9LmlucHV0LWZpbGUtY29udGFpbmVyIC5pbWFnZS1wcmV2aWV3e21hcmdpbjowIC0xNnB4O2hlaWdodDoxMHJlbTstby1vYmplY3QtZml0OmNvbnRhaW47b2JqZWN0LWZpdDpjb250YWluO3dpZHRoOjEwcmVtfS5pbnB1dC1maWxlLWNvbnRhaW5lciAuaW5wdXQtaWNvbntmb250LXNpemU6Y2FsYygxMHJlbSAvIDQpO2hlaWdodDpjYWxjKDEwcmVtIC8gNCk7d2lkdGg6Y2FsYygxMHJlbSAvIDQpfS5pbnB1dC1maWxlLWNvbnRhaW5lciAubWF0LW9ycGhhbi1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7ZGlzcGxheTpibG9jaztmb250LXNpemU6MXJlbTtsZWZ0OjA7bWFyZ2luOjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjA7dHJhbnNmb3JtLW9yaWdpbjowO3RyYW5zaXRpb246LjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLHdpZHRoIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uaW5wdXQtZmlsZS1jb250YWluZXIgLm1hdC1vcnBoYW4tbGFiZWwuYWN0aXZley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43NSk7dHJhbnNmb3JtOnNjYWxlKC43NSl9QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluezIwJSw0MCUsNjAlLDgwJSxmcm9tLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKTt0cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyl9MjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSk7dHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjAzLDEuMDMsMS4wMyk7dHJhbnNmb3JtOnNjYWxlM2QoMS4wMywxLjAzLDEuMDMpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NywuOTcsLjk3KTt0cmFuc2Zvcm06c2NhbGUzZCguOTcsLjk3LC45Nyl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKX19QGtleWZyYW1lcyBib3VuY2VJbnsyMCUsNDAlLDYwJSw4MCUsZnJvbSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyk7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4wMywxLjAzLDEuMDMpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMDMsMS4wMywxLjAzKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTcsLjk3LC45Nyk7dHJhbnNmb3JtOnNjYWxlM2QoLjk3LC45NywuOTcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSl9fS5ib3VuY2UtaW57LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Ljc1czthbmltYXRpb24tZHVyYXRpb246Ljc1czstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJvdW5jZUluO2FuaW1hdGlvbi1uYW1lOmJvdW5jZUlufWBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRGaWxlQ29tcG9uZW50KSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgICBwcml2YXRlIF9maWxlQWNjZXB0OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9maWxlTGltaXQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3NpemVMaW1pdDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGludGVybmFsUGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIHdpZHRoUHJldmlldzogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgaGVpZ2h0UHJldmlldzogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBmaWxlQWNjZXB0KGZpbGVBY2NlcHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2ZpbGVBY2NlcHQgPSBmaWxlQWNjZXB0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWxlQWNjZXB0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWxlQWNjZXB0IHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcuZmlsZUFjY2VwdCB8fCAnKic7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGZpbGVMaW1pdChmaWxlTGltaXQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2ZpbGVMaW1pdCA9IGZpbGVMaW1pdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmlsZUxpbWl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWxlTGltaXQgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5maWxlTGltaXQgfHwgMTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgc2l6ZUxpbWl0KHNpemVMaW1pdDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2l6ZUxpbWl0ID0gc2l6ZUxpbWl0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaXplTGltaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemVMaW1pdCB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLnNpemVMaW1pdCB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSBhY2NlcHRlZEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPElucHV0RmlsZT4oKTtcclxuICAgIEBPdXRwdXQoKSBkZWxldGVkRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8SW5wdXRGaWxlPigpO1xyXG4gICAgQE91dHB1dCgpIHJlamVjdGVkRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8SW5wdXRGaWxlUmVqZWN0ZWQ+KCk7XHJcbiAgICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnKSBmaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgcHVibGljIGZpbGVzID0gbmV3IEFycmF5PElucHV0RmlsZT4oKTtcclxuICAgIHB1YmxpYyBvbkNoYW5nZSA9IChmaWxlczogQXJyYXk8SW5wdXRGaWxlPikgPT4geyB9O1xyXG4gICAgcHVibGljIG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgICBnZXQgY2FuQWRkRmlsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA8IHRoaXMuZmlsZUxpbWl0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaW5wdXRGaWxlU2VydmljZTogSW5wdXRGaWxlU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGRlbGV0ZSBhIGZpbGUgZXZlbnQgaGFuZGxlci5cclxuICAgICAqIEBwYXJhbSBpbmRleFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25EZWxldGVGaWxlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlZEZpbGUuZW1pdChmaWxlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBmaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUoZmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGRyYWcgb3ZlciBldmVudCBoYW5kbGVyLlxyXG4gICAgICogQWRkcyBhIHJpcHBsZSBlZmZlY3Qgb24gdGhlIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uRHJhZ092ZXIoYnV0dG9uOiBNYXRCdXR0b24pOiB2b2lkIHtcclxuICAgICAgICBidXR0b24ucmlwcGxlLmxhdW5jaCh7IGNlbnRlcmVkOiB0cnVlLCBwZXJzaXN0ZW50OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gZHJhZyBsZWF2ZSBldmVudCBoYW5kbGVyLlxyXG4gICAgICogRmFkZXMgdGhlIHJpcHBsZSBlZmZlY3Qgb2YgdGhlIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uRHJhZ0xlYXZlKGJ1dHRvbjogTWF0QnV0dG9uKTogdm9pZCB7XHJcbiAgICAgICAgYnV0dG9uLnJpcHBsZS5mYWRlT3V0QWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiByZXBsYWNlIG9uZSBmaWxlIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKiBXcml0ZXMgdGhlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIGZpbGVMaXN0XHJcbiAgICAgKiBAcGFyYW0gaW5kZXhcclxuICAgICAqIEBwYXJhbSBmaWxlSW5wdXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uUmVwbGFjZUZpbGUoZmlsZUxpc3Q6IEZpbGVMaXN0LCBpbmRleDogbnVtYmVyLCBidXR0b246IE1hdEJ1dHRvbiwgZmlsZUlucHV0PzogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAvLyBDb3BpZXMgdGhlIGFycmF5IHdpdGhvdXQgcmVmZXJlbmNlLlxyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXMuc2xpY2UoKTtcclxuICAgICAgICAgICAgLy8gQXNzdW1lcyB0aGF0IGEgc2luZ2xlIGZpbGUgY2FuIGJlIHJlcGxhY2VkIGJ5IGEgc2luZ2xlIGZpbGUuXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RmlsZSA9IG5ldyBJbnB1dEZpbGUobnVsbCwgbnVsbCwgZmlsZUxpc3QuaXRlbSgwKSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yaXBwbGUuZmFkZU91dEFsbCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlR3VhcmQoZmlsZXMsIGlucHV0RmlsZSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGZpbGVzW2luZGV4XSA9IGlucHV0RmlsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjZXB0ZWRGaWxlLmVtaXQoaW5wdXRGaWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUoZmlsZXMpO1xyXG4gICAgICAgICAgICBpZiAoZmlsZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIHNlbGVjdCBvbmUgb3IgbW9yZSBmaWxlcyBldmVudCBoYW5kbGVyLlxyXG4gICAgICogV3JpdGVzIHRoZSB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBmaWxlTGlzdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25TZWxlY3RGaWxlKGZpbGVMaXN0OiBGaWxlTGlzdCwgYnV0dG9uOiBNYXRCdXR0b24pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgYnV0dG9uLnJpcHBsZS5mYWRlT3V0QWxsKCk7XHJcbiAgICAgICAgICAgIC8vIENvcGllcyB0aGUgYXJyYXkgd2l0aG91dCByZWZlcmVuY2UuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcy5zbGljZSgpO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGZpbGVMaXN0KS5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRGaWxlID0gbmV3IElucHV0RmlsZShudWxsLCBudWxsLCBmaWxlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVHdWFyZChmaWxlcywgaW5wdXRGaWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goaW5wdXRGaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VwdGVkRmlsZS5lbWl0KGlucHV0RmlsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUoZmlsZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXHJcbiAgICAgKiBAcGFyYW0gZm5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChmaWxlczogQXJyYXk8SW5wdXRGaWxlPikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxyXG4gICAgICogQHBhcmFtIGZuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICAgICAqIEBwYXJhbSBpc0Rpc2FibGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxyXG4gICAgICogQHBhcmFtIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcclxuICAgICAgICAgICAgdGhpcy5zZXRGaWxlUHJldmlldygpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuZmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIGZpbGUgY2FuIGJlIGFkZGVkIHRvIHRoZSBtb2RlbC5cclxuICAgICAqIEBwYXJhbSBmaWxlc1xyXG4gICAgICogQHBhcmFtIGZpbGUsXHJcbiAgICAgKiBAcGFyYW0gYnlwYXNzTGltaXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBmaWxlR3VhcmQoZmlsZXM6IEFycmF5PElucHV0RmlsZT4sIGZpbGU6IElucHV0RmlsZSwgYnlwYXNzTGltaXQ/OiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFieXBhc3NMaW1pdCAmJiAhdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmxpbWl0R3VhcmQoZmlsZXMsIHRoaXMuZmlsZUxpbWl0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlamVjdGVkRmlsZS5lbWl0KHsgcmVhc29uOiBJbnB1dEZpbGVSZWplY3RlZFJlYXNvbi5saW1pdFJlYWNoZWQsIGZpbGU6IGZpbGUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLnNpemVHdWFyZChmaWxlLmZpbGUsIHRoaXMuc2l6ZUxpbWl0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlamVjdGVkRmlsZS5lbWl0KHsgcmVhc29uOiBJbnB1dEZpbGVSZWplY3RlZFJlYXNvbi5zaXplUmVhY2hlZCwgZmlsZTogZmlsZSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlucHV0RmlsZVNlcnZpY2UudHlwZUd1YXJkKGZpbGUuZmlsZSwgdGhpcy5maWxlQWNjZXB0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlamVjdGVkRmlsZS5lbWl0KHsgcmVhc29uOiBJbnB1dEZpbGVSZWplY3RlZFJlYXNvbi5iYWRGaWxlLCBmaWxlOiBmaWxlIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBmaWxlIHByZXZpZXcgd2l0aCBGaWxlUmVhZGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RmlsZVByZXZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBpbiB0aGlzLmZpbGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVzW2luZGV4XS5maWxlICE9IG51bGwgJiYgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLnR5cGVHdWFyZCh0aGlzLmZpbGVzW2luZGV4XS5maWxlLCAnaW1hZ2UvKicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBmci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc1tpbmRleF0ucHJldmlldyA9IGZyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBmci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZXNbaW5kZXhdLmZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2lucHV0RmlsZURyb3Bab25lXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3Bab25lRGlyZWN0aXZlIHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBpdGVtRHJhZ092ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgaXRlbURyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBpdGVtRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIHByaXZhdGUgaXNPdmVyOiBib29sZWFuO1xyXG4gICAgLy8gUHJldmVudCBkcmFnbGVhdmUgb24gY2hpbGRyZW4sIGNvdWxkIGJlIGJldHRlciBidXQgaXQncyBjaGVhcCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXHJcbiAgICBwcml2YXRlIHdoaXRlTGlzdENsYXNzZXMgPSBbJ2ZpbGUtYnV0dG9uJywgJ21hdC1idXR0b24td3JhcHBlcicsICdpbnB1dC1pY29uJ107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIE92ZXIgZXZlbnQgaGFuZGxlci5cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXHJcbiAgICBwdWJsaWMgb25EcmFnT3ZlcihldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcEV2ZW50UHJvcGFnYXRpb24oZXZlbnQpO1xyXG4gICAgICAgIGlmICghdGhpcy5pc092ZXIgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc092ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1EcmFnT3Zlci5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBMZWF2ZSBldmVudCBoYW5kbGVyLlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXHJcbiAgICBwdWJsaWMgb25EcmFnTGVhdmUoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJldmVudEFuZFN0b3BFdmVudFByb3BhZ2F0aW9uKGV2ZW50KTtcclxuICAgICAgICBpZiAodGhpcy5pc092ZXIgJiYgdGhpcy5pc1RydWVMZWF2ZShldmVudCkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtRHJhZ0xlYXZlLmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcm9wIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXHJcbiAgICBwdWJsaWMgb25Ecm9wKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgZXZlbnQgaW5zdGFuY2VvZiBEcmFnRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcEV2ZW50UHJvcGFnYXRpb24oZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtRHJvcC5lbWl0KGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcmV2ZW50cyBhbmQgc3RvcHMgZXZlbnQgcHJvcGFncmF0aW9uLlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJldmVudEFuZFN0b3BFdmVudFByb3BhZ2F0aW9uKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhlIGxlYXZlIGlzIG5vdCB0cmlnZ2VyIGJ5IGEgY2hpbGRyZW4uXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc1RydWVMZWF2ZShldmVudDogRHJhZ0V2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIHRoaXMud2hpdGVMaXN0Q2xhc3Nlcykge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZnJvbUVsZW1lbnQgIT0gbnVsbCAmJiBldmVudC5mcm9tRWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZihjKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRHJvcFpvbmVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJvcC16b25lL2Ryb3Atem9uZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0LWZpbGUvaW5wdXQtZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnB1dEZpbGVDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMvaW5wdXQtZmlsZS1jb25maWcnO1xyXG5pbXBvcnQgeyBJbnB1dEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbnB1dC1maWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgRHJvcFpvbmVEaXJlY3RpdmUsXHJcbiAgICAgICAgSW5wdXRGaWxlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICAgICAgTWF0SWNvbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHMgOiBbXHJcbiAgICAgICAgSW5wdXRGaWxlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgSW5wdXRGaWxlU2VydmljZVxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogWyBJbnB1dEZpbGVDb21wb25lbnQgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0RmlsZU1vZHVsZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBJbnB1dEZpbGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogSW5wdXRGaWxlTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICAgICAgICAgIElucHV0RmlsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6ICdjb25maWcnLCB1c2VWYWx1ZTogY29uZmlnIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiLCJJbmplY3RhYmxlIiwiSW5qZWN0IiwiRXZlbnRFbWl0dGVyIiwiYnV0dG9uIiwiQ29tcG9uZW50IiwiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJWaWV3Q2hpbGQiLCJEaXJlY3RpdmUiLCJIb3N0TGlzdGVuZXIiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFFBQUE7UUFLSSxtQkFDSSxFQUFPLEVBQ1AsT0FBZSxFQUNmLElBQVc7WUFFWCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO3dCQWJMO1FBY0M7Ozs7Ozs7Ozs7Ozs7Ozs7SUNkRDs7Ozs7Ozs7Ozs7Ozs7QUFjQSxzQkE0RnlCLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsT0FBTztZQUNILElBQUksRUFBRTtnQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07b0JBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUMzQztTQUNKLENBQUM7SUFDTixD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