import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsDatepickerModule, RdsIconModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompLoginAttemptsComponent } from './rds-comp-login-attempts.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Components/Login Attempts',
  component: RdsCompLoginAttemptsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, NgxTranslateModule, RdsDatepickerModule, RdsSelectListModule,BrowserAnimationsModule,RdsIconModule,BsDatepickerModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompLoginAttemptsComponent> = (args: RdsCompLoginAttemptsComponent) => ({
  props:{
    ...args
  }
});
export const Default = Template.bind({});

Default.args={
  listItemsResult: [
  { value: '', displayText: 'All'},
  { value: 'Success', displayText: 'Success'},
  { value: 'InvalidUserNameOrEmailAddress', displayText: 'Invalid Username or email Address'},
  { value: 'InvalidPassword', displayText: 'Invalid Password'},
  { value: 'UserIsNotActive', displayText: 'User is Not Active'},
  { value: 'InvalidTenancyName', displayText: 'Invalid Tenancy name'},
  { value: 'TenantIsNotActive', displayText: 'Tenant Is Not Active'},
  { value: 'UserEmailIsNotConfirmed', displayText: 'User Email Is Not Confirmed'},
  { value: 'UnknownExternalLogin', displayText: 'Unknown External Login'},
  { value: 'LockedOut', displayText: 'Locked Out'},
  { value: 'UserPhoneNumberIsNotConfirmed', displayText: 'User PhoneNumber IsNot Confirmed'}
 ]
}
