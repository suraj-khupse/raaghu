import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsInputComponent } from './rds-input.component';

export default {
  title: 'Elements/Input',
  component: RdsInputComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, RdsIconModule],
    }),
  ],
  argTypes: {
    inputType: {
      options: ['email', 'text', 'password'],
      control: { type: 'select' },
    },
    TitleType: {
      options: ['Top', 'Bottom', 'Floating'],
      control: { type: 'select' },
    },
    tooltipPlacement: {
      options: ['top', 'bottom', 'right', 'left'],
      control: { type: 'radio' }
    },
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    readonly: { control: { type: 'boolean' } },
    value: { control: { type: 'text' } },
  },
} as Meta;

const Template: Story<RdsInputComponent> = (args: RdsInputComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  disabled: false,
  readonly: false,
  value: '',
  inputType: 'text',
  placeholder: 'Add placeholder',
  Title: '',
  TitleType: 'text',
  iconCursor: 'pointer'
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  size: 'default',
  disabled: false,
  readonly: false,
  value: '',
  inputType: 'text',
  placeholder: 'Add placeholder',
  Title: '',
  TitleType: 'text',
  tooltipPlacement: 'bottom',
  tooltipTitle: 'This is tooltip'
};