import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { MLAState } from './mla.reducer';

export const selectMLA = (state: AppState) => state.mla;
// export const selectDynamicEntity = (state: AppState) => state.dynamicEntity;

export const selectTenancyData = createSelector(
    selectMLA,
    (state: MLAState) => state.tenancyData
);
export const selectAllNotification = createSelector(
    selectMLA,
    (state: MLAState) => state.notification
);
export const selectNotificationSettings = createSelector(
    selectMLA,
    (state: MLAState) => state.notificationSettings
);
export const selectBackToImpersonator = createSelector(
    selectMLA,
    (state: MLAState) => state.tokenResult
);


