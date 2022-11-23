import { Component, Input, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableHeader } from '../../models/table-header.model';

export class Secrets {
  public type: any;
  public value: any; 
  public expiration: any;
  public description: any;
}

@Component({
  selector: 'rds-comp-secrets',
  templateUrl: './rds-comp-secrets.component.html',
  styleUrls: ['./rds-comp-secrets.component.scss']
})
export class RdsCompSecretsComponent implements OnInit {
  rdsApiSecretsTableMfeConfig: ComponentLoaderOptions;

  constructor() {}

  @Input() secretList:any=[];

  @Input() apiSecretTableHeader: TableHeader[] = [
    {
      displayName: 'Type',
      key: 'type',
      dataType: 'text',
      dataLength: 30,
      sortable: true,
      required: true,
    },
    {
      displayName: 'Value',
      key: 'value',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Expiration',
      key: 'expiration',
      dataType: 'date',
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Description',
      key: 'description',
      dataType: 'text',
      dataLength: 30,
      required: true,
      sortable: true,
    },
  ];

  @Input() apiSecretsTableData: any = ([] = [
    { type: 'SharedSecrets', value: '1121', expiration:'22/04/2022', description: 'Shared Secret Value' },
    {
      type: 'SharedSecrets',
      value: '1121',
      expiration:'22/04/2022',
      description: 'Shared Secret Value',
    },    {
      type: 'SharedSecrets',
      value: '1121',
      expiration:'22/04/2022',
      description: 'Shared Secret Value',
    },
  ]);

  ngOnInit(): void {
    this.rdsApiSecretsTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.apiSecretTableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.secretList,
        recordsPerPage: 10,
        pagination: false,
        isInlineEdit: false,
        actions: [{ id: 'delete', displayName: 'Delete' }],
        noDataTitle:'Currently you do not have secrets'
      },
      output: {
        onActionSelection:(event:any)=>{
          if(event.actionId==='delete'){
            const index = this.apiSecretsTableData.findIndex(
              (x: any) => x.userId === event.selectedData.userId
            );
            if (index !== -1) {
              this.apiSecretsTableData.splice(index, 1);
              const mfeConfig = this.rdsApiSecretsTableMfeConfig;
              mfeConfig.input.tableData = [...this.apiSecretsTableData];
              this.rdsApiSecretsTableMfeConfig = mfeConfig;
            }
          }

        }
      },
    };
  }

  addSecrets(){
    this.secretList.push(this.apiSecretsTableData)
    this.apiSecretsTableData = {
      type: '',
      value: '',
      expiration: '',
      description: ''
    }
  }
}