import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { AuditLogsState } from './audit-logs.reducer';

export const selectAuditLogs = (state: AppState) => state.auditLogs;
export const selectAllAuditLogs = createSelector(
  selectAuditLogs,
  (state: AuditLogsState) => state.auditLogs
);
export const selectAllchangeLogs = createSelector(
  selectAuditLogs,
  (state: AuditLogsState) => state.changeLogs
);
