import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompEditionNewBasicComponent } from './rds-comp-edition-new-basic.component';
import { FormsModule } from '@angular/forms';
import { RdsInputModule, RdsSelectListModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompEditionNewBasicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsSelectListModule
  ],
  exports: [
    RdsCompEditionNewBasicComponent
  ]
})
export class RdsCompEditionNewBasicModule { }
