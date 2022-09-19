import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsAvatarModule, RdsButtonModule, RdsDropdownlistModule, RdsIconModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompProfileComponent } from './rds-comp-profile.component';

export default {
  title: 'Components/Profile',
  component: RdsCompProfileComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsOffcanvasModule, RdsAvatarModule, RdsIconModule, RdsNavTabModule, RdsDropdownlistModule, RdsButtonModule, NgxTranslateModule, RdsNavTabModule, RdsPaginationModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompProfileComponent> = (args: RdsCompProfileComponent) => ({});

export const Default = Template.bind({});
