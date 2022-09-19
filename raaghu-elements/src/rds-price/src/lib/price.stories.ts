
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsPriceComponent } from './rds-price.component';


export default {
  title: 'Elements/Price',
  component: RdsPriceComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsPriceComponent> = (args: RdsPriceComponent) => ({
  props: args,
});

export const Default = Template.bind({});


