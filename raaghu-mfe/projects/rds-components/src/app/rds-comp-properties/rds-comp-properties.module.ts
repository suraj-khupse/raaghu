import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPropertiesComponent } from './rds-comp-properties.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsIllustrationModule, RdsInputModule, RdsLabelModule, RdsModalModule, RdsPaginationModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { RdsIconModule } from 'raaghu-themes/rds-icons';



@NgModule({
  declarations: [
    RdsCompPropertiesComponent
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
    RdsCompDataTableModule 
  ],
  exports:[
    RdsCompPropertiesComponent
  ]
})
export class RdsCompPropertiesModule { }
