// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular';
import { RdsCollapseComponent } from './rds-collapse.component';

export default {
  title: 'Elements/Collapse',
  component: RdsCollapseComponent,
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
  },
} as Meta;

const Template: Story<RdsCollapseComponent> = (args: RdsCollapseComponent) => ({
  props: args,
  template: `
    <rds-collapse
    [colorVariant]="colorVariant"
    [buttonLabelOne]="buttonLabelOne"   
    [collapseIdOne]="collapseIdOne"
    [contentSectionOne]="contentSectionOne"
    [borderCard]="borderCard"
    (toggle)="toggle($event)"
    (onClose)="onClose($event)"
    (onShow)="onShow($event)"
    ></rds-collapse>`
});

//export const Basic: Story<RdsCollapseComponent> = (args) => ({
//  props: args,

//});

export const Default = Template.bind({});
Default.args = {
  colorVariant: 'primary',
  buttonLabelOne: 'Basic',
  contentSectionOne: 'Content',
  borderCard: true
};

const Multiple: Story<RdsCollapseComponent> = (args) => ({
  props: args,
  template: `
  <rds-collapse
    [colorVariant]="colorVariant"
    [buttonLabelOne]="buttonLabelOne"
    [buttonLabelTwo]="buttonLabelTwo"
    [collapseIdOne]="collapseIdOne"
    [collapseIdTwo]="collapseIdTwo"
    [multipleButtonLabel]="multipleButtonLabel"
    [contentSectionOne]="contentSectionOne"
    [contentSectionTwo]="contentSectionTwo"
    [borderCard]="borderCard"
    [multipleButton]="multipleButton"
    (toggle)="toggle($event)"
    (onClose)="onClose($event)"
    (onShow)="onShow($event)"
  ></rds-collapse>
  `,
});

export const MultipleTarget = Multiple.bind({});
MultipleTarget.args = {
  colorVariant: 'primary',
  buttonLabelOne: 'Toggle One',
  buttonLabelTwo: 'Toggle Two',
  multipleButtonLabel: 'Toggle Both',
  collapseIdOne: 'one',
  collapseIdTwo: 'two',
  contentSectionOne: 'Content One',
  contentSectionTwo: 'Content Two',
  multipleButton: true,
  borderCard: true
};
