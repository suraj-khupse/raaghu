

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { SettingsState } from './settings.reducer';


export const settingsSelector = (state: AppState) => state.settings;


export const selectEmailSettings = createSelector(
settingsSelector,
  (state: SettingsState) => state.emailsettings
)
export const selectIdentityManagementSettings = createSelector(
settingsSelector,
  (state: SettingsState) => state.identityManagementSettings
)

export const selectThemeSettings = createSelector(
settingsSelector,
  (state: SettingsState) => state.themeSettings
)

export const selectTwoFactorSettings = createSelector(
settingsSelector,
  (state: SettingsState) => state.twoFactorSettings
)
export const selectCaptchaSettings = createSelector(
settingsSelector,
  (state: SettingsState) => state.captchaSettings
)

export const selectgeneralSettings = createSelector(
settingsSelector,
  (state: SettingsState) => state.generalSettings
)

