import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsBigNumberWidgetComponent } from './rds-big-number-widget.component';

export default {

  title: 'Elements/Big Number',

  component: RdsBigNumberWidgetComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule],
    }),
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white'],
      control: { type: 'select' }
    },
    subTitleColorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'white'],
      control: { type: 'select' }
    },
    textAlign: {
      options: ['text-start', 'text-center', 'text-end'],
      control: { type: 'select' }
    },
  },

} as Meta

const Template: Story<RdsBigNumberWidgetComponent> = (args: RdsBigNumberWidgetComponent) => ({
  props: args,
  template: `<div class="col-sm-3">
<rds-big-number-widget [bigNumber]="'$13,20,21'" [subText]="'+$1,203'"
[icon]="'triangle_up'"  [iconHeigt]="'20px'" [iconWidth]="'20px'" [colorVariant]="colorVariant" [subTitleColorVariant]="subTitleColorVariant" [textAlign]="textAlign"></rds-big-number-widget>
  </div>`
});

export const Default = Template.bind({})
Default.args = {
  colorVariant: 'white',
  textAlign: 'text-start',
  subTitleColorVariant: 'danger'
}
