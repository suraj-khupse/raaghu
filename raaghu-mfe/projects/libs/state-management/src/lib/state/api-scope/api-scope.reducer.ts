import { createReducer, on } from "@ngrx/store";
import { deleteApiScope, deleteApiScopeSuccess, getAllApiScope, getAllApiScopeFailure, getAllApiScopeSuccess, saveApiScope, saveApiScopeFailure, saveApiScopeSuccess, updateApiScope, updateApiScopeFailure, updateApiScopeSuccess } from "./api-scope-action";


export interface ScopeState {
    allScope:any;
    apiScope:any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const ScopeInitialState: ScopeState = {
    allScope:null,
    apiScope:null,
    error: null,
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
    }))
)