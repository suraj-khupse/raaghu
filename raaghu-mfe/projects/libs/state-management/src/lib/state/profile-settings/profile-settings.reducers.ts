import { createReducer, on } from "@ngrx/store";
import { getLinkUserData, getLinkUserDataFailure, getLinkUserDataSuccess, getPersonalData, getPersonalDataFailure, getPersonalDataSuccess, getProfileSettings, getProfileSettingsError, getProfileSettingsSuccess, getTwoFactor, getTwoFactorFailure, getTwoFactorSuccess, saveChangedPassWord, saveChangedPassWordFailure, saveChangedPassWordSuccess, savePersonalInfo, savePersonalInfoFailure, savePersonalInfoSuccess, saveProfile, saveProfileScopeFailure, saveProfileScopeSuccess, saveTwoFactor, saveTwoFactorFailure, saveTwoFactorSuccess } from "./profile-settings.actions";

export interface ProfileState {
    profile:any;
    user: any;
    personalData: any;
    twoFactor: boolean;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const ProfileInitialState: ProfileState = {
    profile:null,
    user: null,
    personalData: null,
    twoFactor: false,
    error: null,
    status: 'pending',
};

export const ProfileReducer = createReducer(
    // Supply the initial state
    ProfileInitialState,
    on(getProfileSettings, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getProfileSettingsSuccess, (state, { profile }) => ({
        ...state,
        profile: profile,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getProfileSettingsError, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(getTwoFactor, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getTwoFactorSuccess, (state, { twoFactor }) => ({
        ...state,
        twoFactor: twoFactor,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getTwoFactorFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(getPersonalData, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getPersonalDataSuccess, (state, { personalData }) => ({
        ...state,
        personalData: personalData,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getPersonalDataFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(getLinkUserData, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getLinkUserDataSuccess, (state, { user }) => ({
        ...state,
        user: user,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getLinkUserDataFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(saveProfile, (state) => ({ ...state, status: 'loading' })),
    on(saveProfileScopeSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(saveProfileScopeFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(saveChangedPassWord, (state) => ({ ...state, status: 'loading' })),
    on(saveChangedPassWordSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(saveChangedPassWordFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    
    on(savePersonalInfo, (state) => ({ ...state, status: 'loading' })),
    on(savePersonalInfoSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(savePersonalInfoFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(saveTwoFactor, (state) => ({ ...state, status: 'loading' })),
    on(saveTwoFactorSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(saveTwoFactorFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

)