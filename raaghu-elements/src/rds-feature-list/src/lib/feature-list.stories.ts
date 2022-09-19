import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsFeatureListComponent } from './rds-feature-list.component';

export default {
    title: 'Elements/Feature List',
    component: RdsFeatureListComponent,
    decorators: [
        moduleMetadata({
            imports: [],
        }),
    ],
    argTypes: {
    }
} as Meta

const Template: Story<RdsFeatureListComponent> = (args: RdsFeatureListComponent) => ({
    props: args,
});

export const Default = Template.bind({})
Default.args = {
    header: 'Features',
    listItems: [
        { id: 1, value: 'Only the best materials', some: 'value' },
        { id: 2, value: 'Ethically and locally made', some: 'value' },
        { id: 3, value: 'Pre-washed and pre-shrunk', some: 'value' },
        { id: 4, value: 'Machine wash cold with similar colors', some: 'value' },
        { id: 5, value: 'Stainless strap loops', some: 'value' },
        { id: 6, value: 'Double stitched construction', some: 'value' },
        { id: 7, value: 'Water-resistant', some: 'value' },
    ],
    columns: 1,
}