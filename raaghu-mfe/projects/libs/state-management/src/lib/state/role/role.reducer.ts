import { createReducer, on } from "@ngrx/store";
import { getPermission, getPermissionSuccess, getRolByEdit, getRolByEditSuccess, getRoleFailure, getRoles, getRoleSuccess } from "./role.actions";


export interface RolesState {
    roles: any;
    PermissionI: any;
    EditRoleSateI: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const roleInitialState: RolesState = {
    roles: null,
    EditRoleSateI: null,
    PermissionI: null,
    error: null,
    status: 'pending',
};

export const RoleReducer = createReducer(
    // Supply the initial state
    roleInitialState,
    on(getRoles, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getRoleSuccess, (state, { roles }) => ({
        ...state,
        roles: roles,
        error: null,
        status: 'success',
    })),

    on(getRoleFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
    on(getPermission, (state) => ({ ...state, status: 'loading' })),
    on(getPermissionSuccess, (state, { PermissionI }) => ({
        ...state,
        PermissionI: PermissionI,
        error: null,
        status: 'success',
    })),
    on(getRolByEdit, (state) => ({ ...state, status: 'loading' })),
    on(getRolByEditSuccess, (state, { EditRoleSateI }) => ({
        ...state,
        EditRoleSateI: EditRoleSateI,
        error: null,
        status: 'success',
    }))
)