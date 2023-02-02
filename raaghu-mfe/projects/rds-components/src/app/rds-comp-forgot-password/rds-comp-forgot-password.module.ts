import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RdsForgotPasswordComponent } from './rds-comp-forgot-password.component';
import { RdsButtonModule, RdsInputModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsForgotPasswordComponent
  ],
  exports: [
    RdsForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RdsInputModule,
    RdsButtonModule
    ]
})
export class RdsCompForgotPasswordModule { }
