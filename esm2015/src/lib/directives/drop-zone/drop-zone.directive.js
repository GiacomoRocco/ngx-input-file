/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Input, Output, } from '@angular/core';
export class DropZoneDirective {
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
function DropZoneDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DropZoneDirective.prototype.disabled;
    /** @type {?} */
    DropZoneDirective.prototype.itemDragOver;
    /** @type {?} */
    DropZoneDirective.prototype.itemDragLeave;
    /** @type {?} */
    DropZoneDirective.prototype.itemDrop;
    /** @type {?} */
    DropZoneDirective.prototype.isOver;
    /** @type {?} */
    DropZoneDirective.prototype.whiteListClasses;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC16b25lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pbnB1dC1maWxlLyIsInNvdXJjZXMiOlsic3JjL2xpYi9kaXJlY3RpdmVzL2Ryb3Atem9uZS9kcm9wLXpvbmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDTCxNQUFNLGVBQWUsQ0FBQztBQUszQixNQUFNOzt3QkFDeUIsS0FBSzs0QkFDQSxJQUFJLFlBQVksRUFBTzs2QkFDdEIsSUFBSSxZQUFZLEVBQU87d0JBQzVCLElBQUksWUFBWSxFQUFPO2dDQUl4QixDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLENBQUM7Ozs7Ozs7SUFPdkUsVUFBVSxDQUFDLEtBQWdCO1FBQzlCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzVCO0tBQ0o7Ozs7OztJQU9NLFdBQVcsQ0FBQyxLQUFnQjtRQUMvQixJQUFJLENBQUMsOEJBQThCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUM3QjtLQUNKOzs7Ozs7SUFPTSxNQUFNLENBQUMsS0FBVTtRQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQztnQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hEO1lBQUMsS0FBSyxDQUFDLENBQUMsaUJBQUEsQ0FBQyxFQUFFLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtTQUNKO0tBQ0o7Ozs7OztJQU1PLDhCQUE4QixDQUFDLEtBQVk7UUFDL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7Ozs7OztJQU9wQixXQUFXLENBQUMsS0FBZ0I7UUFDaEMsR0FBRyxDQUFDLENBQUMsdUJBQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDcEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7Ozs7WUEzRW5CLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2FBQ2xDOzs7dUJBRUksS0FBSzsyQkFDTCxNQUFNOzRCQUNOLE1BQU07dUJBQ04sTUFBTTt5QkFVTixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQWFuQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3FCQWFwQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbaW5wdXRGaWxlRHJvcFpvbmVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJvcFpvbmVEaXJlY3RpdmUge1xyXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGl0ZW1EcmFnT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBpdGVtRHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIGl0ZW1Ecm9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBpc092ZXI6IGJvb2xlYW47XHJcbiAgICAvLyBQcmV2ZW50IGRyYWdsZWF2ZSBvbiBjaGlsZHJlbiwgY291bGQgYmUgYmV0dGVyIGJ1dCBpdCdzIGNoZWFwIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcclxuICAgIHByaXZhdGUgd2hpdGVMaXN0Q2xhc3NlcyA9IFsnZmlsZS1idXR0b24nLCAnbWF0LWJ1dHRvbi13cmFwcGVyJywgJ2lucHV0LWljb24nXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYWcgT3ZlciBldmVudCBoYW5kbGVyLlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcclxuICAgIHB1YmxpYyBvbkRyYWdPdmVyKGV2ZW50OiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByZXZlbnRBbmRTdG9wRXZlbnRQcm9wYWdhdGlvbihldmVudCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzT3ZlciAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbURyYWdPdmVyLmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIExlYXZlIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcclxuICAgIHB1YmxpYyBvbkRyYWdMZWF2ZShldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcEV2ZW50UHJvcGFnYXRpb24oZXZlbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzT3ZlciAmJiB0aGlzLmlzVHJ1ZUxlYXZlKGV2ZW50KSAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1EcmFnTGVhdmUuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyb3AgZXZlbnQgaGFuZGxlci5cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcclxuICAgIHB1YmxpYyBvbkRyb3AoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBldmVudCBpbnN0YW5jZW9mIERyYWdFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZlbnRBbmRTdG9wRXZlbnRQcm9wYWdhdGlvbihldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1Ecm9wLmVtaXQoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByZXZlbnRzIGFuZCBzdG9wcyBldmVudCBwcm9wYWdyYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwcmV2ZW50QW5kU3RvcEV2ZW50UHJvcGFnYXRpb24oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyBpZiB0aGUgbGVhdmUgaXMgbm90IHRyaWdnZXIgYnkgYSBjaGlsZHJlbi5cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzVHJ1ZUxlYXZlKGV2ZW50OiBEcmFnRXZlbnQpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgdGhpcy53aGl0ZUxpc3RDbGFzc2VzKSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5mcm9tRWxlbWVudCAhPSBudWxsICYmIGV2ZW50LmZyb21FbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKGMpID49IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iXX0=