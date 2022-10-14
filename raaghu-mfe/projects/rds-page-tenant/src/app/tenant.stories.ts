import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompTenantInformationComponent } from 'projects/rds-components/src/app/rds-comp-tenant-information/rds-comp-tenant-information.component';
import { RdsCompTenantListComponent } from 'projects/rds-components/src/app/rds-comp-tenant-list/rds-comp-tenant-list.component';
import { RdsCompTenantSettingsComponent } from 'projects/rds-components/src/app/rds-comp-tenant-settings/rds-comp-tenant-settings.component';


export default {
  title: 'Pages/Tenant',
  component: RdsCompTenantListComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompTenantListComponent, RdsDataTableComponent,
        RdsCompTenantInformationComponent,RdsCompTenantSettingsComponent,
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
const Template: Story<RdsCompTenantListComponent> = (args: RdsCompTenantListComponent) => ({
    props:{
      ...args
  }
  });

export const Default = Template.bind({});

Default.args = {
  tenantSettingsInfo : {  },
  tenantData: {},
  tenantList: [{tenantInfoTemplate: '<div class=""><div><div><span>Default</span></div><span class="text-muted">Default </span></div></div>', statusTemplate: '<div><span class="badge badge-secondary">Inactive</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 1},
  {tenantInfoTemplate: '<div class=""><div><div><span>jack</span></div><span class="text-muted">jack </span></div></div>', statusTemplate: '<div> <span class="badge badge-success">Active</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 4},
  {tenantInfoTemplate: '<div class=""><div><div><span>khalate</span></div><span class="text-muted">ketan </span></div></div>', statusTemplate: '<div><span class="badge badge-secondary">Inactive</span></div>', editionDisplayName: 'Apple1', editionTemplate: '<div class="d-flex align-items-center"><div class=…on Apple1"></div><div class="">Apple1</div></div>', id: 9},
  {tenantInfoTemplate: '<div class=""><div><div><span>pratheesh</span></di… class="text-muted">pratheesh </span></div></div>', statusTemplate: '<div> <span class="badge badge-success">Active</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 2},
  {tenantInfoTemplate: '<div class=""><div><div><span>richy</span></div><span class="text-muted">richy </span></div></div>', statusTemplate: '<div> <span class="badge badge-success">Active</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 22},
  {tenantInfoTemplate: '<div class=""><div><div><span>swamiraj</span></div…an class="text-muted">samiraj </span></div></div>', statusTemplate: '<div><span class="badge badge-secondary">Inactive</span></div>', editionDisplayName: 'Standard', editionTemplate: '<div class="d-flex align-items-center"><div class=…tandard"></div><div class="">Standard</div></div>', id: 21}],
  editionList:[{isFree: null, value: '', displayText: 'Not assigned', isSelected: true},
  {isFree: true, value: '1', displayText: 'Standard', isSelected: false},
  {isFree: false, value: '5', displayText: 'apple', isSelected: false},
  {isFree: false, value: '6', displayText: 'Apple1', isSelected: false},
  ],
   tenantHeaders: [
    { displayName: 'Tenant', key: 'tenantInfoTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },  
    { displayName: 'Edition', key: 'editionTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Status', key: 'statusTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
   
  ]
}
