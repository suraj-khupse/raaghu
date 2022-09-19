import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsTeamMemberComponent } from '../public-api';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsProductImageModule } from '@libs/rds-product-image';
// import { RdsProductImageModule } from '@libs/rds-product-image';
export default {
  title: 'Elements/Team-member',
  component: RdsTeamMemberComponent,
  decorators: [
    moduleMetadata({

      imports: [CommonModule, FormsModule,RdsIconModule , RdsProductImageModule],
    }),
  ],
} as Meta

const Template: Story<RdsTeamMemberComponent> = (args: RdsTeamMemberComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args ={
  displayType: 'Basic',
  teamItem :[
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'twitter',
      linkdineIcon: 'linkedin',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } 
  ]

}

export const advance = Template.bind({});
advance.args ={
  displayType: 'Advance',
  teamItem :[
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } 
  ]

}
