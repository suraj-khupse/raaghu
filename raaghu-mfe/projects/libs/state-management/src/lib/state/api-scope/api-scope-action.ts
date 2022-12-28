import { createAction, props } from '@ngrx/store';

export const getAllApiScope = createAction('[Clients Page] Get All Clients');

export const getAllApiScopeSuccess = createAction(
    '[Clients Page] Get All Clients Success',
    props<{ allScope: any }>()
);

export const getAllApiScopeFailure = createAction(
    '[Clients Page] Get All Clients Failure',
    props<{ error: string }>()
);

export const getApiScope = createAction(
  '[Api scope page] Get Api-scope',
  (id:any) => ( {id} ));

export const getApiScopeSuccess = createAction(
  '[Api scope page] Get Api Scope Success',
  props<{ apiScope: any }>()
);

export const getApiScopeError = createAction(
  '[Api scope page]  Get Api Scope Failure',
  props<{ error: string }>()
);

export const updateApiScope = createAction('[Clients Page] Update Client',
(data:any) => (data));

export const updateApiScopeSuccess = createAction(
    '[Api scope page] Update Api scope page Success',
);

export const updateApiScopeFailure = createAction(
    '[Api scope page] Update Api scope page Failure',
    props<{ error: string }>()
);

export const saveApiScope = createAction(
    '[Api scope page] Save Api scope page',
    (data) => ( {data} )
    );

export const saveApiScopeSuccess = createAction(
    '[Clients Page] Save Api scope page Success',
);

export const saveApiScopeFailure = createAction(
    '[Api scope page] Save Api scope page Failure',
    props<{ error: string }>()
);


export const deleteApiScope = createAction(
    '[Api scope page] delete Api Scope',
    (id) => ( {id} )
    );

export const deleteApiScopeSuccess = createAction(
    '[Api scope page] delete Api Scope Success',
);

export const deleteApiScopeFailure = createAction(
    '[Api scope page] delete Api Scope Failure',
    props<{ error: string }>()
);

export const  claimTypesAll = createAction('[Identity-Resources Page] Get Claims',);

export const claimTypesAllSuccess = createAction(
    '[Identity-Resources Page] Get Claims Success Failure',
     props<{ claims: any }>()
);

