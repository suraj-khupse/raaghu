import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBigNumberWidgetModule, RdsButtonModule, RdsCardModule, RdsChartBarHorizontalModule, RdsChartBoolModule, RdsChartDoughnutModule, RdsChartLineModule, RdsCheckboxModule, RdsDatepickerModule, RdsIconModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule, RdsSelectListModule, RdsTextareaModule, RdsWidgetModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard.component';
import { RdsAdminDashboardComponent } from '../../../../rds-components/src/app/rds-comp-admin-dashboard/rds-comp-admin-dashboard.component';
import { RdsCompTenantDashboardComponent } from '../../../../rds-components/src/app/rds-comp-tenant-dashboard/rds-comp-tenant-dashboard.component';
import { RdsDataTableComponent } from '../../../../rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Pages/Dashboard',
  component: DashboardComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        DashboardComponent,
        RdsAdminDashboardComponent,
        RdsCompTenantDashboardComponent,
        RdsDataTableComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        NgxTranslateModule,
        RdsWidgetModule,
        RdsChartLineModule,
        RdsBigNumberWidgetModule,
        RdsChartDoughnutModule,
        RdsChartBoolModule,
        RdsChartBarHorizontalModule,
        SharedModule,
        CommonModule,
        RdsPaginationModule,
        RdsInputModule,
        RdsIconModule,
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<DashboardComponent> = (args: DashboardComponent) => ({
  props: args,

  template:`<div *ngIf="istenant">
                <app-rds-comp-tenant-dashboard></app-rds-comp-tenant-dashboard>
            </div>
          <div *ngIf="!istenant">
            <app-rds-admin-dashboard [tableHeaders]="memberActivityTableHeader"
                [tableStyle]="'light'" [tableData]="memberActivityTableData"
                [recordsPerPage]="10" [pagination]="true" [inlineEdit]="false" >              
            </app-rds-admin-dashboard>
          </div>`
});


export const Default = Template.bind({});
Default.args = {
  memberActivityTableHeader:  [
    { displayName: 'Member', key: 'member', dataType: 'html' },
    { displayName: 'Cases', key: 'cases', dataType: 'html' },
    { displayName: 'Active', key: 'active', dataType: 'html' },
    { displayName: 'Closed', key: 'closed', dataType: 'html' },
    { displayName: 'Rate', key: 'rate', dataType: 'html' }
  ],
  memberActivityTableData:[
    { "cases": "<div class=\"d-flex align-items-center justify-content-center\"><div> 10 </div></div>", "member": "<div class=\"d-flex align-items-center\"><div> <img src=../assets/dashboard-data.png width=\"40px\" ></div><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>Brian</b></p><small class=\"text-muted\">Software Developer </small></div></div>", "active": "<div class=\"d-flex align-items-center justify-content-center\"><div> 38 </div></div>", "closed": "<div class=\"d-flex align-items-center justify-content-center\"><div> 10 </div></div>", "rate": "<div class=\"HighRate d-flex align-items-center justify-content-center\">92%</div>" }
    , { "cases": "<div class=\"d-flex align-items-center justify-content-center\"><div> 18 </div></div>", "member": "<div class=\"d-flex align-items-center\"><div> <img src=../assets/dashboard-data.png width=\"40px\" ></div><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>Kim</b></p><small class=\"text-muted\">Senior Developer </small></div></div>", "active": "<div class=\"d-flex align-items-center justify-content-center\"><div> 342 </div></div>", "closed": "<div class=\"d-flex align-items-center justify-content-center\"><div> 25 </div></div>", "rate": "<div class=\"MidRate d-flex align-items-center justify-content-center\">42%</div>" }
    , { "cases": "<div class=\"d-flex align-items-center justify-content-center\"><div> 7 </div></div>", "member": "<div class=\"d-flex align-items-center\"><div> <img src=../assets/dashboard-data.png width=\"40px\" ></div><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>Jane</b></p><small class=\"text-muted\">Sales Executive </small></div></div>", "active": "<div class=\"d-flex align-items-center justify-content-center\"><div> 25 </div></div>", "closed": "<div class=\"d-flex align-items-center justify-content-center\"><div> 5 </div></div>", "rate": "<div class=\"HighRate d-flex align-items-center justify-content-center\">96%</div>" }
    , { "cases": "<div class=\"d-flex align-items-center justify-content-center\"><div> 14 </div></div>", "member": "<div class=\"d-flex align-items-center\"><div> <img src=../assets/dashboard-data.png width=\"40px\" ></div><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>Brian</b></p><small class=\"text-muted\">Software Developer</small></div></div>", "active": "<div class=\"d-flex align-items-center justify-content-center\"><div> 42 </div></div>", "closed": "<div class=\"d-flex align-items-center justify-content-center\"><div> 42 </div></div>", "rate": "<div class=\"LowRate d-flex align-items-center justify-content-center\">16%</div>" }
    , { "cases": "<div class=\"d-flex align-items-center justify-content-center\"><div> 13 </div></div>", "member": "<div class=\"d-flex align-items-center\"><div> <img src=../assets/dashboard-data.png width=\"40px\" ></div><div class=\"ms-2 mt-2\"><p class=\"mb-0\"><b>Kath</b></p><small class=\"text-muted\">Manager </small></div></div>", "active": "<div class=\"d-flex align-items-center justify-content-center\"><div> 10 </div></div>", "closed": "<div class=\"d-flex align-items-center justify-content-center\"><div> 3 </div></div>", "rate": "<div class=\"MidRate d-flex align-items-center justify-content-center\">52%</div>" }
  ]
}
