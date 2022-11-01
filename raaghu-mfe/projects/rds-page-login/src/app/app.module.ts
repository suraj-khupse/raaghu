import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule, NgxTranslateModule } from '@libs/shared';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginShimmerComponent } from './login-shimmer/login-shimmer.component';
import { OAuthModule } from 'angular-oauth2-oidc';
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
    NgxTranslateModule.forRoot(),
    NgxShimmerLoadingModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:8080/'],
          sendAccessToken: true
      }
  })
    // StoreModule.forFeature('ValidatetenantState', ValidatetenantMap
    // ),
    // EffectsModule.forRoot([LoginEffects]),
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

