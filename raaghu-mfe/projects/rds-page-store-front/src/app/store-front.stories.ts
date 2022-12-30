import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { AppComponent } from './app.component';
import { RdsCompBackgroundImageComponent } from 'projects/rds-components/src/app/rds-comp-background-image/rds-comp-background-image.component';
import { RdsCompProductListComponent } from 'projects/rds-components/src/app/rds-comp-product-list/rds-comp-product-list.component';

export default {
    title: 'Pages/Store Front',
    component: AppComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                AppComponent, RdsCompBackgroundImageComponent, RdsCompProductListComponent
            ],
            imports: [
                
            ]
        })
    ]
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
    props: args
});
export const storeFront = Template.bind({});
