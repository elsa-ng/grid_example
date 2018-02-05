import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-ministry-renderer',
  templateUrl: './ministry-renderer.component.html',
  styleUrls: ['./ministry-renderer.component.css']
})
export class MinistryRendererComponent implements ICellRendererAngularComp {
  private params: any;
  private results = [];

  agInit(params: any): void {
    this.params = params;

        if (this.params !== null) {
            for (let i = 0; i < this.params.data.leadSupportingDepartments.length; i++) {
              this.results.push(this.params.data.leadSupportingDepartments[i].departmentId + ' (' + this.params.data.leadSupportingDepartments[i].role + ')');
            }
        }
  }

  refresh(): boolean {
    return false;
  }

}
