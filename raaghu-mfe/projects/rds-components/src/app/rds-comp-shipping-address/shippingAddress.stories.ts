import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsSelectListModule, } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompShippingAddressComponent } from './rds-comp-shipping-address.component';


export default {
    title: 'Components/Shipping Address',
    component: RdsCompShippingAddressComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompShippingAddressComponent],
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
const Template: Story<RdsCompShippingAddressComponent> = (args: RdsCompShippingAddressComponent) => ({
    props: {
        ...args
    }
});
export const Template1 = Template.bind({});

Template1.args = {
 
     EmailID:'',
     Contact:'',
     firstName:'',
     lastName:'',
     company:'',
     phone:'',
     address:'',
     state:'',
     country:'',
     countryList:[
        {value: "1", displayText: "India", isSelected: false}
        ,{value: "2", displayText: "China", isSelected: false}
        ,{value: "3", displayText: "Canada", isSelected: false}
        ,{value: "4", displayText: "Japan", isSelected: false}
        ,{value: "5", displayText: "Australia", isSelected: false}
        ,{value: "6", displayText: "USA", isSelected: false}
        ,{value: "7", displayText: "UK", isSelected: false}
        ],
     postalCode:'',
    
    
}

