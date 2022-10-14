import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsCounterComponent, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsLabelModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompTenantInformationComponent } from '../rds-comp-tenant-information/rds-comp-tenant-information.component';
import { RdsCompTenantSettingsComponent } from '../rds-comp-tenant-settings/rds-comp-tenant-settings.component';
import { RdsCompAlertComponent } from '../rds-comp-alert/rds-comp-alert.component';
import { RdsCompTenantListNewComponent } from './rds-comp-tenant-list-new.component';
import { RdsCompTenantBasicProfileRightComponent } from '../rds-comp-tenant-basic-profile-right/rds-comp-tenant-basic-profile-right.component';
import { RdsCompTenantFeaturesComponent } from '../rds-comp-tenant-features/rds-comp-tenant-features.component';

export default {
  title: 'Components/Tenant List',
  component: RdsCompTenantListNewComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        RdsCompTenantBasicProfileRightComponent,RdsDataTableComponent,
        RdsCompTenantInformationComponent,RdsCompTenantSettingsComponent,RdsCompTenantFeaturesComponent,RdsCounterComponent,
      RdsCompAlertComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule,RdsIconModule, 
        SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,RdsOffcanvasModule,RdsNavTabModule,
        RdsSelectListModule,RdsCheckboxModule,RdsDatepickerModule,RdsLabelModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompTenantListNewComponent> = (args: RdsCompTenantListNewComponent) => ({
    props:{
      ...args
  }
  });

  export const TenantListNew = Template.bind({});

  TenantListNew.args = {
  tenantSettingsInfo : {  },
  tenantData: {},
  
  tenantList: [{tenantInfoTemplate: '<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Amc Corporation</b></p><small class="text-muted">Support@amc.com</small></div></div>',roleTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Admin</div></div>', statusTemplate: '<div><span class="badge badge-success">Active</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 1},
  {tenantInfoTemplate: '<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Acentric Global</b></p><small class="text-muted">Support@amc.com</small></div></div>',roleTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Admin</div></div>', statusTemplate: '<div> <span class="badge badge-danger">Inactive</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 4},
  {tenantInfoTemplate: '<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Cubic Systems</b></p><small class="text-muted">Support@amc.com</small></div></div>',roleTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Admin</div></div>', statusTemplate: '<div><span class="badge badge-success">Active</span></div>', editionDisplayName: 'Apple1', editionTemplate: '<div class="d-flex align-items-center"><div class=…on Apple1"></div><div class="">Extensive</div></div>', id: 9},
  {tenantInfoTemplate: '<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Revamp Tech</b></p><small class="text-muted">Support@amc.com</small></div></div>',roleTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Admin</div></div>', statusTemplate: '<div> <span class="badge badge-success">Active</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 2},
  {tenantInfoTemplate: '<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Kengar Soft</b></p><small class="text-muted">Support@amc.com</small></div></div>',roleTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Admin</div></div>', statusTemplate: '<div> <span class="badge badge-success">Active</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Trail - 1 Month</div></div>', id: 22},],
  editionList:[
    {isFree: true, value: '1', displayText: 'Standard', isSelected: false},
    {isFree: false, value: '2', displayText: 'Advanced', isSelected: false},
    ],
  
   tenantHeaders: [
    { displayName: 'Name', key: 'tenantInfoTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },  
    { displayName: 'Role', key: 'roleTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },  
    { displayName: 'Edition', key: 'editionTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Status', key: 'statusTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
   
  ]
}