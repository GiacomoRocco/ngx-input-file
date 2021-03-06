import { EventEmitter } from '@angular/core';
export declare class DropZoneDirective {
    disabled: boolean;
    itemDragOver: EventEmitter<any>;
    itemDragLeave: EventEmitter<any>;
    itemDrop: EventEmitter<any>;
    private isOver;
    private whiteListClasses;
    /**
     * Drag Over event handler.
     * @param event
     */
    onDragOver(event: DragEvent): void;
    /**
     * Drag Leave event handler.
     * @param event
     */
    onDragLeave(event: DragEvent): void;
    /**
     * Drop event handler.
     * @param event
     */
    onDrop(event: any): void;
    /**
     * Prevents and stops event propagration.
     * @param event
     */
    private preventAndStopEventPropagation(event);
    /**
     * Checks if the leave is not trigger by a children.
     * @param event
     */
    private isTrueLeave(event);
}
