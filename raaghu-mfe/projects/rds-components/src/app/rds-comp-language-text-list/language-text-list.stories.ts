import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsPopoverModule, RdsSelectListModule } from '@libs/rds-elements';

import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompLanguageTextListComponent } from './rds-comp-language-text-list.component';import { StoreModule } from '@ngrx/store';
import { RdsCompEditLanguageTextComponent } from '../rds-comp-edit-language-text/rds-comp-edit-language-text.component';
import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
;




export default {
  title: 'Components/language-text-list',
  component: RdsCompLanguageTextListComponent,
  decorators: [
    moduleMetadata({
      declarations:[
        RdsCompEditLanguageTextComponent,
        RdsDataTableComponent,
        
      ],
      imports: [
        RdsOffcanvasModule,RdsButtonModule,FormsModule, ReactiveFormsModule, SharedModule,RdsFabMenuModule,NgxTranslateModule,RdsInputModule,
        StoreModule.forRoot({}),RdsSelectListModule
      ],
      providers: [
        FormBuilder,
      ],
    })
  ]
} as Meta;
const Template: Story<RdsCompLanguageTextListComponent> = (args: RdsCompLanguageTextListComponent) => ({
    props:{
      ...args
  }
  });

  export const Default = Template.bind({});

  Default.args = {
    languagetextTableHeader: [
      { displayName: 'Language Name', key: 'languagename', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
      { displayName: 'Code', key: 'countryCode', dataType: 'text', dataLength: 30, required: true, sortable: true },
      { displayName: 'Is enabled', key: 'statusTemplate', dataType: 'icon', dataLength: 30, required: true, sortable: true },
      { displayName: 'Creation Time', key: 'creationTime', dataType: 'text', dataLength: 30, required: true, sortable: true },
  ],
  languagetextTableData: [ { languagename: "India", countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' },
  { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' },
  { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' },
  { languagename: 'India', countryCode: 'IND', statusTemplate: 'false', creationTime: '12-10-1992' },
  { languagename: 'India', countryCode: 'IND', statusTemplate: 'false', creationTime: '12-10-1992' },
  { languagename: 'India', countryCode: 'IND', statusTemplate: 'false', creationTime: '12-10-1992' },
  { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' }],
  }
