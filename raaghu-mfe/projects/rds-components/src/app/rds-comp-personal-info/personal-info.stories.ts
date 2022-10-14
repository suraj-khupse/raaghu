import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsAvatarModule } from '@libs/rds-avatar';
import { RdsButtonModule } from '@libs/rds-button';
import {
  RdsFileUploaderModule,
  RdsInputModule,
  RdsTextEditorModule,
} from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsSelectListModule } from '@libs/rds-select-list';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompPersonalInfoComponent } from './rds-comp-personal-info.component';


export default {
  title: 'Components/ Personal Info',
  component: RdsCompPersonalInfoComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompPersonalInfoComponent],
      imports: [
        CommonModule,
        FormsModule,
        RdsLabelModule,
        RdsInputModule,
        RdsAvatarModule,
        RdsFileUploaderModule,
        RdsSelectListModule,
        RdsButtonModule,
        RdsTextEditorModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<RdsCompPersonalInfoComponent> = (args: RdsCompPersonalInfoComponent) => ({
  props: {
    ...args,
  },
});

export const personalInfo = Template.bind({});

personalInfo.args = {
    countryList: [
    { value: '1', displayText: 'India', isSelected: false },
    { value: '2', displayText: 'China', isSelected: false },
    { value: '3', displayText: 'Canada', isSelected: false },
    { value: '4', displayText: 'Japan', isSelected: false },
    { value: '5', displayText: 'Australia', isSelected: false },
    { value: '6', displayText: 'USA', isSelected: false },
    { value: '7', displayText: 'UK', isSelected: false },
  ],
  jobRoleList: [
    { value: '1', displayText: 'Manager', isSelected: false },
    { value: '2', displayText: 'Assistant', isSelected: false },
    { value: '3', displayText: 'HR', isSelected: false },
    { value: '4', displayText: 'Business analyst', isSelected: false },
  ],

  timezones: [
    { value: '1', displayText: 'Time Zone 1', isSelected: false },
    { value: '2', displayText: 'Time Zone 2', isSelected: false },
    { value: '3', displayText: 'Time Zone 3', isSelected: false },
    { value: '4', displayText: 'Time Zone 4', isSelected: false },
    { value: '5', displayText: 'Time Zone 5', isSelected: false },
     ],
};
