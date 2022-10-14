import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import {
  RdsButtonModule,
  RdsCheckboxModule,
  RdsDatepickerModule,
  RdsFabMenuModule,
  RdsIconModule,
  RdsInputModule,
  RdsModalModule,
  RdsNavTabModule,
  RdsOffcanvasModule,
  RdsPaginationModule,
  RdsPopoverModule,
  RdsSelectListModule,
} from '@libs/rds-elements';
import { AppComponent as TextTemplate } from './app.component';
import {
  NgxTranslateModule,
  SharedModule,
} from '../../../libs/shared/src/public-api';
import { StoreModule } from '@ngrx/store';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';

export default {
  title: 'Pages/Text-Template',
  component: TextTemplate,
  decorators: [
    moduleMetadata({
      declarations: [RdsDataTableComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsButtonModule,
        RdsModalModule,
        RdsPaginationModule,
        RdsIconModule,
        SharedModule,
        RdsFabMenuModule,
        NgxTranslateModule,
        RdsInputModule,
        RdsOffcanvasModule,
        RdsNavTabModule,
        RdsSelectListModule,
        RdsCheckboxModule,
        RdsDatepickerModule,
        StoreModule.forRoot({}),
      ],
      providers: [FormBuilder],
    }),
  ],
} as Meta;
const Template: Story<TextTemplate> = (args: TextTemplate) => ({
  props: {
    ...args,
  },
  template: `
  <app-rds-data-table
  [tableData]="tableDataForTextTemplate"
  [tableHeaders]="tableHeadersForTextTemplate"
  [actions]="actions"
  ></app-rds-data-table>
  `,
});

export const Default = Template.bind({});

Default.args = {
  tableHeadersForTextTemplate: [
    {
      displayName: 'Template Name',
      key: 'templateName',
      dataType: 'text',
      dataLength: 5,
      required: false,
      filterable: true,
      sortable: true,
    },
    {
      displayName: 'Inline Localized',
      key: 'inlineLocalizedTemplate',
      dataType: 'html',
      required: false,
    },
    {
      displayName: 'Layout Status',
      key: 'layoutStatusTemplate',
      dataType: 'html',
      required: false,
    },
    {
      displayName: 'Layout Details',
      key: 'layoutDetails',
      dataType: 'text',
      dataLength: 5,
      required: true,
      sortable: true,
    },
  ],
  tableDataForTextTemplate: [
    {
      id: 1,
      templateName: 'Default Email Layout Template',
      inlineLocalized: true,
      layoutStatus: false,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 2,
      templateName: 'Simple Message Template',
      inlineLocalized: true,
      layoutStatus: true,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 3,
      templateName: 'Default Email Layout Template',
      inlineLocalized: true,
      layoutStatus: true,
      layoutDetails: 'abp.PasswordResetTemplate',
    },
    {
      id: 4,
      templateName: 'Password Reset Template',
      inlineLocalized: true,
      layoutStatus: true,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 5,
      templateName: 'Simple Message Template',
      inlineLocalized: true,
      layoutStatus: false,
      layoutDetails: 'abp.PasswordResetTemplate',
    },
    {
      id: 6,
      templateName: 'Email Confirmation Template',
      inlineLocalized: false,
      layoutStatus: false,
      layoutDetails: 'abp.SecurityCodeTemplate',
    },
    {
      id: 7,
      templateName: 'Default Email Layout Template',
      inlineLocalized: false,
      layoutStatus: true,
      layoutDetails: 'abp.EmailConfirmationTemplate',
    },
    {
      id: 8,
      templateName: 'Email Confirmation Template',
      inlineLocalized: true,
      layoutStatus: false,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 9,
      templateName: 'Password Reset Template',
      inlineLocalized: false,
      layoutStatus: true,
      layoutDetails: 'abp.EmailConfirmationTemplate',
    },
    {
      id: 10,
      templateName: 'Simple Message Template',
      inlineLocalized: true,
      layoutStatus: true,
      layoutDetails: 'abp.SecurityCodeTemplate',
    },
    {
      id: 11,
      templateName: 'Default Email Layout Template',
      inlineLocalized: true,
      layoutStatus: false,
      layoutDetails: 'abp.EmailConfirmationTemplate',
    },
    {
      id: 12,
      templateName: 'Password Reset Template',
      inlineLocalized: false,
      layoutStatus: true,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 13,
      templateName: 'Simple Message Template',
      inlineLocalized: true,
      layoutStatus: false,
      layoutDetails: 'abp.PasswordResetTemplate',
    },
    {
      id: 14,
      templateName: 'Default Email Layout Template',
      inlineLocalized: false,
      layoutStatus: false,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 15,
      templateName: 'Default Email Layout Template',
      inlineLocalized: true,
      layoutStatus: true,
      layoutDetails: 'abp.EmailLayoutTemplate',
    },
    {
      id: 16,
      templateName: 'Simple Message Template',
      inlineLocalized: true,
      layoutStatus: false,
      layoutDetails: 'abp.SecurityCodeTemplate',
    },
  ],
  actions: [{ id: 'edit', displayName: 'Edit' }],
};
