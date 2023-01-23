import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAlertComponent, RdsAvatarModule, RdsButtonModule, RdsDropdownlistModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompProfileComponent } from './rds-comp-profile.component';
import { RdsLinkedAccountsComponent } from '../rds-comp-linked-accounts/rds-comp-linked-accounts.component';
import { RdsUserDelegationsComponent } from '../rds-comp-user-delegations/rds-comp-user-delegations.component';
import { RdsCompLoginAttemptsComponent } from '../rds-comp-login-attempts/rds-comp-login-attempts.component';
import { RdsMysettingsComponent } from '../rds-comp-mysettings/rds-comp-mysettings.component';
import { RdsCompDownloadCollectionComponent } from '../rds-comp-download-collection/rds-comp-download-collection.component';

export default {
  title: 'Components/Profile',
  component: RdsCompProfileComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsLinkedAccountsComponent,RdsUserDelegationsComponent,RdsCompLoginAttemptsComponent,RdsMysettingsComponent,RdsCompDownloadCollectionComponent,RdsAlertComponent],
      imports: [
        FormsModule, ReactiveFormsModule, RdsOffcanvasModule, 
        RdsAvatarModule, RdsIconModule, RdsNavTabModule, RdsDropdownlistModule,
         RdsButtonModule, NgxTranslateModule, RdsNavTabModule, RdsPaginationModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompProfileComponent> = (args: RdsCompProfileComponent) => ({
  props:{
    ...args
}
});

export const Default = Template.bind({});
Default.args = {
  linkedAccountData : [],
  alertData : [],
  ProfileData : [{
    ProfileName: 'Wai Technologies',
    emailAddress: 'contact@waiin.com',
    userName: 'admin',
    CurrentPassword: '',
    NewPassword: '',
    ConFNewPassword: '',
    name: ''
  }
  ],
  navtabItems: [
    { label: 'Manage Linked Accounts', translationKey: 'Manage Linked Accounts', tablink: '#nav-LinkAccount', ariacontrols: 'nav-LinkAccount', Image: 'bi bi-pencil-fill', icon: 'manage_linked', subText: 'Manage accounts linked to your account', subtextTranslationKey: 'Manage accounts linked to your account', showoffcanvas: true },
    { label: 'Manage Authority Delegation', translationKey: 'Manage Authority Delegation', tablink: '#nav-Deligation', ariacontrols: 'nav-Deligation', icon: 'manage_authority', subText: 'Manage authority accounts', subtextTranslationKey: 'Manage authority accounts', showoffcanvas: true },
    { label: 'Login Attempts', translationKey: 'Login Attempts', tablink: '#nav-Attempts', ariacontrols: 'nav-Attempts', icon: 'login_attempts', subText: 'See recent login attempts for your account', subtextTranslationKey: 'See recent login attempts for your account', showoffcanvas: true },
    { label: 'My Settings', translationKey: 'My Settings', tablink: '#nav-Settings', ariacontrols: 'nav-Settings', icon: 'my_settings', subText: 'Change your account settings', subtextTranslationKey: 'Change your account settings', showoffcanvas: true },
    { label: 'Download Collected Data', translationKey: 'Download Collected Data', tablink: '#nav-DownLoad', ariacontrols: 'nav-DownLoad', icon: 'download_data', subText: 'Download data belongs to your account', subtextTranslationKey: 'Download data belongs to your account', showoffcanvas: false },
  ],
}