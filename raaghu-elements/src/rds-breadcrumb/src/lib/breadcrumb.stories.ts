import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsBreadcrumbComponent } from './rds-breadcrumb.component';
// import { RdsIconModule } from '@libs/rds-elements';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from '@libs/rds-icon';
export default {

  title: 'Elements/Breadcrumbs',

  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule,RdsIconModule],
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
} as Meta;

const Template: Story<RdsBreadcrumbComponent> = (args: RdsBreadcrumbComponent) => ({
  props: args,
 
});

export const Default = Template.bind({});
Default.args = {
  role: 'basic',
    iconShow: false,
  disabled: false,
  customBreadcrumbsItems:[{ name: 'Home', route: '/home', iconClass: 'delete' , iconWidth: '15px' , iconHeight:'15px' , disabled:true }, 
   { name: 'About', route: '/About', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px' , disabled:true }, 
   { name: 'Contact', route: '/Contact', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px' , disabled:false },
   ]
}

export const Advanced = Template.bind({});
Advanced.args = {
  role: 'Advanced',
  iconShow: true,
  disabled: false,
  customBreadcrumbsItems: [{ name: 'Home', route: '/home', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px'  , disabled: false}, 
  { name: 'About', route: '/About', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px'  , disabled: false}, 
  { name: 'Contact', route: '/Contact', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px'  , disabled: true},
   ]
}

export const withDivider = Template.bind({});
withDivider.args = {
  role: 'withDivider',
  iconShow: true,
  disabled: false,
  customBreadcrumbsItems: [{ name: 'Home', route: '/home', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px' , disabled: true}, 
  { name: 'About', route: '/About', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px' , disabled: true }, 
  { name: 'Contact', route: '/Contact', iconClass: 'dashboard' , iconWidth: '15px' , iconHeight:'15px' , disabled: false},
   ]
}
