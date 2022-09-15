import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompPaymentDetailsComponent } from './rds-comp-payment-details.component';


export default {
    title: 'Components/Payment Details',
    component: RdsCompPaymentDetailsComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompPaymentDetailsComponent],
            imports: [
                FormsModule, ReactiveFormsModule, NgxTranslateModule, RdsButtonModule, RdsInputModule,RdsCheckboxModule, SharedModule
            ],
            providers: [
                FormBuilder,
            ],
        })
    ],
    argTypes: {
    }
} as Meta;
const Template: Story<RdsCompPaymentDetailsComponent> = (args: RdsCompPaymentDetailsComponent) => ({
    props: {
        ...args
    },

  
     
});
export const Template1 = Template.bind({});

Template1.args = {
    cvc: 123,
    cardNumber: 246,
    name: 'abc',
    expirationDate: 567,
    buttonSpinner: true
}

 