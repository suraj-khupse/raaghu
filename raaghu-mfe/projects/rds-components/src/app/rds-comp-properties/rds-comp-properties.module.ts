import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPropertiesComponent } from './rds-comp-properties.component';
import { RdsButtonModule, RdsInputModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { FormsModule } from '@angular/forms';
import { RdsCompPropertiesShimmerComponent } from './rds-comp-properties-shimmer/rds-comp-properties-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';



@NgModule({
  declarations: [
    RdsCompPropertiesComponent,
    RdsCompPropertiesShimmerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsButtonModule,
    RdsInputModule,
    RdsCompDataTableModule,
    NgxShimmerLoadingModule
  ],
  exports: [
    RdsCompPropertiesComponent
  ]
})
export class RdsCompPropertiesModule { }
