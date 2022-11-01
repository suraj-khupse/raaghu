import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { ProfileState } from './profile-settings.reducers';


export const selectProfile = (state: AppState) => state.profileSettings;
// export const selectDynamicEntity = (state: AppState) => state.dynamicEntity;

export const selectAllScope = createSelector(
    selectProfile,
    (state: ProfileState) => state.profile
);

export const selectApiScope = createSelector(
    selectProfile,
    (state: ProfileState) => state.profile
);