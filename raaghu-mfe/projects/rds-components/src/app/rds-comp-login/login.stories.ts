import { RdsLoginComponent } from './rds-comp-login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsModalModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsLabelModule } from '@libs/rds-label';

export default {
  title: 'Components/Login',
  component: RdsLoginComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsInputModule,
        RdsCheckboxModule,
        NgxTranslateModule.forRoot(),
        RdsModalModule,
        RdsLabelModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsLoginComponent> = (args: RdsLoginComponent) => ({
  props:{
    ...args
  }
});

export const Default = Template.bind({});

Default.args ={
  userNameData:[],
 userPasswordData: '',
 rememeberMe: '',
 TenantNameData: '',
 TenancyName: '',
 TenantName: '',
 UserName: 'Email/Username',
 Password: 'Password',
 userNameInputType:  'email',
 userPasswordInputType: ''
}
