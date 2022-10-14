
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsInputModule, RdsTextareaModule } from '@libs/rds-elements';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompContactUsComponent } from './rds-comp-contact-us.component';


export default {
    title: 'Components/Contact Us',
    component: RdsCompContactUsComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompContactUsComponent],
            imports: [
                CommonModule,
                FormsModule,
                RdsButtonModule,
                RdsTextareaModule,
                RdsInputModule
            ]
        })
    ]
} as Meta;


const Template: Story<RdsCompContactUsComponent> = (args: RdsCompContactUsComponent) => ({
    props: args
});

export const Default = Template.bind({});
