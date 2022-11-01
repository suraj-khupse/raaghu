// import { EntityDtoOfString } from "@libs/shared";
import { createAction, props } from "@ngrx/store";
import { maintenance,maintenanceItem,WebLogLines, } from "./maintenance.models";

export const getmaintenances = createAction('[maintenance Page] Get maintenances');

export const getmaintenanceSuccess = createAction(
    '[maintenance Page] Get maintenance Success',
    props<{ maintenances: maintenance }>()
);

export const getmaintenanceFailure = createAction(
    '[maintenance Page] Get maintenances Failure',
    props<{ error: string }>()
);

// export const deletecache = createAction('[maintenance Page] Delete Cache',
// (id: EntityDtoOfString) => ({ id }));

export const deletecache = createAction(
    '[maintenance Page] Delete Cache',
    (id: any) => ({ id })
);

export const deletecacheSuccess = createAction(
    '[maintenance Page] Delete Cache Success',
    props<{ cache:any }>()
);

export const deletecacheFailure = createAction(
    '[maintenance Page] Delete Cache Failure',
    props<{ error: string }>()
);

export const clearcache = createAction('[maintenance Page] Clear Cache');

export const clearSuccess = createAction(
    '[maintenance Page] Clear Cache Success',
   
);

export const clearFailure = createAction(
    '[maintenance Page] Clear Cache Failure',
    props<{ error: string }>()
);

export const getWebsitelog = createAction('[maintenance Page] Get getWebsitelog');

export const getWebsitelogSuccess = createAction(
    '[maintenance Page] Get getWebsitelog Success',
    props<{ Websitelogs: WebLogLines }>()
);

export const getWebsitelogFailure = createAction(
    '[maintenance Page] Get getWebsitelog Failure',
    props<{ error: string }>()
);