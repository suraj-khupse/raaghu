import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';
declare var bootstrap: any;


@Component({
  selector: 'rds-comp-entity-changes',
  templateUrl: './rds-comp-entity-changes.component.html',
  styleUrls: ['./rds-comp-entity-changes.component.scss']
})
export class RdsCompEntityChangesComponent implements OnInit {
  selectedIndex: any = 0;
  minchangeDate: any = undefined;
  maxchangeDate: any = undefined;
  entityName: any;
  changeType: any


  changeTypeList: any = [
    { value: '0', some: 'Created' },
    { value: '1', some: 'Updated' },
    { value: '2', some: 'Deleted' },
  ];
  @Output() entityData = new EventEmitter<any>();
  @Output() onItemClick = new EventEmitter<any>();
  @Input() changelogData: any = [];
  @Input() public changelogHeader: TableHeader[] = [];
  @Input() isShimmer: boolean = false;
  changeLogsCanvasTitle: string = this.translate.instant('AUDIT LOG DETAIL');
  viewChangeLogsCanvas: boolean = false;
  actions: TableAction[] = [{ id: 'details', displayName: this.translate.instant('Details') },];
  selectedChangeData: any;
  constructor(public translate: TranslateService,) { }

  ngOnInit(): void {

  }
  minChangeDateModify(event) {
    this.minchangeDate = event;
    this.sendEntityData();
  }
  maxChangeDateModify(event) {
    this.maxchangeDate = event;
    this.sendEntityData();
  }
  entityNameModify(event) {
    
    this.sendEntityData();
  }
 
  onChangeTypeSelect(event){
    this.onItemClick.emit({event:event, changeType:'changeType'});
    this.sendEntityData();
  }

  sendEntityData() {
    if (this.minchangeDate && this.maxchangeDate) {
      this.entityData.emit({
        minchangeDate: this.minchangeDate,
        maxchangeDate: this.maxchangeDate,
        changeType:this.changeType,
        entityName: this.entityName,
      })
    }
  }
  showAuditLogDetail(): void {
    this.viewChangeLogsCanvas = true;
    this.changeLogsCanvasTitle = 'AUDIT LOG DETAIL';   
    setTimeout(() => {
      var offcanvas = document.getElementById('auditLogCanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }
  onActionSelect(event: any): void {
    if (event.actionId === 'details') {
      this.selectedChangeData = event.selectedData;
    }
  }
}
