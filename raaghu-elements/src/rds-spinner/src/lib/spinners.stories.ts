import { Story, Meta } from '@storybook/angular';
import { RdsSpinnerComponent } from './rds-spinner.component';

export default {
  title: 'Elements/Spinner',
  component: RdsSpinnerComponent,
  argTypes: {   
  },
} as Meta;
const Template: Story<RdsSpinnerComponent> = (args: RdsSpinnerComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {
  spinnerType: false,
};

