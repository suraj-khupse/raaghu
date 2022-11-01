 import { createAction, props } from "@ngrx/store";

export const getAllIdentityResources = createAction('[Identity-Resources] Get All Identity-Resources');

export const getAllIdentityResourcesSuccess = createAction(
    '[Identity-Resources Page] Get All Identity-Resources Success',
    props<{ allIdentityResources: any }>()
);

export const getAllIdentityResourcesFailure = createAction(
    'Identity-Resources Page] Get All Identity-Resources Failure',
    props<{ error: string }>()
);

export const getIdentityResource = createAction('[Identity-Resources Page] Get Identity-Resource',
(id:any) => ( id ));

export const getIdentityResourceSuccess = createAction(
    '[Identity-Resources Page] Get Identity-Resource Success',
    props<{ identityResource: any }>()
);

export const getIdentityResourceFailure = createAction(
    '[Identity-Resources Page] Get Identity-Resource Failure',
    props<{ error: string }>()
);

export const updateIdentityResource = createAction('[Identity-Resources Page] Update Identity-Resource',
(data:any) => (data));

export const updateIdentityResourceSuccess = createAction(
    '[Identity-Resources Page] Update Identity-Resource Success',
);

export const updateIdentityResourceFailure = createAction(
    '[Identity-Resources Page] Update Identity-Resource Failure',
    props<{ error: string }>()
);

export const saveIdentityResource = createAction(
    '[Identity-Resources Page] Save Identity-Resource Types',
    (data) => ( data )
    );

export const saveIdentityResourceSuccess = createAction(
    '[Identity-Resources Page] Save Identity-Resource Success',
);

export const saveIdentityResourceFailure = createAction(
    '[Identity-Resources Page] Save Identity-Resource Failure',
    props<{ error: string }>()
);

export const deleteIdentityResource = createAction(
    '[Identity-Resources Page] Delete Identity-Resource',
    (data) => (data)
);
export const deleteIdentityResourceSucess = createAction(
    '[Identity-Resources Page] Delete Identity-Resource Success',
);

