import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistComponent, RdsDropdownlistModule, RdsFabMenuModule, RdsInputModule, RdsLabelModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsSelectListModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { AlertService, NgxTranslateModule, SharedModule } from '@libs/shared';
import { APP_BASE_HREF, CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent as LanguageComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompNewLanguageModule } from 'projects/rds-components/src/app/rds-comp-new-language/rds-comp-new-language.module';
export default {
  title: 'Pages/Language',
  component: LanguageComponent,
  decorators: [
    moduleMetadata({
      declarations: [   
        LanguageComponent    
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsIconModule,
        RdsNavTabModule,
        RdsSelectListModule,
        RdsCheckboxModule,
        RdsButtonModule,
        RdsInputModule,
        RdsPaginationModule,
        CommonModule,
        StoreModule.forRoot({}),
        NgxTranslateModule.forRoot(),
        RdsLabelModule,
        RdsDropdownlistModule,
        NgxShimmerLoadingModule,
        AppRoutingModule,
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        SharedModule,
        RdsFabMenuModule,
        RdsCompAlertModule,
        RdsCompDataTableModule,
        RdsCompNewLanguageModule,
        RdsOffcanvasModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
        ]
    })
  ]
} as Meta;

const Template: Story<LanguageComponent> = (args: LanguageComponent) => ({
  props: {
    ...args
  }, 
});

export const Default = Template.bind({});
Default.args = { 
  languageTableHeader: [
    { displayName: 'Language Name', key: 'languagename', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Code', key: 'countryCode', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Is enabled', key: 'icon', dataType: 'icon', dataLength: 30, required: true, sortable: true },
    { displayName: 'Creation Time', key: 'creationTime', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ],
  languageTableData: [
    { languagename: 'India', countryCode: 'IND', icon:'tick' ,iconWidth: '20px', iconHeight: '25px', creationTime: '12-10-1992'},
    { languagename: 'India', countryCode: 'IND', icon: 'true',iconWidth: '20px', iconHeight: '25px', creationTime: '12-10-1992' },
    { languagename: 'India', countryCode: 'IND', icon: 'true', creationTime: '12-10-1992' },
    { languagename: 'India', countryCode: 'IND', icon: 'false', creationTime: '12-10-1992' },
    { languagename: 'India', countryCode: 'IND', icon: 'false', creationTime: '12-10-1992' },
    { languagename: 'India', countryCode: 'IND', icon: 'false', creationTime: '12-10-1992' },
    { languagename: 'India', countryCode: 'IND', icon: 'true', creationTime: '12-10-1992' }
  ],
  recordsPerpage: 10,
  tableStyle: 'light',
  flags:[
    {value: "famfamfam-flags ad", some: "ad", isSelected: false}
    ,{value: "famfamfam-flags ae", some: "ae", isSelected: false}
    ,{value: "famfamfam-flags af", some: "af", isSelected: false}
    ,{value: "famfamfam-flags ag", some: "ag", isSelected: false}
    ,{value: "famfamfam-flags ai", some: "ai", isSelected: false}
],
languageNames:[
    {value: "", some: "Invariant Language ()", isSelected: false}
    ,{value: "aa", some: "Afar (aa)", isSelected: false}
    ,{value: "aa-DJ", some: "Afar (Djibouti) (aa-DJ)", isSelected: false}
    ,{value: "aa-ER", some: "Afar (Eritrea) (aa-ER)", isSelected: false}
    ,{value: "aa-ET", some: "Afar (Ethiopia) (aa-ET)", isSelected: false}
    ,{value: "af", some: "Afrikaans (af)", isSelected: false}
    ,{value: "af-NA", some: "Afrikaans (Namibia) (af-NA)", isSelected: false}
    ,{value: "af-ZA", some: "Afrikaans (South Africa) (af-ZA)", isSelected: false}
    ,{value: "agq", some: "Aghem (agq)", isSelected: false}
    ,{value: "agq-CM", some: "Aghem (Cameroon) (agq-CM)", isSelected: false}
    ,{value: "ak", some: "Akan (ak)", isSelected: false}
],        
}
