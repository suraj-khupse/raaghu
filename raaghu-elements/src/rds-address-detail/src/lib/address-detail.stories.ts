
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsAddressDetailComponent } from './rds-address-detail.component';

export default {
  title: 'Elements/Address Detail',
  component: RdsAddressDetailComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
  argTypes: {},
} as Meta;

const Template: Story<RdsAddressDetailComponent> = (args: RdsAddressDetailComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  header: 'Address Header',
  addressLine1: 'Address Line 1',
  addressLine2: 'Address Line 2',
  addressLine3: 'Address Line 3',
};

