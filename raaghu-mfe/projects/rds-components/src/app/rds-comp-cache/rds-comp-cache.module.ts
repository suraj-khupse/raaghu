import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompCacheComponent } from './rds-comp-cache.component';
import { RdsCompCacheShimmerComponent } from './rds-comp-cache-shimmer/rds-comp-cache-shimmer.component';
import { RdsCompAlertPopupModule } from '../rds-comp-alert-popup/rds-comp-alert-popup.module';
import { RdsButtonModule, RdsPaginationModule } from "@libs/rds-elements";
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { NgxTranslateModule } from '@libs/shared';

@NgModule({
  declarations: [
    RdsCompCacheComponent,
    RdsCompCacheShimmerComponent
  ],
  exports: [
    RdsCompCacheComponent
  ],
  imports: [
    CommonModule,
    RdsCompAlertPopupModule,
    RdsButtonModule,
    RdsPaginationModule,
    RdsIconModule,
    RdsCompAlertPopupModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule
  ]
})
export class RdsCompCacheModule { }
