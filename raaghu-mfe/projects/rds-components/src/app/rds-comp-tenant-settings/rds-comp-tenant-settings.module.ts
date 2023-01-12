import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantSettingsComponent } from './rds-comp-tenant-settings.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [RdsCompTenantSettingsComponent],
  exports: [RdsCompTenantSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RdsButtonModule,
    RdsCheckboxModule,
    RdsInputModule,
    NgxTranslateModule.forRoot()
  ]
})
export class RdsCompTenantSettingsModule { }
