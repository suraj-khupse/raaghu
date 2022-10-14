import { CommonModule } from '@angular/common';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsRadioButtonModule } from '@libs/rds-radio-button';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsCardDetailComponent } from './rds-card-detail.component';

export default {
  title: 'Elements/Card Detail',
  component: RdsCardDetailComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, RdsIconModule, RdsRadioButtonModule],
    }),
  ],
  argTypes: {

  },
} as Meta;

const Template: Story<RdsCardDetailComponent> = (args: RdsCardDetailComponent) => ({
  props: args,
  template: `<rds-card-detail [cardData]=cardData>
   </rds-card-detail>`
});

// const teletext = "some text"
export const CardDetail = Template.bind({});
CardDetail.args = {
  cardData: {
    cardID: '1011', cardName: 'MasterCard', cardExpiry: '11/2027', cardLogo:'editions', cardNumber: 3596, isDefault:false,radioItems: [{id: 1011, checked: false, name: "Radio-Button"}]
  },
  IsEditAndDefaultFunctionalityRequired:false,
  IsSelectionRequired:false
};

