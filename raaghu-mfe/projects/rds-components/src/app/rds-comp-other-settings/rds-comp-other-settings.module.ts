import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompOtherSettingsComponent } from './rds-comp-other-settings.component';
import { RdsCompOtherSettingsShimmerComponent } from './rds-comp-other-settings-shimmer/rds-comp-other-settings-shimmer.component';
import { FormsModule } from '@angular/forms';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCheckboxModule, RdsLabelModule } from '@libs/rds-elements';



@NgModule({
  declarations: [RdsCompOtherSettingsComponent, RdsCompOtherSettingsShimmerComponent],
  exports:[RdsCompOtherSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    RdsLabelModule,
    RdsCheckboxModule
  ]
})
export class RdsCompOtherSettingsModule { }
