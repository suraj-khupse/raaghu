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
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}


export const dynamicPropertyInitialState: DynamicPropertyState = {
  properties: { items: [] },
  error: null,
  status: 'pending',
};
export interface InputPropertynameState {
  InputTypeNames: any;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const InputPropertynameInitialSate: InputPropertynameState = {
  InputTypeNames: {},
  error: null,
  status: 'pending',
};


export interface EditDynamicPropertySate {
  EditDynamicProperty: any;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const EditDynamicPropertyInitialSate: EditDynamicPropertySate = {
  EditDynamicProperty: {},
  error: null,
  status: 'pending',
};


export interface EditDynampicPropertState {
  EditDynamicPropertSateI: any;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const EditDynampicPropertyInitialSate: EditDynampicPropertState = {
  EditDynamicPropertSateI: {},
  error: null,
  status: 'pending',
};

export interface DynamicPermissionState {
  DynanmicPermission: DynamicPermissionData;
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}
export const DynamicPermissionInitialState: DynamicPermissionState = {
  DynanmicPermission: { items: [] },
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
  }))
);

// All entity

export const GetInputnameReducer = createReducer(
  // Supply the initial state
  InputPropertynameInitialSate,
  on(getInputTypeNames, (state) => ({ ...state, status: 'loading' })),
  on(getInputTypeNamesSuccess, (state, { InputTypeNames }) => ({
    ...state,
    InputTypeNames: InputTypeNames,
    error: null,
    status: 'success',
  }))
);

export const getDynamicPropertyByEditReducer = createReducer(
  EditDynampicPropertyInitialSate,
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
  }))

)

export const DynamicPermissionReducer = createReducer(
  // Supply the initial state
  DynamicPermissionInitialState,
  on(getPermission, (state) => ({ ...state, status: 'loading' })),
  on(getPermissionSuccess, (state, { DynanmicPermission }) => ({
    ...state,
    DynanmicPermission: DynanmicPermission,
    error: null,
    status: 'success',
  }))
);
