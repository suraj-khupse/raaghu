import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { TenantState } from './tenant.reducer';

// export const selectTenants = (state: AppState) => state.tenants;
// export const selectAllTenants = createSelector(
//   selectTenants,
//     (state: TenantState) => state.tenants
// );

export const tenantSelector = (state: AppState) => state.tenants
export const selectAllTenants = createSelector(
  tenantSelector,
  (state: TenantState) => state.tenants
);
export const selectEditionComboboxItems = createSelector(
  tenantSelector,
  (state: TenantState) => state.editionComboboxItem
);
export const selectTenantInfo = createSelector(
  tenantSelector,
  (state: TenantState) => state.tenantInfo
);
export const selectTenantFeature = createSelector(
  tenantSelector,
  (state: TenantState) => state.tenantFeature
);

export const selecteTeantUserList = createSelector(
  tenantSelector,
    (state: TenantState) => state.tenantUsers
);

export const selecteTeantLoginList = createSelector(
  tenantSelector,
    (state: TenantState) => state.tenantLogin
);

