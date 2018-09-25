/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class InputFileService {
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
/** @nocollapse */ InputFileService.ngInjectableDef = i0.defineInjectable({ factory: function InputFileService_Factory() { return new InputFileService(i0.inject("config")); }, token: InputFileService, providedIn: "root" });
function InputFileService_tsickle_Closure_declarations() {
    /** @type {?} */
    InputFileService.prototype._config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWlucHV0LWZpbGUvIiwic291cmNlcyI6WyJzcmMvbGliL3NlcnZpY2VzL2lucHV0LWZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT25ELE1BQU07Ozs7SUFFRixZQUM4QixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtLQUNqRDs7OztJQUVMLElBQUksTUFBTTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3ZCOzs7Ozs7O0lBTU0sVUFBVSxDQUFDLEtBQXVCLEVBQUUsU0FBUztRQUNoRCxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7Ozs7Ozs7O0lBUTdCLFNBQVMsQ0FBQyxJQUFVLEVBQUUsU0FBaUI7UUFDMUMsTUFBTSxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7Ozs7Ozs7O0lBUXRELFNBQVMsQ0FBQyxJQUFVLEVBQUUsVUFBa0I7UUFDM0MscUJBQUksT0FBTyxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUM7UUFDakMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNiLHVCQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzQyx1QkFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxHQUFHLENBQUMsQ0FBQyx1QkFBTSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUcsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixLQUFLLENBQUM7aUJBQ1Q7YUFDSjtTQUNKO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7OztZQWhEdEIsVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCOzs7OzRDQUlRLE1BQU0sU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0RmlsZSB9IGZyb20gJy4uL2R0by9pbnB1dC1maWxlJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnB1dC1maWxlLWNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0RmlsZVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgX2NvbmZpZzogSW5wdXRGaWxlQ29uZmlnXHJcbiAgICApIHsgfVxyXG5cclxuICAgIGdldCBjb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIGxpbWl0IGlzIG5vdCByZWFjaGVkLlxyXG4gICAgICogQHBhcmFtIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaW1pdEd1YXJkKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+LCBmaWxlTGltaXQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmlsZXMubGVuZ3RoIDwgZmlsZUxpbWl0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgZmlsZSBzaXplIGlzIG5vdCBiaWdnZXIgdGhhbiB0aGUgbGltaXQuXHJcbiAgICAgKiBAcGFyYW0gZmlsZVxyXG4gICAgICogQHBhcmFtIHNpemVMaW1pdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2l6ZUd1YXJkKGZpbGU6IEZpbGUsIHNpemVMaW1pdDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICFzaXplTGltaXQgfHwgZmlsZS5zaXplIDwgc2l6ZUxpbWl0ICogMTAyNCAqIDEwMjQ7IC8vIFRPRE8gOiBpbXByb3ZlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSB0eXBlIG9mIHRoZSBmaWxlIGlzIGVuYWJsZWQuXHJcbiAgICAgKiBAcGFyYW0gZmlsZVxyXG4gICAgICogQHBhcmFtIGZpbGVBY2NlcHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHR5cGVHdWFyZChmaWxlOiBGaWxlLCBmaWxlQWNjZXB0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgZW5hYmxlZCA9IGZpbGVBY2NlcHQgPT0gbnVsbDtcclxuICAgICAgICBpZiAoZmlsZUFjY2VwdCkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NlcHQgPSBmaWxlQWNjZXB0LnJlcGxhY2UoJyonLCAnJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGVzID0gYWNjZXB0LnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiB0eXBlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUudHlwZS5zdGFydHNXaXRoKHR5cGUpIHx8ICh0eXBlLmNoYXJBdCgwKSA9PT0gJy4nICYmIGZpbGUubmFtZSAhPSBudWxsICYmIGZpbGUubmFtZS5lbmRzV2l0aCh0eXBlKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVuYWJsZWQ7XHJcbiAgICB9XHJcbn1cclxuIl19