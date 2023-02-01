import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsDropdownlistModule, RdsFabMenuModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';
import { StoreModule } from '@ngrx/store';

export default {
  title: 'Pages/Audit Log',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        AppComponent,
      ],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule,RdsIconModule, 
        SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,RdsOffcanvasModule,RdsNavTabModule,
        RdsSelectListModule,RdsCheckboxModule,RdsDatepickerModule,BsDatepickerModule.forRoot(), BrowserAnimationsModule,
        RdsCompDataTableModule,RdsCompAlertModule,RdsDropdownlistModule,
        StoreModule.forRoot({}),
      ],
      providers: [
        FormBuilder,       
      ],
    })
  ]
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
    props:{
      ...args
  }
  });

export const Default = Template.bind({});

Default.args = {
  isShimmer:false,
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
  auditLogsTableData : [
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
