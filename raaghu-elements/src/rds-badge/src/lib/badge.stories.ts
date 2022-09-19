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
      options: ['xlg', 'lg', 'mid', 'small', 'smaller', 'smallest'],
      control: { type: 'select' }
    },
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white'],
      control: { type: 'select' }
    },

  },

} as Meta;

// const Template: Story<RdsBadgeComponent> = (args: RdsBadgeComponent) => ({
//   props: args,
// });
// export const Basic: Story<RdsBadgeComponent> = (args) => ({
//   props: args,
// });
// Basic.args = {
//   size: 'small',
//   label: 'new'
// };

const Template: Story<RdsBadgeComponent> = (args: RdsBadgeComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  size: 'mid',
  top: '',
  start: ''
  //label: 'Hiii'
};


const BadgeButton: Story<RdsBadgeComponent> = (args: RdsBadgeComponent) => ({

  props: args,
  template:
    `<button type="button" class="btn btn-default" position="bottom"
    role="basic">button
  
      <span right>
      <rds-badge
      size="smallest"
      Types="light"
      label="9"
      [pillBadges]="false"
    
      ></rds-badge></span>
      </button>
     
  `,
  // badge bg-primary mid smallest
});
// BadgeButton.args = {
//   size: 'smallest',
//   positioned: true,
//   pillBadges: false

// };


export const BadgeAsButton = BadgeButton.bind({});
Default.args = {
  size: 'smallest',
  colorVariant: 'success',
  top: '',
  start: ''
};

const BadgePositioned: Story<RdsBadgeComponent> = (args: RdsBadgeComponent) => ({

  props: args,
  template:
    `<rds-button [colorVariant]="colorVariant"   
    size="medium" class="position-relative">
      button<span>
      <rds-badge
      size="smallest"
      label="99+"
      [pillBadges]="true"
      [positioned]="true"
      ></rds-badge></span>
      </rds-button>
    
  `,

});
// BadgePositioned.args = {
//   size: 'smallest',
//   positioned: true,
//   label: '99+'
// };

export const BadgewithPositioned = BadgePositioned.bind({});
BadgewithPositioned.args = {
  size: 'smallest',
  positioned: true,
  top: '',
  start: ''
};

const BadgeIcon: Story<RdsBadgeComponent> = (args: RdsBadgeComponent) => ({

  props: args,
  template:
    `<button
      class="position-relative btn btn-light">
<rds-icon name="three_dots_horizontal" height="20px" width="20px" [fill]="iconFill"
[stroke]="iconStroke"></rds-icon>
    <rds-badge right
    size="smallest"
    label="9"
    [pillBadges]="false"
    [positioned]="true"
    [iconBadge] ="true"
    ></rds-badge>
    </button>
    
  `,

});
// BadgeIcon.args = {

// };

export const BadgeWithIcon = BadgeIcon.bind({});
BadgeWithIcon.args = {
  top: '',
  start: '',
  iconFill: true,
  iconStroke: false

};


