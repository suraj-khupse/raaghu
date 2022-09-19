import { FormsModule } from '@angular/forms';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsDropdownlistComponent } from './rds-dropdownlist.component';

export default {

  title: 'Elements/Dropdown List',
  component: RdsDropdownlistComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule, RdsIconModule],
    }),
  ],
  argTypes: {

    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'info','light','dark','outline-info','outline-light','outline-success','outline-primary','outline-secondary','outline-danger','outline-dark'],
      control: { type: 'select' }
    },
    size: {
      options: ['default', 'small', 'large'],
      control: { type: 'radio' }
    },

  },
} as Meta;

const Template: Story<RdsDropdownlistComponent> = (args: RdsDropdownlistComponent) => ({

  props: args,
});


export const Default: Story<RdsDropdownlistComponent> = (args) => ({
  props: args,
  template:
    `<rds-dropdownlist 
    [listItems]="listItems"
    [placeholder]="placeholder"
    size="default" 
    [colorVariant]="colorVariant"
    [size]="size"
     [multiSelect]="multiSelect"
    
  >
    </rds-dropdownlist>`
});
Default.args = {
  placeholder: 'Filter',  
  size: 'default',
  multiSelect: false,
  colorVariant: 'primary',
  listItems: [
    { value: 'Export to excel', some: 'value', id: 1, href: '', icon: 'export', iconWidth: '20px', iconHeight: '25px', iconStroke: true, iconFill: false },
    { value: 'Import from excel', some: 'value', id: 2, href: '', icon: 'download_data', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
    { value: 'Click here download sample import file.', some: 'value', id: 3, href: '', icon: 'download_data', iconWidth: '20px', iconHeight: '20px', iconStroke: true, iconFill: false },
  ]
};
