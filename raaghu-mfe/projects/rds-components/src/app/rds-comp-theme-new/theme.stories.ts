import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsButtonModule, RdsCardModule,  RdsInputModule, RdsLabelModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsSelectListModule } from '@libs/rds-select-list';
import { SharedModule } from '@libs/shared';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompThemeNewComponent } from './rds-comp-theme-new.component';




export default {
    title: 'Components/Theme New',
    component: RdsCompThemeNewComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompThemeNewComponent],
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
                RdsCheckboxModule
              
            ],
            providers: [
                FormBuilder
            ],
        })
    ],
    argTypes: {

    }

} as Meta;

const Template: Story<RdsCompThemeNewComponent> = (args: RdsCompThemeNewComponent) => ({
    props: { ...args }

});


export const Default = Template.bind({});
Default.args = {
    StyleList: [
         { isFree: true, value: '1', displayText: 'Style 1', isSelected: false },
         { isFree: false, value: '2', displayText: 'Style 2', isSelected: false },
       ],
    WebList: [
        { isFree: true, value: '1', displayText: 'Public 1', isSelected: false },
        { isFree: false, value: '2', displayText: 'Public 2', isSelected: false },
      ],
    MenuList: [
        { isFree: true, value: '1', displayText: 'Placement 1', isSelected: false },
        { isFree: false, value: '2', displayText: 'Placement 2', isSelected: false },
      ],
    StatusList: [
        { isFree: true, value: '1', displayText: 'Status 1', isSelected: false },
        { isFree: false, value: '2', displayText: 'Status 2', isSelected: false },
      ],
}


