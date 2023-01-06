import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompThemeNewComponent } from './rds-comp-theme-new.component';
import { RdsButtonModule, RdsDropdownlistModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RdsCompThemeNewComponent
  ],
  imports: [
    CommonModule,
    RdsDropdownlistModule,
    RdsButtonModule,
    NgxTranslateModule,
    FormsModule
  ],
  exports: [
    RdsCompThemeNewComponent
  ]
})
export class RdsCompThemeNewModule { }
