// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsButtonComponent } from './rds-button.component';

export default {
  title: 'Elements/Button',
  component: RdsButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, RdsIconModule],
    }),
  ],

  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
    tooltipPlacement: {
      options: ['top', 'bottom', 'right', 'left'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    }
  }
} as Meta;

const Template: Story<RdsButtonComponent> = (args: RdsButtonComponent) => ({
  props: args,
});

const tooltipTemplate: Story<RdsButtonComponent> = (args: RdsButtonComponent) => ({
  props: args,
  template: `<div class="row m-5">
  <div class="col-md-12 text-center">
<rds-button [label]="label" [colorVariant]="colorVariant" [size]="size" [tooltipTitle]="tooltipTitle" [tooltipPlacement]="tooltipPlacement"></rds-button>
</div>
</div>`
});



export const Default = Template.bind({});
Default.parameters = { controls: { include: ['colorVariant', 'label', 'size'] } };
Default.args = {
  colorVariant: 'primary',
  label: 'button',
  size: 'medium',
};

export const disable = Template.bind({});
disable.parameters = { controls: { include: ['colorVariant', 'label', 'size', 'disabled'] } };
disable.args = {
  label: 'Disable',
  disabled: true,
  size: 'medium',

};

export const outline = Template.bind({});
outline.parameters = { controls: { include: ['colorVariant', 'label', 'size', 'outlineButton'] } };
outline.args = {
  outlineButton: true,
  colorVariant: 'primary',
  label: 'outline',
  size: 'medium',
};


export const rounded_Button_With_Icon = Template.bind({});
rounded_Button_With_Icon.parameters = { controls: { include: ['roundedButton', 'colorVariant', 'label', 'size', 'icon', 'iconHeight', 'iconWidth', 'iconFill', 'iconStroke'] } };
rounded_Button_With_Icon.args = {
  icon: 'plus',
  colorVariant: 'primary',
  size: 'medium',
  iconHeight: '18px',
  iconWidth: '18px',
  iconFill: false,
  iconStroke: true,
  roundedButton: true
};


export const rounded_Corner_Button = Template.bind({});
rounded_Corner_Button.parameters = { controls: { include: ['roundedCorner', 'colorVariant', 'label', 'size'] } };
rounded_Corner_Button.args = {
  label: 'Rounded Corner',
  colorVariant: 'primary',
  size: 'medium',
  roundedCorner: true
};


export const block_Button = Template.bind({});
block_Button.parameters = { controls: { include: ['block', 'colorVariant', 'label', 'size'] } };
block_Button.args = {
  colorVariant: 'primary',
  size: 'medium',
  block: true,
  label: 'Block'
};

export const with_Icon_And_Label = Template.bind({});
with_Icon_And_Label.parameters = { controls: { include: ['colorVariant', 'label', 'size', 'icon', 'iconHeight', 'iconWidth', 'iconFill', 'iconStroke'] } };
with_Icon_And_Label.args = {
  icon: 'plus',
  colorVariant: 'primary',
  label: 'button',
  size: 'medium',
  iconHeight: '18px',
  iconWidth: '18px',
  iconFill: false,
  iconStroke: true

};
export const tooltip = tooltipTemplate.bind({});
tooltip.parameters = { controls: { include: ['colorVariant', 'label', 'size', 'tooltipPlacement', 'tooltipTitle'] } };
tooltip.args = {
  colorVariant: 'primary',
  label: 'button',
  size: 'medium',
  tooltipPlacement: 'right',
  tooltipTitle: 'This is tooltip'
};


