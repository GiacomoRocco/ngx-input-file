/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var InputFileService = /** @class */ (function () {
    function InputFileService(_config) {
        this._config = _config;
    }
    Object.defineProperty(InputFileService.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
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
                for (var types_1 = tslib_1.__values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
                    var type = types_1_1.value;
                    if (file.type.startsWith(type) || (type.charAt(0) === '.' && file.name != null && file.name.endsWith(type))) {
                        enabled = true;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (types_1_1 && !types_1_1.done && (_a = types_1.return)) _a.call(types_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return enabled;
        var e_1, _a;
    };
    InputFileService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    InputFileService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] }
    ]; };
    /** @nocollapse */ InputFileService.ngInjectableDef = i0.defineInjectable({ factory: function InputFileService_Factory() { return new InputFileService(i0.inject("config")); }, token: InputFileService, providedIn: "root" });
    return InputFileService;
}());
export { InputFileService };
function InputFileService_tsickle_Closure_declarations() {
    /** @type {?} */
    InputFileService.prototype._config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWlucHV0LWZpbGUvIiwic291cmNlcyI6WyJzcmMvbGliL3NlcnZpY2VzL2lucHV0LWZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFTL0MsMEJBQzhCLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO0tBQ2pEO0lBRUwsc0JBQUksb0NBQU07Ozs7UUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCOzs7T0FBQTs7Ozs7OztJQU1NLHFDQUFVOzs7Ozs7Y0FBQyxLQUF1QixFQUFFLFNBQVM7UUFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDOzs7Ozs7OztJQVE3QixvQ0FBUzs7Ozs7O2NBQUMsSUFBVSxFQUFFLFNBQWlCO1FBQzFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDOzs7Ozs7OztJQVF0RCxvQ0FBUzs7Ozs7O2NBQUMsSUFBVSxFQUFFLFVBQWtCO1FBQzNDLHFCQUFJLE9BQU8sR0FBRyxVQUFVLElBQUksSUFBSSxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDYixxQkFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0MscUJBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O2dCQUNoQyxHQUFHLENBQUMsQ0FBZSxJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBO29CQUFuQixJQUFNLElBQUksa0JBQUE7b0JBQ1gsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDMUcsT0FBTyxHQUFHLElBQUksQ0FBQzt3QkFDZixLQUFLLENBQUM7cUJBQ1Q7aUJBQ0o7Ozs7Ozs7OztTQUNKO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7OztnQkFoRHRCLFVBQVUsU0FBQztvQkFDUixVQUFVLEVBQUUsTUFBTTtpQkFDckI7Ozs7Z0RBSVEsTUFBTSxTQUFDLFFBQVE7OzsyQkFWeEI7O1NBT2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0RmlsZSB9IGZyb20gJy4uL2R0by9pbnB1dC1maWxlJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnB1dC1maWxlLWNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0RmlsZVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgX2NvbmZpZzogSW5wdXRGaWxlQ29uZmlnXHJcbiAgICApIHsgfVxyXG5cclxuICAgIGdldCBjb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhlIGxpbWl0IGlzIG5vdCByZWFjaGVkLlxyXG4gICAgICogQHBhcmFtIGZpbGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaW1pdEd1YXJkKGZpbGVzOiBBcnJheTxJbnB1dEZpbGU+LCBmaWxlTGltaXQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmlsZXMubGVuZ3RoIDwgZmlsZUxpbWl0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGUgZmlsZSBzaXplIGlzIG5vdCBiaWdnZXIgdGhhbiB0aGUgbGltaXQuXHJcbiAgICAgKiBAcGFyYW0gZmlsZVxyXG4gICAgICogQHBhcmFtIHNpemVMaW1pdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2l6ZUd1YXJkKGZpbGU6IEZpbGUsIHNpemVMaW1pdDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICFzaXplTGltaXQgfHwgZmlsZS5zaXplIDwgc2l6ZUxpbWl0ICogMTAyNCAqIDEwMjQ7IC8vIFRPRE8gOiBpbXByb3ZlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoZSB0eXBlIG9mIHRoZSBmaWxlIGlzIGVuYWJsZWQuXHJcbiAgICAgKiBAcGFyYW0gZmlsZVxyXG4gICAgICogQHBhcmFtIGZpbGVBY2NlcHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHR5cGVHdWFyZChmaWxlOiBGaWxlLCBmaWxlQWNjZXB0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgZW5hYmxlZCA9IGZpbGVBY2NlcHQgPT0gbnVsbDtcclxuICAgICAgICBpZiAoZmlsZUFjY2VwdCkge1xyXG4gICAgICAgICAgICBjb25zdCBhY2NlcHQgPSBmaWxlQWNjZXB0LnJlcGxhY2UoJyonLCAnJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGVzID0gYWNjZXB0LnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiB0eXBlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUudHlwZS5zdGFydHNXaXRoKHR5cGUpIHx8ICh0eXBlLmNoYXJBdCgwKSA9PT0gJy4nICYmIGZpbGUubmFtZSAhPSBudWxsICYmIGZpbGUubmFtZS5lbmRzV2l0aCh0eXBlKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVuYWJsZWQ7XHJcbiAgICB9XHJcbn1cclxuIl19