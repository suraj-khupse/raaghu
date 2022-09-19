import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsSearchInputComponent } from './rds-search-input.component';

export default {
  title: 'Elements/Search',
  component: RdsSearchInputComponent,
  decorators: [
    moduleMetadata({
      imports: [RdsIconModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'select' }
    },
    position: {
      options: ['top', 'bottom', 'right', 'left'],
      control: { type: 'radio' }
    },
  },
} as Meta

const Template: Story<RdsSearchInputComponent> = (args: RdsSearchInputComponent) => ({
  props: args,
});

export const Default = Template.bind({})
template:
`<rds-dropdownlist 
[size]="size"
[label]="label"
size="default" 
[placeholder]="placeholder"
[position]="position"
 [value]="value"
>`
Default.args = {

  placeholder: 'Search',
  size: 'small',

}