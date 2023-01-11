import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompUserBasicProfileRightComponent } from './rds-comp-user-basic-profile-right.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [RdsCompUserBasicProfileRightComponent],
  exports:[RdsCompUserBasicProfileRightComponent],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsButtonModule,
    RdsDropdownlistModule,
    RdsLabelModule,
    NgxTranslateModule.forRoot()
  ]
})
export class RdsCompUserBasicProfileRightModule { }
