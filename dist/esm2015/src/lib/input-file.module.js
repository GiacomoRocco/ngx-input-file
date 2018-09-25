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
export class InputFileModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaW5wdXQtZmlsZS8iLCJzb3VyY2VzIjpbInNyYy9saWIvaW5wdXQtZmlsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXNCOUQsTUFBTTs7Ozs7SUFDSyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXVCO1FBQ3pDLE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQzFDO1NBQ0osQ0FBQzs7OztZQTVCVCxRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLGlCQUFpQjtvQkFDakIsa0JBQWtCO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsYUFBYTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFHO29CQUNOLGtCQUFrQjtpQkFDckI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQLGdCQUFnQjtpQkFDbkI7Z0JBQ0QsZUFBZSxFQUFFLENBQUUsa0JBQWtCLENBQUU7YUFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEcm9wWm9uZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9kcm9wLXpvbmUvZHJvcC16b25lLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJbnB1dEZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXQtZmlsZS9pbnB1dC1maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElucHV0RmlsZUNvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlcy9pbnB1dC1maWxlLWNvbmZpZyc7XHJcbmltcG9ydCB7IElucHV0RmlsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2lucHV0LWZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBEcm9wWm9uZURpcmVjdGl2ZSxcclxuICAgICAgICBJbnB1dEZpbGVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXRJY29uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0cyA6IFtcclxuICAgICAgICBJbnB1dEZpbGVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBJbnB1dEZpbGVTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbIElucHV0RmlsZUNvbXBvbmVudCBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRGaWxlTW9kdWxlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IElucHV0RmlsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5nTW9kdWxlOiBJbnB1dEZpbGVNb2R1bGUsXHJcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgICAgICAgICAgSW5wdXRGaWxlU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogJ2NvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXX0=