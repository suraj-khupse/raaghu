import { createReducer, on } from "@ngrx/store";
import { deleteClient, deleteClientSucess,getAllClients, getAllClientsFailure, getAllClientsSuccess, getClient, getClientFailure, getClientSuccess, saveClient, saveClientFailure, saveClientSuccess, updateClient, updateClientFailure, updateClientSuccess } from "./clients.actions";


export interface ClientState {
    allClient:any;
    client:any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const ClientInitialState: ClientState = {
    allClient:null,
    client:null,
    error: null,
    status: 'pending',
};

export const ClientsReducer = createReducer(
    // Supply the initial state
    ClientInitialState,
    on(getAllClients, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getAllClientsSuccess, (state, { allClients }) => ({
        ...state,
        allClient: allClients,   
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getAllClientsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getClient, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getClientSuccess, (state, { client }) => ({
        ...state,
        client: client,   
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getClientFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(saveClient, (state) => ({ ...state, status: 'loading' })),
    on(saveClientSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(saveClientFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(deleteClient, (state) => ({ ...state, status: 'loading' })),
    on(deleteClientSucess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(updateClient, (state) => ({ ...state, status: 'loading' })),
    on(updateClientSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(updateClientFailure, (state, {error}) => ({
        ...state,
        error: error,
        status: 'error'
    }))
)
