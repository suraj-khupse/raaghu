import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsButtonModule, RdsInputModule } from '@libs/rds-elements';
import { RdsMysettingsComponent } from './rds-comp-mysettings.component';
import { NgxTranslateModule } from '@libs/shared';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RdsMysettingsComponent],
  exports:[RdsMysettingsComponent],
  imports: [
    CommonModule,
    RdsInputModule,
    RdsButtonModule,
    NgxTranslateModule.forRoot(),
    FormsModule
  ]
})
export class RdsCompMysettingsModule { }
