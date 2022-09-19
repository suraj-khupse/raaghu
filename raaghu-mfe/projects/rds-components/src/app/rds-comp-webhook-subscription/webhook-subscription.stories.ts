import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCardModule, RdsCheckboxModule, RdsDatepickerModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule, RdsSelectListModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsCompWebhookSubscriptionComponent } from './rds-comp-webhook-subscription.component';

export default {
  title: 'Components/Webhook Subscription',
  component: RdsCompWebhookSubscriptionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, NgxTranslateModule, RdsInputModule, RdsTextareaModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompWebhookSubscriptionComponent> = (args: RdsCompWebhookSubscriptionComponent) => ({});

export const Default = Template.bind({});
