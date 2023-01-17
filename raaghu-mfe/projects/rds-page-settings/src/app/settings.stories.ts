import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsCounterModule, RdsDropdownlistComponent, RdsDropdownlistModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsLabelModule, RdsNavTabModule, RdsPaginationModule, RdsSelectListModule, RdsTextareaModule } from '@libs/rds-elements';
import { AlertService, NgxTranslateModule, SharedModule } from '@libs/shared';
import { APP_BASE_HREF, CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { SettingEffects} from '@libs/state-management';
import { RdsCompEmailModule } from 'projects/rds-components/src/app/rds-comp-email/rds-comp-email.module';
import { RdsCompSecurityModule } from 'projects/rds-components/src/app/rds-comp-security/rds-comp-security.module';
import { RdsCompInvoiceModule } from 'projects/rds-components/src/app/rds-comp-invoice/rds-comp-invoice.module';
import { RdsCompOtherSettingsModule } from 'projects/rds-components/src/app/rds-comp-other-settings/rds-comp-other-settings.module';
import { RdsCompTenantManagementModule } from 'projects/rds-components/src/app/rds-comp-tenant-management/rds-comp-tenant-management.module';
import { RdsCompUserManagementModule } from 'projects/rds-components/src/app/rds-comp-user-management/rds-comp-user-management.module';


export default {
  title: 'Pages/Settings',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [        
        AppComponent
      ],
      imports: [       
        FormsModule,
        ReactiveFormsModule,
        RdsIconModule,
        RdsNavTabModule,
        RdsSelectListModule,
        RdsCheckboxModule,
        RdsButtonModule,
        RdsInputModule,
        RdsPaginationModule,
        CommonModule,
        StoreModule.forRoot({}),
        NgxTranslateModule.forRoot(),
        RdsLabelModule,
        RdsDropdownlistModule,
        NgxShimmerLoadingModule,
        AppRoutingModule,
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        SharedModule,
        RdsFabMenuModule,
        EffectsModule.forRoot([SettingEffects]),
        RdsTextareaModule,
        RdsCounterModule,
        RdsCompTenantManagementModule,
        RdsCompEmailModule,
        RdsCompSecurityModule,
        RdsCompInvoiceModule,
        RdsCompOtherSettingsModule,
        RdsCompUserManagementModule        
      ],
      providers: [      
      ],      
    })
  ]
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: {
    ...args
  },  
});

export const Default = Template.bind({});
Default.args = {
  editShimmer:false,
  editShimmerForUserMangement:false,
  editShimmerForSecurity:false,
  editShimmerForEmail:false,
  editShimmerForInvoice:false,
  editShimmerForOtherSettings:false,
  navtabsItems:  [
    {
      label: 'Tenant Management',
      tablink: '#tenant-management',
      ariacontrols: 'tenant-management',
    },
    {
      label: 'User Management',
      tablink: '#user-management',
      ariacontrols: 'user-management',
    },
    {
      label: 'Security',
      tablink: '#security',
      ariacontrols: 'settings',
    },
    {
      label: 'Email(SMTP)',
      tablink: '#email',
      ariacontrols: 'email',
    },
    {
      label: 'Invoice',
      tablink: '#invoice',
      ariacontrols: 'invoice',
    },
    {
      label: 'Other-settings',
      tablink: '#other-settings',
      ariacontrols: 'other-settings',
    },
  ],

  settingsTenantEditionList:[{isFree: null, value: '', displayText: 'Not assigned', isSelected: true},
    {isFree: true, value: '1', displayText: 'Standard', isSelected: false}
    ],
}
