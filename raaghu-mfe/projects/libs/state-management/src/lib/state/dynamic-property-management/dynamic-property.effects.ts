import { Injectable } from '@angular/core';
import { AlertService } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  DynamicPropertyServiceProxy,
  PermissionServiceProxy,
} from 'projects/libs/shared/src/lib/service-proxies';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  getDynamicPropertyFailure,
  getDynamicProperty,
  getDynamicPropertySuccess,
  getPermission,
  getPermissionSuccess,
  getDynamicPropertyByEdit,
  getDynamicPropertyByEditSuccess,
  getDynamicPropertyByEditFailure,
  saveDynamicProperty,
  UpdateDynamicProperty,
  deleteDynamicProperty,
} from './dynamic-property.actions';
declare var bootstrap: any;
@Injectable()
export class DynamicPropertyEffects {
  constructor(
    private actions$: Actions,
    private dynamicPropertyService: DynamicPropertyServiceProxy,
    private permissionService: PermissionServiceProxy,
    private alertService: AlertService,
    private store: Store
  ) { }
  getDynamicProperty$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDynamicProperty),
      switchMap(() => {
        return this.dynamicPropertyService.getAll().pipe(
          map((DynamicProperty) => {
            return getDynamicPropertySuccess({
              properties: DynamicProperty,
            });
          }),
          catchError((error) => of(getDynamicPropertyFailure({ error })))
        );
      })
    )
  );

  getPermissions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPermission),
      switchMap(() =>
        from(this.permissionService.getAllPermissions()).pipe(
          map((DynanmicPermission) => {
            return getPermissionSuccess({
              DynanmicPermission: DynanmicPermission,
            });
          }),
          catchError((error) => of(getDynamicPropertyFailure({ error })))
        )
      )
    )
  );

  getDynamicPropertyByEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDynamicPropertyByEdit),
      switchMap(({ id }) => {
        return (this.dynamicPropertyService.get(id)).pipe(
          map((RoleEditI: any) => {
            return getDynamicPropertyByEditSuccess({ EditDynamicPropertSateI: RoleEditI })
          }),
          catchError((error) => of(getDynamicPropertyByEditFailure({ error })))
        )
      }
      )
    )
  );

  deleteDynamicProperty$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteDynamicProperty),
        mergeMap(({ id }) =>
          this.dynamicPropertyService.delete(id).pipe(
            map(() => {
              this.store.dispatch(getDynamicProperty());
              this.alertService.showAlert('Success', 'Dynamic property deleted successfully', 'success')
            }),
            catchError((error) => of())
          )
        )
      ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
  );
  saveDynamicProperty$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveDynamicProperty),

        mergeMap((data) =>
          this.dynamicPropertyService.add(data.DynamicProperty).pipe(
            map((res: any) => {
              this.store.dispatch(getDynamicProperty());
              this.alertService.showAlert('Success', 'Dynamic property added successfully', 'success');
              var myModalEl = document.getElementById('AddDynamic');
              var modal = bootstrap.Offcanvas.getInstance(myModalEl)
              modal.hide();
            }),

            catchError((error: any) => of(console.log(error)))
          )
        )
      ),

    {
      dispatch: false,
    }
  );
  UpdateDynamicProperty$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UpdateDynamicProperty),

        mergeMap((data) =>
          this.dynamicPropertyService.update(data.data).pipe(
            map((res: any) => {
              this.store.dispatch(getDynamicProperty());
              var myModalEl = document.getElementById('AddDynamic');
              var modal = bootstrap.Offcanvas.getInstance(myModalEl)
              modal.hide();
              this.alertService.showAlert('Success', 'Dynamic property updated successfully', 'success')
            }),

            catchError((error: any) => of(console.log(error)))
          )
        )
      ),

    {
      dispatch: false,
    }
  );

}


