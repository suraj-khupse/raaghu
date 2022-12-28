import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'rds-comp-secrets',
  templateUrl: './rds-comp-secrets.component.html',
  styleUrls: ['./rds-comp-secrets.component.scss']
})
export class RdsCompSecretsComponent implements OnInit, OnChanges {

  // Input Decorators
  @Input() apiSecretTableHeader: TableHeader[] = [
    { displayName: 'Type', key: 'type', dataType: 'text', dataLength: 30, sortable: true, required: true, },
    { displayName: 'Value', key: 'value', dataType: 'text', dataLength: 30, required: true, sortable: true, },
    { displayName: 'Expiration', key: 'expiration', dataType: 'date', dataLength: 30, required: true, sortable: true, },
    { displayName: 'Description', key: 'description', dataType: 'text', dataLength: 30, required: true, sortable: true, },
  ];
  @Input() apiSecretsTableData: any[] = [];
  @Input() showSecretForm = false;

  // Output Decorators
  @Output() secretDataInfo = new EventEmitter();

  // Properties
  secretList: any[] = [];
  secretListShow: any[] = [];
  secretData: any = {
    type: '',
    value: '',
    expiration: new Date(),
    description: ''
  };
  selectedEndDate: any;
  selectedEndDateEmit: any;
  typeData: any[] = [
    { id: 1, value: 'Shared Secret', some: 'Shared Secret' },
    { id: 2, value: 'X509 Thumbprint', some: 'X509 Thumbprint' }
  ];
  secretTableActions: TableAction[] = [{ id: 'delete', displayName: 'Delete' }];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.apiSecretsTableData != undefined) this.secretList = this.apiSecretsTableData;
    this.secretDataInfo.next(this.secretList);
  }

  ngOnInit(): void { }

  tableActionSelection(event: any) {
    if (event.actionId == 'delete') {
      const index = this.secretList.findIndex(x => x.value == event.selectedData.value);
      if (index != -1) {
        this.secretList.splice(index, 1);
        this.secretDataInfo.next(this.secretList);
      }
    }
  }

  selectEndDate(event: Date) {
    this.selectedEndDate = '';
    this.secretData.expiration = event;
    this.selectedEndDate = event.getDate() + '/' + event.getMonth() + '/' + event.getFullYear();
  }

  selectedOption(event: any) {
    this.secretData.type = event.item.value;
  }

  addSecrets(secretForm: NgForm) {
    if (secretForm.valid) {
      const item: any = {
        type: this.secretData.type,
        value: this.secretData.value,
        expiration: this.secretData.expiration,
        description: this.secretData.description
      };
      this.secretList.push(item);
      this.secretDataInfo.next(this.secretList);
      // secretForm.form.value.expiration = this.selectedEndDate;
      secretForm.reset();
      // this.selectedEndDate = '';
      this.secretData.expiration = null;
      this.secretData.expiration = new Date();
      this.showSecretForm = false;
    }
  }

}