import { NgModule } from '@angular/core';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
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
    FormsModule
  ],
  exports: [
    RdsSearchInputComponent
  ]
})
export class RdsSearchInputModule { }
