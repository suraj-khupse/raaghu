import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPropertiesComponent } from './rds-comp-properties.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsIconModule, RdsIllustrationModule, RdsInputModule, RdsLabelModule, RdsModalModule, RdsPaginationModule } from '@libs/rds-elements';
// import { RdsDataTableComponent } from '../rds-comp-data-table/rds-comp-data-table.component';
import { RdsCompPropertiesShimmerComponent } from './rds-comp-properties-shimmer/rds-comp-properties-shimmer.component';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
// import { RdsCompTableShimmerComponent } from '../rds-comp-data-table/rds-comp-table-shimmer/rds-comp-table-shimmer.component';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';



@NgModule({
  declarations: [
    RdsCompPropertiesComponent,
    // RdsDataTableComponent,
    // RdsCompTableShimmerComponent,
    RdsCompPropertiesShimmerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsButtonModule,
    RdsInputModule,
    RdsIllustrationModule,
    RdsPaginationModule,
    RdsInputModule,
    RdsIconModule,
    RdsLabelModule,
    RdsCheckboxModule,
    NgxTranslateModule.forRoot(),
    RdsModalModule,
    NgxShimmerLoadingModule,  
    RdsCompDataTableModule 
  ],
  exports:[
    RdsCompPropertiesComponent
  ]
})
export class RdsCompPropertiesModule { }
