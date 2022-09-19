import { FormBuilder, FormsModule } from '@angular/forms';
import { RdsColorModule } from '@libs/rds-elements';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsCompTimelineComponent } from './rds-comp-timeline.component';

export default {
  title: 'Components/Timeline',
  component: RdsCompTimelineComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompTimelineComponent],
      imports: [FormsModule, RdsLabelModule, RdsColorModule, RdsIconModule],
      providers: [FormBuilder],
    }),
  ],
} as Meta;
const Template: Story<RdsCompTimelineComponent> = (
  args: RdsCompTimelineComponent
) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {
  displayType: 'Basic',

  timelinData: [
    {
      text: 'New Tenant added by Admin',
      date: '04 Mar 2020, 08:24 am',
      colorVariant: 'primary'
    },
    {
      text: 'New organization added',
      date: '04 Mar 2020, 08:24 am',
      colorVariant: 'success'
    },
    {
      text: 'New member added in organization',
      date: '04 Mar 2020, 08:24 am',
      colorVariant: 'info'
    },
    {
      text: 'Roles assigned to organization members',
      date: '04 Mar 2020, 08:24 am',
      colorVariant: 'warning'
    },
    {
      text: 'Roles assigned to organization members',
      date: '04 Mar 2020, 08:24 am',
      colorVariant: 'primary'
    },
    {
      text: 'View All',
      date: '',
      colorVariant: 'danger'
    },
  ],
};
export const advanced = Template.bind({});

advanced.args = {
  displayType: 'Advance',
  recentData: [
    {
      text: 'Renewed account with premium plan',
      date: '04 Mar 2020, 08:24 am',
      icon: 'premium_subscription',
      colorVariant: 'primary'
    },
    {
      text: 'Cache cleared',
      date: '04 Mar 2020, 08:24 am',
      icon: 'delete',
      colorVariant: 'success'
    },
    {
      text: 'Setting has been udated',
      date: '04 Mar 2020, 08:24 am',
      icon: 'setting',
      colorVariant: 'warning'
    },
    {
      text: 'Roles removed from organization',
      date: '04 Mar 2020, 08:24 am',
      icon: 'careers',
      colorVariant: 'danger'
    },
    {
      text: 'User deleted from organization',
      date: '04 Mar 2020, 08:24 am',
      icon: 'users',
      colorVariant: 'info'
    },
  ],
};

export const timeline = Template.bind({});

timeline.args = {
  displayType: 'Timeline',
  timeLine: [
    {
      title: 'Designing',
      subTitle: 'Lorem ipsum dummy text',
      date: '04 Mar 2020, 08:24 am',
      icon: 'demo_ui',
    },
    {
      title: 'Development',
      subTitle: 'Lorem ipsum dummy text',
      date: '04 Mar 2020, 08:24 am',
      icon: 'code_square',
    },
    {
      title: 'Testing',
      subTitle: 'Lorem ipsum dummy text',
      date: '04 Mar 2020, 08:24 am',
      icon: 'clipboard_check',
    },
    {
      title: 'Launch',
      subTitle: 'Lorem ipsum dummy text',
      date: '04 Mar 2020, 08:24 am',
      icon: 'premium_subscription',
    }
  ],
};
