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
      options: ['email', 'text', 'password', 'number'],
      control: { type: 'select' },
    },
    labelPosition: {
      options: ['top', 'bottom', 'floating'],
      control: { type: 'select' },
    },
    tooltipPlacement: {
      options: ['top', 'bottom', 'right', 'left'],
      control: { type: 'radio' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
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
Default.parameters = { controls: { include: ['size', 'label', 'inputType', 'placeholder'] } };
Default.args = {
  size: 'medium',
  inputType: 'text',
  placeholder: 'Add placeholder',
  label: 'Label',
};

export const disabled = Template.bind({});
disabled.parameters = { controls: { include: ['size', 'label', 'inputType', 'placeholder', 'disabled'] } };
disabled.args = {
  size: 'medium',
  inputType: 'text',
  placeholder: 'Add placeholder',
  label: 'Label',
  disabled: true
};
export const readonly = Template.bind({});
readonly.parameters = { controls: { include: ['size', 'label', 'inputType', 'placeholder', 'readonly'] } };
readonly.args = {
  size: 'medium',
  inputType: 'text',
  placeholder: 'Add placeholder',
  label: 'Label',
  readonly: true
};

export const withPosition = Template.bind({});
withPosition.parameters = { controls: { include: ['size', 'label', 'inputType', 'placeholder', 'labelPosition'] } };
withPosition.args = {
  size: 'medium',
  inputType: 'text',
  placeholder: 'Add placeholder',
  label: 'Label',
  labelPosition: 'top'
};

const tooltipTemplate: Story<RdsInputComponent> = (args: RdsInputComponent) => ({
  props: args,
  template: `<div class="d-flex justify-content-center justify-item-center mt-5">
  <div class="w-50">
<rds-input [label]="label" [placeholder]="placeholder" [inputType]="inputType" [size]="size" [tooltipTitle]="tooltipTitle" [tooltipPlacement]="tooltipPlacement"></rds-input>
</div>
</div>`
});
export const Tooltip = tooltipTemplate.bind({});
Tooltip.parameters = { controls: { include: ['size', 'label', 'inputType', 'placeholder', 'tooltipPlacement', 'tooltipTitle'] } };
Tooltip.args = {
  size: 'medium',
  inputType: 'text',
  placeholder: 'Add placeholder',
  label: 'Label',
  tooltipPlacement: 'bottom',
  tooltipTitle: 'This is tooltip'
};