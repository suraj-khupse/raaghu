import { CreateOrUpdateRoleInput } from "@libs/shared";
import { createAction, props } from "@ngrx/store";
import { PermissionData, PostRole, Role } from "./role.models";

export const getRoles = createAction('[Role Page] Get Roles',
    (selectedPermissions: any) => ({ selectedPermissions }));

export const getRoleSuccess = createAction(
    '[Role Page] Get Role Success',
    props<{ roles: any }>()
);

export const getRoleFailure = createAction(
    '[Role Page] Get Roles Failure',
    props<{ error: string }>()
);
export const saveRole = createAction(
    '[Role Page] Save Role',
    (role: any) => ({ role })
);


export const getPermission = createAction('[Role Page] Get Permissions');

export const getPermissionSuccess = createAction(
    '[Role Page] get Permission Success',
    props<{ PermissionI: PermissionData }>()
);
export const deleteRole = createAction(
    '[Role Page] Delete Role',
    (id: number) => ({ id })
);

export const getRolByEdit = createAction('[Role Page] Get RolByEdit',
    (id: number) => ({ id }));

export const getRolByEditSuccess = createAction(
    '[Role Page] get Rol ByEdit Success',
    props<{ EditRoleSateI: any }>()
);
export const getRolByEditFailure = createAction(
    '[Role Page] Get Role By EditF Failure',
    props<{ error: string }>()
);

export const setRoleAlert = createAction('[Role Page] Set Role Alert',
    (roleAlert: any) => ({ roleAlert })
);