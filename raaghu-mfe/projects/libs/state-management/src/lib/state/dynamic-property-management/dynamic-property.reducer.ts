import { createReducer, on } from '@ngrx/store';
import {
  getDynamicPropertyFailure,
  getDynamicProperty,
  getDynamicPropertySuccess,
  getPermission,
  getPermissionSuccess,
  getDynamicPropertyByEdit,
  getDynamicPropertyByEditFailure,
  getDynamicPropertyByEditSuccess,
  getInputTypeNames,
  getInputTypeNamesSuccess,
} from './dynamic-property.actions';
import {
  DynamicProperty,
  DynamicPermissionData,
} from './dynamic-property.models';

export interface DynamicPropertyState {
  properties: DynamicProperty;
  InputTypeNames: any;
  EditDynamicProperty: any;
  EditDynamicPropertSateI: any;
  DynanmicPermission: any;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}


export const dynamicPropertyInitialState: DynamicPropertyState = {
  properties: null,
  InputTypeNames: null,
  EditDynamicProperty: {},
  EditDynamicPropertSateI: {},
  DynanmicPermission: null,
  error: null,
  status: 'pending',
};


export const DynamicPropertyReducer = createReducer(
  // Supply the initial state
  dynamicPropertyInitialState,
  on(getDynamicProperty, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded todos
  on(getDynamicPropertySuccess, (state, { properties }) => ({
    ...state,
    properties: properties,
    error: null,
    status: 'success',
  })),
  // Handle todos load failure
  on(getDynamicPropertyFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),
  on(getInputTypeNames, (state) => ({ ...state, status: 'loading' })),
  on(getInputTypeNamesSuccess, (state, { InputTypeNames }) => ({
    ...state,
    InputTypeNames: InputTypeNames,
    error: null,
    status: 'success',
  })),
  on(getDynamicPropertyByEdit, (state) => ({ ...state, status: 'loading' })),
  on(getDynamicPropertyByEditSuccess, (state, { EditDynamicPropertSateI }) => ({
      ...state,
      EditDynamicPropertSateI: EditDynamicPropertSateI,
      error: null,
      status: 'success',
  })),
  on(getDynamicPropertyByEditFailure, (state, { error }) => ({
      ...state,
      error: error,
      status: 'error',
  })),
  on(getPermission, (state) => ({ ...state, status: 'loading' })),
  on(getPermissionSuccess, (state, { DynanmicPermission }) => ({
    ...state,
    DynanmicPermission: DynanmicPermission,
    error: null,
    status: 'success',
  }))
);
