import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsRadioButtonModule } from '@libs/rds-radio-button';
import { RdsLabelModule } from '@libs/rds-label';

import { RdsCardDetailComponent } from './rds-card-detail.component';

@NgModule({
  declarations: [
    RdsCardDetailComponent
  ],
  imports: [
    CommonModule,
    RdsRadioButtonModule,
    RdsIconModule,
    RdsLabelModule
  ],
  exports: [
    RdsCardDetailComponent
  ]
})
export class RdsCardDetailModule { }
