import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsDataTableComponent } from './rds-comp-data-table.component';
import { RdsCompTableShimmerComponent } from './rds-comp-table-shimmer/rds-comp-table-shimmer.component';
import { RdsButtonModule, RdsCheckboxModule, RdsIconModule, RdsInputModule, RdsLabelModule, RdsPaginationModule, RdsRadioButtonModule } from '@libs/rds-elements';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { RdsCompAlertPopupModule } from '../rds-comp-alert-popup/rds-comp-alert-popup.module';
import { NgxTranslateModule } from '@libs/shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RdsDataTableComponent,
    RdsCompTableShimmerComponent
  ],
  imports: [
    CommonModule,
    RdsCheckboxModule,
    RdsIconModule,
    RdsInputModule,
    RdsPaginationModule,
    RdsLabelModule,
    RdsButtonModule,
    NgxShimmerLoadingModule,  
    RdsCompAlertPopupModule ,
    NgxTranslateModule,
    FormsModule,
    RdsRadioButtonModule
  ],
  exports: [
    RdsDataTableComponent
  ],
})
export class RdsCompDataTableModule { }
