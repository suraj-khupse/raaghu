 import { createAction, props } from "@ngrx/store";

export const getAllApiResources = createAction('[Api-Resources Page] Get All Api-Resources');

export const getAllApiResourcesSuccess = createAction(
    '[Api-Resources Page] Get All Api-Resources Success',
    props<{ allApiResources: any }>()
);

export const getAllApiResourcesFailure = createAction(
    'Api-Resources Page] Get All Api-Resources Failure',
    props<{ error: string }>()
);
export const getAllApiResourcesEdit = createAction('[Api-Resources] Get All Api-Resources Edit');

export const getAllApiResourcesEditSuccess = createAction(
    '[Api-Resources Page] Get All Api-Resources Edit Success',
    props<{ allApiResourcesEdit: any }>()
);

export const getAllApiResourcesEditFailure = createAction(
    'Api-Resources Page] Get All Api-Resources Edit Failure',
    props<{ error: string }>()
);

export const getApiResource = createAction('[Api-Resources Page] Get Api-Resource',
(id:any) => ( id ));

export const getApiResourceSuccess = createAction(
    '[Api-Resources Page] Get Api-Resource Success',
    props<{ apiResource: any }>()
);

export const getApiResourceFailure = createAction(
    '[Api-Resources Page] Get Api-Resource Failure',
    props<{ error: string }>()
);

export const updateApiResource = createAction('[Api-Resources Page] Update Api-Resource',
(data:any) => (data));

export const updateApiResourceSuccess = createAction(
    '[Api-Resources Page] Update Api-Resource Success',
);

export const updateApiResourceFailure = createAction(
    '[Api-Resources Page] Update Api-Resource Failure',
    props<{ error: string }>()
);

export const saveApiResource = createAction(
    '[Api-Resources Page] Save Api-Resource Types',
    (data) => ( data )
    );

export const saveApiResourceSuccess = createAction(
    '[Api-Resources Page] Save Api-Resource Success',
);

export const saveApiResourceFailure = createAction(
    '[Api-Resources Page] Save Api-Resource Failure',
    props<{ error: string }>()
);

export const deleteApiResource = createAction(
    '[Api-Resources Page] Delete Api-Resource',
    (data) => (data)
);
export const deleteApiResourceSucess = createAction(
    '[Api-Resources Page] Delete Api-Resource Success',
);

