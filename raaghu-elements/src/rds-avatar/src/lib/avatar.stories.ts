import { Story, Meta } from '@storybook/angular';
import { RdsAvatarComponent } from './rds-avatar.component';


export default {
  title: 'Elements/Avatar',
  component: RdsAvatarComponent,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: 'radio'
    },
    colorVariant: {
      options: ['success', 'warning', 'light', 'danger', 'info', 'dark', 'secondary'],
      control: { type: 'select' }
    }
  },
} as Meta;

const Template: Story<RdsAvatarComponent> = (args: RdsAvatarComponent) => ({
  props: args,

});

const avatarWithInfoTemplate: Story<RdsAvatarComponent> = (args: RdsAvatarComponent) => ({
  props: {
    ...args
  },
  template: `<rds-avatar
[firstName]="firstName" 
[lastName]="lastName" 
[colorVariant]="colorVariant"
[verticallyAlligned]="verticallyAlligned"
>
{{firstName}} {{lastName}}
<div>
Admin
</div>

</rds-avatar>`

});

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  firstName: 'Admin',
  lastName: 'Admin',
  colorVariant: 'warning'
};

export const profile = Template.bind({});
profile.args = {
  size: 'medium',
  withProfilePic: true,
  profilePic: 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1'
};

export const avtarWithHorizontallyAllignedInfo = avatarWithInfoTemplate.bind({});
avtarWithHorizontallyAllignedInfo.args = {
  size: 'medium',
  firstName: 'Admin',
  lastName: 'Admin',
  colorVariant: 'warning',
};

export const avtarWithVerticallyAllignedInfo = avatarWithInfoTemplate.bind({});
avtarWithVerticallyAllignedInfo.args = {
  size: 'medium',
  firstName: 'Admin',
  lastName: 'Admin',
  colorVariant: 'warning',
  verticallyAlligned: true
};



// Default.argTypes = {
//   colorVariant: {
//     options: ['success', 'warning', 'light', 'danger', 'info', 'dark', 'secondary'],
//     control: { type: 'select' }
//   }
// }
