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
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
    ratingPosition: {
      options: ['left', 'right'],
      control: { type: 'radio' }
    },
  },
} as Meta;

const Template: Story<RdsRatingComponent> = (args: RdsRatingComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = { controls: { include: ['itemList',  'rating', 'size','withNoOfReviews','noOfReview','colorVariant','ratingPosition'] } };

Default.args = {
  itemList: [
    {id: 1, value: 1},
    {id: 2, value: 2},
    {id: 3, value: 3},
    {id: 4, value: 4},
    {id: 5, value: 5},
  ],
  size: 'medium',
  rating:2,
  withNoOfReviews:true,
  noOfReview:123,
  colorVariant: 'review',
  ratingPosition:'left',
}

