import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';

import { UsersState } from './user.reducer';


export const Userselector = (state: AppState) => state.user;
export const selectAllUsers = createSelector(
    Userselector,
    (state: UsersState) => state.users
);
export const selectUserForEdit = createSelector(
    Userselector,
    (state: UsersState) => state.UserEditI
);
export const selectUserPermissionEdit = createSelector(
    Userselector,
    (state: UsersState) => state.UserPermissionStateI
);
export const selectAllUserFilterPermissions = createSelector(
    Userselector,
    (state: UsersState) => state.UserPermissionFilterI
); 