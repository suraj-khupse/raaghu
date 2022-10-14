import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsButtonModule, RdsCardModule,  RdsInputModule, RdsLabelModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsSelectListModule } from '@libs/rds-select-list';
import { SharedModule } from '@libs/shared';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsCompAccountNewComponent } from '../rds-comp-account-new/rds-comp-account-new.component';
import { RdsCompEmailSettingsNewComponent } from '../rds-comp-email-settings-new/rds-comp-email-settings-new.component';
import { RdsCompIdentityManagementNewComponent } from '../rds-comp-identity-management-new/rds-comp-identity-management-new.component';
import { RdsCompThemeNewComponent } from '../rds-comp-theme-new/rds-comp-theme-new.component';
import { RdsCompSettingsNewComponent } from './rds-comp-settings-new.component';





export default {
    title: 'Components/Settings New',
    component: RdsCompSettingsNewComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompSettingsNewComponent,RdsCompEmailSettingsNewComponent,RdsCompIdentityManagementNewComponent,RdsCompThemeNewComponent,RdsCompAccountNewComponent],
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

const Template: Story<RdsCompSettingsNewComponent> = (args: RdsCompSettingsNewComponent) => ({
    props: { ...args }

});


export const Default = Template.bind({});
Default.args = {
    navtabsItems : [
        {
          label: 'Email Settings',
          tablink: '#email',
          ariacontrols: 'email',
        },
        {
          label: 'Identity Management',
          tablink: '#identity',
          ariacontrols: 'identity',
        },
        {
          label: 'Theme',
          tablink: '#theme',
          ariacontrols: 'theme',
        },
        {
          label: 'Account',
          tablink: '#account',
          ariacontrols: 'account',
        }
      ],
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
     AuthentiactionList: [
      { isFree: true, value: '1', displayText: 'Value 1', isSelected: false },
      { isFree: false, value: '2', displayText: 'Value 2', isSelected: false },
    ],
    VersionList: [
      { isFree: true, value: '1', displayText: 'Value 1', isSelected: false },
      { isFree: false, value: '2', displayText: 'Value 2', isSelected: false },
    ],
   
}


