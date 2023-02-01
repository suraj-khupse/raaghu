import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsTopNavigationComponent } from './rds-comp-top-navigation.component';
import { RdsAvatarModule, RdsBreadcrumbModule, RdsDropdownlistModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';
import { RdsIconModule } from 'raaghu-themes/rds-icons';



@NgModule({
  declarations: [RdsTopNavigationComponent],
  exports:[RdsTopNavigationComponent],
  imports: [
    CommonModule,
    RdsDropdownlistModule,
    RdsAvatarModule,
    RdsBreadcrumbModule,
    NgxTranslateModule,
    RdsIconModule
  ]
})
export class RdsCompTopNavigationModule { }
