import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsLoginComponent } from './rds-comp-login.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsModalModule ,RdsLabelModule} from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsButtonModule,
    NgxTranslateModule,
    RdsLabelModule,
    RdsCheckboxModule,
    RdsModalModule
  ],
  exports: [
    RdsLoginComponent
  ]
})
export class RdsCompLoginModule { }
