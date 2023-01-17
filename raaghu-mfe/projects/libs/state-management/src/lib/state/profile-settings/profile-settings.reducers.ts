import { createReducer, on } from "@ngrx/store";
import { downloadData, downloadDataFailure, downloadDataSuccess, getLinkUserData, getLinkUserDataFailure, getLinkUserDataSuccess, getPersonalData, getPersonalDataFailure, getPersonalDataSuccess, getProfilePictureData, getProfilePictureDataFailure, getProfilePictureDataSuccess, getProfileSettings, getProfileSettingsError, getProfileSettingsSuccess, getTwoFactor, getTwoFactorFailure, getTwoFactorSuccess, requestPersonalData, requestPersonalDataFailure, requestPersonalDataSuccess, saveChangedPassWord, saveChangedPassWordFailure, saveChangedPassWordSuccess, saveProfile, saveProfileScopeFailure, saveProfileScopeSuccess, saveTwoFactor, saveTwoFactorFailure, saveTwoFactorSuccess } from "./profile-settings.actions";

export interface ProfileState {
    profile:any;
    user: any;
    profilePicData: any;
    personalData: any;
    downloadData: any;
    twoFactor: boolean;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const ProfileInitialState: ProfileState = {
    profile:null,
    user: null,
    profilePicData: null,
    downloadData: null,
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

    on(getProfilePictureData, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getProfilePictureDataSuccess, (state, { profilePicData }) => ({
        ...state,
        profilePicData: profilePicData,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getProfilePictureDataFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(downloadData, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(downloadDataSuccess, (state, { downloadData }) => ({
        ...state,
        downloadData: downloadData,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(downloadDataFailure, (state, { error }) => ({
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

    
    on(requestPersonalData, (state) => ({ ...state, status: 'loading' })),
    on(requestPersonalDataSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(requestPersonalDataFailure, (state, { error }) => ({
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