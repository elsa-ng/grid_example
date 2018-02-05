import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-object-renderer',
  templateUrl: './object-renderer.component.html',
  styleUrls: ['./object-renderer.component.css']
})
export class ObjectRendererComponent implements ICellRendererAngularComp {
  private params: any;
  private results = [];
  // results = '';

  agInit(params: any): void {
    this.params = params;
    if (this.params.data.Game) {
      (Object.keys(this.params.data.Game)).forEach(element => {
        this.results.push(element);
      });
    }
  }

  refresh(): boolean {
    return false;
  }
}
