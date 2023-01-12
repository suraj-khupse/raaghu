import { Meta, Story } from "@storybook/angular";
import { componentWrapperDecorator } from '@storybook/angular';
import { RdsRangeComponent } from "./rds-range.component";

export default {
    title: 'Elements/Range',
    component: RdsRangeComponent,
    argTypes: {
        role: { table: { disable: true, }, },
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
Default.parameters = { controls: { include: ['role', 'value', 'min', 'max','rangeValueOne'] } };
Default.args = {
    role: 'Default',
    min: 0,
    max: 100,
    value: 0
}

export const RangeOnScale = Template.bind({})
RangeOnScale.parameters = { controls: { include: ['role', 'value', 'min', 'max','rangeValueOne'] } };
RangeOnScale.args = {
    role: 'Range On Scale',
    min: 0,
    max: 100,
    value: 0
}

export const RangeBelowScale = Template.bind({})
RangeBelowScale.parameters = { controls: { include: ['role', 'value', 'min', 'max','rangeValueOne'] } };
RangeBelowScale.args = {
    role: 'Range Below Scale',
    min: 0,
    max: 100,
    value: 0
}