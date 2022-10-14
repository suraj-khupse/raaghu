
import { RdsLabelModule } from '@libs/rds-label';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsPriceComponent } from './rds-price.component';


export default {
  title: 'Elements/Price',
  component: RdsPriceComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        RdsLabelModule
      ],
    }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<RdsPriceComponent> = (args: RdsPriceComponent) => ({
  props: args,
});

export const Default = Template.bind({});


