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
    decorators: [componentWrapperDecorator((story: any) => `<div style="margin: 3em">${story}</div>`)]
} as Meta

const Template: Story<RdsRangeComponent> = (args: RdsRangeComponent) => ({
    props: args,
});

export const Default = Template.bind({})

Default.args = {
    min: 500,
    max: 1000,
    // disabled: false,
    // step:'0.5'
}
