import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsInputModule, RdsLabelModule, RdsNavTabModule } from '@libs/rds-elements';
import { RdsMysettingsComponent } from './rds-comp-mysettings.component';
import { NgxTranslateModule } from '@libs/shared';

export default {
  title: 'Components/My Settings',
  component: RdsMysettingsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsInputModule, NgxTranslateModule,RdsLabelModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsMysettingsComponent> = (args: RdsMysettingsComponent) => ({
  props:{
    ...args
  }
});

export const Default = Template.bind({});

Default.args={
  ProfileData:  {
    ProfileName: 'Wai Technologies',
    EmailAddress: 'contact@waiin.com',
    UserName: 'admin',
    CurrentPassword: '',
    NewPassword: '',
    ConFNewPassword: ''
  }
}