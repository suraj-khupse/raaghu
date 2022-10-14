import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompAlertComponent } from '../rds-comp-alert/rds-comp-alert.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsCompAuditLogsNewComponent } from './rds-comp-audit-logs-new.component';

export default {
  title: 'Components/Audit Log',
  component: RdsCompAuditLogsNewComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompAuditLogsNewComponent, RdsDataTableComponent,
      RdsCompAlertComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule,RdsIconModule, 
        SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,RdsOffcanvasModule,RdsNavTabModule,
        RdsSelectListModule,RdsCheckboxModule,RdsDatepickerModule,BsDatepickerModule.forRoot(), BrowserAnimationsModule,RdsSelectListModule,
        RdsBadgeModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompAuditLogsNewComponent> = (args: RdsCompAuditLogsNewComponent) => ({
    props:{
      ...args
  }
  });

  export const AuditlogNew = Template.bind({});

  AuditlogNew.args = {
    httpMethodList: [
      { value: 'GET', displayText: 'GET' },
      { value: 'POST', displayText: 'POST' },
      { value: 'DELETE', displayText: 'DELETE' },
      { value: 'PUT', displayText: 'PUT' },
      { value: 'HEAD', displayText: 'HEAD' },
      { value: 'TRACE', displayText: 'TRACE' }
    ],
    httpStatusList: [  
      { value: '100-Continue', displayText: '100-Continue' },
      { value: '101-Switching Protocols', displayText: '101-Switching Protocols' },
      { value: '102-Processing', displayText: '102-Processing' },
      { value: '103-Early Hints', displayText: '103-Early Hints' },
      { value: '200-Ok', displayText: '200-Ok' },
      { value: '201-Created', displayText: '201-Created' }
    ],
    operationLogs : [
      {
          "httpRequest":`<div><span class="badge badge-success m-1">200</span><span class="badge badge-success">Post</span><span>/api/identity-server/apiScopes</span></div>`,
          "parameters": "{\"input\": {\"extraProperties\": {}, \"name\": \"Lorem Ipsum\", \"displayName\": \"Lorem Ipsum\",\"description\": \"Lorem Ipsum\", \"required\": true, \"enabled\": true, \"emphasize\": true, \"showInDiscoveryDocument\": true,\"userClaims\": [], \"properties\": [] } }",         
          "user": "admin",
          "serviceName": "UserDelegationAppService",
          "executionDuration": 1079,
          "clientIpAddress": "103.151.184.6",
          "clientName": null,
          "browserInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
          "executionTime": "2022-06-22 16:34:40",
          "exception": null
      },
      {
          "httpRequest":`<div><span class="badge badge-success m-1">200</span><span class="badge badge-success">Post</span><span>/api/identity-server/clients</span></div>`,
          "parameters": "{\"input\": {\"extraProperties\": {}, \"name\": \"Lorem Ipsum\", \"displayName\": \"Lorem Ipsum\",\"description\": \"Lorem Ipsum\", \"required\": true, \"enabled\": true, \"emphasize\": true, \"showInDiscoveryDocument\": true,\"userClaims\": [], \"properties\": [] } }",         
          "user": "admin",
          "serviceName": "LanguageAppService",
          "executionDuration": 7050,
          "clientIpAddress": "103.154.35.131",
          "clientName": null,
          "browserInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
          "executionTime": "2022-06-22 16:34:40",
          "exception": null
      },
      {
        "httpRequest":`<div><span class="badge badge-success m-1">200</span><span class="badge badge-success">Post</span><span>/Account/Login</span></div>`,
          "parameters": "{\"input\": {\"extraProperties\": {}, \"name\": \"Lorem Ipsum\", \"displayName\": \"Lorem Ipsum\",\"description\": \"Lorem Ipsum\", \"required\": true, \"enabled\": true, \"emphasize\": true, \"showInDiscoveryDocument\": true,\"userClaims\": [], \"properties\": [] } }",         
          "user": "admin",
          "serviceName": "CommonLookupAppService",
          "executionDuration": 7050,
          "clientIpAddress": "103.154.35.131",
          "clientName": null,
          "browserInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
          "executionTime": "2022-06-22 16:34:40",
          "exception": null
      },
     
  ],
  operationLogsHeaders: [
  { key: 'httpRequest', displayName:'Http Request', dataType: 'html', sortable: true, filterable: true },
  { key: 'user', displayName:'User', dataType: 'text', sortable: true, filterable: true },
  { key: 'clientIpAddress', displayName: 'IP Address', dataType: 'text', sortable: true, filterable: true},
  { key: 'executionTime', displayName: 'Time', dataType: 'text', sortable: true, filterable: true},
  { key: 'executionDuration', displayName: 'Duration', dataType: 'text', sortable: true, filterable: true},
  { key: 'applicationName', displayName: 'Application Name', dataType: 'text', sortable: true, filterable: true },
]
}