import { Component } from '@angular/core';
import { RedComponentComponent } from "../../shared/cellRenderer/red-component/red-component.component";
import { ArrayRendererComponent } from "../../shared/cellRenderer/array-renderer/array-renderer.component";

import { GridOptions } from "ag-grid/main";

import { arrayObj } from '../../data/array';
import { nestObjFormat } from '../../shared/valueFormatter/nestObjFormatter';

@Component({
  selector: 'app-nested-object-grid',
  templateUrl: './nested-object-grid.component.html',
  styleUrls: ['./nested-object-grid.component.css']
})
export class NestedObjectGridComponent {
  private gridApi;
  private gridColumnApi;

  gridOptions: GridOptions;
  private columnDefs: any[];
  private rowData: any[];

  constructor() {
    this.gridOptions = <GridOptions>{
      rowHeight: 150,
    };

    this.columnDefs = [
      { headerName: 'Name', field: 'name', width: 80 },
      { headerName: 'Age', field: 'age', width: 50, cellRendererFramework: RedComponentComponent },
      { headerName: 'Address', valueGetter: 'data.address.street + data.address.add1 + data.address.add2 + data.address.city + data.address.province + data.address.postal + data.address.country', width: 250, valueFormatter: nestObjFormat },
      { headerName: 'Games', field: 'games', width: 200, cellRendererFramework: ArrayRendererComponent }
    ];

    this.rowData = arrayObj;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

}
