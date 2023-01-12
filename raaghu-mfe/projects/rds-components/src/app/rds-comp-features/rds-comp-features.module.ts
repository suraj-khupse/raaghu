import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompFeaturesComponent } from './rds-comp-features.component';
import {
  RdsButtonModule, RdsCounterModule, RdsDropdownlistModule, RdsFabMenuModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule,
  RdsRadioButtonModule
} from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { RdsPermissionTreeModule } from '../rds-comp-permission-tree/rds-permission-tree.module';
import { RdsCompFeaturesEditShimmerComponent } from './rds-comp-features-edit-shimmer/rds-comp-features-edit-shimmer.component';
import { NgxTranslateModule } from '@libs/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { RdsCompAlertModule } from '../rds-comp-alert/rds-comp-alert.module';
import { RdsCompAlertPopupModule } from '../rds-comp-alert-popup/rds-comp-alert-popup.module';

@NgModule({
  declarations: [
    RdsCompFeaturesComponent,
    RdsCompFeaturesEditShimmerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdsCompAlertModule,
    RdsCompDataTableModule,
    RdsPermissionTreeModule,
    RdsOffcanvasModule,
    RdsButtonModule,
    RdsFabMenuModule,
    RdsInputModule,
    RdsCounterModule,
    RdsRadioButtonModule,
    RdsDropdownlistModule,
    RdsNavTabModule,
    NgxTranslateModule,
    NgxShimmerLoadingModule,
    RdsCompAlertPopupModule
  ],
  exports: [
    RdsCompFeaturesComponent
  ]
})
export class RdsCompFeaturesModule { }
