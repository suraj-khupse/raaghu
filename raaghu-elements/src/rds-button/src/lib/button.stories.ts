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

    click: { action: 'clicked' },
    color: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
    tooltipPlacement: {
      options: ['top', 'bottom', 'right', 'left'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'large', 'medium'],
      control: { type: 'select' }
    }
  }
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<RdsButtonComponent> = (args: RdsButtonComponent) => ({
  props: args,
});

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/angular/writing-stories/args
// Primary.args = {
//   label: 'Button',
// };

// export const Sec = Template.bind({});
// // More on args: https://storybook.js.org/docs/angular/writing-stories/args
// Primary.args = {
//   label: 'Button',
// };

export const Basic = Template.bind({});
Basic.args = {
  colorVariant: 'primary',
  label: 'button',
  block: false,
  size: 'medium',
};

export const Disable = Template.bind({});
Disable.args = {
  label: 'Disable',
  colorVariant: 'primary',
  disabled: true,
  block: false,
  size: 'medium',

};

export const Outline = Template.bind({});
Outline.args = {
  outlineButton: true,
  colorVariant: 'primary',
  label: 'outline',
  block: false,
  size: 'medium',

};

// 
// export const CloseButton = Template.bind({});
// CloseButton.args = {
//   iconClass: 'bi bi-x-lg',
//   colorType: 'primary',
//   label: '',
//   size: 'medium'
// };

export const With_Icon = Template.bind({});
With_Icon.args = {
  roundedButton: false,
  roundedCorner: false,
  icon: 'plus',
  colorVariant: 'primary',
  label: '',
  block: false,
  size: 'medium',

};

export const Icon_With_label = Template.bind({});
Icon_With_label.args = {
  roundedButton: false,
  roundedCorner: false,
  icon: 'plus',
  colorVariant: 'primary',
  label: 'button',
  block: false,
  size: 'medium',
  iconHeight: '18px',
  iconWidth: '18px'

};
export const Tooltip = Template.bind({});
Tooltip.args = {
  colorVariant: 'primary',
  label: 'button',
  block: false,
  size: 'medium',
  tooltipPlacement: 'bottom',
  tooltipTitle: 'This is tooltip'
};

// export const Toggle = Template.bind({});
// Toggle.args = {
//   toggleButton: true,
//   label: 'check button',
//   colorType: 'primary',
// };
