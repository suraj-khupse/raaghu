import { Story, Meta } from '@storybook/angular';
import { RdsTextareaComponent } from './rds-textarea.component';

export default {
  title: 'Elements/Textarea',
  component: RdsTextareaComponent,
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    rows: { control: { type: 'text' } },
    readonly: { control: { type: 'boolean' } },
    value: { control: { type: 'text' } },
    tooltipPlacement: {
      options: ['top', 'bottom', 'right', 'left'],
      control: { type: 'radio' }
    },
  }
} as Meta

const Template: Story<RdsTextareaComponent> = (args: RdsTextareaComponent) => ({
  props: args,
  template: `
  <rds-textarea
    [tooltipPlacement]="tooltipPlacement"
    [tooltipTitle]="tooltipTitle"
    [placeholderText]="placeholderText"
    [label]="label"
    [value]="value"
    [isFloatingInputLabel]="isFloatingInputLabel"
    [floatinglabel]="floatinglabel" [rows]="rows">
  </rds-textarea>
`
});

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  rows: '3',
  readonly: false,
  label: 'Text area',
  placeholderText: "Add Placeholder",
}
export const Tooltip = Template.bind({});
Tooltip.args = {
  disabled: false,
  rows: '3',
  readonly: false,
  label: 'Text area',
  placeholderText: "Add Placeholder",
  tooltipPlacement: 'bottom',
  tooltipTitle: 'This is tooltip'
};
