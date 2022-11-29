

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { SettingsState } from './settings.reducer';


export const settingsSelector = (state:AppState)=> state.settings


//export const selectSettings = (state: AppState) => state.settings;
//export const selectAllSettings = createSelector(
//    selectSettings,
//    (state: SettingsState) => state.settings
//);

export const selectAllSettings = createSelector(
  settingsSelector,
  (state: SettingsState) => state.settings
)

export const selectSettingsTenantPageComboboxItems = createSelector(
  settingsSelector,
  (state: SettingsState) => state.settingsComboboxItem
);

