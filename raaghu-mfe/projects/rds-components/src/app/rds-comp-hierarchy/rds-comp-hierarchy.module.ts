import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCompHierarchyComponent } from './rds-comp-hierarchy.component';
import { NestGroupDirective } from './node-label.directive';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsOffcanvasModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    NestGroupDirective,
    RdsCompHierarchyComponent
  ],
  exports: [
    NestGroupDirective,
    RdsCompHierarchyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsCheckboxModule,
    RdsInputModule,
    RdsOffcanvasModule,
    RdsButtonModule
  ]
})
export class RdsCompHierarchyModule { }
