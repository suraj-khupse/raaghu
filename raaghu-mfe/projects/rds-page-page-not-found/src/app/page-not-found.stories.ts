import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppComponent } from './app.component';
import { RdsCompPageNotFoundModule } from 'projects/rds-components/src/app/rds-comp-page-not-found/rds-comp-page-not-found.module';

export default {
    title: 'Pages/Page Not Found',
    component: AppComponent,
    decorators: [
        moduleMetadata({
            declarations: [AppComponent],
            imports: [
                RdsCompPageNotFoundModule
            ],
            providers: [

            ],
        })
    ]
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: {
        ...args
    }
});
export const PageNotFound = Template.bind({});
