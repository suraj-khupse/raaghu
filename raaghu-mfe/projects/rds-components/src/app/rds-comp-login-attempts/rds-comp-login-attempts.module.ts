import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompLoginAttemptsComponent } from './rds-comp-login-attempts.component';
import { FormsModule } from '@angular/forms';
import { RdsDatepickerModule, RdsDropdownlistModule, RdsIconModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [RdsCompLoginAttemptsComponent],
  exports: [RdsCompLoginAttemptsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RdsDropdownlistModule,
    RdsDatepickerModule,
    RdsCompDataTableModule,
    RdsIconModule,
    NgxTranslateModule.forRoot()
  ]
})
export class RdsCompLoginAttemptsModule { }
