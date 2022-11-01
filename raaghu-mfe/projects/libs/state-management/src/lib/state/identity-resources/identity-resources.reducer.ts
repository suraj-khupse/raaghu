import { createReducer, on } from "@ngrx/store";
import { deleteIdentityResource, deleteIdentityResourceSucess, getAllIdentityResources, getAllIdentityResourcesFailure, getAllIdentityResourcesSuccess, getIdentityResource, getIdentityResourceFailure, getIdentityResourceSuccess, saveIdentityResource, saveIdentityResourceFailure, saveIdentityResourceSuccess, updateIdentityResource, updateIdentityResourceFailure, updateIdentityResourceSuccess } from "./identity-resources.actions";


export interface IdentityResourcesState {
    allIdentityResources:any;
    identityResource:any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const IdentityResourcesInitialState: IdentityResourcesState = {
    allIdentityResources:null,
    identityResource:null,
    error: null,
    status: 'pending',
};

export const IdentityResourcesReducer = createReducer(
    // Supply the initial state
    IdentityResourcesInitialState,
    on(getAllIdentityResources, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getAllIdentityResourcesSuccess, (state, { allIdentityResources }) => ({
        ...state,
        allIdentityResources: allIdentityResources,   
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getAllIdentityResourcesFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getIdentityResource, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getIdentityResourceSuccess, (state, { identityResource}) => ({
        ...state,
        identityResource: identityResource,   
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getIdentityResourceFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(saveIdentityResource, (state) => ({ ...state, status: 'loading' })),
    on(saveIdentityResourceSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(saveIdentityResourceFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(deleteIdentityResource, (state) => ({ ...state, status: 'loading' })),
    on(deleteIdentityResourceSucess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(updateIdentityResource, (state) => ({ ...state, status: 'loading' })),
    on(updateIdentityResourceSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(updateIdentityResourceFailure, (state, {error}) => ({
        ...state,
        error: error,
        status: 'error'
    }))
)
