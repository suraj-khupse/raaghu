import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule, NgxTranslateModule } from '@libs/shared';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginShimmerComponent } from './login-shimmer/login-shimmer.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RdsCompLoginModule } from 'projects/rds-components/src/app/rds-comp-login/rds-comp-login.module';
import { RdsCompAlertPopupModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-alert-popup/rds-comp-alert-popup.module';
import { RdsCompAlertModule } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginShimmerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RdsCompLoginModule,
    RdsCompAlertModule,
    NgxTranslateModule.forRoot(),
    NgxShimmerLoadingModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:8080/'],
          sendAccessToken: true
      }
  })
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

