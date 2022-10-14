import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsSelectListModule, } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompBillingAddressComponent } from './rds-comp-billing-address.component';


export default {
    title: 'Components/Billing Address',
    component: RdsCompBillingAddressComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompBillingAddressComponent],
            imports: [
                FormsModule, RdsSelectListModule, ReactiveFormsModule, NgxTranslateModule, RdsButtonModule, RdsInputModule,RdsCheckboxModule, SharedModule
            ],
            providers: [
                FormBuilder,

            ],
        })
    ],
    argTypes: {
    }
} as Meta;
const Template: Story<RdsCompBillingAddressComponent> = (args: RdsCompBillingAddressComponent) => ({
    props: {
        ...args
    }
});
export const Default = Template.bind({});

Default.args = {
    countryList:[
        {value: "1", displayText: "India", isSelected: false}
        ,{value: "2", displayText: "China", isSelected: false}
        ,{value: "3", displayText: "Canada", isSelected: false}
        ,{value: "4", displayText: "Japan", isSelected: false}
        ,{value: "5", displayText: "Australia", isSelected: false}
        ,{value: "6", displayText: "USA", isSelected: false}
        ,{value: "7", displayText: "UK", isSelected: false}
        ],
        stateList:[
            {value: "1", displayText: "Andhra Pradesh", isSelected: false}
            ,{value: "2", displayText: "Arunachal Pradesh", isSelected: false}
            ,{value: "3", displayText: "Assam", isSelected: false}
            ,{value: "4", displayText: "Bihar", isSelected: false}
            ,{value: "5", displayText: "Chhattisgarh", isSelected: false}
            ,{value: "6", displayText: "Goa", isSelected: false}
            ,{value: "7", displayText: "Gujarat", isSelected: false}
            ]
}

