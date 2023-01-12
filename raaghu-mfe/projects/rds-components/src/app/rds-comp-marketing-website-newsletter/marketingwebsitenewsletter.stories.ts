import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsInputModule, RdsLabelModule, } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompMarketingWebsiteNewsletterComponent } from './rds-comp-marketing-website-newsletter.component';


export default {
    title: 'Components/Marketing Website Newsletter',
    component: RdsCompMarketingWebsiteNewsletterComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompMarketingWebsiteNewsletterComponent],
            imports: [
                FormsModule, ReactiveFormsModule, NgxTranslateModule, RdsButtonModule, RdsInputModule, SharedModule,RdsLabelModule
            ],
            providers: [
                FormBuilder,
            ],
        })
    ],
    argTypes: {
        templateType: {
            options: ['with_image', 'with_CTA', 'with_discount_offer', 'with_email_input'],
            control: { type: 'select' }
        },
    }
} as Meta;
const Template: Story<RdsCompMarketingWebsiteNewsletterComponent> = (args: RdsCompMarketingWebsiteNewsletterComponent) => ({
    props: {
        ...args
    }
});
export const WithImage = Template.bind({});

WithImage.args = {
    templateType: 'with_image'
}
export const WithCTA = Template.bind({});

WithCTA.args = {
    templateType: 'with_CTA'
}
export const WithDiscountOffer = Template.bind({});

WithDiscountOffer.args = {
    templateType: 'with_discount_offer'
}
export const WithEmailInput = Template.bind({});

WithEmailInput.args = {
    templateType: 'with_email_input'
}