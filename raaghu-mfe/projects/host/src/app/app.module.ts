import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { APP_ROUTES } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  SharedModule,
  UserAuthModule,
  NgxTranslateModule,
  API_BASE_URL,
} from '@libs/shared';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DatePipe } from '@angular/common';
import { RdsSideNavModule } from '@libs/rds-elements';
import demodata from '../assets/appconfig.json';
import { RdsCookieConsentConfig } from 'projects/libs/rds-cookieconsent/src/lib/service/cookieconsent-config';
import { RdsCookieConsentModule } from 'projects/libs/rds-cookieconsent/src/lib/rds-cookieconsent.module';
import { ProfilePicEffects } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.effects';
import { ProfilePicReducer } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.reducers';
import { productReducer } from 'projects/libs/state-management/src/lib/state/products/product.reducer';
import { ProfileReducer } from 'projects/libs/state-management/src/lib/state/mysettings/mysettings.reducer';
import { OrganizationUnitReducer } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.reducer';
import { DelegationsReducer, GetUsernameFilterReducer } from 'projects/libs/state-management/src/lib/state/authority-delegations/authority-delegations.reducer';
import { MLAReducer } from 'projects/libs/state-management/src/lib/state/mla/mla.reducer';
import { ValidateTenantReducer } from 'projects/libs/state-management/src/lib/state/login/login.reducer';
import { LoginAttemptsReducer } from 'projects/libs/state-management/src/lib/state/login-attempts/login-attempts.reducer';
import { CountryListReducer, DefaultLanguageReducer, LanguageReducer } from 'projects/libs/state-management/src/lib/state/language/language.reducer';
import { LanguageTextReducer } from 'projects/libs/state-management/src/lib/state/language-text/language-text.reducer';
import { downloadReducer } from 'projects/libs/state-management/src/lib/state/DownloadData/download-data.reducer';
import { VisualsettingsReducer } from 'projects/libs/state-management/src/lib/state/Visual-settings/visual-settings.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from 'projects/libs/state-management/src/lib/state/products/product.effects';
import { LoginAttemptsEffects } from 'projects/libs/state-management/src/lib/state/login-attempts/login-attempts.effects';
import { MLAEffects } from 'projects/libs/state-management/src/lib/state/mla/mla.effects';
import { ManageLinkedAccountsEffects } from 'projects/libs/state-management/src/lib/state/manage-linked-accounts/manage-linked-accounts.effects';
import { ProfileEffects } from 'projects/libs/state-management/src/lib/state/mysettings/mysettings.effects';
import { OrganizationUnitEffects } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.effects';
import { MaintenanceEffects } from 'projects/libs/state-management/src/lib/state/maintenance/maintenance.effects';
import { visualsettingEffects } from 'projects/libs/state-management/src/lib/state/Visual-settings/visual-settings.effects';
import { DownloadEffects } from 'projects/libs/state-management/src/lib/state/DownloadData/download-data.effects';
import { LanguageTextEffects } from 'projects/libs/state-management/src/lib/state/language-text/language-text.effects';
import { LoginEffects } from 'projects/libs/state-management/src/lib/state/login/login.effects';
import { DelegationsEffects } from 'projects/libs/state-management/src/lib/state/authority-delegations/authority-delegations.effects';
import { LanguageEffects } from 'projects/libs/state-management/src/lib/state/language/language.effects';
import { UserReducer } from 'projects/libs/state-management/src/lib/state/user/user.reducer';
import { RoleReducer } from 'projects/libs/state-management/src/lib/state/role/role.reducer';
import { RoleEffects } from 'projects/libs/state-management/src/lib/state/role/role.effects';
import { UserEffects } from 'projects/libs/state-management/src/lib/state/user/user.effects';
import { AuditLogsEffects } from 'projects/libs/state-management/src/lib/state/audit-logs/audit-logs.effects';
import { AuditLogsReducer } from 'projects/libs/state-management/src/lib/state/audit-logs/audit-logs.reducer';
import { EditionReducer } from 'projects/libs/state-management/src/lib/state/edition/edition.reducer';
import { EditionEffects } from 'projects/libs/state-management/src/lib/state/edition/edition.effects';
import { MaintenanceReducer } from 'projects/libs/state-management/src/lib/state/maintenance/maintenance.reducer';
import { settingReducer } from 'projects/libs/state-management/src/lib/state/settings/settings.reducer';
import { SettingEffects } from 'projects/libs/state-management/src/lib/state/settings/settings.effects';
import { WebhookSubscriptionReducer } from 'projects/libs/state-management/src/lib/state/webhook-subscription/webhook-subscription.reducer';
import { WebhookSubscriptionEffects } from 'projects/libs/state-management/src/lib/state/webhook-subscription/webhook-subscription.effects';
import { TenantReducer } from 'projects/libs/state-management/src/lib/state/tenant/tenant.reducer';
import { TenantEffects } from 'projects/libs/state-management/src/lib/state/tenant/tenant.effects';
export function getRemoteServiceBaseUrl(): any {
  let URL = demodata.remoteServiceBaseUrl;
  return URL;
}
 const cookieConfig: RdsCookieConsentConfig = {
  cookie: {
    domain: location.hostname,
    name: 'rds_cookie_status'
  },
  position: 'bottom',
  theme: 'classic',
  palette: {
    popup: {
      background: '#e8ebf9ed',
      text: '#000000',
    },
    button: {
      background: '#012fffb5',
      text: '#000000',
      border: 'transparent',
    },
  },
  type:'opt-in',
  elements: {
    messagelink: `
      <img class="pe-3" src="{{image}}" width=\"80px\" ></img>
      <span id="cookieconsent:desc" class="cc-message">{{message}} </span>
      `,  
  },
  content: {    
    policy: 'Rds Cookies',
    image: '../assets/cookie.svg',   
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
      products: productReducer,
      profile: ProfileReducer,
      organizationUnit: OrganizationUnitReducer,
      Delegation: DelegationsReducer,
      mla: MLAReducer,
      user: UserReducer,
      roles: RoleReducer,
      tenants:TenantReducer,
      validateTenant: ValidateTenantReducer,
      usernames: GetUsernameFilterReducer,
      loginAttempts: LoginAttemptsReducer,
      languages: LanguageReducer,
      countries: CountryListReducer,
      languageText: LanguageTextReducer,
      defaultLanguage: DefaultLanguageReducer,
      downloadData: downloadReducer,
      profilePicture : ProfileReducer,
      profilepic: ProfilePicReducer,
      visualsettings:VisualsettingsReducer,
      auditLogs: AuditLogsReducer,
      editions:EditionReducer,
      maintenances:MaintenanceReducer,
      settings:settingReducer,
      webhookSubscriptions: WebhookSubscriptionReducer
    }),

    StoreDevtoolsModule.instrument({
      name: 'Raaghu MFE',
      logOnly: false,
    }),
    EffectsModule.forRoot([
      ProductEffects,
      EditionEffects,
      RoleEffects,
      SettingEffects,
      LoginAttemptsEffects,
      MLAEffects,
      ManageLinkedAccountsEffects,
      ProfileEffects,
      OrganizationUnitEffects,
      MaintenanceEffects,
      DelegationsEffects,
      LoginEffects,
      LanguageTextEffects,
      DownloadEffects,
      ProfilePicEffects,
      visualsettingEffects,
      LanguageEffects,
      UserEffects,
      TenantEffects,
      AuditLogsEffects,
      WebhookSubscriptionEffects
    ]),
    SharedModule,
    UserAuthModule,
    RdsSideNavModule,
  ],
  declarations: [
    AppComponent,
    SidenavComponent,
  ],

  providers: [
    DatePipe,
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
