import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPersonalDataComponent } from './rds-comp-personal-data.component';
import { RdsButtonModule } from '@libs/rds-button';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { RdsBannerModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsCompPersonalDataComponent
  ],
  imports: [
    CommonModule,
    RdsButtonModule,
    RdsCompDataTableModule,
    RdsBannerModule,
    NgxTranslateModule
  ],
  exports: [
    RdsCompPersonalDataComponent
  ]
})
export class RdsCompPersonalDataModule { }
