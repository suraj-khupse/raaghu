import { Meta, Story } from "@storybook/angular";
import { componentWrapperDecorator } from '@storybook/angular';
import { RdsRangeComponent } from "./rds-range.component";

export default {
    title: 'Elements/Range',
    component: RdsRangeComponent,
    argTypes: {

    },
    parameters: {
        layout: 'padded'
    },
    decorators: [componentWrapperDecorator((story: any) => `<div class="px-2">${story}</div>`)]
} as Meta

const Template: Story<RdsRangeComponent> = (args: RdsRangeComponent) => ({
    props: args,
});

export const Default = Template.bind({})

Default.args = {
    role: 'Default',
    min: 0,
    max: 100,
    // disabled: false,
    // step:'0.5'
}

export const RangeType1 = Template.bind({})

RangeType1.args = {
    role: 'Range Type 1',
    min: 0,
    max: 100,
}

export const RangeType2 = Template.bind({})

RangeType2.args = {
    role: 'Range Type 2',
    min: 0,
    max: 100,
}
