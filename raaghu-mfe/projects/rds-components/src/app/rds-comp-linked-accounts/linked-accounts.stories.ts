import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCardModule, RdsCheckboxModule, RdsInputModule, RdsNavTabModule, RdsPaginationModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsLinkedAccountsComponent } from './rds-comp-linked-accounts.component';

export default {
  title: 'Components/Linked Accounts',
  component: RdsLinkedAccountsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule, ReactiveFormsModule, RdsButtonModule, NgxTranslateModule, RdsCheckboxModule, RdsInputModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsLinkedAccountsComponent> = (args: RdsLinkedAccountsComponent) => ({});

export const Default = Template.bind({});
