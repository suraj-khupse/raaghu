
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsCardModule, RdsInputModule } from '@libs/rds-elements';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsRadioButtonModule } from '@libs/rds-radio-button';
import { NgxTranslateModule } from '@libs/shared';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompBillingComponent } from './rds-comp-billing.component';


export default {
    title: 'Components/Billing',
    component: RdsCompBillingComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompBillingComponent, RdsDataTableComponent],
            imports: [
                CommonModule,
                FormsModule,
                RdsButtonModule,
                RdsCardModule,
                RdsRadioButtonModule,
                RdsIconModule,
                RdsInputModule,
                NgxTranslateModule,
                RdsLabelModule
            ],
            providers: [
                FormBuilder
            ],


        })
    ]
} as Meta;


const Template: Story<RdsCompBillingComponent> = (args: RdsCompBillingComponent) => ({
    props: {
        ...args
    }
});

export const Default = Template.bind({});
Default.args = {
    emailId: 'admin@aspnetzero.com',
    alternativeEmail: '',
    cardList: [],
    subscriptionData: [{
        name: "Basic",
        price: "23",
        duration: "2",
        iconurl: "basic_subscription",
        recommended: false,
        features: ["Maximum User Count", "Test Check feature", "Test check feature count 2"]
    },
    {
        name: "Standard",
        price: "23",
        duration: "2",
        iconurl: "standard_subscription",
        recommended: false,
        features: ["Maximum User Count", "Test Check feature", "Test check feature count 2"]
    },
    {
        name: "Premium",
        price: "23",
        duration: "2",
        iconurl: "premium_subscription",
        recommended: false,
        features: ["Maximum User Count", "Test Check feature", "Test check feature count 2"]
    },
    {
        name: "Professional",
        price: "23",
        duration: "2",
        iconurl: "professional_subscription",
        recommended: false,
        features: ["Maximum User Count", "Test Check feature", "Test check feature count 2"]
    }],
    billingHeaders: [
        { key: 'invoice', displayName: 'Invoice', dataType: 'text' ,filterable: true,},
     { key: 'amount', displayName: 'Amount', dataType: 'text',filterable: true, },
      { key: 'date', displayName: 'Date', dataType: 'text',filterable: true, }, 
      { key: 'status', displayName: 'Status', dataType: 'html',filterable: true, }],
    billingData: [


        {
            invoice: 'Standard Plan - Jan 2022',
            amount: 'USD $ 250.00',
            date: 'Jan 23, 2022',
            status: `<div> <span class="badge badge-success">Paid</span></div>`
        },
        {
            invoice: 'Standard Plan - Dec 2021',
            amount: 'Dec 23, 2021',
            date: 'Jan 23, 2022',
            status: `<div> <span class="badge badge-success">Paid</span></div>`
        },
        {
            invoice: 'Standard Plan - Nov 2021',
            amount: 'USD $ 250.00',
            date: 'Nov 23, 2021',
            status: `<div> <span class="badge badge-success">Paid</span></div>`
        },
        {
            invoice: 'Standard Plan - Oct 2021',
            amount: 'USD $ 250.00',
            date: 'Oct 23, 2022',
            status: `<div> <span class="badge badge-success">Paid</span></div>`
        }
    ],
    actions: [{ id: 'download', displayName: 'Download' }],
    radioItem: [{ label: 'Send to my account email', checked: true, name: "Send to my account email" }],
    radioItem1: [{ label: 'Send to an alternative email', checked: false, name: 'Send to an alternative email' }]
}
