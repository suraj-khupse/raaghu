import { createAction, props } from "@ngrx/store";
import { User } from "./user.models";


export const getTemplateDefinition = createAction('[TextTemplate Page] Get All TextTemplate Definition');

export const getTemplateDefinitionSuccess = createAction(
    '[TextTemplate Page] Get All TextTemplate Definition Success',
    props<{ allTextTemplate: any }>()
);

export const getTemplateDefinitionFailure = createAction(
    '[TextTemplate Page] Get All TextTemplate Definition Failure',
    props<{ error: string }>()
);

export const getTemplateContent = createAction('[TextTemplate Page] Get Api-Resource',
(data:any) => ( {data} ));

export const getTemplateContentSuccess = createAction(
    '[TextTemplate Page] Get Template Content Success',
    props<{ templateContent: any }>()
);

export const getTemplateContentFailure = createAction(
    '[TextTemplate Page] Get Template Content Failure',
    props<{ error: string }>()
);


export const getUsers = createAction('[User Page] Get Users',
);

export const getUserSuccess = createAction(
    '[User Page] Get User Success',
    props<{ users: any }>()
);

export const getUserFailure = createAction(
    '[User Page] Get Users Failure',
    props<{ error: string }>()
);

export const assignableRoles = createAction('[User Page] Get Assignable Roles Users',
);

export const assignableRolesSuccess = createAction(
    '[User Page] Get Assignable Roles Success',
    props<{ assignableRoles: any }>()
);

export const assignableRolesFailure = createAction(
    '[User Page] Get Assignable Roles Failure',
    props<{ error: string }>()
);

export const availbleOrganizationUnit = createAction('[User Page] Get Available Organization Unit Users',
);

export const availbleOrganizationUnitSuccess = createAction(
    '[User Page] Get Available Organization Unit Success',
    props<{ availableOrgUnit: any }>()
);

export const availbleOrganizationUnitFailure = createAction(
    '[User Page] Get Available Organization Unit Failure',
    props<{ error: string }>()
);
export const saveUser = createAction(
    '[User Page] Save User',
    (user: any) => ({ user })
);
export const saveUseruccess = createAction(
    '[User Page] Save User Success', props<{ user: any }>()
);
export const updateUser = createAction(
    '[User Page] Update User',
    (data: any) => ({ data })
);
export const updateUseruccess = createAction(
    '[User Page] Update User Success', props<{ user: any }>()
);

export const getUserForEdit = createAction('[User Page] Get getUserForEdit',
(id: any) => ({ id }));

export const getUserForEditSuccess = createAction(
    '[User Page] Get user Edit Success',
    props<{ UserEditI: any }>()
);
export const getUserEditFailure = createAction(
    '[User Page] get User Edit Failure',
    props<{ error: string }>()
);

export const getUserRolesForEdit = createAction('[User Page] Get get user roles Edit',
(id: any) => ({ id }));

export const getUserRolesForEditSuccess = createAction(
    '[User Page] Get user roles Edit Success',
    props<{ rolesOfUser: any }>()
);
export const getUserRolesEditFailure = createAction(
    '[User Page] get User roles Edit Failure',
    props<{ error: string }>()
);

export const getUserOrgForEdit = createAction('[User Page] Get get user Organization unit Edit',
(id: any) => ({ id }));

export const getUserOrgForEditSuccess = createAction(
    '[User Page] Get user Organization Unit Edit Success',
    props<{ orgOfUser: any }>()
);
export const getUserOrgEditFailure = createAction(
    '[User Page] get User Organization Unit Edit Failure',
    props<{ error: string }>()
);

export const getUserPermission = createAction('[User Page] Get getUser Permission For Edit',
(id: any) => ({ id }));

export const getUserPermissionSuccess = createAction(
    '[User Page] Get user Edit Success',
    props<{ UserPermissionI: any }>()
);
export const getUsePermissionsFailure = createAction(
    '[User Page] get User Edit Failure',
    props<{ error: string }>()
);
export const UpdateUserPermission = createAction(
    '[User Page] Update User Permission',
    (data: any) => ({ data })
);
export const UpdateUserPermissionSuccess = createAction(
    '[User Page] Update User Permission Success', props<{ Permissions: any }>()
);
export const deleteUser = createAction(
    '[User Page] Delete Language',
    (id: any) => ({ id })
);

export const getAllClaimTypes = createAction('[User Page] Get All Claim Types');

export const getAllClaimTypesSuccess = createAction(
    '[Role Page] Get All Claim Types Success',
    props<{ allClaimTypes: any }>()
);

export const getAllClaimTypesFailure = createAction(
    '[IUser Page] Get All Claim Types Failure',
    props<{ error: string }>()
);

export const getClaimTypes = createAction('[User Page] Get Claim Types',
(id: any) => ({ id }));

export const getClaimTypesSuccess = createAction(
    '[User Page] Get Claim Types Success',
    props<{ claimTypes: any }>()
);

export const getClaimTypesFailure = createAction(
    '[User Page] Get Claim Types Failure',
    props<{ error: string }>()
);

export const saveClaims = createAction('[User Page] Save Claims',
(data: any) => ({ data }));

export const changePasswordUser = createAction('[User Page] Change Password User',
(data) => ({data}));

// export const changePasswordUserSuccess = createAction(
//     '[User Page] Get Change Password User Success',
// );
// export const changePasswordUserFailure = createAction(
//     '[User Page] Change Password User Failure',
// );