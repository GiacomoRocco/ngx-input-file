import { Inject, Injectable, Directive, EventEmitter, HostListener, Input, Output, Component, forwardRef, ViewChild, NgModule, defineInjectable, inject } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InputFile {
    /**
     * @param {?} id
     * @param {?} preview
     * @param {?=} file
     */
    constructor(id, preview, file) {
        this.id = id;
        this.preview = preview;
        this.file = file;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const InputFileRejectedReason = {
    badFile: 0,
    limitReached: 1,
    sizeReached: 2,
};
InputFileRejectedReason[InputFileRejectedReason.badFile] = "badFile";
InputFileRejectedReason[InputFileRejectedReason.limitReached] = "limitReached";
InputFileRejectedReason[InputFileRejectedReason.sizeReached] = "sizeReached";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InputFileService {
    /**
     * @param {?} _config
     */
    constructor(_config) {
        this._config = _config;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * Whether the limit is not reached.
     * @param {?} files
     * @param {?} fileLimit
     * @return {?}
     */
    limitGuard(files, fileLimit) {
        return files.length < fileLimit;
    }
    /**
     * Whether the file size is not bigger than the limit.
     * @param {?} file
     * @param {?} sizeLimit
     * @return {?}
     */
    sizeGuard(file, sizeLimit) {
        return !sizeLimit || file.size < sizeLimit * 1024 * 1024; // TODO : improve
    }
    /**
     * Whether the type of the file is enabled.
     * @param {?} file
     * @param {?} fileAccept
     * @return {?}
     */
    typeGuard(file, fileAccept) {
        let /** @type {?} */ enabled = fileAccept == null;
        if (fileAccept) {
            const /** @type {?} */ accept = fileAccept.replace('*', '');
            const /** @type {?} */ types = accept.split(',');
            for (const /** @type {?} */ type of types) {
                if (file.type.startsWith(type) || (type.charAt(0) === '.' && file.name != null && file.name.endsWith(type))) {
                    enabled = true;
                    break;
                }
            }
        }
        return enabled;
    }
}
InputFileService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
InputFileService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
];
/** @nocollapse */ InputFileService.ngInjectableDef = defineInjectable({ factory: function InputFileService_Factory() { return new InputFileService(inject("config")); }, token: InputFileService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InputFileComponent {
    /**
     * @param {?} inputFileService
     */
    constructor(inputFileService) {
        this.inputFileService = inputFileService;
        this.acceptedFile = new EventEmitter();
        this.deletedFile = new EventEmitter();
        this.rejectedFile = new EventEmitter();
        this.files = new Array();
        this.onChange = (files) => { };
        this.onTouched = () => { };
    }
    /**
     * @param {?} fileAccept
     * @return {?}
     */
    set fileAccept(fileAccept) {
        this._fileAccept = fileAccept;
    }
    /**
     * @return {?}
     */
    get fileAccept() {
        return this._fileAccept || this.inputFileService.config.fileAccept || '*';
    }
    /**
     * @param {?} fileLimit
     * @return {?}
     */
    set fileLimit(fileLimit) {
        this._fileLimit = fileLimit;
    }
    /**
     * @return {?}
     */
    get fileLimit() {
        return this._fileLimit || this.inputFileService.config.fileLimit || 1;
    }
    /**
     * @param {?} sizeLimit
     * @return {?}
     */
    set sizeLimit(sizeLimit) {
        this._sizeLimit = sizeLimit;
    }
    /**
     * @return {?}
     */
    get sizeLimit() {
        return this._sizeLimit || this.inputFileService.config.sizeLimit || null;
    }
    /**
     * @return {?}
     */
    get canAddFile() {
        return this.files && this.files.length < this.fileLimit;
    }
    /**
     * On delete a file event handler.
     * @param {?} index
     * @return {?}
     */
    onDeleteFile(index) {
        if (!this.disabled) {
            const /** @type {?} */ files = this.files.slice();
            this.deletedFile.emit(files[index]);
            files.splice(index, 1);
            this.writeValue(files);
        }
    }
    /**
     * On drag over event handler.
     * Adds a ripple effect on the button.
     * @param {?} button
     * @return {?}
     */
    onDragOver(button) {
        button.ripple.launch({ centered: true, persistent: true });
    }
    /**
     * On drag leave event handler.
     * Fades the ripple effect of the button.
     * @param {?} button
     * @return {?}
     */
    onDragLeave(button) {
        button.ripple.fadeOutAll();
    }
    /**
     * On replace one file event handler.
     * Writes the value.
     * @param {?} fileList
     * @param {?} index
     * @param {?} button
     * @param {?=} fileInput
     * @return {?}
     */
    onReplaceFile(fileList, index, button, fileInput) {
        if (!this.disabled) {
            // Copies the array without reference.
            const /** @type {?} */ files = this.files.slice();
            // Assumes that a single file can be replaced by a single file.
            const /** @type {?} */ inputFile = new InputFile(null, null, fileList.item(0));
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
    }
    /**
     * On select one or more files event handler.
     * Writes the value.
     * @param {?} fileList
     * @param {?} button
     * @return {?}
     */
    onSelectFile(fileList, button) {
        if (!this.disabled) {
            button.ripple.fadeOutAll();
            // Copies the array without reference.
            const /** @type {?} */ files = this.files.slice();
            Array.from(fileList).forEach(file => {
                const /** @type {?} */ inputFile = new InputFile(null, null, file);
                if (this.fileGuard(files, inputFile)) {
                    files.push(inputFile);
                    this.acceptedFile.emit(inputFile);
                }
            });
            this.writeValue(files);
            this.fileInput.nativeElement.value = '';
        }
    }
    /**
     * Implementation of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Implementation of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Implementation of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * Implementation of ControlValueAccessor.
     * @param {?} files
     * @return {?}
     */
    writeValue(files) {
        if (!this.disabled) {
            this.files = files;
            this.setFilePreview();
            this.onChange(this.files);
        }
    }
    /**
     * Whether the file can be added to the model.
     * @param {?} files
     * @param {?} file
     * @param {?=} bypassLimit
     * @return {?}
     */
    fileGuard(files, file, bypassLimit) {
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
    }
    /**
     * Sets the file preview with FileReader.
     * @return {?}
     */
    setFilePreview() {
        for (const /** @type {?} */ index in this.files) {
            if (this.files[index].file != null && this.inputFileService.typeGuard(this.files[index].file, 'image/*')) {
                const /** @type {?} */ fr = new FileReader();
                fr.onload = () => {
                    this.files[index].preview = fr.result;
                };
                fr.readAsDataURL(this.files[index].file);
            }
        }
    }
}
InputFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'input-file',
                template: `<div class="input-file-container" [style.width.%]="width" [style.height.%]="height">
    <label class="mat-orphan-label" [for]="inputId" [class.active]="files?.length" [innerHtml]="placeholder" *ngIf="placeholder"></label>
    <div class="files-container" [style.width.%]="width" [style.height.%]="height">

        <ng-container *ngFor="let file of files; let i = index">
            <div class="file-container bounce-in" [style.width.%]="widthPreview" [style.height.%]="heightPreview">
                <button mat-button inputFileDropZone class="replace-button" type="button" (click)="fileReplace.click()" (itemDrop)="onReplaceFile($event, i,replaceButton)"
                    [disabled]="disabled" (itemDragOver)="onDragOver(replaceButton)" (itemDragLeave)="onDragLeave(replaceButton)"
                    #replaceButton>
                    <img class="image-preview" [src]="file.preview" *ngIf="file.preview; else noPreview">
                    <ng-template #noPreview>
                        <mat-icon class="input-icon">insert_drive_file</mat-icon>
                        <div class="file-name text-truncate" [innerHtml]="file.file.name" *ngIf="file.file"></div>
                    </ng-template>

                </button>
                <button mat-button class="delete-button" type="button" [style.width.%]="widthPreview" (click)="onDeleteFile(i)" [disabled]="disabled">
                    <mat-icon>delete</mat-icon>
                </button>
            </div>
            <input [accept]="fileAccept" hidden type="file" #fileReplace (change)="onReplaceFile($event.target.files, i, replaceButton, fileReplace)">
        </ng-container>

        <ng-container *ngIf="canAddFile">
            <button mat-button inputFileDropZone class="file-button" type="button" (click)="fileInput.click()" (itemDrop)="onSelectFile($event, selectButton)"
                (itemDragOver)="onDragOver(selectButton)" (itemDragLeave)="onDragLeave(selectButton)" [style.width.%]="width" [style.height.%]="height"
                 [disabled]="disabled" #selectButton>
                <mat-icon class="input-icon">add</mat-icon>
                <div [innerHtml]="internalPlaceholder" *ngIf="internalPlaceholder"></div>
            </button>
            <input [id]="inputId" [accept]="fileAccept" hidden type="file" [attr.multiple]="fileLimit > 1 ? true : null" #fileInput (change)="onSelectFile($event.target.files, selectButton)">
        </ng-container>
    </div>

</div>`,
                styles: [`.input-file-container{position:relative}.input-file-container .files-container{display:flex;flex-direction:row;flex-wrap:wrap;padding-top:1.25rem}.input-file-container .file-button,.input-file-container .file-container{align-items:center;display:flex;height:10rem;justify-content:center;width:10rem}.input-file-container .delete-button{width:10rem}.input-file-container .file-container{flex-direction:column;margin-right:1rem}.input-file-container .replace-button{flex:1;width:10rem}.input-file-container .mat-button:focus{outline:0}.input-file-container .file-name{width:calc(10rem - 2.5rem)}.input-file-container .image-preview{margin:0 -16px;height:10rem;-o-object-fit:contain;object-fit:contain;width:10rem}.input-file-container .input-icon{font-size:calc(10rem / 4);height:calc(10rem / 4);width:calc(10rem / 4)}.input-file-container .mat-orphan-label{color:rgba(0,0,0,.54);display:block;font-size:1rem;left:0;margin:0;position:absolute;top:0;-webkit-transform-origin:0;transform-origin:0;transition:.4s cubic-bezier(.25,.8,.25,1),width .4s cubic-bezier(.25,.8,.25,1)}.input-file-container .mat-orphan-label.active{-webkit-transform:scale(.75);transform:scale(.75)}@-webkit-keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.bounce-in{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}`],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => InputFileComponent),
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
InputFileComponent.ctorParameters = () => [
    { type: InputFileService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DropZoneDirective {
    constructor() {
        this.disabled = false;
        this.itemDragOver = new EventEmitter();
        this.itemDragLeave = new EventEmitter();
        this.itemDrop = new EventEmitter();
        this.whiteListClasses = ['file-button', 'mat-button-wrapper', 'input-icon'];
    }
    /**
     * Drag Over event handler.
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        this.preventAndStopEventPropagation(event);
        if (!this.isOver && !this.disabled) {
            this.isOver = true;
            this.itemDragOver.emit();
        }
    }
    /**
     * Drag Leave event handler.
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        this.preventAndStopEventPropagation(event);
        if (this.isOver && this.isTrueLeave(event) && !this.disabled) {
            this.isOver = false;
            this.itemDragLeave.emit();
        }
    }
    /**
     * Drop event handler.
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        if (!this.disabled && event instanceof DragEvent) {
            this.preventAndStopEventPropagation(event);
            this.isOver = false;
            try {
                this.itemDrop.emit(event.dataTransfer.files);
            }
            catch (/** @type {?} */ e) {
                console.error(e);
            }
        }
    }
    /**
     * Prevents and stops event propagration.
     * @param {?} event
     * @return {?}
     */
    preventAndStopEventPropagation(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * Checks if the leave is not trigger by a children.
     * @param {?} event
     * @return {?}
     */
    isTrueLeave(event) {
        for (const /** @type {?} */ c of this.whiteListClasses) {
            if (event.fromElement != null && event.fromElement.className.indexOf(c) >= 0) {
                return false;
            }
        }
        return true;
    }
}
DropZoneDirective.decorators = [
    { type: Directive, args: [{
                selector: '[inputFileDropZone]'
            },] },
];
DropZoneDirective.propDecorators = {
    disabled: [{ type: Input }],
    itemDragOver: [{ type: Output }],
    itemDragLeave: [{ type: Output }],
    itemDrop: [{ type: Output }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InputFileModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: InputFileModule,
            providers: [
                InputFileService,
                { provide: 'config', useValue: config }
            ]
        };
    }
}
InputFileModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DropZoneDirective,
                    InputFileComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    MatButtonModule,
                    MatIconModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { InputFile, InputFileComponent, InputFileModule, InputFileService, DropZoneDirective as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWlucHV0LWZpbGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1pbnB1dC1maWxlL3NyYy9saWIvZHRvL2lucHV0LWZpbGUudHMiLCJuZzovL25neC1pbnB1dC1maWxlL3NyYy9saWIvc2VydmljZXMvaW5wdXQtZmlsZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtaW5wdXQtZmlsZS9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQtZmlsZS9pbnB1dC1maWxlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWlucHV0LWZpbGUvc3JjL2xpYi9kaXJlY3RpdmVzL2Ryb3Atem9uZS9kcm9wLXpvbmUuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtaW5wdXQtZmlsZS9zcmMvbGliL2lucHV0LWZpbGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJbnB1dEZpbGUge1xyXG4gICAgcHVibGljIGlkOiBhbnk7XHJcbiAgICBwdWJsaWMgZmlsZTogRmlsZTtcclxuICAgIHB1YmxpYyBwcmV2aWV3OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgaWQ6IGFueSxcclxuICAgICAgICBwcmV2aWV3OiBzdHJpbmcsXHJcbiAgICAgICAgZmlsZT86IEZpbGVcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLnByZXZpZXcgPSBwcmV2aWV3O1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0RmlsZSB9IGZyb20gJy4uL2R0by9pbnB1dC1maWxlJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnB1dC1maWxlLWNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0RmlsZVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgX2NvbmZpZzogSW5wdXRGaWxlQ29uZmlnXHJcbiAgICApIHsgfVxyXG5cclxuICAgIGdldCBjb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIGxpbWl0IGlzIG5vdCByZWFjaGVkLlxyXG4gICAgICogQHBhcmFtIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaW1pdEd1YXJkKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+LCBmaWxlTGltaXQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmlsZXMubGVuZ3RoIDwgZmlsZUxpbWl0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgZmlsZSBzaXplIGlzIG5vdCBiaWdnZXIgdGhhbiB0aGUgbGltaXQuXHJcbiAgICAgKiBAcGFyYW0gZmlsZVxyXG4gICAgICogQHBhcmFtIHNpemVMaW1pdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2l6ZUd1YXJkKGZpbGU6IEZpbGUsIHNpemVMaW1pdDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICFzaXplTGltaXQgfHwgZmlsZS5zaXplIDwgc2l6ZUxpbWl0ICogMTAyNCAqIDEwMjQ7IC8vIFRPRE8gOiBpbXByb3ZlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSB0eXBlIG9mIHRoZSBmaWxlIGlzIGVuYWJsZWQuXHJcbiAgICAgKiBAcGFyYW0gZmlsZVxyXG4gICAgICogQHBhcmFtIGZpbGVBY2NlcHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHR5cGVHdWFyZChmaWxlOiBGaWxlLCBmaWxlQWNjZXB0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgZW5hYmxlZCA9IGZpbGVBY2NlcHQgPT0gbnVsbDtcclxuICAgICAgICBpZiAoZmlsZUFjY2VwdCkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NlcHQgPSBmaWxlQWNjZXB0LnJlcGxhY2UoJyonLCAnJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGVzID0gYWNjZXB0LnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiB0eXBlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUudHlwZS5zdGFydHNXaXRoKHR5cGUpIHx8ICh0eXBlLmNoYXJBdCgwKSA9PT0gJy4nICYmIGZpbGUubmFtZSAhPSBudWxsICYmIGZpbGUubmFtZS5lbmRzV2l0aCh0eXBlKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVuYWJsZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0RmlsZSB9IGZyb20gJy4uLy4uL2R0by9pbnB1dC1maWxlJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlUmVqZWN0ZWQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2lucHV0LWZpbGUtcmVqZWN0ZWQnO1xyXG5pbXBvcnQgeyBJbnB1dEZpbGVSZWplY3RlZFJlYXNvbiB9IGZyb20gJy4uLy4uL2VudW1zL2lucHV0LWZpbGUtcmVqZWN0ZWQtcmVhc29uJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2lucHV0LWZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE51bWJlclN5bWJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaW5wdXQtZmlsZScsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJpbnB1dC1maWxlLWNvbnRhaW5lclwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC4lXT1cImhlaWdodFwiPlxyXG4gICAgPGxhYmVsIGNsYXNzPVwibWF0LW9ycGhhbi1sYWJlbFwiIFtmb3JdPVwiaW5wdXRJZFwiIFtjbGFzcy5hY3RpdmVdPVwiZmlsZXM/Lmxlbmd0aFwiIFtpbm5lckh0bWxdPVwicGxhY2Vob2xkZXJcIiAqbmdJZj1cInBsYWNlaG9sZGVyXCI+PC9sYWJlbD5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWxlcy1jb250YWluZXJcIiBbc3R5bGUud2lkdGguJV09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHQuJV09XCJoZWlnaHRcIj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlczsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1jb250YWluZXIgYm91bmNlLWluXCIgW3N0eWxlLndpZHRoLiVdPVwid2lkdGhQcmV2aWV3XCIgW3N0eWxlLmhlaWdodC4lXT1cImhlaWdodFByZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBpbnB1dEZpbGVEcm9wWm9uZSBjbGFzcz1cInJlcGxhY2UtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJmaWxlUmVwbGFjZS5jbGljaygpXCIgKGl0ZW1Ecm9wKT1cIm9uUmVwbGFjZUZpbGUoJGV2ZW50LCBpLHJlcGxhY2VCdXR0b24pXCJcclxuICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoaXRlbURyYWdPdmVyKT1cIm9uRHJhZ092ZXIocmVwbGFjZUJ1dHRvbilcIiAoaXRlbURyYWdMZWF2ZSk9XCJvbkRyYWdMZWF2ZShyZXBsYWNlQnV0dG9uKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI3JlcGxhY2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltYWdlLXByZXZpZXdcIiBbc3JjXT1cImZpbGUucHJldmlld1wiICpuZ0lmPVwiZmlsZS5wcmV2aWV3OyBlbHNlIG5vUHJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9QcmV2aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJpbnB1dC1pY29uXCI+aW5zZXJ0X2RyaXZlX2ZpbGU8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1uYW1lIHRleHQtdHJ1bmNhdGVcIiBbaW5uZXJIdG1sXT1cImZpbGUuZmlsZS5uYW1lXCIgKm5nSWY9XCJmaWxlLmZpbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZGVsZXRlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBbc3R5bGUud2lkdGguJV09XCJ3aWR0aFByZXZpZXdcIiAoY2xpY2spPVwib25EZWxldGVGaWxlKGkpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBbYWNjZXB0XT1cImZpbGVBY2NlcHRcIiBoaWRkZW4gdHlwZT1cImZpbGVcIiAjZmlsZVJlcGxhY2UgKGNoYW5nZSk9XCJvblJlcGxhY2VGaWxlKCRldmVudC50YXJnZXQuZmlsZXMsIGksIHJlcGxhY2VCdXR0b24sIGZpbGVSZXBsYWNlKVwiPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2FuQWRkRmlsZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gaW5wdXRGaWxlRHJvcFpvbmUgY2xhc3M9XCJmaWxlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZmlsZUlucHV0LmNsaWNrKClcIiAoaXRlbURyb3ApPVwib25TZWxlY3RGaWxlKCRldmVudCwgc2VsZWN0QnV0dG9uKVwiXHJcbiAgICAgICAgICAgICAgICAoaXRlbURyYWdPdmVyKT1cIm9uRHJhZ092ZXIoc2VsZWN0QnV0dG9uKVwiIChpdGVtRHJhZ0xlYXZlKT1cIm9uRHJhZ0xlYXZlKHNlbGVjdEJ1dHRvbilcIiBbc3R5bGUud2lkdGguJV09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHQuJV09XCJoZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiICNzZWxlY3RCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJpbnB1dC1pY29uXCI+YWRkPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgW2lubmVySHRtbF09XCJpbnRlcm5hbFBsYWNlaG9sZGVyXCIgKm5nSWY9XCJpbnRlcm5hbFBsYWNlaG9sZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aW5wdXQgW2lkXT1cImlucHV0SWRcIiBbYWNjZXB0XT1cImZpbGVBY2NlcHRcIiBoaWRkZW4gdHlwZT1cImZpbGVcIiBbYXR0ci5tdWx0aXBsZV09XCJmaWxlTGltaXQgPiAxID8gdHJ1ZSA6IG51bGxcIiAjZmlsZUlucHV0IChjaGFuZ2UpPVwib25TZWxlY3RGaWxlKCRldmVudC50YXJnZXQuZmlsZXMsIHNlbGVjdEJ1dHRvbilcIj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+YCxcclxuICAgIHN0eWxlczogW2AuaW5wdXQtZmlsZS1jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9LmlucHV0LWZpbGUtY29udGFpbmVyIC5maWxlcy1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LXdyYXA6d3JhcDtwYWRkaW5nLXRvcDoxLjI1cmVtfS5pbnB1dC1maWxlLWNvbnRhaW5lciAuZmlsZS1idXR0b24sLmlucHV0LWZpbGUtY29udGFpbmVyIC5maWxlLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTpmbGV4O2hlaWdodDoxMHJlbTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwcmVtfS5pbnB1dC1maWxlLWNvbnRhaW5lciAuZGVsZXRlLWJ1dHRvbnt3aWR0aDoxMHJlbX0uaW5wdXQtZmlsZS1jb250YWluZXIgLmZpbGUtY29udGFpbmVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXJnaW4tcmlnaHQ6MXJlbX0uaW5wdXQtZmlsZS1jb250YWluZXIgLnJlcGxhY2UtYnV0dG9ue2ZsZXg6MTt3aWR0aDoxMHJlbX0uaW5wdXQtZmlsZS1jb250YWluZXIgLm1hdC1idXR0b246Zm9jdXN7b3V0bGluZTowfS5pbnB1dC1maWxlLWNvbnRhaW5lciAuZmlsZS1uYW1le3dpZHRoOmNhbGMoMTByZW0gLSAyLjVyZW0pfS5pbnB1dC1maWxlLWNvbnRhaW5lciAuaW1hZ2UtcHJldmlld3ttYXJnaW46MCAtMTZweDtoZWlnaHQ6MTByZW07LW8tb2JqZWN0LWZpdDpjb250YWluO29iamVjdC1maXQ6Y29udGFpbjt3aWR0aDoxMHJlbX0uaW5wdXQtZmlsZS1jb250YWluZXIgLmlucHV0LWljb257Zm9udC1zaXplOmNhbGMoMTByZW0gLyA0KTtoZWlnaHQ6Y2FsYygxMHJlbSAvIDQpO3dpZHRoOmNhbGMoMTByZW0gLyA0KX0uaW5wdXQtZmlsZS1jb250YWluZXIgLm1hdC1vcnBoYW4tbGFiZWx7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjFyZW07bGVmdDowO21hcmdpbjowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowO3RyYW5zZm9ybS1vcmlnaW46MDt0cmFuc2l0aW9uOi40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSx3aWR0aCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9LmlucHV0LWZpbGUtY29udGFpbmVyIC5tYXQtb3JwaGFuLWxhYmVsLmFjdGl2ZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNzUpO3RyYW5zZm9ybTpzY2FsZSguNzUpfUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbnsyMCUsNDAlLDYwJSw4MCUsZnJvbSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyk7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4wMywxLjAzLDEuMDMpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMDMsMS4wMywxLjAzKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTcsLjk3LC45Nyk7dHJhbnNmb3JtOnNjYWxlM2QoLjk3LC45NywuOTcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSl9fUBrZXlmcmFtZXMgYm91bmNlSW57MjAlLDQwJSw2MCUsODAlLGZyb20sdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpfTQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KTt0cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMDMsMS4wMywxLjAzKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjAzLDEuMDMsMS4wMyl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk3LC45NywuOTcpO3RyYW5zZm9ybTpzY2FsZTNkKC45NywuOTcsLjk3KX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpfX0uYm91bmNlLWluey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7YW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VJbjthbmltYXRpb24tbmFtZTpib3VuY2VJbn1gXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IElucHV0RmlsZUNvbXBvbmVudCksXHJcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRGaWxlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgcHJpdmF0ZSBfZmlsZUFjY2VwdDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfZmlsZUxpbWl0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zaXplTGltaXQ6IG51bWJlcjtcclxuXHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIGlucHV0SWQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpbnRlcm5hbFBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSB3aWR0aFByZXZpZXc6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGhlaWdodFByZXZpZXc6IG51bWJlcjtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgZmlsZUFjY2VwdChmaWxlQWNjZXB0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9maWxlQWNjZXB0ID0gZmlsZUFjY2VwdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmlsZUFjY2VwdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlsZUFjY2VwdCB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLmZpbGVBY2NlcHQgfHwgJyonO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBmaWxlTGltaXQoZmlsZUxpbWl0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9maWxlTGltaXQgPSBmaWxlTGltaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpbGVMaW1pdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmlsZUxpbWl0IHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcuZmlsZUxpbWl0IHx8IDE7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHNpemVMaW1pdChzaXplTGltaXQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NpemVMaW1pdCA9IHNpemVMaW1pdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2l6ZUxpbWl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaXplTGltaXQgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5zaXplTGltaXQgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KCkgYWNjZXB0ZWRGaWxlID0gbmV3IEV2ZW50RW1pdHRlcjxJbnB1dEZpbGU+KCk7XHJcbiAgICBAT3V0cHV0KCkgZGVsZXRlZEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPElucHV0RmlsZT4oKTtcclxuICAgIEBPdXRwdXQoKSByZWplY3RlZEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPElucHV0RmlsZVJlamVjdGVkPigpO1xyXG4gICAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JykgZmlsZUlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHB1YmxpYyBmaWxlcyA9IG5ldyBBcnJheTxJbnB1dEZpbGU+KCk7XHJcbiAgICBwdWJsaWMgb25DaGFuZ2UgPSAoZmlsZXM6IEFycmF5PElucHV0RmlsZT4pID0+IHsgfTtcclxuICAgIHB1YmxpYyBvblRvdWNoZWQgPSAoKSA9PiB7IH07XHJcblxyXG4gICAgZ2V0IGNhbkFkZEZpbGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPCB0aGlzLmZpbGVMaW1pdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGlucHV0RmlsZVNlcnZpY2U6IElucHV0RmlsZVNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBkZWxldGUgYSBmaWxlIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKiBAcGFyYW0gaW5kZXhcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uRGVsZXRlRmlsZShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcy5zbGljZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZWRGaWxlLmVtaXQoZmlsZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKGZpbGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBkcmFnIG92ZXIgZXZlbnQgaGFuZGxlci5cclxuICAgICAqIEFkZHMgYSByaXBwbGUgZWZmZWN0IG9uIHRoZSBidXR0b24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkRyYWdPdmVyKGJ1dHRvbjogTWF0QnV0dG9uKTogdm9pZCB7XHJcbiAgICAgICAgYnV0dG9uLnJpcHBsZS5sYXVuY2goeyBjZW50ZXJlZDogdHJ1ZSwgcGVyc2lzdGVudDogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGRyYWcgbGVhdmUgZXZlbnQgaGFuZGxlci5cclxuICAgICAqIEZhZGVzIHRoZSByaXBwbGUgZWZmZWN0IG9mIHRoZSBidXR0b24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkRyYWdMZWF2ZShidXR0b246IE1hdEJ1dHRvbik6IHZvaWQge1xyXG4gICAgICAgIGJ1dHRvbi5yaXBwbGUuZmFkZU91dEFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gcmVwbGFjZSBvbmUgZmlsZSBldmVudCBoYW5kbGVyLlxyXG4gICAgICogV3JpdGVzIHRoZSB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBmaWxlTGlzdFxyXG4gICAgICogQHBhcmFtIGluZGV4XHJcbiAgICAgKiBAcGFyYW0gZmlsZUlucHV0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblJlcGxhY2VGaWxlKGZpbGVMaXN0OiBGaWxlTGlzdCwgaW5kZXg6IG51bWJlciwgYnV0dG9uOiBNYXRCdXR0b24sIGZpbGVJbnB1dD86IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgLy8gQ29waWVzIHRoZSBhcnJheSB3aXRob3V0IHJlZmVyZW5jZS5cclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIC8vIEFzc3VtZXMgdGhhdCBhIHNpbmdsZSBmaWxlIGNhbiBiZSByZXBsYWNlZCBieSBhIHNpbmdsZSBmaWxlLlxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dEZpbGUgPSBuZXcgSW5wdXRGaWxlKG51bGwsIG51bGwsIGZpbGVMaXN0Lml0ZW0oMCkpO1xyXG4gICAgICAgICAgICBidXR0b24ucmlwcGxlLmZhZGVPdXRBbGwoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZUd1YXJkKGZpbGVzLCBpbnB1dEZpbGUsIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlc1tpbmRleF0gPSBpbnB1dEZpbGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY2VwdGVkRmlsZS5lbWl0KGlucHV0RmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKGZpbGVzKTtcclxuICAgICAgICAgICAgaWYgKGZpbGVJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgZmlsZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiBzZWxlY3Qgb25lIG9yIG1vcmUgZmlsZXMgZXZlbnQgaGFuZGxlci5cclxuICAgICAqIFdyaXRlcyB0aGUgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gZmlsZUxpc3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uU2VsZWN0RmlsZShmaWxlTGlzdDogRmlsZUxpc3QsIGJ1dHRvbjogTWF0QnV0dG9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yaXBwbGUuZmFkZU91dEFsbCgpO1xyXG4gICAgICAgICAgICAvLyBDb3BpZXMgdGhlIGFycmF5IHdpdGhvdXQgcmVmZXJlbmNlLlxyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXMuc2xpY2UoKTtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShmaWxlTGlzdCkuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0RmlsZSA9IG5ldyBJbnB1dEZpbGUobnVsbCwgbnVsbCwgZmlsZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlR3VhcmQoZmlsZXMsIGlucHV0RmlsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKGlucHV0RmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlcHRlZEZpbGUuZW1pdChpbnB1dEZpbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVZhbHVlKGZpbGVzKTtcclxuICAgICAgICAgICAgdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxyXG4gICAgICogQHBhcmFtIGZuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoZmlsZXM6IEFycmF5PElucHV0RmlsZT4pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICAgICAqIEBwYXJhbSBmblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXHJcbiAgICAgKiBAcGFyYW0gaXNEaXNhYmxlZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICAgICAqIEBwYXJhbSBmaWxlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgd3JpdGVWYWx1ZShmaWxlczogQXJyYXk8SW5wdXRGaWxlPik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzID0gZmlsZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RmlsZVByZXZpZXcoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmZpbGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSBmaWxlIGNhbiBiZSBhZGRlZCB0byB0aGUgbW9kZWwuXHJcbiAgICAgKiBAcGFyYW0gZmlsZXNcclxuICAgICAqIEBwYXJhbSBmaWxlLFxyXG4gICAgICogQHBhcmFtIGJ5cGFzc0xpbWl0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZmlsZUd1YXJkKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+LCBmaWxlOiBJbnB1dEZpbGUsIGJ5cGFzc0xpbWl0PzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghYnlwYXNzTGltaXQgJiYgIXRoaXMuaW5wdXRGaWxlU2VydmljZS5saW1pdEd1YXJkKGZpbGVzLCB0aGlzLmZpbGVMaW1pdCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3RlZEZpbGUuZW1pdCh7IHJlYXNvbjogSW5wdXRGaWxlUmVqZWN0ZWRSZWFzb24ubGltaXRSZWFjaGVkLCBmaWxlOiBmaWxlIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaW5wdXRGaWxlU2VydmljZS5zaXplR3VhcmQoZmlsZS5maWxlLCB0aGlzLnNpemVMaW1pdCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3RlZEZpbGUuZW1pdCh7IHJlYXNvbjogSW5wdXRGaWxlUmVqZWN0ZWRSZWFzb24uc2l6ZVJlYWNoZWQsIGZpbGU6IGZpbGUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLnR5cGVHdWFyZChmaWxlLmZpbGUsIHRoaXMuZmlsZUFjY2VwdCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3RlZEZpbGUuZW1pdCh7IHJlYXNvbjogSW5wdXRGaWxlUmVqZWN0ZWRSZWFzb24uYmFkRmlsZSwgZmlsZTogZmlsZSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZmlsZSBwcmV2aWV3IHdpdGggRmlsZVJlYWRlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEZpbGVQcmV2aWV3KCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgaW5kZXggaW4gdGhpcy5maWxlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlc1tpbmRleF0uZmlsZSAhPSBudWxsICYmIHRoaXMuaW5wdXRGaWxlU2VydmljZS50eXBlR3VhcmQodGhpcy5maWxlc1tpbmRleF0uZmlsZSwgJ2ltYWdlLyonKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgZnIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNbaW5kZXhdLnByZXZpZXcgPSBmci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgZnIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGVzW2luZGV4XS5maWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSG9zdExpc3RlbmVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tpbnB1dEZpbGVEcm9wWm9uZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wWm9uZURpcmVjdGl2ZSB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgaXRlbURyYWdPdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGl0ZW1EcmFnTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgaXRlbURyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBwcml2YXRlIGlzT3ZlcjogYm9vbGVhbjtcclxuICAgIC8vIFByZXZlbnQgZHJhZ2xlYXZlIG9uIGNoaWxkcmVuLCBjb3VsZCBiZSBiZXR0ZXIgYnV0IGl0J3MgY2hlYXAgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxyXG4gICAgcHJpdmF0ZSB3aGl0ZUxpc3RDbGFzc2VzID0gWydmaWxlLWJ1dHRvbicsICdtYXQtYnV0dG9uLXdyYXBwZXInLCAnaW5wdXQtaWNvbiddO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBPdmVyIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxyXG4gICAgcHVibGljIG9uRHJhZ092ZXIoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJldmVudEFuZFN0b3BFdmVudFByb3BhZ2F0aW9uKGV2ZW50KTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNPdmVyICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtRHJhZ092ZXIuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgTGVhdmUgZXZlbnQgaGFuZGxlci5cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxyXG4gICAgcHVibGljIG9uRHJhZ0xlYXZlKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByZXZlbnRBbmRTdG9wRXZlbnRQcm9wYWdhdGlvbihldmVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPdmVyICYmIHRoaXMuaXNUcnVlTGVhdmUoZXZlbnQpICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbURyYWdMZWF2ZS5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJvcCBldmVudCBoYW5kbGVyLlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gICAgcHVibGljIG9uRHJvcChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIGV2ZW50IGluc3RhbmNlb2YgRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmVudEFuZFN0b3BFdmVudFByb3BhZ2F0aW9uKGV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbURyb3AuZW1pdChldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJldmVudHMgYW5kIHN0b3BzIGV2ZW50IHByb3BhZ3JhdGlvbi5cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHByZXZlbnRBbmRTdG9wRXZlbnRQcm9wYWdhdGlvbihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGlmIHRoZSBsZWF2ZSBpcyBub3QgdHJpZ2dlciBieSBhIGNoaWxkcmVuLlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNUcnVlTGVhdmUoZXZlbnQ6IERyYWdFdmVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiB0aGlzLndoaXRlTGlzdENsYXNzZXMpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmZyb21FbGVtZW50ICE9IG51bGwgJiYgZXZlbnQuZnJvbUVsZW1lbnQuY2xhc3NOYW1lLmluZGV4T2YoYykgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERyb3Bab25lRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Ryb3Atem9uZS9kcm9wLXpvbmUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0RmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC1maWxlL2lucHV0LWZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRGaWxlQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2lucHV0LWZpbGUtY29uZmlnJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW5wdXQtZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIERyb3Bab25lRGlyZWN0aXZlLFxyXG4gICAgICAgIElucHV0RmlsZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzIDogW1xyXG4gICAgICAgIElucHV0RmlsZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIElucHV0RmlsZVNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFsgSW5wdXRGaWxlQ29tcG9uZW50IF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEZpbGVNb2R1bGUge1xyXG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSW5wdXRGaWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IElucHV0RmlsZU1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBJbnB1dEZpbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUtJLFlBQ0ksRUFBTyxFQUNQLE9BQWUsRUFDZixJQUFXO1FBRVgsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNwQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2REOzs7O0lBU0ksWUFDOEIsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7S0FDakQ7Ozs7SUFFTCxJQUFJLE1BQU07UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDdkI7Ozs7Ozs7SUFNTSxVQUFVLENBQUMsS0FBdUIsRUFBRSxTQUFTO1FBQ2hELE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7Ozs7Ozs7O0lBUTdCLFNBQVMsQ0FBQyxJQUFVLEVBQUUsU0FBaUI7UUFDMUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJ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