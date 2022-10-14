import { Component, Input, SimpleChanges } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rdsclaimtypeTableMfeConfig: ComponentLoaderOptions;
  constructor() { }
  ClaimtypeTableHeader: TableHeader[] = [
    { displayName: 'Name', key: 'Name', dataType: 'text', dataLength: 30, sortable: true, required: true },
    { displayName: 'Value Type', key: 'ValueType', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Description', key: 'Description', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Regex', key: 'Regex', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Required', key: 'Required', dataType: 'text', dataLength: 30, required: true, sortable: true }

  ]
  ClaimtypeTableData: any = [] = [
  ]
  ngOnInit(): void {
    this.rdsclaimtypeTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.ClaimtypeTableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.ClaimtypeTableData,
        recordsPerPage: 10,
        pagination: true,
        actions: [{ id: 'delete', displayName: 'Delete' }],
        noDataTitle: 'Currently you do not have claim type'
      },
      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'delete') {
            const index = this.ClaimtypeTableData.findIndex((x: any) => x.userId === event.selectedData.userId);
            if (index !== -1) {
              this.ClaimtypeTableData.splice(index, 1);
              const mfeConfig = this.rdsclaimtypeTableMfeConfig
              mfeConfig.input.tableData = [... this.ClaimtypeTableData];
              this.rdsclaimtypeTableMfeConfig = mfeConfig;
            }
          }
        }
      }
    };
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.rdsclaimtypeTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.ClaimtypeTableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.ClaimtypeTableData,
        recordsPerPage: 10,
        pagination: true,
        actions: [{ id: 'delete', displayName: 'Delete' }],
      },
      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'delete') {
            const index = this.ClaimtypeTableData.findIndex((x: any) => x.userId === event.selectedData.userId);
            if (index !== -1) {
              this.ClaimtypeTableData.splice(index, 1);
              const mfeConfig = this.rdsclaimtypeTableMfeConfig
              mfeConfig.input.tableData = [... this.ClaimtypeTableData];
              this.rdsclaimtypeTableMfeConfig = mfeConfig;
            }
          }
        }
      }
    };

  }
  AddClaimType(claimType: any) {
    this.ClaimtypeTableData.push(claimType.ClaimTypeData.ClaimTypeData)
  }

}
