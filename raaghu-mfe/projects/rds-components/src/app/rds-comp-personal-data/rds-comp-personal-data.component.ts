import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TableHeader } from '../../models/table-header.model';

@Component({
  selector: 'rds-comp-personal-data',
  templateUrl: './rds-comp-personal-data.component.html',
  styleUrls: ['./rds-comp-personal-data.component.scss']
})
export class RdsCompPersonalDataComponent {
  @Input() personalData: any[] = [];
  @Output() onDownloadData = new EventEmitter();
  @Output() onRequestData = new EventEmitter();
  @Output() onDeleteData = new EventEmitter();

  personalDataHeaders: TableHeader[] = [
    { key: 'creationTime', displayName: 'Creation Time', dataType: 'date', sortable: true, filterable: true },
    { key: 'readyTime', displayName: 'Ready Time', dataType: 'date', sortable: true, filterable: true },
  ];
  personalDataActions: any = [{ id: 'download', displayName: 'Download' }];

  constructor(public translate: TranslateService) {}

  onDownload(event: any) {
    this.onDownloadData.next(event);
  }

  requestData() {
    this.onRequestData.emit();
  }

  deleteData() {
    this.onDeleteData.emit();
  }

}
