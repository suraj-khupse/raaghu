
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsWidgetComponent } from './rds-widget.component';

export default {
  title: 'Elements/Widget',
  component: RdsWidgetComponent,
  decorators: [
    moduleMetadata({
      imports: [RdsIconModule],
    }),
  ],
  argTypes: {
    headerColor: { control: { type: 'color' } },
    headerTitle: { control: { type: 'string' } },
    isRefreshRequired: { control: { type: 'radio' } },
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white'],
      control: { type: 'select' }
    },
    //cardheight: {
    //  options: ['card-stretch', 'card-stretch-half'],
    //  control: { type: 'select' }
    //},
  },

} as Meta;

const Template: Story<RdsWidgetComponent> = (args: RdsWidgetComponent) => ({
  props: args,
 template : `<rds-widget
headerTitle="Widget"
 [isRefreshRequired]="true"
 [colorVariant]="colorVariant"
 (onRefresh)="onRefresh($event)"
>
<div class="my-3"> The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of
 occupying the spaces of a website</div>
</rds-widget>`
});

export const Widget = Template.bind({})
Widget.args = {
  headerTitle: 'Widget',
  isRefreshRequired: true,
  colorVariant: 'light'
}
