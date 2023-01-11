import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsMysettingsComponent } from './rds-comp-mysettings.component';
import { RdsAvatarModule, RdsButtonModule, RdsCheckboxModule, RdsInputModule } from '@libs/rds-elements';
import { FormsModule } from '@angular/forms';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsMysettingsComponent
  ],
  imports: [
    CommonModule,
    RdsInputModule,
    FormsModule,
    NgxTranslateModule,
    RdsButtonModule,
    RdsCheckboxModule,
    RdsAvatarModule
  ],
  exports: [
    RdsMysettingsComponent
  ]
})
export class RdsCompMysettingsModule { }
