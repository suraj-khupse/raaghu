import { Story, Meta } from '@storybook/angular';
import { RdsRadioButtonComponent } from './rds-radio-button.component';

export default {
  title: 'Elements/Radio Button',
  component: RdsRadioButtonComponent,
  argTypes: {

  }
} as Meta
const Template: Story<RdsRadioButtonComponent> = (args: RdsRadioButtonComponent) => ({
  props: args,
});
export const Default = Template.bind({})
Default.args = {
  itemList : [
    {
      id: 1,
      label: "Radio Button ",
      checked: false,
      name:'Radio-Button',
    },
    {
      id: 2,
      label: "Radio Button 2",
      checked: false,
      name:'Radio-Button',
    },
    {
      id: 3,
      label: "Radio Button 3",
      checked: true,
      name:'Radio-Button',
    },    
  ]
}
