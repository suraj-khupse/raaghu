import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsDropdownlistModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompTenantInformationComponent } from './rds-comp-tenant-information.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Components/Tenant Information',
  component: RdsCompTenantInformationComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompTenantInformationComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsModalModule, RdsPaginationModule,RdsIconModule, 
        SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,RdsOffcanvasModule,RdsNavTabModule,
        RdsSelectListModule,RdsCheckboxModule,RdsDatepickerModule,BsDatepickerModule.forRoot(), BrowserAnimationsModule, RdsDropdownlistModule
      ],
      providers: [
        FormBuilder,
       
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompTenantInformationComponent> = (args: RdsCompTenantInformationComponent) => ({
    props:{
      ...args
  }
  });
  export const Default = Template.bind({});

  Default.args = {
    tenantData: {},
    editionList:[{isFree: null, value: '', some: 'Not assigned', isSelected: true},
    {isFree: true, value: '1', some: 'Standard', isSelected: false},
    {isFree: false, value: '5', some: 'apple', isSelected: false},
    {isFree: false, value: '6', some: 'Apple1', isSelected: false},
    ],
}