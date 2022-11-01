import { createReducer, on } from "@ngrx/store";
import { deleteApiResource, deleteApiResourceSucess, getAllApiResources, getAllApiResourcesEdit, getAllApiResourcesEditFailure, getAllApiResourcesEditSuccess, getAllApiResourcesFailure, getAllApiResourcesSuccess, getApiResource, getApiResourceFailure, getApiResourceSuccess, saveApiResource, saveApiResourceFailure, saveApiResourceSuccess, updateApiResource, updateApiResourceFailure, updateApiResourceSuccess } from "./api-resources.actions";


export interface ApiResourcesState {
    allApiResources:any;
    allApiResourcesEdit:any;
    apiResource:any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const ApiResourcesInitialState: ApiResourcesState = {
    allApiResources:null,
    allApiResourcesEdit:null,
    apiResource:null,
    error: null,
    status: 'pending',
};

export const ApiResourcesReducer = createReducer(
    // Supply the initial state
    ApiResourcesInitialState,
    on(getAllApiResources, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getAllApiResourcesSuccess, (state, { allApiResources }) => ({
        ...state,
        allApiResources: allApiResources,   
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getAllApiResourcesFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getAllApiResourcesEdit, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getAllApiResourcesEditSuccess, (state, { allApiResourcesEdit }) => ({
        ...state,
        allApiResourcesEdit: allApiResourcesEdit,   
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getAllApiResourcesEditFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getApiResource, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getApiResourceSuccess, (state, { apiResource}) => ({
        ...state,
        apiResource: apiResource,   
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getApiResourceFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(saveApiResource, (state) => ({ ...state, status: 'loading' })),
    on(saveApiResourceSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(saveApiResourceFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(deleteApiResource, (state) => ({ ...state, status: 'loading' })),
    on(deleteApiResourceSucess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(updateApiResource, (state) => ({ ...state, status: 'loading' })),
    on(updateApiResourceSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(updateApiResourceFailure, (state, {error}) => ({
        ...state,
        error: error,
        status: 'error'
    }))
)
