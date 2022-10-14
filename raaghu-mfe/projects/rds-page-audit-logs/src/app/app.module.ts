import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { AuditLogsReducer, AuditLogsEffects } from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
export const AuditLogReducersMap = {
  auditLogs: AuditLogsReducer
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    NgxTranslateModule.forRoot(),
    StoreModule.forFeature('auditLogs', AuditLogReducersMap
    ),
    EffectsModule.forRoot([AuditLogsEffects]),
    
  ],
  providers: [
    TranslateService,
    TranslateStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
