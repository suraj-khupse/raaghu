import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { DynamicEntityState } from '../dynamic-entity/dynamic-entity.reducer';
import { DynamicPropertyState } from './dynamic-property.reducer';

export const dynamicPropertyManagement = (state: AppState) => state.properties;
export const dynamicEntityManagement= (state: AppState) => state.entities

export const selectDynamicPropertyForEdit = createSelector(
  dynamicPropertyManagement,
  (state: DynamicPropertyState) => state.EditDynamicPropertSateI
);
export const selectAllProperties = createSelector(
  dynamicPropertyManagement,
  (state: DynamicPropertyState) => state.properties
);
export const selectAllDynamicEntities = createSelector(
  dynamicEntityManagement,
  (state: DynamicEntityState) => state.entities
);

export const selectDynamicEntities = createSelector(
  dynamicEntityManagement,
  (state: DynamicEntityState) => state.dynamicEntity
);


export const selectInputPropertyNameEntities = createSelector(
  dynamicPropertyManagement,
  (state: DynamicPropertyState) => state.InputTypeNames
);

export const selectAllPermissions = createSelector(
  dynamicPropertyManagement,
  (state: DynamicPropertyState) => state.DynanmicPermission
);