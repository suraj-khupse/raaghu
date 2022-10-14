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
    },
    height: { control: { type: 'text' } },

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
  firstName: 'John',
  lastName: 'Doe',
  colorVariant: 'warning',  
  
};

export const profile = Template.bind({});
profile.args = {
  size: 'medium',
  height: '15',
  withProfilePic: true,
  profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
};

export const avtarWithHorizontallyAllignedInfo = avatarWithInfoTemplate.bind({});
avtarWithHorizontallyAllignedInfo.args = {
   size: 'medium',
  firstName: 'John',
  lastName: 'Doe',
  colorVariant: 'warning',
};

export const avatarWithVerticallyAllignedInfo = avatarWithInfoTemplate.bind({});
avatarWithVerticallyAllignedInfo.args = {
  size: 'medium',
  firstName: 'John',
  lastName: 'Doe',
  colorVariant: 'warning',
  verticallyAlligned: true
};



// Default.argTypes = {
//   colorVariant: {
//     options: ['success', 'warning', 'light', 'danger', 'info', 'dark', 'secondary'],
//     control: { type: 'select' }
//   }
// }
