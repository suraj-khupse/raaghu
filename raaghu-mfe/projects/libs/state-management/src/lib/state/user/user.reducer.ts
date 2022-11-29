import { createReducer, on } from "@ngrx/store";
import { getUserFailure, getUserForEdit, getUserForEditSuccess, getUserPermission, getUserPermissionFilterList, getUserPermissionListSuccess, getUserPermissionSuccess, getUsers, getUserSuccess } from "./user.actions";
import { User } from "./user.models";


export interface UsersState {
    users: User;
    UserPermissionFilterI: any;
    UserPermissionStateI: any;
    UserEditI: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const userInitialState: UsersState = {
    users: null,
    UserPermissionFilterI: null,
    UserPermissionStateI: null,
    UserEditI: null,
    error: null,
    status: 'pending',
};
;
export const UserReducer = createReducer(
    // Supply the initial state
    userInitialState,
    on(getUsers, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getUserSuccess, (state, { users }) => ({
        ...state,
        users: users,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getUserFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getUserForEdit, (state) => ({ ...state, status: 'loading' })),
    on(getUserForEditSuccess, (state, { UserEditI }) => ({
        ...state,
        UserEditI: UserEditI,
        error: null,
        status: 'success',
    })),
    on(getUserPermission, (state) => ({ ...state, status: 'loading' })),
    on(getUserPermissionSuccess, (state, { UserPermissionStateI }) => ({
        ...state,
        UserPermissionStateI: UserPermissionStateI,
        error: null,
        status: 'success',
    })),
    on(getUserPermissionFilterList, (state) => ({ ...state, status: 'loading' })),
    on(getUserPermissionListSuccess, (state, { UserPermissionFilterI }) => ({
        ...state,
        UserPermissionFilterI: UserPermissionFilterI,
        error: null,
        status: 'success',
    })),
)

