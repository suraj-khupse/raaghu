import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { ProfileState } from './profile-settings.reducers';


export const selectProfile = (state: AppState) => state.profile;
// export const selectDynamicEntity = (state: AppState) => state.dynamicEntity;

export const selectAllProfileSettings = createSelector(
    selectProfile,
    (state: ProfileState) => state.profile
);

export const selectTwoFactor = createSelector(
    selectProfile,
    (state: ProfileState) => state.twoFactor
);

export const selectlinkUser = createSelector(
    selectProfile,
    (state: ProfileState) => state.user
);

export const selectPersonalData = createSelector(
    selectProfile,
    (state: ProfileState) => state.personalData
);
