import { AppState } from "../../app.interface";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfilepictureState } from "./profile-settings.reducers";


// export const selectProfile = (state: AppState) => state.profile;
// export const selectDynamicEntity = (state: AppState) => state.dynamicEntity;

export const  profileSelector = createFeatureSelector<AppState>('profile');


export const selectProfilePicture = createSelector(
    profileSelector,
    (state: AppState) => state.profile
);