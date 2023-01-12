import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompIntegrationComponent } from './rds-comp-integration.component';
import { RdsCompAppDetailsModule } from '../rds-comp-app-details/rds-comp-app-details.module';
import { RdsButtonModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompIntegrationComponent
  ],
  exports: [
    RdsCompIntegrationComponent
  ],
  imports: [
    CommonModule,
    RdsCompAppDetailsModule,
    RdsButtonModule
  ]
})
export class RdsCompIntegrationModule { }
