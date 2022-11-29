
import { createReducer, on } from "@ngrx/store";
import { getSettingFailure, getSettings, getSettingsTenantPageComboboxItems, getSettingsTenantPageComboboxItemsFailure, getSettingsTenantPageComboboxItemsSuccess, getSettingSuccess } from "./settings.actions";
import { Setting } from "./settings.models";


export interface SettingsState {
    settings: any, 
    settingsComboboxItem: any[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const settingInitialState: SettingsState = {
    settings: null,
    settingsComboboxItem: null,
    error: null,
    status: 'pending',
};
export const settingReducer = createReducer(
    // Supply the initial state
    settingInitialState,
    on(getSettings, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getSettingSuccess, (state, { settings }) => ({
        ...state,
        settings: settings,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getSettingFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getSettingsTenantPageComboboxItems, (state) => ({ ...state, status: 'loading' })),
  on(getSettingsTenantPageComboboxItemsSuccess, (state, { settingsComboboxItem }) => ({
    ...state,
    settingsComboboxItem: settingsComboboxItem,
    error: null,
    status: 'success',
  })),
  on(getSettingsTenantPageComboboxItemsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))

)

