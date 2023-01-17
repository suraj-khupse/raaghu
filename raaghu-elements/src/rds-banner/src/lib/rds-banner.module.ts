import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsBannerComponent } from './rds-banner.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';

@NgModule({
  declarations: [
    RdsBannerComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsBannerComponent
  ]
})
export class RdsBannerModule { }
