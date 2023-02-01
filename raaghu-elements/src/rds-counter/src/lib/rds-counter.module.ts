import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCounterComponent } from './rds-counter.component';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from 'raaghu-themes/rds-icons';


@NgModule({
  declarations: [
    RdsCounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsIconModule
  ],
  exports: [
    RdsCounterComponent
  ]
})
export class RdsCounterModule { }
