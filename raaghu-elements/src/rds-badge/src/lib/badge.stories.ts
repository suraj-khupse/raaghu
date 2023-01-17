import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
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
      options: ['smallest', 'smaller', 'small', 'medium', 'large','xlg'],
      control: { type: 'select' }
    },
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light'],
      control: { type: 'select' }
    },
    badgeType:{
      options:['rectangle' ,'circle' , 'pill'],
      control:{type:'select'}
    },
    positioned: {table: {disable: true,},},
  },

} as Meta;

const Template: Story<RdsBadgeComponent> = (args: RdsBadgeComponent) => ({
  props: args,
});

export const TextBadge = Template.bind({});
TextBadge.parameters = { controls: { include: ['size', 'label', 'colorVariant', 'badgeType','onClose'] } };
TextBadge.args = {
  size: 'medium',
  label: 'badge',
  colorVariant:'danger',
  badgeType:'rectangle'
};


const Button: Story<RdsBadgeComponent> = (args: RdsBadgeComponent) => ({
  props: args,
  template:
    `<rds-button [label]="'Button'" [colorVariant]="'primary'"  size="medium">
      <rds-badge
      class="ms-2"
      [size]="size"
      [label]="label"
      [colorVariant]="colorVariant" [badgeType]="badgeType"></rds-badge>
      </rds-button>
     
  `,
});


export const button = Button.bind({});
button.parameters = { controls: { include: ['size', 'label', 'colorVariant', 'badgeType','onClose'] } };
button.args = {
  size: 'medium',
  label: '9',
  colorVariant:'danger',
  badgeType:'rectangle'
};


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

export const LabelWithOverlay = Positioned.bind({});
LabelWithOverlay.parameters = { controls: { include: ['size', 'label', 'colorVariant', 'badgeType', 'positioned','onClose'] } };
LabelWithOverlay.args = {
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

export const IconWithOverlay = WithIcon.bind({});
IconWithOverlay.parameters = { controls: { include: ['size', 'label', 'colorVariant', 'badgeType', 'positioned'] } };
IconWithOverlay.args = {
  size: 'medium',
  label: '9',
  colorVariant:'danger',
  badgeType:'circle',
  positioned:true
};



