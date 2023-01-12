import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompCalendarComponent } from './rds-comp-calendar.component';
import {
  RdsButtonModule, RdsOffcanvasModule, RdsInputModule,
  CalendarMonthModule, CalendarWeekModule, CalendarDayModule, CalendarCommonModule
} from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompCalendarComponent
  ],
  exports: [
    RdsCompCalendarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsButtonModule,
    CalendarCommonModule,
    CalendarMonthModule,
    CalendarWeekModule,
    CalendarDayModule,
    RdsOffcanvasModule,
    RdsInputModule
  ]
})
export class RdsCompCalendarModule { }
