import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateModule, SharedModule } from '@libs/shared'
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotPasswordShimmerComponent } from './forgot-password-shimmer/forgot-password-shimmer.component';
import { RdsCompForgotPasswordModule } from '../../../rds-components/src/app/rds-comp-forgot-password/rds-comp-forgot-password.module'

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordShimmerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxTranslateModule.forRoot(),
    NgxShimmerLoadingModule,
    RdsCompForgotPasswordModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
