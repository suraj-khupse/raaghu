import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsAvatarModule } from '@libs/rds-avatar';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsLikeDislikeModule } from '@libs/rds-like-dislike';
import { RdsRatingModule } from '@libs/rds-rating';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsReviewCategoryComponent } from './rds-review-category.component';

export default {
  title: 'Elements/Review-category',
  component: RdsReviewCategoryComponent,
  decorators: [
    moduleMetadata({
      imports: [  
        FormsModule, ReactiveFormsModule, 
        RdsLabelModule,
        RdsRatingModule,
        RdsLikeDislikeModule,
        RdsIconModule,
        RdsAvatarModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
 } as Meta;

const Template: Story<RdsReviewCategoryComponent> = (args: RdsReviewCategoryComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  display_type:'Basic',
  item: {
    name: 'Jems Rock',
    date: new Date(),
    reviewRate: 4,
    reviewTitle: 'Very good and color also nice & fresh look',
    reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
    description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable,yet look classy enough that I can wear them at work or even some formal events.Thank you!' 
  }
  
}

export const ReviewType_1 = Template.bind({});
ReviewType_1.args= {
  display_type:'ReviewType_1',
  item: {
    name: 'Jems Rock',
    date: new Date(),
    reviewRate: 4,
    reviewTitle: 'Very good and color also nice & fresh look',
    reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
    description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
  }
}
export const ReviewType_2 = Template.bind({});
ReviewType_2.args= {
  display_type:'ReviewType_2',
  item: {
    name: 'Jems Rock',
    date: new Date(),
    reviewRate: 4,
    reviewTitle: 'Very good and color also nice & fresh look',
    reviewSubTitle:'After a quick chat with support team, I had a good feeling about this shirt and ordered there of them.',
    description:'Less than 48 hours later, my delivery arrived. I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you! I have not worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Thank you!' 
  }
}

