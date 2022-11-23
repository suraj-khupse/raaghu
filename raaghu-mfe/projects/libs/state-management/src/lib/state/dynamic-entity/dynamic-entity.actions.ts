import { createAction, props } from "@ngrx/store";
import { DynamicEntity } from "../dynamic-property-management/dynamic-property.models";

export const getDynamicEntity = createAction(
    '[Dynamic Entity Page] Get Dynamic Entity'
  );
  export const getDynamicEntitySuccess = createAction(
    '[Dynamic Entity Page] Get Dynamic Entity Success',
    props<{ dynamicEntity: DynamicEntity }>()
  );
  
  export const getDynamicEntityFailure = createAction(
    '[Dynamic Entity Page] Get Dynamic Entity Failure',
    props<{ error: string }>()
  );
  export const deleteDynamicEntity = createAction(
    '[Dynamic Entity Page] Delete Dynamic Entity',
    (id: number) => ({ id })
  );
  export const saveDynamicEntity = createAction(
    '[Dynamic Entity Page] Save Dynamic Entity',
    (DynamicEntity: any) => ({ DynamicEntity })
  );
  // Edit Dynamic Entity page
  export const editDynamicEntity = createAction(
    '[Dynamic Entity Page] Edit Dynamic Entity',
    (dataEntity: any) => ({ dataEntity })
  );
  export const editDynamicEntitySuccess = createAction(
    '[Dynamic Entity Page] Edit Dynamic Entity Success',
    props<{ editDynamicEntity: any }>()
  );
  export const editDynamicEntityFailure = createAction(
    '[Dynamic Entity Page] Edit Dynamic Entity Failure',
    props<{ error: string }>()
  );
  
  // for select entity
  
  export const getAllEntities = createAction(
    '[Dynamic Entity Page] Get All Entities',
  );
  
  export const getAllEntitiesSuccess = createAction(
    '[Dynamic Entity Page]Get All Entities Success',
    props<{ Entities: any }>()
  );
  
  export const getAllEntitiesFailure = createAction(
    '[Dynamic Entity Page] Get All Entities Failure',
    props<{ error: string }>()
  );
  
 
  

  

  