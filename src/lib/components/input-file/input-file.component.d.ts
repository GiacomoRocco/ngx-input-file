import { ElementRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { InputFile } from '../../dto/input-file';
import { InputFileRejected } from '../../interfaces/input-file-rejected';
import { InputFileService } from '../../services/input-file.service';
import { MatButton } from '@angular/material/button';
export declare class InputFileComponent implements ControlValueAccessor {
    private inputFileService;
    private _fileAccept;
    private _fileLimit;
    private _sizeLimit;
    disabled: boolean;
    inputId: string;
    placeholder: string;
    internalPlaceholder: string;
    width: number;
    height: number;
    widthPreview: number;
    heightPreview: number;
    fileAccept: string;
    fileLimit: number;
    sizeLimit: number;
    acceptedFile: EventEmitter<InputFile>;
    deletedFile: EventEmitter<InputFile>;
    rejectedFile: EventEmitter<InputFileRejected>;
    fileInput: ElementRef;
    files: InputFile[];
    onChange: (files: InputFile[]) => void;
    onTouched: () => void;
    readonly canAddFile: boolean;
    constructor(inputFileService: InputFileService);
    /**
     * On delete a file event handler.
     * @param index
     */
    onDeleteFile(index: number): void;
    /**
     * On drag over event handler.
     * Adds a ripple effect on the button.
     */
    onDragOver(button: MatButton): void;
    /**
     * On drag leave event handler.
     * Fades the ripple effect of the button.
     */
    onDragLeave(button: MatButton): void;
    /**
     * On replace one file event handler.
     * Writes the value.
     * @param fileList
     * @param index
     * @param fileInput
     */
    onReplaceFile(fileList: FileList, index: number, button: MatButton, fileInput?: HTMLInputElement): void;
    /**
     * On select one or more files event handler.
     * Writes the value.
     * @param fileList
     */
    onSelectFile(fileList: FileList, button: MatButton): void;
    /**
     * Implementation of ControlValueAccessor.
     * @param fn
     */
    registerOnChange(fn: (files: Array<InputFile>) => void): void;
    /**
     * Implementation of ControlValueAccessor.
     * @param fn
     */
    registerOnTouched(fn: () => void): void;
    /**
     * Implementation of ControlValueAccessor.
     * @param isDisabled
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * Implementation of ControlValueAccessor.
     * @param files
     */
    writeValue(files: Array<InputFile>): void;
    /**
     * Whether the file can be added to the model.
     * @param files
     * @param file,
     * @param bypassLimit
     */
    private fileGuard(files, file, bypassLimit?);
    /**
     * Sets the file preview with FileReader.
     */
    setFilePreview(): void;
}
