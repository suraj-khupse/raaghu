import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
import { RdsCompIconComponent } from './rds-comp-icon.component';
import { RdsSearchInputModule } from '@libs/rds-elements';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RdsCompIconComponent,
  ],
  exports:[
    RdsCompIconComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RdsIconModule,
    RdsSearchInputModule
  ],
  providers: [],
})
export class RdsCompIconModule { }