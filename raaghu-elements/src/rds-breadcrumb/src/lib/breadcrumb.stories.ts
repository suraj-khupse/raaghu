import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsBreadcrumbComponent } from './rds-breadcrumb.component';
// import { RdsIconModule } from '@libs/rds-elements';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
export default {

  title: 'Elements/Breadcrumbs',

  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, RdsIconModule],
    }),
  ],
  component: RdsBreadcrumbComponent,
  argTypes: {

    //click: { action: 'clicked' },
    //colorType: {
    //  options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    //  control: { type: 'select' }
    //},
    //size: {
    //  options: ['small', 'large', 'medium'],
    //  control: { type: 'select' }
    //}
    //  role: {
    //  options: ['basic', 'Advanced', 'withDivider'],
    //  control: { type: 'select' }
    // }
  },
  parameters: { 
    actions: {
      handles: ['click'],
     }
   },
} as Meta;

const Template: Story<RdsBreadcrumbComponent> = (args: RdsBreadcrumbComponent) => ({
  props: args,

});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['role', 'breadcrumbsItems','onItemClick'] } };
Default.args = {
  role: 'basic',
  breadcrumbsItems: [{ name: 'Home', route: '/home', icon: 'home', iconWidth: '15px', iconHeight: '15px', disabled: true },
  { name: 'About', route: '/About', icon: 'information', iconWidth: '15px', iconHeight: '15px', disabled: true },
  { name: 'Contact', route: '/Contact', icon: 'phone', iconWidth: '15px', iconHeight: '15px', disabled: false },
  ]
}
