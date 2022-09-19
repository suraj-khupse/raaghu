
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconLabelComponent } from './rds-icon-label.component';

export default {
  title: 'Elements/Icon Label',
  component: RdsIconLabelComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, RdsIconModule],
    }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsIconLabelComponent> = (args: RdsIconLabelComponent) => ({
  props: args,
  template: `<rds-icon-label 
  [iconposition]="iconposition"
  [icon]="icon"
  [label]="label"
  [size] = "size"
  [iconSize] = "iconSize"
  >
  </rds-icon-label>`

});

export const Default = Template.bind({});
Default.args = {
  label: "" ,
  icon : '',
  iconposition : 'left',
  size : 'small',
  iconSize : 'small'
}

