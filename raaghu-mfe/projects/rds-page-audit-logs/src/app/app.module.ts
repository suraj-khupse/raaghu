import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsNavTabModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { AuditLogsReducer, AuditLogsEffects } from '@libs/state-management';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsCompAuditLogsNewModule } from 'projects/rds-components/src/app/rds-comp-audit-logs-new/rds-comp-audit-logs-new.module';
import { RdsCompEntityChangesModule } from 'projects/rds-components/src/app/rds-comp-entity-changes/rds-comp-entity-changes.module';
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
    RdsCompAuditLogsNewModule,
    RdsCompEntityChangesModule,
    RdsNavTabModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TranslateService,
    TranslateStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
