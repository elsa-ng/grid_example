import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { NestedObjectGridComponent } from './nested-object-grid/nested-object-grid.component';
import { NestedObjValFormComponent } from './nested-obj-val-form/nested-obj-val-form.component';

import { RedComponentComponent } from '../shared/cellRenderer/red-component/red-component.component';
import { ObjectRendererComponent } from '../shared/cellRenderer/object-renderer/object-renderer.component';
import { ArrayRendererComponent } from '../shared/cellRenderer/array-renderer/array-renderer.component';
import { MinistryRendererComponent } from '../shared/cellRenderer/ministry-renderer/ministry-renderer.component';

@NgModule({
    declarations: [
        AppComponent,
        MyGridApplicationComponent,
        RedComponentComponent,
        ObjectRendererComponent,
        NestedObjectGridComponent,
        NestedObjValFormComponent,
        ArrayRendererComponent,
        MinistryRendererComponent
    ],
    imports: [
        BrowserModule,
        AgGridModule.withComponents([
            RedComponentComponent,
            ObjectRendererComponent,
            ArrayRendererComponent,
            MinistryRendererComponent
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
