import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-array-renderer',
  templateUrl: './array-renderer.component.html',
  styleUrls: ['./array-renderer.component.css']
})
export class ArrayRendererComponent implements ICellRendererAngularComp {
  private params: any;
  private results = [];

  agInit(params: any): void {
    this.params = params;
    if (this.params.value.length > 0) {
      for (let i = 0; i < this.params.value.length; i++) {
        this.results.push(i);
      }
    }
  }

  refresh(): boolean {
    return false;
  }

}
