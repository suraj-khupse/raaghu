import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsScrollspyComponent } from './rds-scrollspy.component';
import { ScrollspyItemComponent } from './scrollspy-item/scrollspy-item.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { RdsButtonModule } from '@libs/rds-button';
@NgModule({
  declarations: [
    RdsScrollspyComponent,
    ScrollspyItemComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
    RdsButtonModule
  ],
  exports: [
    RdsScrollspyComponent,
    ScrollspyItemComponent
  ]
})
export class RdsScrollspyModule { }
