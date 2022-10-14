import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountServiceProxy, NgxTranslateModule, SharedModule } from '@libs/shared'
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotPasswordShimmerComponent } from './forgot-password-shimmer/forgot-password-shimmer.component';

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
    NgxShimmerLoadingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
