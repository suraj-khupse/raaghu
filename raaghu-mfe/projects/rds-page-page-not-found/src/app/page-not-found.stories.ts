import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompPageNotFoundComponent } from 'projects/rds-components/src/app/rds-comp-page-not-found/rds-comp-page-not-found.component';

export default {
    title: 'Pages/Page Not Found',
    component: RdsCompPageNotFoundComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompPageNotFoundComponent],
            imports: [

            ],
            providers: [

            ],
        })
    ]
} as Meta;
const Template: Story<RdsCompPageNotFoundComponent> = (args: RdsCompPageNotFoundComponent) => ({
    props: {
        ...args
    }
});
export const PageNotFound = Template.bind({});
