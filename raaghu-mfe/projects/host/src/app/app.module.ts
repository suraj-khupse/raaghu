import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MultipleMfeComponent } from './multiple-mfe/multiple-mfe.component';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule, UserAuthModule, NgxTranslateModule, API_BASE_URL, UserAuthService } from '@libs/shared';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DatePipe } from '@angular/common';
import {
  LoginEffects,
   ValidateTenantReducer,downloadReducer,DownloadEffects
 

} from '@libs/state-management';
import { LanguageTextEffects } from 'projects/libs/state-management/src/lib/state/language-text/language-text.effects';
import { RdsSideNavModule } from '@libs/rds-elements';
import { LanguageTextReducer } from 'projects/libs/state-management/src/lib/state/language-text/language-text.reducer';
import demodata from '../assets/appconfig.json';
import { RdsCookieConsentConfig } from 'projects/libs/rds-cookieconsent/src/lib/service/cookieconsent-config';
import { RdsCookieConsentModule } from 'projects/libs/rds-cookieconsent/src/lib/rds-cookieconsent.module';
import { OAuthModule, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { OrganizationUnitReducer } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.reducer';
import { OrganizationUnitEffects } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.effects';
import { RoleReducer } from 'projects/libs/state-management/src/lib/state/role/role.reducer';
import { RoleEffects } from 'projects/libs/state-management/src/lib/state/role/role.effects';
export function getRemoteServiceBaseUrl(): any {
  let URL = demodata.remoteServiceBaseUrl
  return URL;
}
const cookieConfig: RdsCookieConsentConfig = {
  cookie: {
    domain: location.hostname,
    name: 'rds_cookie_status'
  },
  position: "bottom",
  theme: "classic",
  palette: {
    popup: {
      background: "#e8ebf9ed",
      text: "#000000",
    },
    button: {
      background: "#012fffb5",
      text: "#000000",
      border: "transparent"
    }
  },
  type: "opt-in",
  elements: {
    messagelink: `
     <img class="pe-3" src="{{image}}" width=\"80px\" ></img>
      <span id="cookieconsent:desc" class="cc-message" >{{message}}</span>
      `
    },
  content: {
    policy: "Cookie Policy",
    image: "../assets/cookie.svg",
    
  }
};


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RdsCookieConsentModule.forRoot(cookieConfig),
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    FormsModule,
    NgxTranslateModule.forRoot(),
    StoreModule.forRoot({
      // products: productReducer,
      // dynamicProperty: DynamicPropertyReducer,
      // dynamicEntity: DynamicEntityReducer,
      // profile: ProfileReducer,
      // Entities: GetAllDynamicProperty,
      // PropertiesEntitie: GetAllDynamicPropertyEntites,
      organizationUnit: OrganizationUnitReducer,
      roles: RoleReducer,
      // Delegation: DelegationsReducer,
      // mla: MLAReducer,
      validateTenant: ValidateTenantReducer,
      // InputTypeNames: GetInputnameReducer,
      // EditDynamicPropertSateI: getDynamicPropertyByEditReducer,
      // DynanmicPermission: DynamicPermissionReducer,
      // usernames: GetUsernameFilterReducer,
      // loginAttempts: LoginAttemptsReducer,
      // languages: LanguageReducer,
      // countries: CountryListReducer,
      languageText: LanguageTextReducer,
      // defaultLanguage: DefaultLanguageReducer,
       downloadData: downloadReducer
    }),

    StoreDevtoolsModule.instrument({
      name: 'Raaghu MFE',
      logOnly: false,
    }),
    EffectsModule.forRoot([
      // ProductEffects, LoginAttemptsEffects, MLAEffects,
      // languageEffects, ManageLinkedAccountsEffects, DynamicPropertyEffects,
      // DynamicEntityEffects, ProfileEffects,
      // 
      OrganizationUnitEffects, 
      //MaintenanceEffects, DelegationsEffects, 
      LanguageTextEffects, 
      RoleEffects,
      DownloadEffects,
      LoginEffects
    ]),
    SharedModule,
    UserAuthModule,
    BrowserAnimationsModule,
    RdsSideNavModule

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MultipleMfeComponent,
    SidenavComponent,
  ],

  providers: [
    DatePipe, 
    OAuthService,
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    UserAuthService,
    OAuthModule,
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }

