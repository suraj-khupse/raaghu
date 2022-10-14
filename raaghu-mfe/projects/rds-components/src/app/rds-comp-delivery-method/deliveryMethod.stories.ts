import { FormBuilder } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompDeliveryMethodComponent } from './rds-comp-delivery-method.component';


export default {
    title: 'Components/Delivery Method',
    component: RdsCompDeliveryMethodComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompDeliveryMethodComponent],
            imports: [
                NgxTranslateModule, SharedModule
            ],
            providers: [
                FormBuilder,

            ],
        })
    ],
    argTypes: {
    }
} as Meta;
const Template: Story<RdsCompDeliveryMethodComponent> = (args: RdsCompDeliveryMethodComponent) => ({
    props: {
        ...args
    }
});
export const Default = Template.bind({});

Default.args = {
    sizeDataWithDescription : [
        {type: 'Standard', days:"4-10 buisness days", cost:"$5.00"},
        {type: 'Express', days:"2-5 buisness days", cost:"$16.00"}, 
        {type: 'Free', days:"10-12 buisness days", cost:"$0.00"}
    ]
}

