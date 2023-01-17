// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
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
  parameters: { 
    actions: {
      handles: ['click .btn'],
     }
   },
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
    tooltipPlacement: {
      options: ['top', 'bottom', 'right', 'left'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    buttonType: { table: { disable: true, }, },
    // onClick: { actions: 'clicked' },
  }
} as Meta;

const Template: Story<RdsButtonComponent> = (args: RdsButtonComponent) => ({
  props: args,
});

const tooltipTemplate: Story<RdsButtonComponent> = (args: RdsButtonComponent) => ({
  props: args,
  template: `<div class="row m-5">
  <div class="col-md-12 text-center">
<rds-button  [label]="label" [colorVariant]="colorVariant" [size]="size" 
[tooltipTitle]="tooltipTitle" [tooltipPlacement]="tooltipPlacement"></rds-button>
</div>
</div>`
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['buttonId','colorVariant', 'label', 'size','onClick'] } };
Default.args = {
  buttonId:'',
  colorVariant: 'primary',
  label: 'button',
  size: 'medium',
  //buttonType: 'labelOnly'
};

export const disable = Template.bind({});
disable.parameters = { controls: { include: ['buttonId','colorVariant', 'label', 'size', 'isDisabled','onClick'] } };
disable.args = {
  buttonId:'',
  colorVariant:'primary',
  label: 'Disable',
  isDisabled: true,
  size: 'medium',
  //buttonType: 'labelOnly'
};

export const outline = Template.bind({});
outline.parameters = { controls: { include: ['buttonId','colorVariant', 'label', 'size', 'isOutline','onClick'] } };
outline.args = {
  buttonId:'',
  isOutline: true,
  colorVariant: 'primary',
  label: 'outline',
  size: 'medium',
  //buttonType: 'labelOnly'
};


export const rounded_Button_With_Icon = Template.bind({});
rounded_Button_With_Icon.parameters = { controls: { include: ['buttonId','isFabIcon', 'colorVariant', 'size', 'icon', 
'iconHeight', 'iconWidth', 'isIconFill', 'tooltipPlacement', 'tooltipTitle','onClick'] } };
rounded_Button_With_Icon.args = {
  buttonId:'',
  icon: 'plus',
  colorVariant: 'primary',
  size: 'medium',
  iconHeight: '18px',
  iconWidth: '18px',
  isIconFill: false,
  isFabIcon: true,
  //buttonType: 'iconOnly',
  tooltipPlacement: 'right',
  tooltipTitle: 'This is tooltip',
};


export const rounded_Corner_Button = Template.bind({});
rounded_Corner_Button.parameters = { controls: { include: ['buttonId','isRounded', 'colorVariant', 'label', 'size','onClick'] } };
rounded_Corner_Button.args = {
  buttonId:'',
  label: 'Rounded Corner',
  colorVariant: 'primary',
  size: 'medium',
  isRounded: true,
  //buttonType: 'labelOnly'
};


export const block_Button = Template.bind({});
block_Button.parameters = { controls: { include: ['buttonId','block', 'colorVariant', 'label', 'size','onClick'] } };
block_Button.args = {
  buttonId:'',
  colorVariant: 'primary',
  size: 'medium',
  block: true,
  label: 'Block',
  //buttonType: 'labelOnly'
};

export const with_Icon_And_Label = Template.bind({});
with_Icon_And_Label.parameters = { controls: { include: ['buttonId','colorVariant', 'label', 'size', 'icon', 'iconHeight', 'iconWidth', 'isIconFill', 'onClick'] } };
with_Icon_And_Label.args = {
  buttonId:'',
  icon: 'plus',
  colorVariant: 'primary',
  label: 'button',
  size: 'medium',
  iconHeight: '15px',
  iconWidth: '15px',
  isIconFill: false,
  //buttonType: 'iconLabel'
};
export const tooltip = tooltipTemplate.bind({});
tooltip.parameters = { controls: { include: ['buttonId','colorVariant', 'label', 'size', 'tooltipPlacement', 'tooltipTitle','onClick' ] } };
tooltip.args = {
  buttonId:'',
  colorVariant: 'primary',
  label: 'button',
  size: 'medium',
  tooltipPlacement: 'right',
  tooltipTitle: 'This is tooltip',
  //buttonType: 'labelOnly'
};


