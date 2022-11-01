import { createReducer, on } from "@ngrx/store";
import { deleteClaims, deleteClaimsSucess, getAllClaimTypes, getAllClaimTypesFailure, getAllClaimTypesSuccess, saveClaimTypes, saveClaimTypesFailure, saveClaimTypesSuccess } from "./claim-types.actions";


export interface ClaimTypesState {
    allClaimTypes:any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const ClaimTypesInitialState: ClaimTypesState = {
    allClaimTypes:null,
    error: null,
    status: 'pending',
};

export const ClaimTypesReducer = createReducer(
    // Supply the initial state
    ClaimTypesInitialState,
    on(getAllClaimTypes, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getAllClaimTypesSuccess, (state, { allClaimTypes }) => ({
        ...state,
        allClaimTypes: allClaimTypes,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getAllClaimTypesFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(saveClaimTypes, (state) => ({ ...state, status: 'loading' })),
    on(saveClaimTypesSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(saveClaimTypesFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(deleteClaims, (state) => ({ ...state, status: 'loading' })),
    on(deleteClaimsSucess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    }))
)
