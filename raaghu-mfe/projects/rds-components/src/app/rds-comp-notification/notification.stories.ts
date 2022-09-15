import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsButtonModule, RdsCardModule } from '@libs/rds-elements';
import { RdsNotificationComponent } from './rds-comp-notification.component';
import { NgxTranslateModule } from '@libs/shared';

export default {
  title: 'Components/Notification',
  component: RdsNotificationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, RdsCardModule, RdsBadgeModule, NgxTranslateModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsNotificationComponent> = (args: RdsNotificationComponent) => ({
  props: {
    ...args
  }
});

export const basic = Template.bind({});
basic.args={
  unreadCount:'',
  notifications:'',
  backgroundColor:'',
  borderRadious:'',
  Paddig:'',
  width:''
}