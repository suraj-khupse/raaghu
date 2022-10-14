import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { RdsCompAuditLogsComponent } from 'projects/rds-components/src/app/rds-comp-audit-logs/rds-comp-audit-logs.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';

export default {
  title: 'Pages/Audit Log',
  component: RdsCompAuditLogsComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompAuditLogsComponent, RdsDataTableComponent,
      RdsCompAlertComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule,RdsIconModule, 
        SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,RdsOffcanvasModule,RdsNavTabModule,
        RdsSelectListModule,RdsCheckboxModule,RdsDatepickerModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompAuditLogsComponent> = (args: RdsCompAuditLogsComponent) => ({
    props:{
      ...args
  }
  });

export const Default = Template.bind({});

Default.args = {
    operationLogsHeaders: [{ key: 'userName', displayName:'User Name', dataType: 'text', sortable: true, filterable: true },
    { key: 'serviceName', displayName: 'Service', dataType: 'text', sortable: true, filterable: true },
    { key: 'methodName', displayName: 'Action', dataType: 'text', sortable: true, filterable: true},
    { key: 'executionDuration', displayName: 'Duration', dataType: 'text', sortable: true, filterable: true},
    { key: 'clientIpAddress', displayName: 'IP Address', dataType: 'text', sortable: true, filterable: true},
    { key: 'executionTime', displayName: 'Time', dataType: 'text', sortable: true, filterable: true},
  ],
  changeLogsHeaders:[{ key: 'entityTypeFullName', displayName: 'Action', dataType: 'text', sortable: true, filterable: true },
  { key: 'changeTypeName', displayName: 'Object', dataType: 'text', sortable: true, filterable: true },
  { key: 'userName', displayName: 'User Name', dataType: 'text', sortable: true, filterable: true },
  { key: 'changeTime', displayName: 'Time', dataType: 'text', sortable: true, filterable: true },
  ],
    operationLogs : [
        {
            "parameters": "{\"input\":{\"maxResultCount\":10,\"skipCount\":0,\"sorting\":null}}",
            "userName": "admin",
            "serviceName": "UserDelegationAppService",
            "executionDuration": 1865,
            "clientIpAddress": "::1",
            "clientName": null,
            "browserInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
            "executionTime": "2022-06-22 16:34:40",
            "methodName": "GetDelegatedUsers",
            "exception": null
        },
        {
            "parameters": "{}",
            "userName": "admin",
            "serviceName": "LanguageAppService",
            "executionDuration": 2,
            "clientIpAddress": "::1",
            "clientName": null,
            "browserInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
            "executionTime": "2022-06-22 16:34:40",
            "methodName": "GetLanguages",
            "exception": null
        },
        {
            "parameters": "{\"input\":{\"tenantId\":null,\"excludeCurrentUser\":true,\"maxResultCount\":10,\"skipCount\":0,\"filter\":\"\"}}",
            "userName": "admin",
            "serviceName": "CommonLookupAppService",
            "executionDuration": 1680,
            "clientIpAddress": "::1",
            "clientName": null,
            "browserInfo": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
            "executionTime": "2022-06-22 16:34:40",
            "methodName": "FindUsers",
            "exception": null
        },
       
    ],
   
 
}
