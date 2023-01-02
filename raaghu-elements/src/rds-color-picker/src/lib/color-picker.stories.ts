import { Story, Meta } from '@storybook/angular';
import { RdsColorPickerComponent } from './rds-color-picker.component';

export default {
    title: 'Elements/Color Picker',
    component: RdsColorPickerComponent,
    argTypes: {
        position: {
          options: ['start','end','top','bottom'],
          control: { type: 'radio' },
        },
      }
} as Meta

const Template: Story<RdsColorPickerComponent> = (args: RdsColorPickerComponent) => ({
    props: args,

});

export const Default = Template.bind({})
Default.parameters = { controls: { include: ['label', 'value', 'disabled', 'position','onItemClick'] } };
Default.args = {
    label: 'Color picker',
    value: '#800080',
    disabled: false,
    position: 'start'
}
