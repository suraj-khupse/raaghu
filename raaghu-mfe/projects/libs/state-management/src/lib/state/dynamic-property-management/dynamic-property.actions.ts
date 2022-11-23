import { createAction, props } from '@ngrx/store';
import {
  DynamicProperty,
  DynamicPermissionData,
} from './dynamic-property.models';

export const getDynamicProperty = createAction(
  '[Dynamic Property management Page] Get Dynamic Property'
);
export const getDynamicPropertySuccess = createAction(
  '[Dynamic Property management Page] Get Dynamic Property Success',
  props<{ properties: DynamicProperty }>()
);
export const getDynamicPropertyFailure = createAction(
  '[Dynamic Property management Page] Get Dynamic Property Failure',
  props<{ error: string }>()
);

// get permission
export const getPermission = createAction(
  '[Dynamic Property management Page] Get Permissions'
);
export const getPermissionSuccess = createAction(
  '[Dynamic Property management Page] Get Permission Success',
  props<{ DynanmicPermission: DynamicPermissionData }>()
);
// save dynamic property


export const getDynamicPropertyByEdit = createAction(
  '[Dynamic Property management Page] Get Dynamic Property By Edit',
  (id: number) => ({ id })
);

export const getDynamicPropertyByEditSuccess = createAction(
  '[Dynamic Property management Page] Get Dynamic Property By Edit Success',
  props<{ EditDynamicPropertSateI: any }>()
);
export const getDynamicPropertyByEditFailure = createAction(
  '[Dynamic Property management Page] Get Dynamic propery By Edit Failure',
  props<{ error: string }>()
);
export const getInputTypeNames = createAction(
  '[Dynamic Property management Page] Get Input TypeName'
);
export const getInputTypeNamesSuccess = createAction(
  '[Dynamic Property management Page] Get InputTypeName Success',
  props<{ InputTypeNames: any }>()
);

export const getInputTypeNamesFailure = createAction(
  '[Dynamic Property management Page] Get InputTypeName Failure',
  props<{ error: string }>()
);

export const saveDynamicProperty = createAction(
  '[Dynamic Property management Page] Save Dynamic Property',
  (DynamicProperty: any) => ({ DynamicProperty })
);

export const deleteDynamicProperty = createAction(
  '[Dynamic Property management Page] Delete Dynamic Property',
  (id: number) => ({ id })
);
// Edit Dynamic Property management Page
export const UpdateDynamicProperty = createAction(
  '[Dynamic Property management Page] Edit Dynamic Property',
  (data: any) => ({ data })
);

