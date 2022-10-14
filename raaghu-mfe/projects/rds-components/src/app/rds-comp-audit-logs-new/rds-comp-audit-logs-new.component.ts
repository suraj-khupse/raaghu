import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

declare var bootstrap: any;

@Component({
  selector: 'app-rds-comp-audit-logs-new',
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
  httpStatusList: any=[  
  { value: '100-Continue', displayText: '100-Continue' },
  { value: '101-Switching Protocols', displayText: '101-Switching Protocols' },
  { value: '102-Processing', displayText: '102-Processing' },
  { value: '103-Early Hints', displayText: '103-Early Hints' },
  { value: '200-Ok', displayText: '200-Ok' },
  { value: '201-Created', displayText: '201-Created' }
];
  httpMethod:any;
  httpMethodList: any= [
    { value: 'GET', displayText: 'GET' },
    { value: 'POST', displayText: 'POST' },
    { value: 'DELETE', displayText: 'DELETE' },
    { value: 'PUT', displayText: 'PUT' },
    { value: 'HEAD', displayText: 'HEAD' },
    { value: 'TRACE', displayText: 'TRACE' }
  ];
  hasExceptionList:any=[
    { value: true, displayText: 'Yes' },
    { value: false, displayText: 'No' }
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
  @Output() parameterData = new EventEmitter<any>();
  @Output() onItemClick = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Input() isShimmer: boolean = false;
  public navtabsItems: any = [];
  auditLogsCanvasTitle: string = this.translate.instant('AUDIT LOG DETAIL');
  viewAuditLogsCanvas: boolean = false;
  constructor( private sharedService:SharedService,
    public translate:TranslateService) { }
  
  ngOnInit(): void {
  }
  startDateModify(event) {

    this.startDate = event;
    this.sendParameterData();

  }
  endDateModify(event) {
    this.endDate = event;
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
    this.onItemClick.emit(event);
    this.sendParameterData();
  }
  httpStatusModify(event){
    this.onItemClick.emit(event);
    this.sendParameterData();
  }
  appNameModify(event){
    this.sendParameterData();
  }
  correlationIDModify(event){
    this.sendParameterData();
  }
  hasExceptionModify(event){
    this.sendParameterData();
  }
  sendParameterData() {
    if (this.startDate && this.endDate) {
      this.parameterData.emit({
        startDate: this.startDate, endDate: this.endDate, userName: this.user, urlFilter : this.urlFilter, MinDuration: this.minDuration,MaxDuration: this.maxDuration,
        HttpStatus: this.httpStatus,HttpMethod:this.httpMethod,AppName:this.appName,CorrelationID: this.correlationID,HasException:this.hasException,BrowserInfo: this.browserInfo
      })
      
    }
  }
  onActionSelect(event: any): void {
    if (event.actionId === 'details') {
      console.log(event.selectedData);
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
