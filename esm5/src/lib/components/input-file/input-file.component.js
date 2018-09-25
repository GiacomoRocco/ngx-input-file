/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputFile } from '../../dto/input-file';
import { InputFileRejectedReason } from '../../enums/input-file-rejected-reason';
import { InputFileService } from '../../services/input-file.service';
var InputFileComponent = /** @class */ (function () {
    function InputFileComponent(inputFileService) {
        this.inputFileService = inputFileService;
        this.acceptedFile = new EventEmitter();
        this.deletedFile = new EventEmitter();
        this.rejectedFile = new EventEmitter();
        this.files = new Array();
        this.onChange = function (files) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(InputFileComponent.prototype, "fileAccept", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fileAccept || this.inputFileService.config.fileAccept || '*';
        },
        set: /**
         * @param {?} fileAccept
         * @return {?}
         */
        function (fileAccept) {
            this._fileAccept = fileAccept;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "fileLimit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fileLimit || this.inputFileService.config.fileLimit || 1;
        },
        set: /**
         * @param {?} fileLimit
         * @return {?}
         */
        function (fileLimit) {
            this._fileLimit = fileLimit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "sizeLimit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sizeLimit || this.inputFileService.config.sizeLimit || null;
        },
        set: /**
         * @param {?} sizeLimit
         * @return {?}
         */
        function (sizeLimit) {
            this._sizeLimit = sizeLimit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFileComponent.prototype, "canAddFile", {
        get: /**
         * @return {?}
         */
        function () {
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
    function (button) {
        button.ripple.launch({ centered: true, persistent: true });
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
    function (button) {
        button.ripple.fadeOutAll();
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
    function (fileList, index, button, fileInput) {
        if (!this.disabled) {
            // Copies the array without reference.
            var /** @type {?} */ files = this.files.slice();
            // Assumes that a single file can be replaced by a single file.
            var /** @type {?} */ inputFile = new InputFile(null, null, fileList.item(0));
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
    function (fileList, button) {
        var _this = this;
        if (!this.disabled) {
            button.ripple.fadeOutAll();
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
        { type: Component, args: [{
                    selector: 'input-file',
                    template: "<div class=\"input-file-container\" [style.width.%]=\"width\" [style.height.%]=\"height\">\n    <label class=\"mat-orphan-label\" [for]=\"inputId\" [class.active]=\"files?.length\" [innerHtml]=\"placeholder\" *ngIf=\"placeholder\"></label>\n    <div class=\"files-container\" [style.width.%]=\"width\" [style.height.%]=\"height\">\n\n        <ng-container *ngFor=\"let file of files; let i = index\">\n            <div class=\"file-container bounce-in\" [style.width.%]=\"widthPreview\" [style.height.%]=\"heightPreview\">\n                <button mat-button inputFileDropZone class=\"replace-button\" type=\"button\" (click)=\"fileReplace.click()\" (itemDrop)=\"onReplaceFile($event, i,replaceButton)\"\n                    [disabled]=\"disabled\" (itemDragOver)=\"onDragOver(replaceButton)\" (itemDragLeave)=\"onDragLeave(replaceButton)\"\n                    #replaceButton>\n                    <img class=\"image-preview\" [src]=\"file.preview\" *ngIf=\"file.preview; else noPreview\">\n                    <ng-template #noPreview>\n                        <mat-icon class=\"input-icon\">insert_drive_file</mat-icon>\n                        <div class=\"file-name text-truncate\" [innerHtml]=\"file.file.name\" *ngIf=\"file.file\"></div>\n                    </ng-template>\n\n                </button>\n                <button mat-button class=\"delete-button\" type=\"button\" [style.width.%]=\"widthPreview\" (click)=\"onDeleteFile(i)\" [disabled]=\"disabled\">\n                    <mat-icon>delete</mat-icon>\n                </button>\n            </div>\n            <input [accept]=\"fileAccept\" hidden type=\"file\" #fileReplace (change)=\"onReplaceFile($event.target.files, i, replaceButton, fileReplace)\">\n        </ng-container>\n\n        <ng-container *ngIf=\"canAddFile\">\n            <button mat-button inputFileDropZone class=\"file-button\" type=\"button\" (click)=\"fileInput.click()\" (itemDrop)=\"onSelectFile($event, selectButton)\"\n                (itemDragOver)=\"onDragOver(selectButton)\" (itemDragLeave)=\"onDragLeave(selectButton)\" [style.width.%]=\"width\" [style.height.%]=\"height\"\n                 [disabled]=\"disabled\" #selectButton>\n                <mat-icon class=\"input-icon\">add</mat-icon>\n                <div [innerHtml]=\"internalPlaceholder\" *ngIf=\"internalPlaceholder\"></div>\n            </button>\n            <input [id]=\"inputId\" [accept]=\"fileAccept\" hidden type=\"file\" [attr.multiple]=\"fileLimit > 1 ? true : null\" #fileInput (change)=\"onSelectFile($event.target.files, selectButton)\">\n        </ng-container>\n    </div>\n\n</div>",
                    styles: [".input-file-container{position:relative}.input-file-container .files-container{display:flex;flex-direction:row;flex-wrap:wrap;padding-top:1.25rem}.input-file-container .file-button,.input-file-container .file-container{align-items:center;display:flex;height:10rem;justify-content:center;width:10rem}.input-file-container .delete-button{width:10rem}.input-file-container .file-container{flex-direction:column;margin-right:1rem}.input-file-container .replace-button{flex:1;width:10rem}.input-file-container .mat-button:focus{outline:0}.input-file-container .file-name{width:calc(10rem - 2.5rem)}.input-file-container .image-preview{margin:0 -16px;height:10rem;-o-object-fit:contain;object-fit:contain;width:10rem}.input-file-container .input-icon{font-size:calc(10rem / 4);height:calc(10rem / 4);width:calc(10rem / 4)}.input-file-container .mat-orphan-label{color:rgba(0,0,0,.54);display:block;font-size:1rem;left:0;margin:0;position:absolute;top:0;-webkit-transform-origin:0;transform-origin:0;transition:.4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1)}.input-file-container .mat-orphan-label.active{-webkit-transform:scale(.75);transform:scale(.75)}@-webkit-keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.bounce-in{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}"],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return InputFileComponent; }),
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    InputFileComponent.ctorParameters = function () { return [
        { type: InputFileService }
    ]; };
    InputFileComponent.propDecorators = {
        disabled: [{ type: Input }],
        inputId: [{ type: Input }],
        placeholder: [{ type: Input }],
        internalPlaceholder: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        widthPreview: [{ type: Input }],
        heightPreview: [{ type: Input }],
        fileAccept: [{ type: Input }],
        fileLimit: [{ type: Input }],
        sizeLimit: [{ type: Input }],
        acceptedFile: [{ type: Output }],
        deletedFile: [{ type: Output }],
        rejectedFile: [{ type: Output }],
        fileInput: [{ type: ViewChild, args: ['fileInput',] }]
    };
    return InputFileComponent;
}());
export { InputFileComponent };
function InputFileComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    InputFileComponent.prototype._fileAccept;
    /** @type {?} */
    InputFileComponent.prototype._fileLimit;
    /** @type {?} */
    InputFileComponent.prototype._sizeLimit;
    /** @type {?} */
    InputFileComponent.prototype.disabled;
    /** @type {?} */
    InputFileComponent.prototype.inputId;
    /** @type {?} */
    InputFileComponent.prototype.placeholder;
    /** @type {?} */
    InputFileComponent.prototype.internalPlaceholder;
    /** @type {?} */
    InputFileComponent.prototype.width;
    /** @type {?} */
    InputFileComponent.prototype.height;
    /** @type {?} */
    InputFileComponent.prototype.widthPreview;
    /** @type {?} */
    InputFileComponent.prototype.heightPreview;
    /** @type {?} */
    InputFileComponent.prototype.acceptedFile;
    /** @type {?} */
    InputFileComponent.prototype.deletedFile;
    /** @type {?} */
    InputFileComponent.prototype.rejectedFile;
    /** @type {?} */
    InputFileComponent.prototype.fileInput;
    /** @type {?} */
    InputFileComponent.prototype.files;
    /** @type {?} */
    InputFileComponent.prototype.onChange;
    /** @type {?} */
    InputFileComponent.prototype.onTouched;
    /** @type {?} */
    InputFileComponent.prototype.inputFileService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaW5wdXQtZmlsZS8iLCJzb3VyY2VzIjpbInNyYy9saWIvY29tcG9uZW50cy9pbnB1dC1maWxlL2lucHV0LWZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0lBcUdqRSw0QkFDWTtRQUFBLHFCQUFnQixHQUFoQixnQkFBZ0I7NEJBZEgsSUFBSSxZQUFZLEVBQWE7MkJBQzlCLElBQUksWUFBWSxFQUFhOzRCQUM1QixJQUFJLFlBQVksRUFBcUI7cUJBRy9DLElBQUksS0FBSyxFQUFhO3dCQUNuQixVQUFDLEtBQXVCLEtBQVE7eUJBQy9CLGVBQVM7S0FRdkI7SUF2Q0wsc0JBQWEsMENBQVU7Ozs7UUFJdkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7U0FDN0U7Ozs7O1FBTkQsVUFBd0IsVUFBa0I7WUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7U0FDakM7OztPQUFBO0lBTUQsc0JBQWEseUNBQVM7Ozs7UUFJdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFB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QUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZHLHFCQUFNLElBQUUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2dCQUM1QixJQUFFLENBQUMsTUFBTSxHQUFHO29CQUNSLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUUsQ0FBQyxNQUFNLENBQUM7aUJBQ3pDLENBQUM7Z0JBQ0YsSUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1Qzs7O1FBUEwsR0FBRyxDQUFDLENBQUMscUJBQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQXBCLEtBQUs7U0FRZjs7O2dCQTNQUixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSx1akZBa0NQO29CQUNILE1BQU0sRUFBRSxDQUFDLDQrRUFBNCtFLENBQUM7b0JBQ3QvRSxTQUFTLEVBQUU7d0JBQ1A7NEJBQ0ksT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUM7NEJBQ2pELEtBQUssRUFBRSxJQUFJO3lCQUNkO3FCQUNKO2lCQUNKOzs7O2dCQWpEUSxnQkFBZ0I7OzsyQkF1RHBCLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3NDQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFFTCxLQUFLOzRCQVFMLEtBQUs7NEJBUUwsS0FBSzsrQkFRTCxNQUFNOzhCQUNOLE1BQU07K0JBQ04sTUFBTTs0QkFDTixTQUFTLFNBQUMsV0FBVzs7NkJBaEcxQjs7U0F1RGEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0RmlsZSB9IGZyb20gJy4uLy4uL2R0by9pbnB1dC1maWxlJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlUmVqZWN0ZWQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lucHV0LWZpbGUtcmVqZWN0ZWQnO1xyXG5pbXBvcnQgeyBJbnB1dEZpbGVSZWplY3RlZFJlYXNvbiB9IGZyb20gJy4uLy4uL2VudW1zL2lucHV0LWZpbGUtcmVqZWN0ZWQtcmVhc29uJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2lucHV0LWZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE51bWJlclN5bWJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaW5wdXQtZmlsZScsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJpbnB1dC1maWxlLWNvbnRhaW5lclwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC4lXT1cImhlaWdodFwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwibWF0LW9ycGhhbi1sYWJlbFwiIFtmb3JdPVwiaW5wdXRJZFwiIFtjbGFzcy5hY3RpdmVdPVwiZmlsZXM/Lmxlbmd0aFwiIFtpbm5lckh0bWxdPVwicGxhY2Vob2xkZXJcIiAqbmdJZj1cInBsYWNlaG9sZGVyXCI+PC9sYWJlbD5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWxlcy1jb250YWluZXJcIiBbc3R5bGUud2lkdGguJV09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHQuJV09XCJoZWlnaHRcIj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1jb250YWluZXIgYm91bmNlLWluXCIgW3N0eWxlLndpZHRoLiVdPVwid2lkdGhQcmV2aWV3XCIgW3N0eWxlLmhlaWdodC4lXT1cImhlaWdodFByZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBpbnB1dEZpbGVEcm9wWm9uZSBjbGFzcz1cInJlcGxhY2UtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJmaWxlUmVwbGFjZS5jbGljaygpXCIgKGl0ZW1Ecm9wKT1cIm9uUmVwbGFjZUZpbGUoJGV2ZW50LCBpLHJlcGxhY2VCdXR0b24pXCJcclxuICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoaXRlbURyYWdPdmVyKT1cIm9uRHJhZ092ZXIocmVwbGFjZUJ1dHRvbilcIiAoaXRlbURyYWdMZWF2ZSk9XCJvbkRyYWdMZWF2ZShyZXBsYWNlQnV0dG9uKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI3JlcGxhY2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltYWdlLXByZXZpZXdcIiBbc3JjXT1cImZpbGUucHJldmlld1wiICpuZ0lmPVwiZmlsZS5wcmV2aWV3OyBlbHNlIG5vUHJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9QcmV2aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJpbnB1dC1pY29uXCI+aW5zZXJ0X2RyaXZlX2ZpbGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1uYW1lIHRleHQtdHJ1bmNhdGVcIiBbaW5uZXJIdG1sXT1cImZpbGUuZmlsZS5uYW1lXCIgKm5nSWY9XCJmaWxlLmZpbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZGVsZXRlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBbc3R5bGUud2lkdGguJV09XCJ3aWR0aFByZXZpZXdcIiAoY2xpY2spPVwib25EZWxldGVGaWxlKGkpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBbYWNjZXB0XT1cImZpbGVBY2NlcHRcIiBoaWRkZW4gdHlwZT1cImZpbGVcIiAjZmlsZVJlcGxhY2UgKGNoYW5nZSk9XCJvblJlcGxhY2VGaWxlKCRldmVudC50YXJnZXQuZmlsZXMsIGksIHJlcGxhY2VCdXR0b24sIGZpbGVSZXBsYWNlKVwiPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2FuQWRkRmlsZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gaW5wdXRGaWxlRHJvcFpvbmUgY2xhc3M9XCJmaWxlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZmlsZUlucHV0LmNsaWNrKClcIiAoaXRlbURyb3ApPVwib25TZWxlY3RGaWxlKCRldmVudCwgc2VsZWN0QnV0dG9uKVwiXHJcbiAgICAgICAgICAgICAgICAoaXRlbURyYWdPdmVyKT1cIm9uRHJhZ092ZXIoc2VsZWN0QnV0dG9uKVwiIChpdGVtRHJhZ0xlYXZlKT1cIm9uRHJhZ0xlYXZlKHNlbGVjdEJ1dHRvbilcIiBbc3R5bGUud2lkdGguJV09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHQuJV09XCJoZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiICNzZWxlY3RCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJpbnB1dC1pY29uXCI+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgW2lubmVySHRtbF09XCJpbnRlcm5hbFBsYWNlaG9sZGVyXCIgKm5nSWY9XCJpbnRlcm5hbFBsYWNlaG9sZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aW5wdXQgW2lkXT1cImlucHV0SWRcIiBbYWNjZXB0XT1cImZpbGVBY2NlcHRcIiBoaWRkZW4gdHlwZT1cImZpbGVcIiBbYXR0ci5tdWx0aXBsZV09XCJmaWxlTGltaXQgPiAxID8gdHJ1ZSA6IG51bGxcIiAjZmlsZUlucHV0IChjaGFuZ2UpPVwib25TZWxlY3RGaWxlKCRldmVudC50YXJnZXQuZmlsZXMsIHNlbGVjdEJ1dHRvbilcIj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+YCxcclxuICAgIHN0eWxlczogW2AuaW5wdXQtZmlsZS1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9LmlucHV0LWZpbGUtY29udGFpbmVyIC5maWxlcy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LXdyYXA6d3JhcDtwYWRkaW5nLXRvcDoxLjI1cmVtfS5pbnB1dC1maWxlLWNvbnRhaW5lciAuZmlsZS1idXR0b24sLmlucHV0LWZpbGUtY29udGFpbmVyIC5maWxlLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O2hlaWdodDoxMHJlbTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwcmVtfS5pbnB1dC1maWxlLWNvbnRhaW5lciAuZGVsZXRlLWJ1dHRvbnt3aWR0aDoxMHJlbX0uaW5wdXQtZmlsZS1jb250YWluZXIgLmZpbGUtY29udGFpbmVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tcmlnaHQ6MXJlbX0uaW5wdXQtZmlsZS1jb250YWluZXIgLnJlcGxhY2UtYnV0dG9ue2ZsZXg6MTt3aWR0aDoxMHJlbX0uaW5wdXQtZmlsZS1jb250YWluZXIgLm1hdC1idXR0b246Zm9jdXN7b3V0bGluZTowfS5pbnB1dC1maWxlLWNvbnRhaW5lciAuZmlsZS1uYW1le3dpZHRoOmNhbGMoMTByZW0gLSAyLjVyZW0pfS5pbnB1dC1maWxlLWNvbnRhaW5lciAuaW1hZ2UtcHJldmlld3ttYXJnaW46MCAtMTZweDtoZWlnaHQ6MTByZW07LW8tb2JqZWN0LWZpdDpjb250YWluO29iamVjdC1maXQ6Y29udGFpbjt3aWR0aDoxMHJlbX0uaW5wdXQtZmlsZS1jb250YWluZXIgLmlucHV0LWljb257Zm9udC1zaXplOmNhbGMoMTByZW0gLyA0KTtoZWlnaHQ6Y2FsYygxMHJlbSAvIDQpO3dpZHRoOmNhbGMoMTByZW0gLyA0KX0uaW5wdXQtZmlsZS1jb250YWluZXIgLm1hdC1vcnBoYW4tbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjFyZW07bGVmdDowO21hcmdpbjowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowO3RyYW5zZm9ybS1vcmlnaW46MDt0cmFuc2l0aW9uOi40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSx3aWR0aCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9LmlucHV0LWZpbGUtY29udGFpbmVyIC5tYXQtb3JwaGFuLWxhYmVsLmFjdGl2ZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNzUpO3RyYW5zZm9ybTpzY2FsZSguNzUpfUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbnsyMCUsNDAlLDYwJSw4MCUsZnJvbSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyk7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4wMywxLjAzLDEuMDMpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMDMsMS4wMywxLjAzKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTcsLjk3LC45Nyk7dHJhbnNmb3JtOnNjYWxlM2QoLjk3LC45NywuOTcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSl9fUBrZXlmcmFtZXMgYm91bmNlSW57MjAlLDQwJSw2MCUsODAlLGZyb20sdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpfTQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KTt0cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMDMsMS4wMywxLjAzKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjAzLDEuMDMsMS4wMyl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk3LC45NywuOTcpO3RyYW5zZm9ybTpzY2FsZTNkKC45NywuOTcsLjk3KX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpfX0uYm91bmNlLWluey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7YW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VJbjthbmltYXRpb24tbmFtZTpib3VuY2VJbn1gXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0RmlsZUNvbXBvbmVudCksXHJcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRGaWxlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgcHJpdmF0ZSBfZmlsZUFjY2VwdDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfZmlsZUxpbWl0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zaXplTGltaXQ6IG51bWJlcjtcclxuXHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIGlucHV0SWQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpbnRlcm5hbFBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSB3aWR0aFByZXZpZXc6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGhlaWdodFByZXZpZXc6IG51bWJlcjtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgZmlsZUFjY2VwdChmaWxlQWNjZXB0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9maWxlQWNjZXB0ID0gZmlsZUFjY2VwdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmlsZUFjY2VwdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlsZUFjY2VwdCB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLmZpbGVBY2NlcHQgfHwgJyonO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBmaWxlTGltaXQoZmlsZUxpbWl0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9maWxlTGltaXQgPSBmaWxlTGltaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpbGVMaW1pdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlsZUxpbWl0IHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcuZmlsZUxpbWl0IHx8IDE7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHNpemVMaW1pdChzaXplTGltaXQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NpemVMaW1pdCA9IHNpemVMaW1pdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2l6ZUxpbWl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplTGltaXQgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5zaXplTGltaXQgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KCkgYWNjZXB0ZWRGaWxlID0gbmV3IEV2ZW50RW1pdHRlcjxJbnB1dEZpbGU+KCk7XHJcbiAgICBAT3V0cHV0KCkgZGVsZXRlZEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPElucHV0RmlsZT4oKTtcclxuICAgIEBPdXRwdXQoKSByZWplY3RlZEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPElucHV0RmlsZVJlamVjdGVkPigpO1xyXG4gICAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JykgZmlsZUlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHB1YmxpYyBmaWxlcyA9IG5ldyBBcnJheTxJbnB1dEZpbGU+KCk7XHJcbiAgICBwdWJsaWMgb25DaGFuZ2UgPSAoZmlsZXM6IEFycmF5PElucHV0RmlsZT4pID0+IHsgfTtcclxuICAgIHB1YmxpYyBvblRvdWNoZWQgPSAoKSA9PiB7IH07XHJcblxyXG4gICAgZ2V0IGNhbkFkZEZpbGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPCB0aGlzLmZpbGVMaW1pdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGlucHV0RmlsZVNlcnZpY2U6IElucHV0RmlsZVNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBkZWxldGUgYSBmaWxlIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKiBAcGFyYW0gaW5kZXhcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uRGVsZXRlRmlsZShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcy5zbGljZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZWRGaWxlLmVtaXQoZmlsZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKGZpbGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBkcmFnIG92ZXIgZXZlbnQgaGFuZGxlci5cclxuICAgICAqIEFkZHMgYSByaXBwbGUgZWZmZWN0IG9uIHRoZSBidXR0b24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkRyYWdPdmVyKGJ1dHRvbjogTWF0QnV0dG9uKTogdm9pZCB7XHJcbiAgICAgICAgYnV0dG9uLnJpcHBsZS5sYXVuY2goeyBjZW50ZXJlZDogdHJ1ZSwgcGVyc2lzdGVudDogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGRyYWcgbGVhdmUgZXZlbnQgaGFuZGxlci5cclxuICAgICAqIEZhZGVzIHRoZSByaXBwbGUgZWZmZWN0IG9mIHRoZSBidXR0b24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkRyYWdMZWF2ZShidXR0b246IE1hdEJ1dHRvbik6IHZvaWQge1xyXG4gICAgICAgIGJ1dHRvbi5yaXBwbGUuZmFkZU91dEFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gcmVwbGFjZSBvbmUgZmlsZSBldmVudCBoYW5kbGVyLlxyXG4gICAgICogV3JpdGVzIHRoZSB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBmaWxlTGlzdFxyXG4gICAgICogQHBhcmFtIGluZGV4XHJcbiAgICAgKiBAcGFyYW0gZmlsZUlucHV0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblJlcGxhY2VGaWxlKGZpbGVMaXN0OiBGaWxlTGlzdCwgaW5kZXg6IG51bWJlciwgYnV0dG9uOiBNYXRCdXR0b24sIGZpbGVJbnB1dD86IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgLy8gQ29waWVzIHRoZSBhcnJheSB3aXRob3V0IHJlZmVyZW5jZS5cclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIC8vIEFzc3VtZXMgdGhhdCBhIHNpbmdsZSBmaWxlIGNhbiBiZSByZXBsYWNlZCBieSBhIHNpbmdsZSBmaWxlLlxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dEZpbGUgPSBuZXcgSW5wdXRGaWxlKG51bGwsIG51bGwsIGZpbGVMaXN0Lml0ZW0oMCkpO1xyXG4gICAgICAgICAgICBidXR0b24ucmlwcGxlLmZhZGVPdXRBbGwoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZUd1YXJkKGZpbGVzLCBpbnB1dEZpbGUsIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlc1tpbmRleF0gPSBpbnB1dEZpbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2VwdGVkRmlsZS5lbWl0KGlucHV0RmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKGZpbGVzKTtcclxuICAgICAgICAgICAgaWYgKGZpbGVJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgZmlsZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBzZWxlY3Qgb25lIG9yIG1vcmUgZmlsZXMgZXZlbnQgaGFuZGxlci5cclxuICAgICAqIFdyaXRlcyB0aGUgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gZmlsZUxpc3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uU2VsZWN0RmlsZShmaWxlTGlzdDogRmlsZUxpc3QsIGJ1dHRvbjogTWF0QnV0dG9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yaXBwbGUuZmFkZU91dEFsbCgpO1xyXG4gICAgICAgICAgICAvLyBDb3BpZXMgdGhlIGFycmF5IHdpdGhvdXQgcmVmZXJlbmNlLlxyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXMuc2xpY2UoKTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShmaWxlTGlzdCkuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RmlsZSA9IG5ldyBJbnB1dEZpbGUobnVsbCwgbnVsbCwgZmlsZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlR3VhcmQoZmlsZXMsIGlucHV0RmlsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKGlucHV0RmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlcHRlZEZpbGUuZW1pdChpbnB1dEZpbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKGZpbGVzKTtcclxuICAgICAgICAgICAgdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxyXG4gICAgICogQHBhcmFtIGZuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoZmlsZXM6IEFycmF5PElucHV0RmlsZT4pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICAgICAqIEBwYXJhbSBmblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXHJcbiAgICAgKiBAcGFyYW0gaXNEaXNhYmxlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICAgICAqIEBwYXJhbSBmaWxlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd3JpdGVWYWx1ZShmaWxlczogQXJyYXk8SW5wdXRGaWxlPik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzID0gZmlsZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RmlsZVByZXZpZXcoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmZpbGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSBmaWxlIGNhbiBiZSBhZGRlZCB0byB0aGUgbW9kZWwuXHJcbiAgICAgKiBAcGFyYW0gZmlsZXNcclxuICAgICAqIEBwYXJhbSBmaWxlLFxyXG4gICAgICogQHBhcmFtIGJ5cGFzc0xpbWl0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZmlsZUd1YXJkKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+LCBmaWxlOiBJbnB1dEZpbGUsIGJ5cGFzc0xpbWl0PzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghYnlwYXNzTGltaXQgJiYgIXRoaXMuaW5wdXRGaWxlU2VydmljZS5saW1pdEd1YXJkKGZpbGVzLCB0aGlzLmZpbGVMaW1pdCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3RlZEZpbGUuZW1pdCh7IHJlYXNvbjogSW5wdXRGaWxlUmVqZWN0ZWRSZWFzb24ubGltaXRSZWFjaGVkLCBmaWxlOiBmaWxlIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaW5wdXRGaWxlU2VydmljZS5zaXplR3VhcmQoZmlsZS5maWxlLCB0aGlzLnNpemVMaW1pdCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3RlZEZpbGUuZW1pdCh7IHJlYXNvbjogSW5wdXRGaWxlUmVqZWN0ZWRSZWFzb24uc2l6ZVJlYWNoZWQsIGZpbGU6IGZpbGUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLnR5cGVHdWFyZChmaWxlLmZpbGUsIHRoaXMuZmlsZUFjY2VwdCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3RlZEZpbGUuZW1pdCh7IHJlYXNvbjogSW5wdXRGaWxlUmVqZWN0ZWRSZWFzb24uYmFkRmlsZSwgZmlsZTogZmlsZSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZmlsZSBwcmV2aWV3IHdpdGggRmlsZVJlYWRlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEZpbGVQcmV2aWV3KCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggaW4gdGhpcy5maWxlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlc1tpbmRleF0uZmlsZSAhPSBudWxsICYmIHRoaXMuaW5wdXRGaWxlU2VydmljZS50eXBlR3VhcmQodGhpcy5maWxlc1tpbmRleF0uZmlsZSwgJ2ltYWdlLyonKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgZnIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNbaW5kZXhdLnByZXZpZXcgPSBmci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZnIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGVzW2luZGV4XS5maWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=