import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsCounterModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsLabelModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompTenantFeaturesComponent } from './rds-comp-tenant-features.component';


export default {
  title: 'Components/Tenant Information',
  component: RdsCompTenantFeaturesComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompTenantFeaturesComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule,RdsIconModule, 
        SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,RdsOffcanvasModule,RdsNavTabModule,
        RdsSelectListModule,RdsCheckboxModule,RdsDatepickerModule,RdsCounterModule,RdsLabelModule
      ],
      providers: [
        FormBuilder,
       
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompTenantFeaturesComponent> = (args: RdsCompTenantFeaturesComponent) => ({
    props:{
      ...args
  }
  });
  export const TenantFeatures = Template.bind({});

  TenantFeatures.args = {
    tenantSettingsInfo: {},
    isTenantInfoValid:false,
    showEditData:false,

    editionList:[
      {isFree: true, value: '1', displayText: 'Standard', isSelected: false},
      {isFree: false, value: '2', displayText: 'Advanced', isSelected: false},
      ],

}