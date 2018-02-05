import { Component } from '@angular/core';
import { RedComponentComponent } from '../../shared/cellRenderer/red-component/red-component.component';
import { MinistryRendererComponent } from '../../shared/cellRenderer/ministry-renderer/ministry-renderer.component';

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
            rowHeight: 100,
        };

        this.columnDefs = [
            {headerName: 'Key Activities', valueGetter: 'data.code + \' \' + data.name', width: 150},
            {headerName: 'Tags', valueGetter: this.getTag, valueFormatter: this.formatTag, width: 75},
            {headerName: 'Ministry', valueGetter: this.getMinistry, cellRendererFramework: MinistryRendererComponent},
            {headerName: 'Last Update', valueGetter: 'data.lastUpdated + \' by \' + data.lastUpdatedUser', width: 100}
        ];

        this.rowData = arrayNestedObject;
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
    }

    getArrayVal(params) {
        const arr = params.data.tags as Array<string>;
        return arr.join(', ');
    }

    getTag(params) {
        let results = [];
        if (params.data.tags !== null) {
            for (let i = 0; i < params.data.tags.length; i++) {
                results.push(params.data.tags[i].tag);
            }
        }
        return results;
    }

    getMinistry(params) {
        let results = [];
        if (params.data.leadSupportingDepartments !== null) {
            for (let i = 0; i < params.data.leadSupportingDepartments.length; i++) {
                results.push(params.data.leadSupportingDepartments[i].departmentId);
                results.push(params.data.leadSupportingDepartments[i].role);
            }
        }
        return results;
    }

    formatTag(params) {
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

