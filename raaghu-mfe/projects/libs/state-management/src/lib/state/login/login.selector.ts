import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, Validatetenant } from '../../app.interface';
import { ValidateTenantState } from './login.reducer';



export const selectLoginState = (state: AppState) => state.validateTenant;
// export const selectDynamicEntity = (state: AppState) => state.dynamicEntity;
export const selectTenant = createSelector(
    selectLoginState,
    (state: ValidateTenantState) => state.Tenant
);
 
export const selectLoginInfo = createSelector(
    selectLoginState,
    (state: ValidateTenantState) => state.applicaiton_information
);

