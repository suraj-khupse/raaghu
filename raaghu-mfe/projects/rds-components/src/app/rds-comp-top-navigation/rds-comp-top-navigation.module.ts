import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsTopNavigationComponent } from './rds-comp-top-navigation.component';
import { RdsAvatarModule, RdsDropdownlistModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [RdsTopNavigationComponent],
  exports:[RdsTopNavigationComponent],
  imports: [
    CommonModule,
    RdsDropdownlistModule,
    RdsAvatarModule,
    NgxTranslateModule
  ]
})
export class RdsCompTopNavigationModule { }
