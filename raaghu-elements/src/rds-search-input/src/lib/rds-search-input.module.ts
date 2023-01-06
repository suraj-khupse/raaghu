import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsSearchInputComponent } from './rds-search-input.component';
import { RdsLabelModule } from '@libs/rds-label';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RdsSearchInputComponent
  ],
  imports: [
    RdsIconModule,
    RdsLabelModule,
    FormsModule,
    RdsLabelModule
  ],
  exports: [
    RdsSearchInputComponent
  ]
})
export class RdsSearchInputModule { }
