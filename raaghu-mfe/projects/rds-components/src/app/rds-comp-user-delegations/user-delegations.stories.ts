import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCardModule, RdsCheckboxModule, RdsDatepickerModule, RdsDropdownlistModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsUserDelegationsComponent } from './rds-comp-user-delegations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { props } from '@ngrx/store';
import { RdsLabelModule } from '@libs/rds-label';

export default {
  title: 'Components/User Delegations',
  component: RdsUserDelegationsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, NgxTranslateModule, RdsSelectListModule, RdsDatepickerModule, RdsCheckboxModule, RdsInputModule, BrowserAnimationsModule,RdsLabelModule,RdsDropdownlistModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsUserDelegationsComponent> = (args: RdsUserDelegationsComponent) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args = {
    userlist: [],
    rdsDeligateTableHeader: [],
    rdsDeligateTableData: [],
    userList:[
      {value: "1", some: "Abhijeet Jawale (jawale@gmail.com)", isSelected: false}
      ,{value: "2", some: "Default demo (default@waiin.com)", isSelected: false}
      ,{value: "3", some: "Ketan kalake (ketan.kalake@gmail.com)", isSelected: false}
      ,{value: "4", some: "Nishant Talwar (nishant.talwar@waiin.com)", isSelected: false}
      ,{value: "5", some: "Rupali Dahifale (rupa@waiin.com)", isSelected: false}
      ,{value: "6", some: "Sonali Chaudhari (sonali.chaudhari@waiin.com)", isSelected: false}
      ,{value: "7", some: "Sunny Jack (sunny@waiin.com)", isSelected: false}
      ,{value: "8", some: "Swami Anarse (sunny@waiin.com)", isSelected: false}
      ,{value: "9", some: "test demo (test@gmail.com)", isSelected: false}
      ,{value: "8", some: "test2 test (test2@gmail.com", isSelected: false}
      ],
    tabClosed: false,
    recordsPerpage: 10,
    pagination: false,
    tableWidth: '',
    buttonSpinner: true,
    tableStyle: ''
}