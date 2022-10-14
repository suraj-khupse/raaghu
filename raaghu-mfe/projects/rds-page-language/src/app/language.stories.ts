import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistComponent, RdsDropdownlistModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsLabelModule, RdsNavTabModule, RdsPaginationModule, RdsSelectListModule } from '@libs/rds-elements';
import { AlertService, NgxTranslateModule, SharedModule } from '@libs/shared';
import { APP_BASE_HREF, CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent as LanguageComponent } from './app.component';
import { RdsCompNewLanguageComponent } from 'projects/rds-components/src/app/rds-comp-new-language/rds-comp-new-language.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { StoreModule } from '@ngrx/store';
import { Router, RouterModule } from '@angular/router';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Pages/Language',
  component: LanguageComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        RdsCompNewLanguageComponent,
        RdsDataTableComponent,
        RdsCompAlertComponent,
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
  template:`<div class="row">
  <div class=" col-md-12 text-end pb-3 desktop-btn d-sm-none d-lg-block">
    <rds-button [label]="'New Language'" type="button" [showLoadingSpinner]="buttonSpinnerForNewLanguage" style="float: right" [size]="'small'"
      [colorVariant]="'primary'" (click)="openCanvas()" [attr.aria-controls]="'AddLanguage'" [icon]="'plus'"
      [iconHeight]="'12px'" [iconWidth]="'12px'">
    </rds-button>
  </div>
  <div class="col-md-12">
    <div class="card p-2 h-100 border-0 rounded-0 card-full-stretch">
     
          <app-rds-data-table [tableHeaders]="languageTableHeader" [tableStyle]="'light'" [tableData]="languageTableData"
            [recordsPerPage]="10" [pagination]="true" [inlineEdit]="false"></app-rds-data-table>
     
    </div>
  </div>
</div>

<ng-container *ngIf="viewCanvas">
  <rds-offcanvas [canvasTitle]="translate.instant(languageCanvasTitle)" [offId]="'AddLanguage'"
    (onClose)="closeCanvas()" [offcanvaswidth]="550" [placement]="'end'">
  <app-rds-comp-new-language></app-rds-comp-new-language>
  </rds-offcanvas>
</ng-container>`
});

export const Default = Template.bind({});
Default.args = {
  languageTableHeader: [
    { displayName: 'Language Name', key: 'languagename', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Code', key: 'countryCode', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Is enabled', key: 'statusTemplate', dataType: 'icon', dataLength: 30, required: true, sortable: true },
    { displayName: 'Creation Time', key: 'creationTime', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ],
  languageTableData: [
    { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' },
    { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' },
    { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' },
    { languagename: 'India', countryCode: 'IND', statusTemplate: 'false', creationTime: '12-10-1992' },
    { languagename: 'India', countryCode: 'IND', statusTemplate: 'false', creationTime: '12-10-1992' },
    { languagename: 'India', countryCode: 'IND', statusTemplate: 'false', creationTime: '12-10-1992' },
    { languagename: 'India', countryCode: 'IND', statusTemplate: 'true', creationTime: '12-10-1992' }
  ],
  recordsPerpage: 10,
  tableStyle: 'light'
}
