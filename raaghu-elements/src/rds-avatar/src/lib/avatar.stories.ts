import { Story, Meta } from '@storybook/angular';
import { RdsAvatarComponent } from './rds-avatar.component';


export default {
  title: 'Elements/Avatar',
  component: RdsAvatarComponent,
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
    // Size: {
    //   options: ['Small', 'Medium', 'Large'],
    //   control: { type: 'radio' },
    // },
  },
} as Meta;

const Template: Story<RdsAvatarComponent> = (args: RdsAvatarComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  Size: 'medium',
  WithProfilePic: true,
  FirstName: '',
  LastName: '',
  WithUserRole: false,
  userRole: '',
  VerticalTitleWithProfilePic:true,
  profilePic: "https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1",
  colorVariant: 'light'
};
