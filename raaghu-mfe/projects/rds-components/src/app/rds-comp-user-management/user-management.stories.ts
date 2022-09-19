import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompUserManagementComponent } from './rds-comp-user-management.component';

export default {
  title: 'Components/User Management',
  component: RdsCompUserManagementComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsInputModule,
        RdsCheckboxModule,
        NgxTranslateModule.forRoot()
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompUserManagementComponent> = (args: RdsCompUserManagementComponent) => ({
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args = {
  Usermanagementsettings: [{
    isEmailConfirmationRequiredForLogin: false,
    useCaptchaOnLogin: false,
    isCookieConsentEnabled: false,
    sessionTimeOutSettings: false,
    allowUsingGravatarProfilePicture: false,
    smsVerificationEnabled: false
  }]
}
