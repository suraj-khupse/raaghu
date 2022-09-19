import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsBadgeModule } from '@libs/rds-badge';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBenefitComponent } from './rds-benefit.component';

export default {
  title: 'ELEMENTS/Benefit',
  component: RdsBenefitComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule,
        RdsLabelModule,
        RdsBadgeModule,
        RdsIconModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ] 
} as Meta;

const Template: Story<RdsBenefitComponent> = (args: RdsBenefitComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  display_type: 'Basic',
  item:
  {
    id: 1,
    icon: 'roles',
    iconHeight: "25px",
    iconWidth: "25px",
    title: "International delivery",
    description: "Get your order in 2 years"
  }
}

export const benefit_type1 = Template.bind({});
benefit_type1.args = {
  display_type: 'benefit_type1',
  item:
  {
    id: 3,
    icon: 'users',
    iconHeight: "25px",
    iconWidth: "25px",
    position: "start",
    title: "Free delivery all year long",
    description: "Name another place that offers year long free delivery? We'll be waiting. Order now and you'll get delivery absolutely free."
  }
}

export const benefit_type2 = Template.bind({});
benefit_type2.args = {
  display_type: 'benefit_type2',
  item:
  {
    id: 6,
    iconHeight: "40px",
    iconWidth: "40px",
    icon: 'users',
    title: "Free shipping",
    description: "Free delivery is our main part of company we just price it into the products. Someone's paying for it, and it's not us."
  }
}

export const benefit_type3 = Template.bind({});
benefit_type3.args = {
  display_type: 'benefit_type3',
  item:
  {
    id: 7,
    icon: 'users',
    status: 'Active',
    iconHeight: "40px",
    iconWidth: "40px",
    title: 'Free delivery all year long',
    description: "Name another place that offers year long free delivery? We'll be waiting. Order now and you'll get delivery absolutely free."
  }
}

export const benefit_type4 = Template.bind({});
benefit_type4.args = {
  display_type: 'benefit_type4',
  item:
  {
    id: 7,
    icon: 'users',
    iconHeight: "40px",
    iconWidth: "40px",
    title: 'Free shipping world wide',
    description: "Free delivery is our main part of company"
  }
}

export const benefit_type5 = Template.bind({});
benefit_type5.args = {
  display_type: 'benefit_type5',
  item:
  {
    id: 7,
    icon: 'users',
    iconHeight: "40px",
    iconWidth: "40px",
    title: 'Free delivery all year long',
  }
}

