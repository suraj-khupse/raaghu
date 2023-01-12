import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsLoginComponent } from './rds-comp-login.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsIconLabelModule, RdsInputModule, RdsModalModule } from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [RdsLoginComponent],
  exports: [RdsLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsIconLabelModule,
    RdsCheckboxModule,
    RdsModalModule,
    NgxTranslateModule.forRoot(),
    RdsButtonModule,
    RdsLabelModule
  ]
})
export class RdsCompLoginModule { }
