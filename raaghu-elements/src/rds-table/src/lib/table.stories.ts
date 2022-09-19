import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsTableComponent } from './rds-table.component';
import { RdsTableModule } from './rds-table.module';
import { RdsIconModule } from '@libs/rds-icon';
import { CommonModule } from '@angular/common';
import { RdsLikeDislikeModule } from '../../../rds-like-dislike/src/public-api';

export default {
  title: 'Elements/Table',
  component: RdsTableComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsTableComponent],
      imports: [
        RdsIconModule, CommonModule, RdsLikeDislikeModule
      ],
     
    })
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'striped', 'hover'],
      control: { type: 'select' }
    },
  },
} as Meta;

const Template: Story<RdsTableComponent> = (args: RdsTableComponent) => ({
  props: args, 
});



export const DefaultTable = Template.bind({})
DefaultTable.args = {
  colorVariant: 'light',
  tableHeader:true,
  tableBorder: false,
  tableHeaderItems: [
    { displayName: 'Name', dataType: 'text',key:'name' },
    { displayName: 'Icon', dataType: 'icon', key: 'icon' },
    { displayName: 'Icon', dataType: 'price', key: 'price' },
    { displayName: 'Text Number', dataType: 'textNumber', key: 'textNumber' },
  ],
  tableBodyItems:
    [{ id: 1, name: 'Standard', icon: 'tickmark', price: '$20', textNumber:'22aa'},
      { id: 2, name: 'Premium', icon: 'tickmark',price: '$20'},
      { id: 3, name: 'Ultimate', icon: 'tickmark', price: '$20'},
    ],
}
