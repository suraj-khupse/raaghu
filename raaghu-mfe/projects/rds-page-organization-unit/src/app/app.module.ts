import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsIconModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    RdsNavTabModule,
    RdsInputModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    HttpClientModule,
    NgxTranslateModule.forRoot(),
    RdsIconModule

  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
