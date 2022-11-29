import { createReducer, on } from "@ngrx/store";
import { getTenants, getTenantSuccess, getTenantFailure, getEditionComboboxItemsSuccess, getEditionComboboxItemsFailure, getTenantForEdit, getTenantForEditSuccess, getTenantForEditFailure, getTenantFeaturesForEdit, getTenantFeaturesForEditSuccess, getTenantFeaturesForEditFailure, getTenantUsers, getTenantUsersSuccess, getTenantUsersFailure, getTenantLogin, getTenantLoginSuccess, getTenantLoginFailure, getEditionComboboxItems } from "./tenant.actions";


export interface TenantState {
    tenants: any;
    editionComboboxItem: any[];
    tenantUsers: any;
    tenantLogin: any;
    tenantInfo: any;
    tenantFeature: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const TenantInitialState: TenantState = {
    tenants: null,
    editionComboboxItem: null,
    tenantUsers: null,
    tenantLogin: null,
    tenantInfo:null,
    tenantFeature: null,
    error: null,
    status: 'pending',
};
export const TenantReducer = createReducer(
    // Supply the initial state
    TenantInitialState,
    on(getTenants, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getTenantSuccess, (state, { tenants }) => ({
        ...state,
        tenants: tenants,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getTenantFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getEditionComboboxItems, (state) => ({ ...state, status: 'loading' })),
    on(getEditionComboboxItemsSuccess, (state, { editionComboboxItem }) => ({
        ...state,
        editionComboboxItem: editionComboboxItem,
        error: null,
        status: 'success',
    })),
    on(getEditionComboboxItemsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getTenantUsers, (state) => ({ ...state, status: 'loading' })),
    on(getTenantUsersSuccess, (state, { tenantUsers }) => ({
        ...state,
        tenantUsers: tenantUsers,
        error: null,
        status: 'success',
    })),
    on(getTenantUsersFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getTenantLogin, (state) => ({ ...state, status: 'loading' })),
    on(getTenantLoginSuccess, (state, { tenantLogin }) => ({
        ...state,
        tenantLogin: tenantLogin,
        error: null,
        status: 'success',
    })),
    on(getTenantLoginFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getTenantForEdit, (state) => ({ ...state, status: 'loading' })),
    on(getTenantForEditSuccess, (state, { tenantInfo }) => ({
        ...state,
        tenantInfo: tenantInfo,
        error: null,
        status: 'success',
    })),
    on(getTenantForEditFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getTenantFeaturesForEdit, (state) => ({ ...state, status: 'loading' })),
    on(getTenantFeaturesForEditSuccess, (state, { tenantFeature }) => ({
        ...state,
        tenantFeature: tenantFeature,
        error: null,
        status: 'success',
    })),
    on(getTenantFeaturesForEditFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)






