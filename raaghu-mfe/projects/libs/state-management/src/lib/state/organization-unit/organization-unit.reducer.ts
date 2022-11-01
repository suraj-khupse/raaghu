import { createReducer, on } from "@ngrx/store";
import { createTreeUnit, createTreeUnitFailure, createTreeUnitSuccess, deleteMemberFromOrgUnit, deleteMemberFromOrgUnitFailure, deleteMemberFromOrgUnitSuccess, deleteRoleFromOrgUnit, deleteRoleFromOrgUnitFailure, deleteRoleFromOrgUnitSuccess, deleteUnitTree, deleteUnitTreeFailure, deleteUnitTreeSuccess, getOrganizationUnitMembers, getOrganizationUnitMembersSuccess, getOrganizationUnitRoles, getOrganizationUnitRolesFailure, getOrganizationUnitRolesList, getOrganizationUnitRolesListFailure, getOrganizationUnitRolesListSuccess, getOrganizationUnitRolesSuccess, getOrganizationUnitTree, getOrganizationUnitTreeFailure, getOrganizationUnitTreeSuccess, getOrganizationUnitUsersList, getOrganizationUnitUsersListFailure, getOrganizationUnitUsersListSuccess, updateUnitTree, updateUnitTreeFailure, updateUnitTreeSuccess } from "./organization-unit.actions";


export interface OrganizationUnitState {
    organizationUnitTree: any;
    members: any;
    roles: any;
    rolesList: any;
    usersList: any;
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}


export const OrganizationUnitInitialState: OrganizationUnitState = {
    organizationUnitTree: null,
    members: null,
    roles: null,
    rolesList: null,
    usersList: null,
    error: null,
    status: 'pending',
};

export const OrganizationUnitReducer = createReducer(
    // Supply the initial state
    OrganizationUnitInitialState,
    on(getOrganizationUnitTree, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded todos
    on(getOrganizationUnitTreeSuccess, (state, { organizationUnitTree }) => ({
        ...state,
        organizationUnitTree: organizationUnitTree,
        error: null,
        status: 'success',
    })),
    // Handle todos load failure
    on(getOrganizationUnitTreeFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),


    on(getOrganizationUnitMembers, (state) => ({ ...state, status: 'loading' })),
    on(getOrganizationUnitMembersSuccess, (state, { organizationUnitMembers }) => ({
        ...state,
        members: organizationUnitMembers,
        error: null,
        status: 'success',
    })),
    on(getOrganizationUnitTreeFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),


    on(getOrganizationUnitRoles, (state) => ({ ...state, status: 'loading' })),
    on(getOrganizationUnitRolesSuccess, (state, { organizationUnitRoles }) => ({
        ...state,
        roles: organizationUnitRoles,
        error: null,
        status: 'success',
    })),
    on(getOrganizationUnitRolesFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),





    on(getOrganizationUnitRolesList, (state) => ({ ...state, status: 'loading' })),
    on(getOrganizationUnitRolesListSuccess, (state, { organizationUnitRolesList }) => ({
        ...state,
        rolesList: organizationUnitRolesList,
        error: null,
        status: 'success',
    })),
    on(getOrganizationUnitRolesListFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(getOrganizationUnitUsersList, (state) => ({ ...state, status: 'loading' })),
    on(getOrganizationUnitUsersListSuccess, (state, { organizationUnitUsersList }) => ({
        ...state,
        usersList: organizationUnitUsersList,
        error: null,
        status: 'success',
    })),
    on(getOrganizationUnitUsersListFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),








    on(createTreeUnit, (state) => ({ ...state, status: 'loading' })),
    on(createTreeUnitSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(createTreeUnitFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(updateUnitTree, (state) => ({ ...state, status: 'loading' })),
    on(updateUnitTreeSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(updateUnitTreeFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(deleteUnitTree, (state) => ({ ...state, status: 'loading' })),
    on(deleteUnitTreeSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(deleteUnitTreeFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(deleteMemberFromOrgUnit, (state) => ({ ...state, status: 'loading' })),
    on(deleteMemberFromOrgUnitSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(deleteMemberFromOrgUnitFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),

    on(deleteRoleFromOrgUnit, (state) => ({ ...state, status: 'loading' })),
    on(deleteRoleFromOrgUnitSuccess, (state) => ({
        ...state,
        error: null,
        status: 'success',
    })),
    on(deleteRoleFromOrgUnitFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    }))
)
