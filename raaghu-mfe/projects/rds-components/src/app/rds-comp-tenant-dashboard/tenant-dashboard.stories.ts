import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RdsBigNumberWidgetModule, RdsChartBarHorizontalModule, RdsChartBoolModule, RdsChartDoughnutModule, RdsChartLineModule, RdsCheckboxModule, RdsInputModule, RdsLabelModule, RdsTextareaModule, RdsWidgetModule } from '@libs/rds-elements';
import { RdsCompTenantDashboardComponent } from './rds-comp-tenant-dashboard.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompMemberActivityComponent } from '../rds-comp-member-activity/rds-comp-member-activity.component';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
    
export default {
  title: 'Components/Tenant Dashboard',
  component: RdsCompTenantDashboardComponent,
  decorators: [
    moduleMetadata({
        declarations: [RdsCompMemberActivityComponent,RdsDataTableComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule, 
        NgxTranslateModule, 
        SharedModule, 
        RdsChartDoughnutModule,
        RdsWidgetModule,
        RdsChartBoolModule, 
        RdsBigNumberWidgetModule, 
        HttpClientModule,
        RdsInputModule,
        RdsCheckboxModule,
        RdsLabelModule,
        RdsChartLineModule,
        RdsTextareaModule,
        RdsChartBarHorizontalModule,
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompTenantDashboardComponent> = (args: RdsCompTenantDashboardComponent) => ({props: args});

export const Default= Template.bind({});

Default.args = {
memberActivityTableHeader: [
  { displayName: 'Member', key: 'member', dataType: 'html' },
  { displayName: 'Cases', key: 'cases', dataType: 'html' },
  { displayName: 'Active', key: 'active', dataType: 'html' },
  { displayName: 'Closed', key: 'closed', dataType: 'html' },
  { displayName: 'Rate', key: 'rate', dataType: 'html' }
]}