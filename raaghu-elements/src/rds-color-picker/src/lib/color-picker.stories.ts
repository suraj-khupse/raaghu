import { Story, Meta } from '@storybook/angular';
import { RdsColorPickerComponent } from './rds-color-picker.component';

export default {
    title: 'Elements/Color Picker',
    component: RdsColorPickerComponent,
} as Meta

const Template: Story<RdsColorPickerComponent> = (args: RdsColorPickerComponent) => ({
    props: args,

});

export const Default = Template.bind({})
Default.args = {
   
    label: 'Color picker',
    value: '#800080',
    disabled: false,
    
}
