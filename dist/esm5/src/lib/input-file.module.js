/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { DropZoneDirective } from './directives/drop-zone/drop-zone.directive';
import { FormsModule } from '@angular/forms';
import { InputFileComponent } from './components/input-file/input-file.component';
import { InputFileService } from './services/input-file.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
var InputFileModule = /** @class */ (function () {
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
    return InputFileModule;
}());
export { InputFileModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaW5wdXQtZmlsZS8iLCJzb3VyY2VzIjpbInNyYy9saWIvaW5wdXQtZmlsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUF1QjVDLHVCQUFPOzs7O2NBQUMsTUFBdUI7UUFDekMsTUFBTSxDQUFDO1lBQ0gsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNQLGdCQUFnQjtnQkFDaEIsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDMUM7U0FDSixDQUFDOzs7Z0JBNUJULFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUU7d0JBQ1YsaUJBQWlCO3dCQUNqQixrQkFBa0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixhQUFhO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUc7d0JBQ04sa0JBQWtCO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1AsZ0JBQWdCO3FCQUNuQjtvQkFDRCxlQUFlLEVBQUUsQ0FBRSxrQkFBa0IsQ0FBRTtpQkFDMUM7OzBCQTVCRDs7U0E4QmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERyb3Bab25lRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Ryb3Atem9uZS9kcm9wLXpvbmUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0RmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbnB1dC1maWxlL2lucHV0LWZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW5wdXRGaWxlQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2lucHV0LWZpbGUtY29uZmlnJztcclxuaW1wb3J0IHsgSW5wdXRGaWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaW5wdXQtZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIERyb3Bab25lRGlyZWN0aXZlLFxyXG4gICAgICAgIElucHV0RmlsZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzIDogW1xyXG4gICAgICAgIElucHV0RmlsZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIElucHV0RmlsZVNlcnZpY2VcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFsgSW5wdXRGaWxlQ29tcG9uZW50IF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEZpbGVNb2R1bGUge1xyXG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSW5wdXRGaWxlQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmdNb2R1bGU6IElucHV0RmlsZU1vZHVsZSxcclxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICAgICAgICBJbnB1dEZpbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiAnY29uZmlnJywgdXNlVmFsdWU6IGNvbmZpZyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==