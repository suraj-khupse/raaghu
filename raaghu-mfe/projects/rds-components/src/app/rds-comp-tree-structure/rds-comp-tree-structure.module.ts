import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTreeStructureComponent } from './rds-comp-tree-structure.component';
import { RdsCheckboxModule, RdsCounterModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons';

@NgModule({
  declarations: [
    RdsCompTreeStructureComponent,
  ],
  imports: [
    CommonModule,
    RdsCheckboxModule,
    RdsIconModule,
    RdsCounterModule,
  ],
  exports: [
    RdsCompTreeStructureComponent
  ]
})
export class RdsCompTreeStructureModule { }
