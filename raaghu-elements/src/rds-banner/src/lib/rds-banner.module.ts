import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsBannerComponent } from './rds-banner.component';
import { RdsIconModule } from '@libs/rds-icon';

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
