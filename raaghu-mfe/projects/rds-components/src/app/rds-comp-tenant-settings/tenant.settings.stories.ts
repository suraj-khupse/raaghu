import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompTenantSettingsComponent } from './rds-comp-tenant-settings.component';


export default {
  title: 'Components/Tenant Settings',
  component: RdsCompTenantSettingsComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompTenantSettingsComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule,RdsIconModule, 
        SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,RdsOffcanvasModule,RdsNavTabModule,
        RdsSelectListModule,RdsCheckboxModule,RdsDatepickerModule,
      ],
      providers: [
        FormBuilder,
       
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompTenantSettingsComponent> = (args: RdsCompTenantSettingsComponent) => ({
    props:{
      ...args
  }
  });
  export const TenantSettings = Template.bind({});

  TenantSettings.args = {
    tenantSettingsInfo: {},
    isTenantInfoValid:false,
    showEditData:false

}
