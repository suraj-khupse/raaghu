import { NgModule } from '@angular/core';
import { RdsFabMenuComponent } from './rds-fab-menu.component';
import { RdsIconModule } from 'raaghu-themes/rds-icons';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RdsFabMenuComponent
  ],
  imports: [
    RdsIconModule,
    CommonModule
  ],
  exports: [
    RdsFabMenuComponent,
  ]
})
export class RdsFabMenuModule { }
