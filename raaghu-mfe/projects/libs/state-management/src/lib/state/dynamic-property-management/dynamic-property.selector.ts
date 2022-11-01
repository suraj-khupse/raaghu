// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { AppState } from '../../app.interface';
// import { AllDynamicEntitySate, AllDynamicPropertyEntitySate, DynamicEntityState, DynamicPermissionState, DynamicPropertyState, EditDynampicPropertState, InputPropertynameState } from './dynamic-property.reducer';
// export const selectDynamicProperty = (state: AppState) => state.dynamicProperty;
// export const selectDynamicEntity = (state: AppState) => state.dynamicEntity;
// export const selectAllDynamicEntity = (state: AppState) => state.Entities;
// export const selectAllDynamicPropertyEntity = (state: AppState) => state.PropertiesEntitie;
// export const selectAllInputNames = (state: AppState) => state.InputTypeNames;
// export const selectDynanmicPropertyForEdit = (state: AppState) => state.EditDynamicPropertSateI;
// export const selectDynanmicPermission = (state: AppState) => state.DynanmicPermission;
// export const dynamicProperty = createFeatureSelector<AppState>('editdynamicProperty');
// export const selectDynamicPropertyForEdit = createSelector(
//   dynamicProperty,
//   (state: AppState) => state.editdynamicProperty
// );


// export const selectAllDynamicProperties = createSelector(
//     selectDynamicProperty,
//     (state: DynamicPropertyState) => state.dynamicProperty
// );
// export const selectAllDynamicEntities = createSelector(
//     selectDynamicEntity,
//     (state: DynamicEntityState) => state.dynamicEntity
// );

// export const selectDynamicEntities = createSelector(
//   selectAllDynamicEntity,
//   (state: AllDynamicEntitySate) => state.Entities
// );


// export const selectDynamicPropertyEntities = createSelector(
//   selectAllDynamicPropertyEntity,
//   (state: AllDynamicPropertyEntitySate) => state.PropertiesEntitie
// );


// export const selectInputPropertyNameEntities = createSelector(
//   selectAllInputNames,
//   (state: InputPropertynameState) => state.InputTypeNames
// );

// // export const selectDynamicPropertyForEdit = createSelector(
// //   selectDynanmicPropertyForEdit,
// //   (state: EditDynampicPropertState) => state.EditDynamicPropertSateI
// // );
// export const selectAllPermissions = createSelector(
//   selectDynanmicPermission,
//   (state: DynamicPermissionState) => state.DynanmicPermission
// );