import { createReducer, on } from "@ngrx/store";
import { getManageLinkedAccountsFailure, getManageLinkedAccounts, getManageLinkedAccountsSuccess, linkAccount, linkAccountSuccess } from "./manage-linked-accounts.actions";

export interface ManageLinkedAccountsState {
    linkedAccounts: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const ManageLinkedAccountsInitialState: ManageLinkedAccountsState = {
    linkedAccounts: null,
    error: null,
    status: 'pending',
};
export const ManageLinkedAccountsReducer = createReducer(
    // Supply the initial state
    ManageLinkedAccountsInitialState,
    on(getManageLinkedAccounts, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getManageLinkedAccountsSuccess, (state, { linkedAccounts }) => ({
        ...state,
        linkedAccounts: linkedAccounts,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getManageLinkedAccountsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(linkAccount, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(linkAccountSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    
)