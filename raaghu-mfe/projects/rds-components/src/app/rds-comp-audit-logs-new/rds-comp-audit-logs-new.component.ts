import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'rds-comp-audit-logs-new',
  templateUrl: './rds-comp-audit-logs-new.component.html',
  styleUrls: ['./rds-comp-audit-logs-new.component.scss']
})
export class RdsCompAuditLogsNewComponent implements OnInit {
  selectedIndex: any = 0;
  startDate: any = undefined;
  endDate: any = undefined;
  user: any;
  urlFilter:any;
  minDuration: any;
  maxDuration: any;
  httpStatus:any;
  clientIpAddress:any;
  httpStatusList: any=[  
  { value: '100-Continue', some: '100-Continue' },
  { value: '101-Switching Protocols', some: '101-Switching Protocols' },
  { value: '102-Processing', some: '102-Processing' },
  { value: '103-Early Hints', some: '103-Early Hints' },
  { value: '200-Ok', some: '200-Ok' },
  { value: '201-Created', some: '201-Created' }
];
  httpMethod:any;
  httpMethodList: any= [
    { value: 'GET', some: 'GET' },
    { value: 'POST', some: 'POST' },
    { value: 'DELETE', some: 'DELETE' },
    { value: 'PUT', some: 'PUT' },
    { value: 'HEAD', some: 'HEAD' },
    { value: 'TRACE', some: 'TRACE' }
  ];
  hasExceptionList:any=[
    { value: true, some: 'Yes' },
    { value: false, some: 'No' }
  ];
  hasException:any='';
  appName:any='';
  correlationID:any='';
  browserInfo:any = '';
  selectedRowData: any;
  activePage: number = 0;
  actions: TableAction[] = [{ id: 'details', displayName: this.translate.instant('Details') },];
  @Input() public operationLogs: any = [];
  @Input() public operationLogsHeaders: TableHeader[] = [];
  @Input() public changeLogsHeaders: TableHeader[] = [];
  @Input() changeLogs:any=[]
  @Output() parameterData = new EventEmitter<any>();
  @Output() onItemClick = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Input() isShimmer: boolean = false;
  public navtabsItems: any = [];
  auditLogsCanvasTitle: string = this.translate.instant('AUDIT LOG DETAIL');
  viewAuditLogsCanvas: boolean = false;
  constructor( private sharedService:SharedService,
    public translate:TranslateService,
 ) { }
  
  ngOnInit(): void {
    this.operationLogs=[...this.operationLogs];
  }
  startDateModify(event) {

    this.startDate=event;
    this.sendParameterData();
  }
  endDateModify(event) {
     this.endDate=event
    this.sendParameterData();
  }
  userModify(event) {
    
    this.sendParameterData();
  }
  urlFilterModify(event){
    
    this.sendParameterData();
  }
  minDurationModify(event){
   
    this.sendParameterData();
  }
  maxDurationModify(event){
   
    this.sendParameterData();
  }
  httpMethodModify(event){
  
    this.onItemClick.emit({event:event, httpMethod:'httpMethod'});
    this.sendParameterData();
  }
  httpStatusModify(event){
  
    this.onItemClick.emit({event:event, httpStatus:'httpStatus'});
    this.sendParameterData();
  }
  appNameModify(event){
    this.sendParameterData();
  }
  clientIpModify(event){
     this.sendParameterData();
  }
  correlationIDModify(event){
    this.sendParameterData();
  }
  hasExceptionModify(event){
    this.onItemClick.emit({event:event,hasException:'hasException'});
    this.sendParameterData();
  }

  search(){
     this.sendParameterData();
  }
  sendParameterData() {
    if (this.startDate && this.endDate) {
      this.parameterData.emit({
        startDate: this.startDate, 
        endDate: this.endDate, 
        userName: this.user, 
        urlFilter : this.urlFilter, 
        MinDuration: this.minDuration,
        MaxDuration: this.maxDuration,
        HttpStatus: this.httpStatus,
        HttpMethod:this.httpMethod,
        AppName:this.appName,
      
        CorrelationID: this.correlationID,
        HasException:this.hasException,
        BrowserInfo: this.browserInfo
      })
  }
}

  onActionSelect(event: any): void {
    if (event.actionId === 'details') {
      this.selectedRowData = event.selectedData;
      this.showAuditLogDetail();
    }
  }
  delete(event: any): void {
    this.deleteEvent.emit(event);
  }
  onClose(): void {
    this.viewAuditLogsCanvas = false;
    this.selectedRowData = undefined;
  }
  showAuditLogDetail(): void {
    this.viewAuditLogsCanvas = true;
    this.auditLogsCanvasTitle = 'AUDIT LOG DETAIL';
    this.navtabsItems = [
      {
        label: this.translate.instant('Overall'),
        tablink: '#overall',
        ariacontrols: 'overall',
      },
      {
        label: this.translate.instant('Actions'),
        tablink: '#action',
        ariacontrols: 'action',
      },
    ];
    setTimeout(() => {
      var offcanvas = document.getElementById('auditLogCanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }
  getNavTabItems(): any {
    this.navtabsItems[0].label = this.translate.instant('Overall');
    this.navtabsItems[1].label = this.translate.instant('Actions');
    return this.navtabsItems;
  }
  getSelectedNavTab(event: any): void {
    this.activePage = event;
  }
  

}
