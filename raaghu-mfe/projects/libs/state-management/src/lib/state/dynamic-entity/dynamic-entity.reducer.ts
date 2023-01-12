import { createReducer, on } from "@ngrx/store";
import { DynamicEntity } from "../dynamic-property-management/dynamic-property.models";
import { editDynamicEntity, editDynamicEntitySuccess, getAllEntities, getAllEntitiesSuccess,getDynamicEntity, getDynamicEntityFailure, getDynamicEntitySuccess } from "./dynamic-entity.actions";
export interface DynamicEntityState {
    editDynamicEntity: any;
    entities: any;
    dynamicEntity: any,
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
  }
  
  export const DynamicEntityInitialSate: DynamicEntityState = {
    editDynamicEntity: {},
    entities: null,
    dynamicEntity: null,
    error: null,
    status: 'pending',
  };
  

export const DynamicEntityReducer = createReducer(
    // Supply the initial state
    DynamicEntityInitialSate,
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
    })),
    on(editDynamicEntity, (state) => ({ ...state, status: 'loading' })),
    on(editDynamicEntitySuccess, (state, { editDynamicEntity }) => ({
      ...state,
      editDynamicEntity: editDynamicEntity,
      error: null,
      status: 'success',
    })),
    on(getAllEntities, (state) => ({ ...state, status: 'loading' })),
    on(getAllEntitiesSuccess, (state, { Entities }) => ({
      ...state,
      entities: Entities,
      error: null,
      status: 'success',
    }))
  );
  



  
  