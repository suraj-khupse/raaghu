import { createReducer, on } from "@ngrx/store";
import { DynamicEntity } from "../dynamic-property-management/dynamic-property.models";
import { editDynamicEntity, editDynamicEntitySuccess, getAllEntities, getAllEntitiesSuccess,getDynamicEntity, getDynamicEntityFailure, getDynamicEntitySuccess } from "./dynamic-entity.actions";
export interface EditDynamicEntitySate {
    EditDynamicEntity: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
  }
  
  export const EditDynamicEntityInitialSate: EditDynamicEntitySate = {
    EditDynamicEntity: {},
    error: null,
    status: 'pending',
  };
  
  export interface AllDynamicEntitySate {
    Entities: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
  }
  
  export const AllDynamicEntityInitialSate: AllDynamicEntitySate = {
    Entities: {},
    error: null,
    status: 'pending',
  };
  
  export interface AllDynamicPropertyEntitySate {
    PropertiesEntitie: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
  }
  
  export const AllDynamicPropertyEntityInitialSate: AllDynamicPropertyEntitySate =
    {
      PropertiesEntitie: {},
      error: null,
      status: 'pending',
    };
  

  export interface DynamicEntityState {
    dynamicEntity: DynamicEntity;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
  }
  
  export const dynamicEntityInitialState: DynamicEntityState = {
    dynamicEntity: { items: [] },
    error: null,
    status: 'pending',
  };

export const DynamicEntityReducer = createReducer(
    // Supply the initial state
    dynamicEntityInitialState,
    on(getDynamicEntity, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getDynamicEntitySuccess, (state, { dynamicEntity }) => ({
      ...state,
      dynamicEntity: dynamicEntity,
      error: null,
      status: 'success',
    })),
    // Handle todos load failure
    on(getDynamicEntityFailure, (state, { error }) => ({
      ...state,
      error: error,
      status: 'error',
    }))
  );
  
  export const GetDynamicEntityEditReducer = createReducer(
    // Supply the initial state
    EditDynamicEntityInitialSate,
    on(editDynamicEntity, (state) => ({ ...state, status: 'loading' })),
    on(editDynamicEntitySuccess, (state, { editDynamicEntity }) => ({
      ...state,
      DynamicEntity: editDynamicEntity,
      error: null,
      status: 'success',
    }))
  );


  export const GetAllDynamicPropertyReducer = createReducer(
    // Supply the initial state
    AllDynamicEntityInitialSate,
    on(getAllEntities, (state) => ({ ...state, status: 'loading' })),
    on(getAllEntitiesSuccess, (state, { Entities }) => ({
      ...state,
      Entities: Entities,
      error: null,
      status: 'success',
    }))
  );
  

  
  