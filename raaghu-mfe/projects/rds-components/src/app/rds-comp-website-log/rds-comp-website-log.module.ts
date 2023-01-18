import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompWebsiteLogComponent } from './rds-comp-website-log.component';
import { RdsBadgeModule, RdsPaginationModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsCompWebsiteLogComponent
  ],
  imports: [
    CommonModule,
    RdsBadgeModule,
    RdsPaginationModule,
    RdsIconModule,
    NgxTranslateModule
  ],
  exports: [
    RdsCompWebsiteLogComponent
  ]
})
export class RdsCompWebsiteLogModule { }
