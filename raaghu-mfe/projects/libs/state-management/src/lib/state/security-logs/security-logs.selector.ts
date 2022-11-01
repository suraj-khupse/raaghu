import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { SecurityState } from './security-logs.reducer';


export const selectSecurityLog = (state: AppState) => state.securityLogs;
// export const selectDynamicEntity = (state: AppState) => state.dynamicEntity;

export const selectSecurityLogs = createSelector(
    selectSecurityLog,
    (state: SecurityState) => state.logs
);
