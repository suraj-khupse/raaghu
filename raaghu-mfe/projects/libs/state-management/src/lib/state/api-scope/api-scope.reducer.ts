import { createReducer, on } from "@ngrx/store";
import { claimTypesAll, claimTypesAllSuccess, deleteApiScope, deleteApiScopeSuccess, getAllApiScope, getAllApiScopeFailure, getAllApiScopeSuccess, getApiScope, getApiScopeSuccess, saveApiScope, saveApiScopeFailure, saveApiScopeSuccess, updateApiScope, updateApiScopeFailure, updateApiScopeSuccess } from "./api-scope-action";


export interface ScopeState {
    allScope:any;
    apiScope:any;
    error: string;
    claims:any;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const ScopeInitialState: ScopeState = {
    allScope:null,
    apiScope:null,
    error: null,
    claims: null,
    status: 'pending',
};

export const ScopesReducer = createReducer(
    // Supply the initial state
    ScopeInitialState,
    on(getAllApiScope, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getAllApiScopeSuccess, (state, { allScope }) => ({
        ...state,
        allScope: allScope,   
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getAllApiScopeFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(getApiScope , (state) => ({ ...state, status: 'loading' })),
    on(getApiScopeSuccess ,(state, {apiScope})=> ({
        ...state,
        apiScope: apiScope,
        status: 'success'
    })),

    on(saveApiScope, (state) => ({ ...state, status: 'loading' })),
    on(saveApiScopeSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(saveApiScopeFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(deleteApiScope, (state) => ({ ...state, status: 'loading' })),
    on(deleteApiScopeSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(updateApiScope, (state) => ({ ...state, status: 'loading' })),
    on(updateApiScopeSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(updateApiScopeFailure, (state, {error}) => ({
        ...state,
        error: error,
        status: 'error'
    })),

    on(claimTypesAll, (state)=>({...state,status:'loading'})),
    on(claimTypesAllSuccess, (state, { claims}) => ({
      ...state,
        claims: claims,  
        error: null,
        status: 'success',
    })),
)