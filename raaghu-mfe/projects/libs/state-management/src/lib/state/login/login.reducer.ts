import { createReducer, on } from "@ngrx/store";
import { getCurrentLoginInformation, getCurrentLoginInformationFailure, getCurrentLoginInformationSuccess, GetProfilePicture, GetProfilePictureFailure, GetProfilePictureSuccess, ValidateTenantNameFailure, ValidateTenantNameSuccess } from "./login.actions";




export interface ValidateTenantState {
    Tenant: any;
    error: string;
    tenancyName: string;
    status: 'pending' | 'loading' | 'error' | 'success';
    profilePic: any;
    loginInfo: any;
    applicaiton_information: any;
}

export const ValidateTenantInitialState: ValidateTenantState = {    
    Tenant: { result:{} },
    tenancyName: null,
    error: null,
    status: 'pending',
    profilePic: null,
    loginInfo: null,
    applicaiton_information: null
};






export const ValidateTenantReducer = createReducer(
    // Supply the initial state
    ValidateTenantInitialState,
    // on(ValidateTenantName, (state) => ({ ...state, status: 'loading' })),
    // // Handle successfully loaded todos
    // on(ValidateTenantNameSuccess, (state, { ValidatetenantState, tenancyName }) => ({
    //     ...state,
    //     Tenant: ValidatetenantState,
    //     tenancyName: tenancyName,
    //     error: null,
    //     status: 'success',
    // })),

    on(ValidateTenantNameFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getCurrentLoginInformation, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getCurrentLoginInformationSuccess, (state, { getCurrentLoginInformationResult }) => ({
        ...state,
        applicaiton_information: getCurrentLoginInformationResult,
        error: null,
        status: 'success',
    })),

    on(getCurrentLoginInformationFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
   

    on(GetProfilePicture, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(GetProfilePictureSuccess, (state, { ProfilePictureState }) => ({
        ...state,
        Tenant: ProfilePictureState,
        error: null,
        status: 'success',
    })),

    on(GetProfilePictureFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
   
)




