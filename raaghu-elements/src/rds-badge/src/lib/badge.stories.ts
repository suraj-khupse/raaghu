import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsBadgeComponent } from './rds-badge.component';
import { RdsButtonModule } from '@libs/rds-button';

export default {

  title: 'Elements/Badge',

  component: RdsBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RdsIconModule, RdsButtonModule],
    }),
  ],

  argTypes: {

    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light'],
      control: { type: 'select' }
    },

  },

} as Meta;

const Template: Story<RdsBadgeComponent> = (args: RdsBadgeComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  label: 'badge',
  colorVariant:'danger',
  badgeType:'rectangle'
};


const Button: Story<RdsBadgeComponent> = (args: RdsBadgeComponent) => ({
  props: args,
  template:
    `<rds-button [label]="'Button'" [colorVariant]="'primary'">
      <rds-badge
      [size]="size"
      [label]="label"
      [colorVariant]="colorVariant" [badgeType]="badgeType"></rds-badge>
      </rds-button>
     
  `,
});
Button.args = {
  size: 'medium',
  label: '9',
  colorVariant:'danger',
  badgeType:'rectangle'
};
export const button = Button.bind({});

const Positioned: Story<RdsBadgeComponent> = (args: RdsBadgeComponent) => ({
  props: args,
  template:
    `<rds-button [colorVariant]="'primary'" size="medium" class="position-relative" [label]="'button'">
      <rds-badge
      [size]="size"
      [label]="label"
      [colorVariant]="colorVariant"
      [badgeType]="badgeType"
      [positioned]="positioned"
      ></rds-badge>
      </rds-button>
    
  `,

});

export const positioned = Positioned.bind({});
positioned.args = {
  size: 'medium',
  label: '99',
  colorVariant:'danger',
  badgeType:'rectangle',
  positioned:true
};

const WithIcon: Story<RdsBadgeComponent> = (args: RdsBadgeComponent) => ({
  props: args,
  template:
    `<rds-button class="position-relative" [size]="'small'" [id]="'notification'" [roundedButton]="true"
    [colorVariant]="'default'" >
    <rds-icon name="notification" colorVariant='primary' width="20px" height="20px"></rds-icon>
    <rds-badge  [size]="size"  [label]="label" [colorVariant]="colorVariant"  [badgeType]="badgeType" [positioned]="positioned"> 
    </rds-badge>
  </rds-button> `

});

export const withIcon = WithIcon.bind({});
withIcon.args = {
  size: 'medium',
  label: '9',
  colorVariant:'danger',
  badgeType:'circle',
  positioned:true
};



