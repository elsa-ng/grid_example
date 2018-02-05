import { Component } from '@angular/core';
import { RedComponentComponent } from '../../shared/cellRenderer/red-component/red-component.component';
import { ObjectRendererComponent } from '../../shared/cellRenderer/object-renderer/object-renderer.component';

import { GridOptions } from 'ag-grid/main';

import { arrayNestedObject } from '../../../src/data/arrayNestedObject';

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    private gridApi;
    private gridColumnApi;
    private getRowHeight;

    gridOptions: GridOptions;
    private columnDefs: any[];
    private rowData: any[];
    
    constructor() {
        this.gridOptions = <GridOptions>{
            rowHeight: 50,
        };

        this.columnDefs = [
            {headerName: 'Key Activities', valueGetter: 'data.code + \' \' + data.name', width: 200},
            {headerName: 'Tags', valueGetter: this.getterFunction, valueFormatter: this.testing},
            {headerName: 'Ministry', valueGetter: 'data.leadSupportingMinistries', /*cellRendererFramework: ObjectRendererComponent*/},
            {headerName: 'Last Update', valueGetter: 'data.lastUpdated + \' by \' + data.lastUpdatedUser', width: 150}
        ];  

        this.rowData = arrayNestedObject;
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    }

    getArrayVal(params){
        const arr = params.data.tags as Array<string>;
        return arr.join(', ');
    }

    getterFunction(params) {
        let results = [];
        if (params.data.tags !== null) {
            for (let i = 0; i < params.data.tags.length; i++) {
                results.push(params.data.tags[i].tag);
            }
        }
        return results;
    }

    testing(params) {
        let results = '';
        if (params.data.tags !== null) {
            for (let i = 0; i < params.data.tags.length; i++) {
                if (i !== 0 && i < params.data.tags.length) {
                    results += ', ';
                }
                results += params.data.tags[i].tag;
            }
        }
        return results;
    }
}

