import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompAppDetailsComponent } from './rds-comp-app-details.component';
import { RdsAppDetailsModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompAppDetailsComponent
  ],
  exports: [
    RdsCompAppDetailsComponent
  ],
  imports: [
    CommonModule,
    RdsAppDetailsModule
  ]
})
export class RdsCompAppDetailsModule { }
