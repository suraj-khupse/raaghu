import { Injectable } from "@angular/core";
import { AlertService } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { GetRolesInput, GetUsersInput, OrganizationUnitServiceProxy, PermissionServiceProxy, UserServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { getOrganizationUnitTree, getOrganizationUnitTreeFailure, getOrganizationUnitTreeSuccess } from "../organization-unit/organization-unit.actions";
import { deleteUser, getUsePermissionsFailure, getUserEditFailure, getUserFailure, getUserForEdit, getUserForEditSuccess, getUserPermission, getUserPermissionFilterList, getUserPermissionListSuccess, getUserPermissionSuccess, getUsers, getUserSuccess, saveUser, UpdateUserPermission } from "./user.actions";


@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserServiceProxy, private permissionService: PermissionServiceProxy, private organizationUnitService: OrganizationUnitServiceProxy,
    private alertService: AlertService, private store: Store) { }
  selectedPermissions = []
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      switchMap(({ selectedPermissions }) =>
        // Call the getTodos method, convert it to an observable
        from(this.userService.getUsers(new GetUsersInput({
          filter: "",
          permissions: selectedPermissions,
          role: null,
          onlyLockedUsers: false,
          sorting: "id desc",
          maxResultCount: 100,
          skipCount: 0
        }))).pipe(
          // Take the returned value and return a new success action containing the todos
          map((users: any) => {


            return getUserSuccess({ users: users })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getUserFailure({ error })))
        )
      )
    )
  );
  getOrganizationUnitTree$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOrganizationUnitTree),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.organizationUnitService.getOrganizationUnits()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((organizationUnitTree) => {
            return getOrganizationUnitTreeSuccess({
              organizationUnitTree
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getOrganizationUnitTreeFailure({ error })))
        )
      )
    )
  );
  saveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveUser),
      switchMap((data) =>
        this.userService.createOrUpdateUser(data.user).pipe(map((res: any) => {
          this.store.dispatch(getUsers([]));
          if(data.user.user.id !=undefined){
            this.alertService.showAlert('Success',  'User Updated successfully', 'success')
          }
          else
          {
            this.alertService.showAlert('Success',  'User added successfully', 'success')
          }
       
        }),
          catchError((error: any) => of(
          ))
        )
      )
    ),
    {
      dispatch: false
    }
  );
  getUserForEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserForEdit),
      switchMap(({ id }) =>
        // Call the getTodos method, convert it to an observable
        from(this.userService.getUserForEdit(id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((UserEditI) => {
            return getUserForEditSuccess({ UserEditI: UserEditI })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getUserEditFailure({ error })))
        )
      )
    )
  );
  getUserPermission$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserPermission),
      switchMap(({ id }) =>
        // Call the getTodos method, convert it to an observable
        from(this.userService.getUserPermissionsForEdit(id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((UserPermissionI) => {
            return getUserPermissionSuccess({ UserPermissionStateI: UserPermissionI })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getUsePermissionsFailure({ error })))
        )
      )
    )
  );
  UpdateUserPermission$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateUserPermission),
      switchMap((data) =>
        this.userService.updateUserPermissions(data.Permissions).pipe(map((res: any) => {
          this.alertService.showAlert('Success', 'User permission updated successfully', 'success');

        }),
          catchError((error: any) => of(
          ))
        )
      )
    ),
    {
      dispatch: false
    }
  );
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      switchMap(({ id }) =>
        this.userService.deleteUser(id).pipe(map(() => {
          this.store.dispatch(getUsers([]));
          this.alertService.showAlert('Success', 'User deleted successfully', 'success');

        }
        ),
          catchError((error) => of())
        )
      )
    ),
    { dispatch: false }
  );
  getUserPermissionFilter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserPermissionFilterList),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.permissionService.getAllPermissions()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((UserPermissionFilter) => {
            return getUserPermissionListSuccess({ UserPermissionFilterI: UserPermissionFilter })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getUsePermissionsFailure({ error })))
        )
      )
    )
  );
}
