import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompProductOverviewComponent } from 'projects/rds-components/src/app/rds-comp-product-overview/rds-comp-product-overview.component';

export default {
    title: 'Pages/Product Overview',
    component: RdsCompProductOverviewComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompProductOverviewComponent],
            imports: [

            ],
            providers: [

            ],
        })
    ]
} as Meta;
const Template: Story<RdsCompProductOverviewComponent> = (args: RdsCompProductOverviewComponent) => ({
    props: {
        ...args
    }
});
export const productDetails = Template.bind({});


