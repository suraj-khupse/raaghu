import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { AllDynamicEntitySate, AllDynamicPropertyEntitySate, DynamicEntityState } from '../dynamic-entity/dynamic-entity.reducer';

export const dynamicPropertyManagement = createFeatureSelector<AppState>('property');

export const selectDynamicPropertyForEdit = createSelector(
  dynamicPropertyManagement,
  (state: AppState) => state.EditDynamicPropertSateI
);
export const selectAllProperties = createSelector(
  dynamicPropertyManagement,
  (state: AppState) => state.properties
);
export const selectAllDynamicEntities = createSelector(
  dynamicPropertyManagement,
  (state: AppState) => state.dynamicEntity
);

export const selectDynamicEntities = createSelector(
  dynamicPropertyManagement,
  (state: AppState) => state.Entities
);


export const selectInputPropertyNameEntities = createSelector(
  dynamicPropertyManagement,
  (state: AppState) => state.InputTypeNames
);

export const selectAllPermissions = createSelector(
  dynamicPropertyManagement,
  (state: AppState) => state.DynanmicPermission
);