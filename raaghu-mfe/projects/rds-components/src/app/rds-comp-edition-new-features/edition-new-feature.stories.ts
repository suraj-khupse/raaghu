import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCardModule,  RdsCheckboxModule,  RdsCounterModule,  RdsInputModule, RdsLabelModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsSelectListModule } from '@libs/rds-select-list';
import { SharedModule } from '@libs/shared';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompEditionNewFeaturesComponent } from './rds-comp-edition-new-features.component';




export default {
    title: 'Components/Edition-new-feature',
    component: RdsCompEditionNewFeaturesComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompEditionNewFeaturesComponent],
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
                RdsCheckboxModule,
                RdsCounterModule
              
            ],
            providers: [
                FormBuilder
            ],
        })
    ],
    argTypes: {

    }

} as Meta;

const Template: Story<RdsCompEditionNewFeaturesComponent> = (args: RdsCompEditionNewFeaturesComponent) => ({
    props: { ...args }

});


export const Default = Template.bind({});
Default.args = {
    EditionList: [

        { isFree: true, value: 'value 1', displayText: 'Value 1', isSelected: false },
         { isFree: false, value: 'value 2', displayText: 'Value 2', isSelected: false },

    ],
   
}


