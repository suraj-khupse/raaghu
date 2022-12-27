import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import { RoleAlertState, RolesState } from './role.reducer';


export const Roleselector = (state: AppState) => state.roles;
export const selectAllRoles = createSelector(
    Roleselector,
    (state: RolesState) => state.roles
);
export const selectAllPermissions = createSelector(
    Roleselector,
    (state: RolesState) => state.PermissionI
);
export const selectRoleForEdit = createSelector(
    Roleselector,
    (state: RolesState) => state.EditRoleSateI
);
export const roleAlerts = (state: AppState) => state.roleAlert;
export const selectRoleAlert = createSelector(
    roleAlerts,
    (state: RoleAlertState) => state.roleAlert
);