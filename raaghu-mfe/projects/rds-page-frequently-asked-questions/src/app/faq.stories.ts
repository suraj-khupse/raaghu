import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompFaqComponent } from 'projects/rds-components/src/app/rds-comp-faq/rds-comp-faq.component';

export default {
    title: 'Pages/FAQ',
    component: RdsCompFaqComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompFaqComponent],
            imports: [

            ],
            providers: [
                
            ],
        })
    ]
} as Meta;
const Template: Story<RdsCompFaqComponent> = (args: RdsCompFaqComponent) => ({
    props: {
        ...args
    }
});
export const FAQ = Template.bind({});


