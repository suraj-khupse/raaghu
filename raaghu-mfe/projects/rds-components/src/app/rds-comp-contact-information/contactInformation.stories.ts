import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompContactInformationComponent } from './rds-comp-contact-information.component';


export default {
    title: 'Components/Contact Information',
    component: RdsCompContactInformationComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompContactInformationComponent],
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
const Template: Story<RdsCompContactInformationComponent> = (args: RdsCompContactInformationComponent) => ({
    props: {
        ...args
    }
});
export const Default = Template.bind({});

Default.args = {
    
}

