/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputFile } from '../../dto/input-file';
import { InputFileRejectedReason } from '../../enums/input-file-rejected-reason';
import { InputFileService } from '../../services/input-file.service';
export class InputFileComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaW5wdXQtZmlsZS8iLCJzb3VyY2VzIjpbInNyYy9saWIvY29tcG9uZW50cy9pbnB1dC1maWxlL2lucHV0LWZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFrRHJFLE1BQU07Ozs7SUFtREYsWUFDWTtRQUFBLHFCQUFnQixHQUFoQixnQkFBZ0I7NEJBZEgsSUFBSSxZQUFZLEVBQWE7MkJBQzlCLElBQUksWUFBWSxFQUFhOzRCQUM1QixJQUFJLFlBQVksRUFBcUI7cUJBRy9DLElBQUksS0FBSyxFQUFhO3dCQUNuQixDQUFDLEtBQXVCLEVBQUUsRUFBRSxJQUFJO3lCQUMvQixHQUFHLEVBQUUsSUFBSTtLQVF2Qjs7Ozs7SUF2Q0wsSUFBYSxVQUFVLENBQUMsVUFBa0I7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7S0FDakM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7S0FDN0U7Ozs7O0lBRUQsSUFBYSxTQUFTLENBQUMsU0FBaUI7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFT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QyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2Ryx1QkFBTSxFQUFFLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDNUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztpQkFDekMsQ0FBQztnQkFDRixFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUM7U0FDSjs7OztZQTNQUixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWtDUDtnQkFDSCxNQUFNLEVBQUUsQ0FBQyw0K0VBQTQrRSxDQUFDO2dCQUN0L0UsU0FBUyxFQUFFO29CQUNQO3dCQUNJLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7d0JBQ2pELEtBQUssRUFBRSxJQUFJO3FCQUNkO2lCQUNKO2FBQ0o7Ozs7WUFqRFEsZ0JBQWdCOzs7dUJBdURwQixLQUFLO3NCQUNMLEtBQUs7MEJBQ0wsS0FBSztrQ0FDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBRUwsS0FBSzt3QkFRTCxLQUFLO3dCQVFMLEtBQUs7MkJBUUwsTUFBTTswQkFDTixNQUFNOzJCQUNOLE1BQU07d0JBQ04sU0FBUyxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlIH0gZnJvbSAnLi4vLi4vZHRvL2lucHV0LWZpbGUnO1xyXG5pbXBvcnQgeyBJbnB1dEZpbGVSZWplY3RlZCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvaW5wdXQtZmlsZS1yZWplY3RlZCc7XHJcbmltcG9ydCB7IElucHV0RmlsZVJlamVjdGVkUmVhc29uIH0gZnJvbSAnLi4vLi4vZW51bXMvaW5wdXQtZmlsZS1yZWplY3RlZC1yZWFzb24nO1xyXG5pbXBvcnQgeyBJbnB1dEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5wdXQtZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTnVtYmVyU3ltYm9sIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdpbnB1dC1maWxlJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImlucHV0LWZpbGUtY29udGFpbmVyXCIgW3N0eWxlLndpZHRoLiVdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0LiVdPVwiaGVpZ2h0XCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJtYXQtb3JwaGFuLWxhYmVsXCIgW2Zvcl09XCJpbnB1dElkXCIgW2NsYXNzLmFjdGl2ZV09XCJmaWxlcz8ubGVuZ3RoXCIgW2lubmVySHRtbF09XCJwbGFjZWhvbGRlclwiICpuZ0lmPVwicGxhY2Vob2xkZXJcIj48L2xhYmVsPlxyXG4gICAgPGRpdiBjbGFzcz1cImZpbGVzLWNvbnRhaW5lclwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC4lXT1cImhlaWdodFwiPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWxlIG9mIGZpbGVzOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWNvbnRhaW5lciBib3VuY2UtaW5cIiBbc3R5bGUud2lkdGguJV09XCJ3aWR0aFByZXZpZXdcIiBbc3R5bGUuaGVpZ2h0LiVdPVwiaGVpZ2h0UHJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGlucHV0RmlsZURyb3Bab25lIGNsYXNzPVwicmVwbGFjZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImZpbGVSZXBsYWNlLmNsaWNrKClcIiAoaXRlbURyb3ApPVwib25SZXBsYWNlRmlsZSgkZXZlbnQsIGkscmVwbGFjZUJ1dHRvbilcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIChpdGVtRHJhZ092ZXIpPVwib25EcmFnT3ZlcihyZXBsYWNlQnV0dG9uKVwiIChpdGVtRHJhZ0xlYXZlKT1cIm9uRHJhZ0xlYXZlKHJlcGxhY2VCdXR0b24pXCJcclxuICAgICAgICAgICAgICAgICAgICAjcmVwbGFjZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1hZ2UtcHJldmlld1wiIFtzcmNdPVwiZmlsZS5wcmV2aWV3XCIgKm5nSWY9XCJmaWxlLnByZXZpZXc7IGVsc2Ugbm9QcmV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub1ByZXZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImlucHV0LWljb25cIj5pbnNlcnRfZHJpdmVfZmlsZTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW5hbWUgdGV4dC10cnVuY2F0ZVwiIFtpbm5lckh0bWxdPVwiZmlsZS5maWxlLm5hbWVcIiAqbmdJZj1cImZpbGUuZmlsZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJkZWxldGUtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoUHJldmlld1wiIChjbGljayk9XCJvbkRlbGV0ZUZpbGUoaSlcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IFthY2NlcHRdPVwiZmlsZUFjY2VwdFwiIGhpZGRlbiB0eXBlPVwiZmlsZVwiICNmaWxlUmVwbGFjZSAoY2hhbmdlKT1cIm9uUmVwbGFjZUZpbGUoJGV2ZW50LnRhcmdldC5maWxlcywgaSwgcmVwbGFjZUJ1dHRvbiwgZmlsZVJlcGxhY2UpXCI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjYW5BZGRGaWxlXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBpbnB1dEZpbGVEcm9wWm9uZSBjbGFzcz1cImZpbGUtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJmaWxlSW5wdXQuY2xpY2soKVwiIChpdGVtRHJvcCk9XCJvblNlbGVjdEZpbGUoJGV2ZW50LCBzZWxlY3RCdXR0b24pXCJcclxuICAgICAgICAgICAgICAgIChpdGVtRHJhZ092ZXIpPVwib25EcmFnT3ZlcihzZWxlY3RCdXR0b24pXCIgKGl0ZW1EcmFnTGVhdmUpPVwib25EcmFnTGVhdmUoc2VsZWN0QnV0dG9uKVwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC4lXT1cImhlaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgI3NlbGVjdEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImlucHV0LWljb25cIj5hZGQ8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbaW5uZXJIdG1sXT1cImludGVybmFsUGxhY2Vob2xkZXJcIiAqbmdJZj1cImludGVybmFsUGxhY2Vob2xkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxpbnB1dCBbaWRdPVwiaW5wdXRJZFwiIFthY2NlcHRdPVwiZmlsZUFjY2VwdFwiIGhpZGRlbiB0eXBlPVwiZmlsZVwiIFthdHRyLm11bHRpcGxlXT1cImZpbGVMaW1pdCA+IDEgPyB0cnVlIDogbnVsbFwiICNmaWxlSW5wdXQgKGNoYW5nZSk9XCJvblNlbGVjdEZpbGUoJGV2ZW50LnRhcmdldC5maWxlcywgc2VsZWN0QnV0dG9uKVwiPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcblxyXG48L2Rpdj5gLFxyXG4gICAgc3R5bGVzOiBbYC5pbnB1dC1maWxlLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZX0uaW5wdXQtZmlsZS1jb250YWluZXIgLmZpbGVzLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtd3JhcDp3cmFwO3BhZGRpbmctdG9wOjEuMjVyZW19LmlucHV0LWZpbGUtY29udGFpbmVyIC5maWxlLWJ1dHRvbiwuaW5wdXQtZmlsZS1jb250YWluZXIgLmZpbGUtY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5OmZsZXg7aGVpZ2h0OjEwcmVtO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTByZW19LmlucHV0LWZpbGUtY29udGFpbmVyIC5kZWxldGUtYnV0dG9ue3dpZHRoOjEwcmVtfS5pbnB1dC1maWxlLWNvbnRhaW5lciAuZmlsZS1jb250YWluZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1uO21hcmdpbi1yaWdodDoxcmVtfS5pbnB1dC1maWxlLWNvbnRhaW5lciAucmVwbGFjZS1idXR0b257ZmxleDoxO3dpZHRoOjEwcmVtfS5pbnB1dC1maWxlLWNvbnRhaW5lciAubWF0LWJ1dHRvbjpmb2N1c3tvdXRsaW5lOjB9LmlucHV0LWZpbGUtY29udGFpbmVyIC5maWxlLW5hbWV7d2lkdGg6Y2FsYygxMHJlbSAtIDIuNXJlbSl9LmlucHV0LWZpbGUtY29udGFpbmVyIC5pbWFnZS1wcmV2aWV3e21hcmdpbjowIC0xNnB4O2hlaWdodDoxMHJlbTstby1vYmplY3QtZml0OmNvbnRhaW47b2JqZWN0LWZpdDpjb250YWluO3dpZHRoOjEwcmVtfS5pbnB1dC1maWxlLWNvbnRhaW5lciAuaW5wdXQtaWNvbntmb250LXNpemU6Y2FsYygxMHJlbSAvIDQpO2hlaWdodDpjYWxjKDEwcmVtIC8gNCk7d2lkdGg6Y2FsYygxMHJlbSAvIDQpfS5pbnB1dC1maWxlLWNvbnRhaW5lciAubWF0LW9ycGhhbi1sYWJlbHtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7ZGlzcGxheTpibG9jaztmb250LXNpemU6MXJlbTtsZWZ0OjA7bWFyZ2luOjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjA7dHJhbnNmb3JtLW9yaWdpbjowO3RyYW5zaXRpb246LjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLHdpZHRoIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0uaW5wdXQtZmlsZS1jb250YWluZXIgLm1hdC1vcnBoYW4tbGFiZWwuYWN0aXZley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43NSk7dHJhbnNmb3JtOnNjYWxlKC43NSl9QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluezIwJSw0MCUsNjAlLDgwJSxmcm9tLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKTt0cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyl9MjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSk7dHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjAzLDEuMDMsMS4wMyk7dHJhbnNmb3JtOnNjYWxlM2QoMS4wMywxLjAzLDEuMDMpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NywuOTcsLjk3KTt0cmFuc2Zvcm06c2NhbGUzZCguOTcsLjk3LC45Nyl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKX19QGtleWZyYW1lcyBib3VuY2VJbnsyMCUsNDAlLDYwJSw4MCUsZnJvbSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyk7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4wMywxLjAzLDEuMDMpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMDMsMS4wMywxLjAzKX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTcsLjk3LC45Nyk7dHJhbnNmb3JtOnNjYWxlM2QoLjk3LC45NywuOTcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSl9fS5ib3VuY2UtaW57LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Ljc1czthbmltYXRpb24tZHVyYXRpb246Ljc1czstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJvdW5jZUluO2FuaW1hdGlvbi1uYW1lOmJvdW5jZUlufWBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRGaWxlQ29tcG9uZW50KSxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgICBwcml2YXRlIF9maWxlQWNjZXB0OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9maWxlTGltaXQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3NpemVMaW1pdDogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgaW5wdXRJZDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGludGVybmFsUGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIHdpZHRoUHJldmlldzogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgaGVpZ2h0UHJldmlldzogbnVtYmVyO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBmaWxlQWNjZXB0KGZpbGVBY2NlcHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2ZpbGVBY2NlcHQgPSBmaWxlQWNjZXB0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmaWxlQWNjZXB0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWxlQWNjZXB0IHx8IHRoaXMuaW5wdXRGaWxlU2VydmljZS5jb25maWcuZmlsZUFjY2VwdCB8fCAnKic7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGZpbGVMaW1pdChmaWxlTGltaXQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2ZpbGVMaW1pdCA9IGZpbGVMaW1pdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmlsZUxpbWl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWxlTGltaXQgfHwgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmNvbmZpZy5maWxlTGltaXQgfHwgMTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgc2l6ZUxpbWl0KHNpemVMaW1pdDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2l6ZUxpbWl0ID0gc2l6ZUxpbWl0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaXplTGltaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemVMaW1pdCB8fCB0aGlzLmlucHV0RmlsZVNlcnZpY2UuY29uZmlnLnNpemVMaW1pdCB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSBhY2NlcHRlZEZpbGUgPSBuZXcgRXZlbnRFbWl0dGVyPElucHV0RmlsZT4oKTtcclxuICAgIEBPdXRwdXQoKSBkZWxldGVkRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8SW5wdXRGaWxlPigpO1xyXG4gICAgQE91dHB1dCgpIHJlamVjdGVkRmlsZSA9IG5ldyBFdmVudEVtaXR0ZXI8SW5wdXRGaWxlUmVqZWN0ZWQ+KCk7XHJcbiAgICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnKSBmaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgcHVibGljIGZpbGVzID0gbmV3IEFycmF5PElucHV0RmlsZT4oKTtcclxuICAgIHB1YmxpYyBvbkNoYW5nZSA9IChmaWxlczogQXJyYXk8SW5wdXRGaWxlPikgPT4geyB9O1xyXG4gICAgcHVibGljIG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgICBnZXQgY2FuQWRkRmlsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA8IHRoaXMuZmlsZUxpbWl0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaW5wdXRGaWxlU2VydmljZTogSW5wdXRGaWxlU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGRlbGV0ZSBhIGZpbGUgZXZlbnQgaGFuZGxlci5cclxuICAgICAqIEBwYXJhbSBpbmRleFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25EZWxldGVGaWxlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmZpbGVzLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlZEZpbGUuZW1pdChmaWxlc1tpbmRleF0pO1xyXG4gICAgICAgICAgICBmaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUoZmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIGRyYWcgb3ZlciBldmVudCBoYW5kbGVyLlxyXG4gICAgICogQWRkcyBhIHJpcHBsZSBlZmZlY3Qgb24gdGhlIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uRHJhZ092ZXIoYnV0dG9uOiBNYXRCdXR0b24pOiB2b2lkIHtcclxuICAgICAgICBidXR0b24ucmlwcGxlLmxhdW5jaCh7IGNlbnRlcmVkOiB0cnVlLCBwZXJzaXN0ZW50OiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT24gZHJhZyBsZWF2ZSBldmVudCBoYW5kbGVyLlxyXG4gICAgICogRmFkZXMgdGhlIHJpcHBsZSBlZmZlY3Qgb2YgdGhlIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uRHJhZ0xlYXZlKGJ1dHRvbjogTWF0QnV0dG9uKTogdm9pZCB7XHJcbiAgICAgICAgYnV0dG9uLnJpcHBsZS5mYWRlT3V0QWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPbiByZXBsYWNlIG9uZSBmaWxlIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKiBXcml0ZXMgdGhlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIGZpbGVMaXN0XHJcbiAgICAgKiBAcGFyYW0gaW5kZXhcclxuICAgICAqIEBwYXJhbSBmaWxlSW5wdXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uUmVwbGFjZUZpbGUoZmlsZUxpc3Q6IEZpbGVMaXN0LCBpbmRleDogbnVtYmVyLCBidXR0b246IE1hdEJ1dHRvbiwgZmlsZUlucHV0PzogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAvLyBDb3BpZXMgdGhlIGFycmF5IHdpdGhvdXQgcmVmZXJlbmNlLlxyXG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuZmlsZXMuc2xpY2UoKTtcclxuICAgICAgICAgICAgLy8gQXNzdW1lcyB0aGF0IGEgc2luZ2xlIGZpbGUgY2FuIGJlIHJlcGxhY2VkIGJ5IGEgc2luZ2xlIGZpbGUuXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RmlsZSA9IG5ldyBJbnB1dEZpbGUobnVsbCwgbnVsbCwgZmlsZUxpc3QuaXRlbSgwKSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yaXBwbGUuZmFkZU91dEFsbCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlR3VhcmQoZmlsZXMsIGlucHV0RmlsZSwgdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGZpbGVzW2luZGV4XSA9IGlucHV0RmlsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjZXB0ZWRGaWxlLmVtaXQoaW5wdXRGaWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUoZmlsZXMpO1xyXG4gICAgICAgICAgICBpZiAoZmlsZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9uIHNlbGVjdCBvbmUgb3IgbW9yZSBmaWxlcyBldmVudCBoYW5kbGVyLlxyXG4gICAgICogV3JpdGVzIHRoZSB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBmaWxlTGlzdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25TZWxlY3RGaWxlKGZpbGVMaXN0OiBGaWxlTGlzdCwgYnV0dG9uOiBNYXRCdXR0b24pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgYnV0dG9uLnJpcHBsZS5mYWRlT3V0QWxsKCk7XHJcbiAgICAgICAgICAgIC8vIENvcGllcyB0aGUgYXJyYXkgd2l0aG91dCByZWZlcmVuY2UuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5maWxlcy5zbGljZSgpO1xyXG4gICAgICAgICAgICBBcnJheS5mcm9tKGZpbGVMaXN0KS5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRGaWxlID0gbmV3IElucHV0RmlsZShudWxsLCBudWxsLCBmaWxlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVHdWFyZChmaWxlcywgaW5wdXRGaWxlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goaW5wdXRGaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VwdGVkRmlsZS5lbWl0KGlucHV0RmlsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlVmFsdWUoZmlsZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgQ29udHJvbFZhbHVlQWNjZXNzb3IuXHJcbiAgICAgKiBAcGFyYW0gZm5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChmaWxlczogQXJyYXk8SW5wdXRGaWxlPikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxyXG4gICAgICogQHBhcmFtIGZuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBsZW1lbnRhdGlvbiBvZiBDb250cm9sVmFsdWVBY2Nlc3Nvci5cclxuICAgICAqIEBwYXJhbSBpc0Rpc2FibGVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxyXG4gICAgICogQHBhcmFtIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB3cml0ZVZhbHVlKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcclxuICAgICAgICAgICAgdGhpcy5zZXRGaWxlUHJldmlldygpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuZmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIGZpbGUgY2FuIGJlIGFkZGVkIHRvIHRoZSBtb2RlbC5cclxuICAgICAqIEBwYXJhbSBmaWxlc1xyXG4gICAgICogQHBhcmFtIGZpbGUsXHJcbiAgICAgKiBAcGFyYW0gYnlwYXNzTGltaXRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBmaWxlR3VhcmQoZmlsZXM6IEFycmF5PElucHV0RmlsZT4sIGZpbGU6IElucHV0RmlsZSwgYnlwYXNzTGltaXQ/OiBib29sZWFuKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFieXBhc3NMaW1pdCAmJiAhdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLmxpbWl0R3VhcmQoZmlsZXMsIHRoaXMuZmlsZUxpbWl0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlamVjdGVkRmlsZS5lbWl0KHsgcmVhc29uOiBJbnB1dEZpbGVSZWplY3RlZFJlYXNvbi5saW1pdFJlYWNoZWQsIGZpbGU6IGZpbGUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLnNpemVHdWFyZChmaWxlLmZpbGUsIHRoaXMuc2l6ZUxpbWl0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlamVjdGVkRmlsZS5lbWl0KHsgcmVhc29uOiBJbnB1dEZpbGVSZWplY3RlZFJlYXNvbi5zaXplUmVhY2hlZCwgZmlsZTogZmlsZSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlucHV0RmlsZVNlcnZpY2UudHlwZUd1YXJkKGZpbGUuZmlsZSwgdGhpcy5maWxlQWNjZXB0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlamVjdGVkRmlsZS5lbWl0KHsgcmVhc29uOiBJbnB1dEZpbGVSZWplY3RlZFJlYXNvbi5iYWRGaWxlLCBmaWxlOiBmaWxlIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBmaWxlIHByZXZpZXcgd2l0aCBGaWxlUmVhZGVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RmlsZVByZXZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBpbiB0aGlzLmZpbGVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVzW2luZGV4XS5maWxlICE9IG51bGwgJiYgdGhpcy5pbnB1dEZpbGVTZXJ2aWNlLnR5cGVHdWFyZCh0aGlzLmZpbGVzW2luZGV4XS5maWxlLCAnaW1hZ2UvKicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBmci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc1tpbmRleF0ucHJldmlldyA9IGZyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBmci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZXNbaW5kZXhdLmZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==