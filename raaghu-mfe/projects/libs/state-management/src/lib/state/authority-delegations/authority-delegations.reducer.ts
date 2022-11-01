

// import { PagedResultDtoOfUserDelegationDto } from "@libs/shared";
import { createReducer, on } from "@ngrx/store";
import { getDelegations, getDelegationsFailure, getDelegationsSuccess, getUsername, getUsernameSuccess } from "./authority-delegations.action";
import { UserNames } from "./authority-delegations.model";


export interface DelegationsState {
    Delegation: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}
export const delegationsInitialState: DelegationsState = {
    Delegation: {items:[]},
    error: null,
    status: 'pending',
};
export interface UserNameFilterState {
    usernames: UserNames;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
  }
  
  export const   UserNameFilterInitialSate:  UserNameFilterState = {
    usernames: {items: [] },
    error: null,
    status: 'pending',
  };
export const DelegationsReducer = createReducer(
    // Supply the initial state
    delegationsInitialState,
    on(getDelegations, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getDelegationsSuccess, (state, { Delegation }) => ({
        ...state,
        Delegation: Delegation,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getDelegationsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    
)
export const GetUsernameFilterReducer = createReducer(
    // Supply the initial state
    UserNameFilterInitialSate,
    on(getUsername, (state) => ({ ...state, status: 'loading' })),
    on(getUsernameSuccess, (state, {  usernames }) => ({
        ...state,
        usernames: usernames,
        error: null,
        status: 'success',
    })),
  )