/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, EventEmitter, HostListener, Input, Output, } from '@angular/core';
var DropZoneDirective = /** @class */ (function () {
    function DropZoneDirective() {
        this.disabled = false;
        this.itemDragOver = new EventEmitter();
        this.itemDragLeave = new EventEmitter();
        this.itemDrop = new EventEmitter();
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
            catch (/** @type {?} */ e) {
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
            for (var _a = tslib_1.__values(this.whiteListClasses), _b = _a.next(); !_b.done; _b = _a.next()) {
                var c = _b.value;
                if (event.fromElement != null && event.fromElement.className.indexOf(c) >= 0) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return true;
        var e_1, _c;
    };
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
    return DropZoneDirective;
}());
export { DropZoneDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC16b25lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pbnB1dC1maWxlLyIsInNvdXJjZXMiOlsic3JjL2xpYi9kaXJlY3RpdmVzL2Ryb3Atem9uZS9kcm9wLXpvbmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNILFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ0wsTUFBTSxlQUFlLENBQUM7Ozt3QkFNSSxLQUFLOzRCQUNBLElBQUksWUFBWSxFQUFPOzZCQUN0QixJQUFJLFlBQVksRUFBTzt3QkFDNUIsSUFBSSxZQUFZLEVBQU87Z0NBSXhCLENBQUMsYUFBYSxFQUFFLG9CQUFvQixFQUFFLFlBQVksQ0FBQzs7SUFFOUU7OztPQUdHOzs7Ozs7SUFFSSxzQ0FBVTs7Ozs7SUFEakIsVUFDa0IsS0FBZ0I7UUFDOUIsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDNUI7S0FDSjtJQUVEOzs7T0FHRzs7Ozs7O0lBRUksdUNBQVc7Ozs7O0lBRGxCLFVBQ21CLEtBQWdCO1FBQy9CLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdCO0tBQ0o7SUFFRDs7O09BR0c7Ozs7OztJQUVJLGtDQUFNOzs7OztJQURiLFVBQ2MsS0FBVTtRQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQztnQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hEO1lBQUMsS0FBSyxDQUFDLENBQUMsaUJBQUEsQ0FBQyxFQUFFLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtTQUNKO0tBQ0o7Ozs7OztJQU1PLDBEQUE4Qjs7Ozs7Y0FBQyxLQUFZO1FBQy9DLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Ozs7Ozs7SUFPcEIsdUNBQVc7Ozs7O2NBQUMsS0FBZ0I7O1lBQ2hDLEdBQUcsQ0FBQyxDQUFZLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUEsZ0JBQUE7Z0JBQWhDLElBQU0sQ0FBQyxXQUFBO2dCQUNSLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRSxNQUFNLENBQUMsS0FBSyxDQUFDO2lCQUNoQjthQUNKOzs7Ozs7Ozs7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7O2dCQTNFbkIsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2xDOzs7MkJBRUksS0FBSzsrQkFDTCxNQUFNO2dDQUNOLE1BQU07MkJBQ04sTUFBTTs2QkFVTixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQWFuQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQWFwQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDOzs0QkFuRHBDOztTQVdhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2lucHV0RmlsZURyb3Bab25lXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3Bab25lRGlyZWN0aXZlIHtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBpdGVtRHJhZ092ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgaXRlbURyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBpdGVtRHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIHByaXZhdGUgaXNPdmVyOiBib29sZWFuO1xyXG4gICAgLy8gUHJldmVudCBkcmFnbGVhdmUgb24gY2hpbGRyZW4sIGNvdWxkIGJlIGJldHRlciBidXQgaXQncyBjaGVhcCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXHJcbiAgICBwcml2YXRlIHdoaXRlTGlzdENsYXNzZXMgPSBbJ2ZpbGUtYnV0dG9uJywgJ21hdC1idXR0b24td3JhcHBlcicsICdpbnB1dC1pY29uJ107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmFnIE92ZXIgZXZlbnQgaGFuZGxlci5cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICovXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXHJcbiAgICBwdWJsaWMgb25EcmFnT3ZlcihldmVudDogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcEV2ZW50UHJvcGFnYXRpb24oZXZlbnQpO1xyXG4gICAgICAgIGlmICghdGhpcy5pc092ZXIgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc092ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1EcmFnT3Zlci5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhZyBMZWF2ZSBldmVudCBoYW5kbGVyLlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXHJcbiAgICBwdWJsaWMgb25EcmFnTGVhdmUoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJldmVudEFuZFN0b3BFdmVudFByb3BhZ2F0aW9uKGV2ZW50KTtcclxuICAgICAgICBpZiAodGhpcy5pc092ZXIgJiYgdGhpcy5pc1RydWVMZWF2ZShldmVudCkgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtRHJhZ0xlYXZlLmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcm9wIGV2ZW50IGhhbmRsZXIuXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXHJcbiAgICBwdWJsaWMgb25Ecm9wKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgZXZlbnQgaW5zdGFuY2VvZiBEcmFnRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2ZW50QW5kU3RvcEV2ZW50UHJvcGFnYXRpb24oZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtRHJvcC5lbWl0KGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcmV2ZW50cyBhbmQgc3RvcHMgZXZlbnQgcHJvcGFncmF0aW9uLlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcHJldmVudEFuZFN0b3BFdmVudFByb3BhZ2F0aW9uKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhlIGxlYXZlIGlzIG5vdCB0cmlnZ2VyIGJ5IGEgY2hpbGRyZW4uXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc1RydWVMZWF2ZShldmVudDogRHJhZ0V2ZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIHRoaXMud2hpdGVMaXN0Q2xhc3Nlcykge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZnJvbUVsZW1lbnQgIT0gbnVsbCAmJiBldmVudC5mcm9tRWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZihjKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIl19