import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompEditionTableComponent } from './rds-comp-edition-table.component';


@NgModule({
  declarations: [
    RdsCompEditionTableComponent
  ],
  exports: [
    RdsCompEditionTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RdsCompEditionTableModule { }
