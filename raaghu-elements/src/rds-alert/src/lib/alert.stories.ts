
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsAlertComponent } from './rds-alert.component';

export default {
  title: 'Elements/Alert',
  component: RdsAlertComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule],
    }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsAlertComponent> = (args: RdsAlertComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  // showicon:false,
  dismisable: true,
  alertOpen: true,
  heading: '',
  icon: 'info',
  position: 'bottom',
  size: 'small'

}

