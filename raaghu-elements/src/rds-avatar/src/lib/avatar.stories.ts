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
      options: ['primary','success', 'warning', 'light', 'danger', 'info', 'dark', 'secondary'],
      control: { type: 'select' }
    },
    height: { control: { type: 'text' } },
    verticallyAlligned: {table: {disable: true,},},
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
[size]="size"
[colorVariant]="colorVariant"
[verticallyAlligned]="verticallyAlligned"
>
{{firstName}} {{lastName}}


</rds-avatar>`

});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['size', 'firstName', 'lastName', 'colorVariant'] } };
Default.args = {
  size: 'medium',
  firstName: 'Allen',
  lastName: 'Russel',
  colorVariant: 'warning'
};

export const profile = Template.bind({});
profile.parameters = { controls: { include: ['height', 'withProfilePic','firstName', 'lastName', 'profilePic','verticallyAlligned','subTitle','profileContentAlign'] } };
profile.args = {
  height: '15',
  withProfilePic: true,
  firstName: 'Allen',
  lastName: 'Russel',
  profilePic: 'https://t4.ftcdn.net/jpg/04/10/43/77/240_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg',
  verticallyAlligned:false,
  subTitle:'host',
  profileContentAlign:true
};

export const avtarWithHorizontallyAllignedInfo = avatarWithInfoTemplate.bind({});
avtarWithHorizontallyAllignedInfo.parameters = { controls: { include: ['size', 'firstName', 'lastName', 'colorVariant', 'verticallyAlligned'] } };
avtarWithHorizontallyAllignedInfo.args = {
  size: 'medium',
  firstName: 'King',
  lastName: 'John',
  colorVariant: 'warning',
  verticallyAlligned: false
};

export const avatarWithVerticallyAllignedInfo = avatarWithInfoTemplate.bind({});
avatarWithVerticallyAllignedInfo.parameters = { controls: { include: ['size', 'firstName', 'lastName', 'colorVariant', 'verticallyAlligned'] } };
avatarWithVerticallyAllignedInfo.args = {
  size: 'medium',
  firstName: 'James',
  lastName: 'Potter',
  colorVariant: 'warning',
  verticallyAlligned: true
};



// Default.argTypes = {
//   colorVariant: {
//     options: ['success', 'warning', 'light', 'danger', 'info', 'dark', 'secondary'],
//     control: { type: 'select' }
//   }
// }
