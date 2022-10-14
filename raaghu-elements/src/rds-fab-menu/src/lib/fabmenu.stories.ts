import { Story, Meta ,moduleMetadata} from '@storybook/angular';

import { RdsIconModule } from '@libs/rds-icon';
import { RdsFabMenuComponent } from './rds-fab-menu.component';

export default {
  title: 'Elements/Fab Menu',
  component: RdsFabMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule],
      }),
  ],
  argTypes: { 
    colorVariant: {
      options:['warning' , 'danger' , 'success' , 'info' , 'primary' , 'secondary' , 'dark' , 'light'],
      control: { type: 'select' }}

  },
} as Meta; 


const Template: Story<RdsFabMenuComponent> = (args: RdsFabMenuComponent) => ({
    props: args
  });
  
  export const Default = Template.bind({});
  
  Default.args = {
    colorVariant: 'secondary',
    size: 'default',
    listItems : [
      { value: 'New Role', some: 'value', key: 'new', icon: 'users', iconWidth: '20px', iconHeight: '20px' },
      { value: 'Refresh', some: 'value', key: 'refresh', icon: 'refresh', iconWidth: '20px', iconHeight: '20px' },
      { value: 'Export to excel', some: 'value', key: 'export', icon: 'export', iconWidth: '20px', iconHeight: '20px' },
      { value: 'Delete', some: 'value', key: 'delete', icon: 'delete', iconWidth: '20px', iconHeight: '20px' },
      { value: 'Click here download sample import file.', some: 'value', key: 'download', icon: 'download', iconWidth: '20px', iconHeight: '20px' },
      ]
  };
