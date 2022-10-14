import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAvatarModule, RdsButtonModule, RdsCardModule, RdsDropdownModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule } from '@libs/rds-elements';
import { RdsCompSubscriptionComponent } from './rds-comp-subscription.component';
import { NgxTranslateModule } from '@libs/shared';
import { RdsIconModule } from '@libs/rds-icon';


export default {
  title: 'Components/Subscription',
  component: RdsCompSubscriptionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsCardModule, NgxTranslateModule, RdsIconModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompSubscriptionComponent> = (args: RdsCompSubscriptionComponent) => ({
    props:{
      ...args
    }
});

export const Default = Template.bind({});
Default.args={
  subscriptionData:[{
    name: "BASIC",
    price: "232",
    duration: "2 Year",
    iconurl:"subscription_premium",
    recommended:false,
    features:["Maximum User Count","Test Check feature","Test check feature count 2"]
  }]
}
