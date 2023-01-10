import { Component, Input, OnInit } from '@angular/core';
import { ComponentLoaderOptions, SharedService } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
// import { getAuditLogs, getEntityChanges, selectAllAuditLogs, selectAllchangeLogs, selectDefaultLanguage } from '../../../libs/state-management/src/public-api';
import { DateTime } from 'luxon';

import { TranslateService } from '@ngx-translate/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
import { getAuditLogs, getEntityChanges } from 'projects/libs/state-management/src/lib/state/audit-logs/audit-logs.actions';
import { selectAllAuditLogs, selectAllchangeLogs } from 'projects/libs/state-management/src/lib/state/audit-logs/audit-logs.selector';
import { selectAllLanguages } from 'projects/libs/state-management/src/lib/state/language/language.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('0.4s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('0.4s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isAnimation: boolean = true;
  public rdsauditLogMfeConfig: ComponentLoaderOptions;
  public operationLogs: any = [];
  public changeLogs: any = [];
  changelogData:any=[];
 public changelogHeader: TableHeader[] = [];
  public activePage:number=0;
  public activeTab: number = 0;
  public operationLogsHeaders: TableHeader[] = [{ key: 'serviceName', displayName: 'Http Request', dataType: 'text', sortable: true, filterable: true },
    { key: 'userName', displayName:'User', dataType: 'text', sortable: true, filterable: true },
    { key: 'clientIpAddress', displayName: 'IP Address', dataType: 'text', sortable: true, filterable: true},
    { key: 'executionTime', displayName: 'Time', dataType: 'text', sortable: true, filterable: true},
    { key: 'executionDuration', displayName: 'Duration', dataType: 'text', sortable: true, filterable: true},
    { key: 'action', displayName: 'Action', dataType: 'text', sortable: true, filterable: true},
    
 
  ];
  auditLogParamsData:any = {};
  ChangeLogParamsData:any = {};
  navtabsItems = [{
    label: 'Audit Log',
    tablink: '#auditlogs',
    ariacontrols: 'auditlogs',
  },
  {
    label: 'Entity Changes',
    tablink: '#entityChanges',
    ariacontrols: 'entityChanges',
  },
  ]
 
  public changeLogsHeaders: TableHeader[] = [
  { key: 'entityTypeFullName', displayName: 'Action', dataType: 'text', sortable: true, filterable: true },
  { key: 'changeTypeName', displayName: 'Object', dataType: 'text', sortable: true, filterable: true },
  { key: 'userName', displayName: 'User Name', dataType: 'text', sortable: true, filterable: true },
  { key: 'changeTime', displayName: 'Time', dataType: 'text', sortable: true, filterable: true },
  ];

  public auditLogsTableData: any = []
  changeType: any;
  hasException: any;
  httpStatus: any;
  httpMethod: any;
  

  constructor( private store: Store,public translate:TranslateService, private sharedService: SharedService,) { }

  ngOnInit(): void {
    this.activePage=0;
    this.isAnimation = true;
    this.store.select(selectAllLanguages).subscribe((res: any) => {

      if (res) {

        this.translate.use(res);

      }

    })
   
  

 
    let date = new Date();
    let lastday=new Date(Date.now() - 86400000);
    const auditLogParamsData: any = {
      startDate:undefined,
      endDate:undefined,
      userName:undefined,
      applicationName:undefined,
      clientIpAddress:undefined,
      correlationId:undefined,
      httpMethod:undefined,
      HasException:undefined,
      httpStatusCode:undefined,
      maxExecutionDuration:undefined,
      minExecutionDuration:undefined,
      sorting:'',
      maxResultCount:20,
      skipCount:0
     }
     this.store.dispatch(getAuditLogs(auditLogParamsData));

     this.store.select(selectAllAuditLogs).subscribe((res: any) => {
      
       if (res && res.items && res.items.length > 0 ) {
         this.isAnimation = false;
         this.operationLogs =[];
         res.items.forEach((element: any) => {
           const item: any = {
             parameters:element.parameters,
             userName: element.userName,
             serviceName: element.url,
             action:element.httpMethod,
             executionDuration: element.executionDuration,
             clientIpAddress: element.clientIpAddress,
             clientName: element.clientName,
             browserInfo: element.browserInfo,
             executionTime:this.formatDate( element.executionTime,'yyyy-LL-dd HH:mm:ss'),
             methodName:element.methodName,
             exception:element.exception,
             id: element.id,
             name:element.methodName,
           }
           this.operationLogs.push(item);
         });
       }
     })

     let startDate = new Date();
     let endDate=new Date(Date.now() - 86400000);
     const ChangeLogParamsData: any = {

      StartDate:this.formatDate(startDate, 'yyyy-LL-dd HH:mm:ss'),
      EndDate:this.formatDate(endDate, 'yyyy-LL-dd HH:mm:ss'),
      UserName:'',
      entityChangeType:'',
      Sorting:'',
      MaxResultCount:10,
      SkipCount:0,
    }
     this.store.dispatch(getEntityChanges(ChangeLogParamsData));
     this.store.select(selectAllchangeLogs).subscribe((res: any) => {
      
       if (res && res.changeLogs && res.changeLogs.items && res.changeLogs.items.length > 0) {
         res.changeLogs.items.forEach((element: any) => {
          this.changeLogs = [];
           const item: any = {
             entityName:element.entityTypeFullName,
             changeType: element.entityChangeType,
             minchangeDate: element.startDate,
             maxchangeDate:element.endDate
            
           }
           this.changeLogs.push(item);
         });
        
       }
      
     })
  }
  filterChangeLog(eventData){
   
    this.ChangeLogParamsData = {
      ...this.ChangeLogParamsData,
      StartDate:this.formatDate( eventData.minchangeDate, 'yyyy-LL-dd HH:mm:ss'),
      EndDate:this.formatDate( eventData.maxchangeDate, 'yyyy-LL-dd HH:mm:ss'),
      entityTypeFullName:eventData.entityName,
      changeType: this.changeType,
      Sorting:'',
      MaxResultCount:10,
      SkipCount:0,
    }
    this.store.dispatch(getEntityChanges(this.ChangeLogParamsData));
   
  }
  onTabClick(index: any): void {
    this.activeTab = index
  }

  handleDropdowns(event){
    
    if(event.hasException){
      this.hasException = event.event.item.value
    }
    if(event.httpStatus){
      this.httpStatus = event.event.item.value 
    }
    if(event.httpMethod){
      this.httpMethod = event.event.item.value
    }
    if(event.changeType){
      this.changeType=event.event.item.value
    }
  }


  filterAuditLog(eventData){
    let date = new Date();
    this.auditLogParamsData = {
      ...this.auditLogParamsData,
      startDate:this.formatDate( eventData.startDate, 'yyyy-LL-dd HH:mm:ss'),
      endDate:this.formatDate( eventData.endDate, 'yyyy-LL-dd HH:mm:ss'),
      userName:eventData.userName,
      serviceName:eventData.serviceName,
      MethodName:eventData.MethodName,
      applicationName:eventData.AppName,
      httpMethod:this.httpMethod,
      httpStatus: this.httpStatus,
      hasException:this.hasException,
      correlationID:eventData.CorrelationID,
      minExecutionDuration:eventData.MinDuration,
      maxExecutionDuration:eventData.MaxDuration,
      url:eventData.urlFilter,
      sorting:'',
      maxResultCount:1000,
      skipCount:0
    }
    this.store.dispatch(getAuditLogs(this.auditLogParamsData));
    

  }
  formatDate(date: DateTime | Date, format: string): string {
    if (date instanceof Date) {
      return this.formatDate(this.fromJSDate(date), format);
    }
    return date && date.toFormat(format);
  }

  fromJSDate(date: Date): DateTime {
    return DateTime.fromJSDate(date);
  }

  deleteEvent (eventData)  {
    const index: number = this.operationLogs.findIndex((x: any) => x.id === eventData.id)
    const data = this.operationLogs;
    data.splice(index, 1)
    this.operationLogs = [...data];
    // this.rdsauditLogMfeConfig.input.operationLogs = [...this.operationLogs];
  }

  parameterData(eventData) {
    this.filterAuditLog(eventData)
  }
  ChangeLogparameterData(eventData){       
    this.filterChangeLog(eventData);
  }

 
}
