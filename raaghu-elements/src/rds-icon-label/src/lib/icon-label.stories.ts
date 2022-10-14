
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
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    iconposition: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    },
  },
} as Meta;

const Template: Story<RdsIconLabelComponent> = (args: RdsIconLabelComponent) => ({
  props: args,
  template: `<rds-icon-label 
  [icon]="icon"
  [colorVariant]="colorVariant"
  [label]="label"
  [size] = "size"
  [height] = "height"
  [width]="width">
  </rds-icon-label>`

});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['label', 'icon', 'size', 'height', 'width', 'colorVariant'] } };
Default.args = {
  label: "Contact Number",
  icon: 'phone',
  size: 'small',
  height: '13px',
  width: '13px',
  colorVariant: undefined
}

const withPositionTemplate: Story<RdsIconLabelComponent> = (args: RdsIconLabelComponent) => ({
  props: args,
  template: `<rds-icon-label 
  [iconposition]="iconposition"
  [icon]="icon"
  [colorVariant]="colorVariant"
  [label]="label"
  [size] = "size"
  [height] = "height"
  [iconposition]="iconposition"
  [width]="width">
  </rds-icon-label>`

});

export const withPosition = withPositionTemplate.bind({});
withPosition.parameters = { controls: { include: ['label', 'icon', 'size', 'height', 'width', 'colorVariant', 'iconposition'] } };
withPosition.args = {
  label: "Contact Number",
  icon: 'phone',
  size: 'small',
  height: '13px',
  width: '13px',
  colorVariant: undefined,
  iconposition: 'left'
}

