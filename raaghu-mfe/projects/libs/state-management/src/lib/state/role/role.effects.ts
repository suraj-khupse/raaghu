import { Injectable } from "@angular/core";
import { AlertService } from "@libs/shared";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { GetRolesInput, RoleServiceProxy, PermissionServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { deleteRole, getPermission, getPermissionSuccess, getRolByEdit, getRolByEditFailure, getRolByEditSuccess, getRoleFailure, getRoles, getRoleSuccess, saveRole, setRoleAlert } from "./role.actions";


@Injectable()
export class RoleEffects {
  constructor(private actions$: Actions, private permissionService: PermissionServiceProxy,
    private alertService: AlertService,
    private roleService: RoleServiceProxy, private store: Store) { }
  selectedPermissions = []
  getRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRoles),
      switchMap(({ selectedPermissions }) =>
        // Call the getTodos method, convert it to an observable
        from(this.roleService.getRoles(new GetRolesInput({ permissions: selectedPermissions }))).pipe(
          // Take the returned value and return a new success action containing the todos
          map((roles) => {
            return getRoleSuccess({ roles: roles })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getRoleFailure({ error })))
        )
      )
    )
  );

  getPermissions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPermission),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.permissionService.getAllPermissions()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((Permissions) => {
            return getPermissionSuccess({ PermissionI: Permissions })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getRoleFailure({ error })))
        )
      )
    )
  );
  saveRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveRole),
      switchMap((data) =>
        this.roleService.createOrUpdateRole(data.role).pipe(map((res: any) => {
          this.store.dispatch(getRoles([]));
          if (data.role.role.id != undefined) {
            this.store.dispatch(setRoleAlert({
              message: 'Role updated successfully',
              title: 'Success',
              type: 'success',
            }))
            // this.alertService.showAlert('Success',  'Role Updated successfully', 'success')
          }
          else {
            this.store.dispatch(setRoleAlert({
              message: 'Role added successfully',
              title: 'Success',
              type: 'success',
            }))
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

  deleteRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteRole),
      switchMap(({ id }) =>
        this.roleService.deleteRole(id).pipe(map(() => {
          this.store.dispatch(getRoles([]));
          this.store.dispatch(setRoleAlert({
            message: 'Role deleted successfully',
            title: 'Success',
            type: 'success',
          }))
        }
        ),
          catchError((error) => of())
        )
      )
    ),
    { dispatch: false }
  );

  getRoleByEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRolByEdit),
      switchMap(({ id }) =>
        // Call the getTodos method, convert it to an observable
        from(this.roleService.getRoleForEdit(id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((RoleEditI) => {
            return getRolByEditSuccess({ EditRoleSateI: RoleEditI })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getRolByEditFailure({ error })))
        )
      )
    )
  );
}