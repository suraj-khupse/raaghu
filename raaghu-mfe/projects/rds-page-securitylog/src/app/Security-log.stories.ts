import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { AppComponent as SecurityLogs} from './app.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { RdsSecurityComponent } from 'projects/rds-components/src/app/rds-comp-security/rds-comp-security.component';

export default {
  title: 'Pages/ Security Log',
  component: SecurityLogs ,
  decorators: [
    moduleMetadata({
      declarations: [RdsDataTableComponent, RdsSecurityComponent],
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
const Template: Story<SecurityLogs> = (args: SecurityLogs) => ({
    props:{
      ...args
  },
  template:`<app-rds-data-table
  [tableHeaders]="securityLogsHeaders" 
  [tableData]="securityLogs" 
 ></app-rds-data-table>`

  });

export const Default = Template.bind({});
Default.args={
  securityLogsHeaders: [
  { key: 'time', displayName: 'Time', dataType: 'text', sortable: true, filterable: true },
  { key: 'action', displayName: 'Action', dataType: 'text', sortable: true, filterable: true },
  { key: 'ipAddress', displayName: 'IP Address', dataType: 'text', sortable: true, filterable: true },
  { key: 'browser', displayName: 'Browser', dataType: 'html', sortable: true, filterable: true },
  { key: 'application', displayName: 'Application', dataType: 'html', sortable: true, filterable: true },
  { key: 'identity', displayName: 'Identity', dataType: 'text', sortable: true, filterable: true },
  { key: 'username', displayName: 'Users', dataType: 'text', sortable: true, filterable: true },
  ],
  securityLogs : [
    {
      id: 1, username: 'admin', identity: 'Kol324i', action: 'GetActiveUserDelegations',
      duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
      browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png"  class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', 
      time: '11/15/2021 2:44:52 PM'
    },
    {
      id: 2, username: 'rr', identity: 'Kol324i', action: 'GetActiveUserDelegations',
      duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
      browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
    },
    {
      id: 3, username: 'lk', identity: 'Kol324i', action: 'GetActiveUserDelegations',
      duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
      browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
    },
    {
      id: 4, username: 'nj', identity: 'Kol324i', action: 'GetActiveUserDelegations',
      duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
      browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
    },
    {
      id: 5, username: 'admin', identity: 'Kol324i', action: 'GetActiveUserDelegations',
      duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
      browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
    },
    {
      id: 6, username: 'admin', identity: 'Kol324i', action: 'GetActiveUserDelegations',
      duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
      browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
    },
    {
      id: 7, username: 'admin', identity: 'Kol324i', action: 'GetActiveUserDelegations',
      duration: '1351ms', ipAddress: '103.151.184.6', application: 'Software 1.0',
      browser: '<div class="row"><div class="col-md-2 mt-2"><img src="assets/firefox.png" class="image"></div> <div class="col-md-8 title" ><b>Firefox</b><p class="subtitle">Windows NT 10</p></div></div>', time: '11/15/2021 2:44:52 PM'
    }
  ]
}