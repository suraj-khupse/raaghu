 import { createAction, props } from "@ngrx/store";

export const getAllClients = createAction('[Clients Page] Get All Clients');

export const getAllClientsSuccess = createAction(
    '[Clients Page] Get All Clients Success',
    props<{ allClients: any }>()
);

export const getAllClientsFailure = createAction(
    '[Clients Page] Get All Clients Failure',
    props<{ error: string }>()
);

export const getClient = createAction('[Clients Page] Get Client',
(id:any) => ( id ));

export const getClientSuccess = createAction(
    '[Clients Page] Get Client Success',
    props<{ client: any }>()
);

export const getClientFailure = createAction(
    '[Clients Page] Get Client Failure',
    props<{ error: string }>()
);

export const updateClient = createAction('[Clients Page] Update Client',
(data:any) => (data));

export const updateClientSuccess = createAction(
    '[Clients Page] Update Client Success',
);

export const updateClientFailure = createAction(
    '[Clients Page] Update Client Failure',
    props<{ error: string }>()
);

export const saveClient = createAction(
    '[Clients Page] Save Client',
    (data) => ( data )
    );

export const saveClientSuccess = createAction(
    '[Clients Page] Save Client Success',
);

export const saveClientFailure = createAction(
    '[Clients Page] Save Clinet Failure',
    props<{ error: string }>()
);

export const deleteClient = createAction(
    '[Clients Page] Delete Client',
    (data) => (data)
);
export const deleteClientSucess = createAction(
    '[Clients Page] Delete Client Success',
);

