import { Component, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { getAuditLogs, getEntityChanges, selectAllAuditLogs, selectAllchangeLogs, selectDefaultLanguage } from '../../../libs/state-management/src/public-api';
import { DateTime } from 'luxon';
import { TranslateService } from '@ngx-translate/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';

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
  public operationLogsHeaders: TableHeader[] = [{ key: 'userName', displayName:'User Name', dataType: 'text', sortable: true, filterable: true },
    { key: 'serviceName', displayName: 'Service', dataType: 'text', sortable: true, filterable: true },
    { key: 'methodName', displayName: 'Action', dataType: 'text', sortable: true, filterable: true},
    { key: 'executionDuration', displayName: 'Duration', dataType: 'text', sortable: true, filterable: true},
    { key: 'clientIpAddress', displayName: 'IP Address', dataType: 'text', sortable: true, filterable: true},
    // { key: 'clientName', displayName: 'Client', dataType: 'html', sortable: true, filterable: true },
    // { key: 'browserInfo', displayName: 'Browser', dataType: 'html', sortable: true, filterable: true},
    { key: 'executionTime', displayName: 'Time', dataType: 'text', sortable: true, filterable: true},
  
    
  ];
  
  public changeLogsHeaders: TableHeader[] = [{ key: 'entityTypeFullName', displayName: 'Action', dataType: 'text', sortable: true, filterable: true },
  { key: 'changeTypeName', displayName: 'Object', dataType: 'text', sortable: true, filterable: true },
  { key: 'userName', displayName: 'User Name', dataType: 'text', sortable: true, filterable: true },
  { key: 'changeTime', displayName: 'Time', dataType: 'text', sortable: true, filterable: true },
  // { key: 'view', displayName: 'Action', dataType: 'view', sortable: false, filterable: false },
  ];

  auditLogsTableData: any = []
  

  constructor( private store: Store,public translate:TranslateService) { }

  ngOnInit(): void {
    this.isAnimation = true;
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {

      if (res) {

        this.translate.use(res);

      }

    })
  this.rdsauditLogMfeConfig = {

      name: 'RdsCompAuditLogs',
      input: {
        operationLogsHeaders: this.operationLogsHeaders,
        operationLogs: this.operationLogs,
        changeLogsHeaders: this.changeLogsHeaders,
        changeLogs: this.changeLogs,
        isShimmer:true
      },
      output: {
        deleteEvent: (eventData) => {
          const index: number = this.operationLogs.findIndex((x: any) => x.id === eventData.id)
          const data = this.operationLogs;
          data.splice(index, 1)
          this.operationLogs = [...data];
          this.rdsauditLogMfeConfig.input.operationLogs = [...this.operationLogs];
        },

        parameterData:(eventData) => {
          this.filterAuditLog(eventData)
        },
        
        ChangeLogparameterData:(eventData)=>{
this.filterChangeLog(eventData);
        }
      }
    };
    let date = new Date();
    let lastday=new Date(Date.now() - 86400000);
    const auditLogParamsData: any = {
      startDate:this.formatDate(lastday, 'yyyy-LL-dd HH:mm:ss'),
      endDate:this.formatDate( date, 'yyyy-LL-dd HH:mm:ss'),
      userName:'',
      serviceName:'',
      MethodName:'',
      BrowserInfo:'',
      HasException:'',
      minExecutionDuration:'',
      maxExecutionDuration:'',
      sorting:'',
      maxResultCount:10,
      skipCount:0
     }
     this.store.dispatch(getAuditLogs(auditLogParamsData));
     this.store.select(selectAllAuditLogs).subscribe((res: any) => {
       this.auditLogsTableData = [];
       if (res && res.auditLogs && res.auditLogs.items && res.auditLogs.items.length > 0 && res.status == "success") {
         this.isAnimation = false;
         res.auditLogs.items.forEach((element: any) => {
           const item: any = {
             parameters:element.parameters,
             userName: element.userName,
             serviceName: element.serviceName,
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
           this.auditLogsTableData.push(item);
         });
         const mfeConfig = this.rdsauditLogMfeConfig
         mfeConfig.input.operationLogs = [... this.auditLogsTableData];
         mfeConfig.input.isShimmer=false;
         this.rdsauditLogMfeConfig = mfeConfig;
       }
       
     })
  }
      
  filterChangeLog(eventData){
    const ChangeLogParamsData: any = {
  
      StartDate:this.formatDate( eventData.StartDate, 'yyyy-LL-dd HH:mm:ss'),
      EndDate:this.formatDate( eventData.EndDate, 'yyyy-LL-dd HH:mm:ss'),
      UserName:eventData.userName,
      Sorting:'',
      MaxResultCount:10,
      SkipCount:0,
    }
    this.store.dispatch(getEntityChanges(ChangeLogParamsData));
    this.store.select(selectAllchangeLogs).subscribe((res: any) => {
      this.changeLogs = [];
      if (res && res.changeLogs && res.changeLogs.items && res.changeLogs.items.length > 0) {
        res.changeLogs.items.forEach((element: any) => {
          const item: any = {
            userName:element.userName,
            changeTime: element.changeTime,
            entityTypeFullName: element.entityTypeFullName,
            changeTypeName: element.changeTypeName,
           
          }
          this.auditLogsTableData.push(item);
        });
       
      }
      const mfeConfig = this.rdsauditLogMfeConfig
      mfeConfig.input.changeLogs = [... this.changeLogs];
      this.rdsauditLogMfeConfig = mfeConfig;
    })
  }

  filterAuditLog(eventData){
    let date = new Date();
   
    const auditLogParamsData: any = {
  
      startDate:this.formatDate( eventData.startDate, 'yyyy-LL-dd HH:mm:ss'),
      endDate:this.formatDate( eventData.endDate, 'yyyy-LL-dd HH:mm:ss'),
      userName:eventData.userName,
      serviceName:eventData.serviceName,
      MethodName:eventData.MethodName,
      BrowserInfo:eventData.BrowserInfo,
      HasException:eventData.HasException,
      minExecutionDuration:eventData.minExecutionDuration,
      maxExecutionDuration:eventData.maxExecutionDuration,
      sorting:'',
      maxResultCount:10,
      skipCount:0
     
    }
    this.store.dispatch(getAuditLogs(auditLogParamsData));
    this.store.select(selectAllAuditLogs).subscribe((res: any) => {
      this.auditLogsTableData = [];
      if (res && res.auditLogs && res.auditLogs.items && res.auditLogs.items.length > 0) {
        res.auditLogs.items.forEach((element: any) => {
          const item: any = {
            parameters:element.parameters,
            userName: element.userName,
            serviceName: element.serviceName,
            executionDuration: element.executionDuration,
            clientIpAddress: element.clientIpAddress,
            clientName: element.clientName,
            browserInfo: element.browserInfo,
            executionTime:this.formatDate( element.executionTime,'yyyy-LL-dd HH:mm:ss'),
            methodName:element.methodName,
            exception:element.exception,
            name:element.methodName,
          }
          this.auditLogsTableData.push(item);
        });
       
      }
      const mfeConfig = this.rdsauditLogMfeConfig
      mfeConfig.input.operationLogs = [... this.auditLogsTableData];
      this.rdsauditLogMfeConfig = mfeConfig;
    })

  }
  formatDate(date: DateTime | Date, format: string): string {

    if (date instanceof Date) {
  
        return this.formatDate(this.fromJSDate(date), format);
  
    }
  
  
  
    return date.toFormat(format);
  
  }
  
  fromJSDate(date: Date): DateTime {
  
    return DateTime.fromJSDate(date);
  
  }
}
