import { Story, Meta } from '@storybook/angular';
import { componentWrapperDecorator } from '@storybook/angular';
import { RdsDoubleRangeComponent } from './rds-double-range.component';


export default {
  title: 'Elements/Range',
  component: RdsDoubleRangeComponent,
  argTypes: {

  },
  decorators: [componentWrapperDecorator((story: any) => `<div style="margin: 3em">${story}</div>`)]
} as Meta

const Template: Story<RdsDoubleRangeComponent> = (args: RdsDoubleRangeComponent) => ({
  props: args,

});
export const DoubleRange = Template.bind({})
DoubleRange.args = {}
