import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompDemoUiModule } from 'projects/rds-components/src/app/rds-comp-demoui/rds-comp-demoui.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [    
    CommonModule,
    // BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxTranslateModule.forRoot(),
    RdsCompDemoUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
