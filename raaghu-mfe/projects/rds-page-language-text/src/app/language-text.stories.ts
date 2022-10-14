import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsButtonModule, RdsCheckboxModule, RdsIconModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsSearchInputModule, RdsSelectListModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule, UserAuthService } from '@libs/shared';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent as LanguageTextComponent } from './app.component';
import { RdsCompEditLanguageTextComponent } from 'projects/rds-components/src/app/rds-comp-edit-language-text/rds-comp-edit-language-text.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

export default {
  title: 'Pages/Language Text',
  component: LanguageTextComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        RdsCompEditLanguageTextComponent,
        RdsDataTableComponent,
        RdsCompAlertComponent,
        LanguageTextComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsIconModule,
        RdsNavTabModule,
        RdsSelectListModule,
        RdsCheckboxModule,
        RdsButtonModule,
        RdsTextareaModule,
        RdsPaginationModule,
        CommonModule,
        StoreModule.forRoot({}),
        NgxTranslateModule.forRoot(),
        RouterModule.forRoot([]),
        SharedModule,
        RdsOffcanvasModule,
        RdsSearchInputModule
      ],
      providers: [
        UserAuthService,
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },

      ]
    })
  ]
} as Meta;

const Template: Story<LanguageTextComponent> = (args: LanguageTextComponent) => ({
  props: {
    ...args
  },
  template: `<div>
  <!-- <div style="display: flex;"> -->
  <div class="row justify-content-between">
    <div class="col-sm-4">
      <div class="form-group mb-3">
        <rds-search-input [placeholder]="'Search'"  (send)="searchLanguageText($event)"
        (onClick)="searchLanguageText($event)"></rds-search-input>
      </div>

      </div>
      <div class="col-md-2 col-sm-2">
        <div class="from-group mb-3">
          <rds-select-list ngDefaultControl name="baselanguage" [(ngModel)]="baselanguage" [value]="baselanguage" [itemList]="listbaseLanguage" (change)="getLanguageTextTable()">
          </rds-select-list>
  
        </div>
      </div>
      <div class="col-md-2 col-sm-2 ">
        <div class="form-group mb-3">
          <rds-select-list ngDefaultControl name="TargetCulturename" [(ngModel)]="TargetCulturename" [value]="TargetCulturename" [itemList]="listbaseLanguage" (change)="getLanguageTextTable()">
          </rds-select-list>
        </div>
      </div>
      <div class="col-md-2 col-sm-2 ">
       <div class="form-group mb-3">
        <rds-select-list ngDefaultControl name="source" [(ngModel)]="source" [value]="source" [itemList]="listsource" (change)="getLanguageTextTable()">
        </rds-select-list> 
       </div>
        <!-- <rds-select-list [(ngModel)]="source" [value]="source" ngDefaultControl name="source"
                         (change)="getLanguageTextTable()">
          <option [value]="''" selected>Source</option>
          <ng-container *ngFor="let item of listsource">
            <option [value]="item.displayText">{{item.displayText}}</option>
          </ng-container>
        </rds-select-list> -->
      </div>

      <div class="col-md-2 col-sm-2 ">
        <div class="from-group mb-3">
          <rds-select-list ngDefaultControl name="targetFilter" [(ngModel)]="targetFilter" [value]="targetFilter" [itemList]="listTargetValue" (change)="getLanguageTextTable()">
          </rds-select-list>
        </div>
      </div>
     </div>
  
<div class="row">
  <div class="col-md-12">
    <div class=" card p-2 h-100 border-0 rounded-0 card-full-stretch">
<app-rds-data-table [tableHeaders]="languageTableHeader" [tableStyle]="'light'" [tableData]="languageTableData"
            [recordsPerPage]="10" [pagination]="true" [inlineEdit]="false"></app-rds-data-table>    </div>
  </div>
</div>
<rds-offcanvas [canvasTitle]="'EDIT TEXT'" [offId]="'EditlanguageText'" [offcanvaswidth]="550" [placement]="'end'"
  >
  <app-edit-language-text [Languagetext]="LanguageText" (onLanguageTextSave)="getLanguageTextTable()"></app-edit-language-text>

</rds-offcanvas>
`
});

export const Default = Template.bind({});
