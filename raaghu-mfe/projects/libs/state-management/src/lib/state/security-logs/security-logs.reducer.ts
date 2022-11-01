import { createReducer, on } from "@ngrx/store";
import { getSecuritylogs, getSecuritylogsFailure, getSecuritylogsSuccess } from "./security-logs.actions";


export interface SecurityState {
    logs:string,
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const SecuritylogsInitialState: SecurityState = {
    logs: null,
    error: null,
    status: 'pending',
};

export const SecurityLogsReducer = createReducer(
    // Supply the initial state
    SecuritylogsInitialState,
    on(getSecuritylogs, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getSecuritylogsSuccess, (state, { logs }) => ({
        ...state,
        logs: logs,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getSecuritylogsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
)
