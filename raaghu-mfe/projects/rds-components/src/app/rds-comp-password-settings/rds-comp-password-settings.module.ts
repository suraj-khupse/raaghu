import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPasswordSettingsComponent } from './rds-comp-password-settings.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';
import { RdsCompBenefitModule } from '../rds-comp-benefit/rds-comp-benefit.module';



@NgModule({
  declarations: [
    RdsCompPasswordSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsButtonModule,
    RdsLabelModule,
    RdsCompBenefitModule    
  ],
  exports: [
    RdsCompPasswordSettingsComponent
  ]
})
export class RdsCompPasswordSettingsModule { }
