import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsButtonModule } from '@libs/rds-elements';
// export const featureReducersMap = {
//   tenants: TenantReducer,
//   tenantInfo: TenantInfoReducer,
//   editionComboboxItem: EditionComboboxReducer,
//   tenantFeature: TenantFeatureReducer,
//   tenantUsers:TenantUsersReducer,
//   tenantLogin:TenantLoginReducer
// };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    NgxTranslateModule.forRoot(),
    // StoreModule.forFeature('tenants', featureReducersMap),
    // EffectsModule.forRoot([TenantEffects]),
  ],
  providers: [
    TranslateService,
    TranslateStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
