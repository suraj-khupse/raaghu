import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompVisualSettingsComponent } from './rds-comp-visual-settings.component';
import { RdsButtonModule, RdsCheckboxModule, RdsLabelModule, RdsNavTabModule, RdsSelectListModule } from '@libs/rds-elements';
import { RdsCompVisualSettingsShimmerComponent } from './rds-comp-visual-settings-shimmer/rds-comp-visual-settings-shimmer.component';
import { NgxTranslateModule } from '@libs/shared';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RdsCompVisualSettingsComponent,
    RdsCompVisualSettingsShimmerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdsNavTabModule,
    RdsCheckboxModule,
    RdsButtonModule,
    RdsSelectListModule,
    RdsLabelModule,
    NgxTranslateModule,
    NgxShimmerLoadingModule,    
  ],
  exports: [
    RdsCompVisualSettingsComponent
  ]
})
export class RdsCompVisualSettingsModule { }
