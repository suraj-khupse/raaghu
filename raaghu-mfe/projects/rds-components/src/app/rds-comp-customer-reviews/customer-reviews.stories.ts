
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsIconModule, RdsLabelModule, RdsProgressbarModule, RdsRatingComponent, RdsRatingModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompCustomerReviewsComponent } from './rds-comp-customer-reviews.component';

export default {
    title: 'Components/Customer-reviews',
    component: RdsCompCustomerReviewsComponent,
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule, ReactiveFormsModule, RdsButtonModule, NgxTranslateModule, RdsLabelModule, RdsRatingModule, RdsProgressbarModule, RdsIconModule
            ],
            providers: [
                FormBuilder
            ],
        })
    ]
} as Meta;


const Template: Story<RdsCompCustomerReviewsComponent> = (args: RdsCompCustomerReviewsComponent) => ({
    props: args
});

export const Default = Template.bind({});
Default.args = {
    itemlist: {
        1: 1017,
        2: 313,
        3: 704,
        4: 1722,
        5: 4069
    }

}