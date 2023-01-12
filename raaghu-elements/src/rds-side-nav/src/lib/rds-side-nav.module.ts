import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsToggleModule } from '@libs/rds-toggle';
import { RdsSideNavComponent } from './rds-side-nav.component';


@NgModule({
  declarations: [
    RdsSideNavComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
    RdsToggleModule
  ],
  exports: [
    RdsSideNavComponent
  ]
})
export class RdsSideNavModule { }
