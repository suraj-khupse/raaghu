import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsDropdownlistModule, RdsFabMenuModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { AppSessionService, NgxTranslateModule, SharedModule, UserAuthService } from '@libs/shared';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RdsCompTenantInformationModule } from 'projects/rds-components/src/app/rds-comp-tenant-information/rds-comp-tenant-information.module';
import { RdsCompTenantSettingsModule } from 'projects/rds-components/src/app/rds-comp-tenant-settings/rds-comp-tenant-settings.module';
import { RdsPermissionTreeModule } from 'projects/rds-components/src/app/rds-comp-permission-tree/rds-permission-tree.module';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';


export default {
  title: 'Pages/Tenant',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule,RdsIconModule, 
        SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,RdsOffcanvasModule,RdsNavTabModule,
        RdsSelectListModule,RdsCheckboxModule,RdsDatepickerModule,BsDatepickerModule.forRoot(), BrowserAnimationsModule,
        RdsCompTenantInformationModule,RdsCompTenantSettingsModule,RdsPermissionTreeModule,RdsCompAlertModule,RdsDropdownlistModule,
        RdsCompDataTableModule, StoreModule.forRoot({}),
      ],
      providers: [
        FormBuilder,
        TranslateService,
        TranslateStore,
        UserAuthService,
        AppSessionService
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
