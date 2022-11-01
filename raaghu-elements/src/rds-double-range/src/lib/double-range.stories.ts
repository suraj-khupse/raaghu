import { Story, Meta } from '@storybook/angular';
import { componentWrapperDecorator } from '@storybook/angular';
import { RdsDoubleRangeComponent } from './rds-double-range.component';


export default {
  title: 'Elements/Range',
  component: RdsDoubleRangeComponent,
  decorators: [componentWrapperDecorator((story: any) => `<div style="margin: 3em">${story}</div>`)]
} as Meta

const Template: Story<RdsDoubleRangeComponent> = (args: RdsDoubleRangeComponent) => ({
  props: {...args},
  template: `
    <rds-double-range 
      [role]="role" 
      [val1]="val1" 
      [val2]="val2" 
      [min]="min" 
      [max]="max">
    </rds-double-range>`
});
export const DoubleRange = Template.bind({})
DoubleRange.args = {
  role: 'Default',
  val1: 0,
  val2: 100,
  min: 0,
  max: 100
}

export const DoubleRangeType1 = Template.bind({})
DoubleRangeType1.args = {
  role: 'Double Range Type 1',
  val1: 0,
  val2: 100,
  min: 0,
  max: 100
}

export const DoubleRangeType2 = Template.bind({})
DoubleRangeType2.args = {
  role: 'Double Range Type 2',
  val1: 0,
  val2: 100,
  min: 0,
  max: 100
}
