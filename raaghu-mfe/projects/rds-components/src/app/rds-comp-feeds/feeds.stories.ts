import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsAvatarModule, RdsLabelModule } from '@libs/rds-elements';

import { RdsIconModule } from '@libs/rds-icon';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsFeedModule } from 'projects/libs/rds-elements/src/rds-feed/src/public-api';
import { RdsLikeDislikeModule } from 'projects/libs/rds-elements/src/rds-like-dislike/src/public-api';

import { RdsCompFeedsComponent } from './rds-comp-feeds.component';

export default {
  title: 'Components/Feeds',
  component: RdsCompFeedsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsIconModule,
        RdsLabelModule,
        RdsAvatarModule,
        RdsFeedModule,
        RdsLikeDislikeModule,
        CommonModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ],
  argTypes: {
    displaytype: {
      options: ['Basic', 'Advanced', 'With_Multiple_Items'],
      control: { type: 'select' }
    }
  }

} as Meta;

const Template: Story<RdsCompFeedsComponent> = (args: RdsCompFeedsComponent) => ({
  props: args

});
// const Advance: Story<RdsCompFeedsComponent> = (args: RdsCompFeedsComponent) => ({
//   props: args,

// });
export const Default = Template.bind({});
Default.args = {
  displaytype: 'Basic'
}

export const advanced = Template.bind({});
advanced.args = {
  displaytype: 'Advanced'
}


export const multipleItems = Template.bind({});
multipleItems.args = {
  displaytype: 'With_Multiple_Items',

}

