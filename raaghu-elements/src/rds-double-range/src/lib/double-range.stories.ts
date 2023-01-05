import { Story, Meta } from '@storybook/angular';
import { componentWrapperDecorator } from '@storybook/angular';
import { RdsDoubleRangeComponent } from './rds-double-range.component';


export default {
  title: 'Elements/Double Range',
  component: RdsDoubleRangeComponent,
  decorators: [componentWrapperDecorator((story: any) => `<div class="px-3">${story}</div>`)],
  argTypes: {
    role: {table: {disable: true,},},
  }
} as Meta

const Template: Story<RdsDoubleRangeComponent> = (args: RdsDoubleRangeComponent) => ({
  props: { ...args },
});
export const DoubleRange = Template.bind({})
DoubleRange.parameters = { controls: { include: ['role', 'val1', 'val2', 'min', 'max','rangeValueOne','rangeValueTwo'] } };
DoubleRange.args = {
  role: 'Default',
  val1: 0,
  val2: 100,
  /* min: 0,
  max: 100 */
}

export const DoubleRangeOnScale = Template.bind({})
DoubleRangeOnScale.parameters = { controls: { include: ['role', 'val1', 'val2', 'min', 'max','rangeValueOne','rangeValueTwo'] } };
DoubleRangeOnScale.args = {
  role: 'Double Range On Scale',
  val1: 0,
  val2: 100,
/*   min: 0,
  max: 100 */
}

export const DoubleRangeBelowScale = Template.bind({})
DoubleRangeBelowScale.parameters = { controls: { include: ['role', 'val1', 'val2', 'min', 'max','rangeValueOne','rangeValueTwo'] } };
DoubleRangeBelowScale.args = {
  role: 'Double Range Below Scale',
  val1: 0,
  val2: 100,
  /* min: 0,
  max: 100 */
}
