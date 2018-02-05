import { Component } from '@angular/core';
import { RedComponentComponent } from "../../shared/cellRenderer/red-component/red-component.component";
import { ObjectRendererComponent } from "../../shared/cellRenderer/object-renderer/object-renderer.component";

import { GridOptions } from "ag-grid/main";

import { nestedObject } from '../../../src/data/nestedObject';
import { nestObjFormat } from '../../shared/valueFormatter/nestObjFormatter';

@Component({
  selector: 'app-nested-obj-val-form',
  templateUrl: './nested-obj-val-form.component.html',
  styleUrls: ['./nested-obj-val-form.component.css']
})
export class NestedObjValFormComponent {

  private gridApi;
  private gridColumnApi;

  gridOptions: GridOptions;
  private columnDefs: any[];
  private rowData: any[];

  constructor() {
    this.gridOptions = <GridOptions>{
      rowHeight: 80,
    };

    this.columnDefs = [
      { headerName: 'Name', field: 'name', width: 80 },
      { headerName: 'Age', field: 'age', width: 50, cellRendererFramework: RedComponentComponent },
      { headerName: 'Address', valueGetter: 'data.address.street + data.address.add1 + data.address.add2 + data.address.city + data.address.province + data.address.postal + data.address.country', width: 250, valueFormatter: nestObjFormat },
      { headerName: 'Game', valueGetter: 'data.Game.name + data.Game.year + data.Game.hours', width: 200, cellRendererFramework: ObjectRendererComponent }
    ];

    this.rowData = nestedObject;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

}
