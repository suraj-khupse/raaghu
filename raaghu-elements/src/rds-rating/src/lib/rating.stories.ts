import { CommonModule } from '@angular/common';
import { RdsIconModule } from '@libs/rds-icon';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsRatingComponent } from './rds-rating.component';

export default {
  title: 'Elements/Rating',
  component: RdsRatingComponent,
  decorators: [
    moduleMetadata({
        imports: [RdsIconModule,CommonModule],
    }),
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark','review'],
      control: { type: 'select' }
    },
  },
} as Meta;

const Template: Story<RdsRatingComponent> = (args: RdsRatingComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  itemList: [
    {id: 1, value: 1},
    {id: 2, value: 2},
    {id: 3, value: 3},
    {id: 4, value: 4},
    {id: 5, value: 5},
  ],
  Size: 'medium',
  rating:2,
  WithNoOfReviews:true,
  noOfReview:123,
  colorVariant: 'review',
  // role:'Basic',
}

// export const Advanced = Template.bind({});
// Basic.args = {
//   itemList: [
//     {id: 1, value: 1},
//     {id: 2, value: 2},
//     {id: 3, value: 3},
//     {id: 4, value: 4},
//     {id: 5, value: 5},
//   ],
//   Size: 'medium',
//   rating:1,
//   WithNoOfReviews:false,
//   noOfReview:123,
//   colorVariant: 'primary',
//   role:'Advanced',
// }
