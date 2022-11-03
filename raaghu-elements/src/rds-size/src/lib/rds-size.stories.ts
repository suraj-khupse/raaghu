import { CommonModule } from '@angular/common';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsSizeComponent } from './rds-size.component';


export default {
  title: 'Elements/Size',
  component: RdsSizeComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    sizeType: { table: { disable: true, }, },
  }
} as Meta;
const Template: Story<RdsSizeComponent> = (args: RdsSizeComponent) => ({
  props: args,
  template:
    `
      <div class="col-md-12">
    <rds-size [sizeType]="sizeType"></rds-size>
  `,
});

export const Simple = Template.bind({});
Simple.parameters = { controls: { include: ['sizeType', 'sizeData'] } };
Simple.args = {
  sizeType: 'withoutDescription',
  sizeData: [
    { value: 'XL' }, { value: 'L' }, { value: 'M' }, { value: 'S' }, { value: 'XS' }, { value: 'L' }, { value: 'M' }, { value: 'S' }, { value: 'XS' }
  ]
};

export const withDescription = Template.bind({});
withDescription.parameters = { controls: { include: ['sizeType', 'sizeDataWithDescription'] } };
withDescription.args = {
  sizeType: 'withDescription',
  sizeDataWithDescription: [
    { value: '15', description: "impoity input and ngonint" }, { value: '15', description: "impoity input and ngonint" }, { value: '14', description: " with the passanger" }
  ]
};
