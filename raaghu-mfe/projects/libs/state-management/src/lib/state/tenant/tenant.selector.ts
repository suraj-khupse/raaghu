import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';

export const selectTenants = (state: AppState) => state.tenants;
// export const selectAllTenants = createSelector(
//   selectTenants,
//     (state: TenantState) => state.tenants
// );

export const tenantSelector = createFeatureSelector<AppState>('tenants');

export const selectAllTenants = createSelector(
  tenantSelector,
  (state: AppState) => state.tenants
);
export const selectEditionComboboxItems = createSelector(
  tenantSelector,
  (state: AppState) => state.editionComboboxItem
);
export const selectTenantInfo = createSelector(
  tenantSelector,
  (state: AppState) => state.tenantInfo
);
export const selectTenantFeature = createSelector(
  tenantSelector,
  (state: AppState) => state.tenantFeature
);
