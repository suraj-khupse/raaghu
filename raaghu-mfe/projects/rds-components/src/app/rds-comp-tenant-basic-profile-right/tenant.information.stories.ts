import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompTenantBasicProfileRightComponent } from './rds-comp-tenant-basic-profile-right.component';

export default {
  title: 'Components/Tenant Information',
  component: RdsCompTenantBasicProfileRightComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompTenantBasicProfileRightComponent],
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
const Template: Story<RdsCompTenantBasicProfileRightComponent> = (args: RdsCompTenantBasicProfileRightComponent) => ({
    props:{
      ...args
  }
  });
  export const TenantBasics = Template.bind({});

  TenantBasics.args = {
    tenantData: {},
    editionList:[
    {isFree: true, value: '1', displayText: 'Standard', isSelected: false},
    {isFree: false, value: '2', displayText: 'Advanced', isSelected: false},
    ],
}