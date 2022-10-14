import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCardModule,  RdsInputModule, RdsLabelModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsSelectListModule } from '@libs/rds-select-list';
import { SharedModule } from '@libs/shared';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompEditionNewBasicComponent } from './rds-comp-edition-new-basic.component';



export default {
    title: 'Components/Edition-new-basics',
    component: RdsCompEditionNewBasicComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompEditionNewBasicComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                CommonModule,
                RdsOffcanvasModule,
                RdsButtonModule,
                RdsNavTabModule,
                RdsInputModule,
                RdsSelectListModule,
                RdsCardModule,
                RdsLabelModule,
                SharedModule,
              
            ],
            providers: [
                FormBuilder
            ],
        })
    ],
    argTypes: {

    }

} as Meta;

const Template: Story<RdsCompEditionNewBasicComponent> = (args: RdsCompEditionNewBasicComponent) => ({
    props: { ...args }

});


export const Default = Template.bind({});
Default.args = {
    PlanList: [

        { isFree: true, value: 'standard', displayText: 'Standard', isSelected: false },
         { isFree: false, value: 'advanced', displayText: 'Advanced', isSelected: false },

    ],
   
}


