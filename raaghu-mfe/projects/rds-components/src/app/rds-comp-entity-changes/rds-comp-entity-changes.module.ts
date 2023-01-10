import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompEntityChangesComponent } from './rds-comp-entity-changes.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsDatepickerModule, RdsDropdownlistModule, RdsInputModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsCompEntityChangesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsDropdownlistModule,
    RdsInputModule,
    RdsDatepickerModule,
    RdsCompDataTableModule,
    RdsButtonModule,
    NgxTranslateModule.forRoot(),
  ],
  exports:[
   RdsCompEntityChangesComponent
  ]
})
export class RdsCompEntityChangesModule { }
