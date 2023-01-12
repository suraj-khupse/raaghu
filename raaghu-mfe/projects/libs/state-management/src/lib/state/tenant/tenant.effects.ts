import { Injectable } from "@angular/core";
import { AlertService } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AccountServiceProxy, CommonLookupServiceProxy, EditionServiceProxy, TenantServiceProxy, TokenAuthServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap, switchMap } from "rxjs/operators";
import { getTenants, getTenantSuccess, getTenantFailure, deleteTenant, updateTenant, getEditionComboboxItems, getEditionComboboxItemsFailure, getEditionComboboxItemsSuccess, getTenantForEdit, getTenantForEditSuccess, getTenantForEditFailure, getTenantFeaturesForEdit, getTenantFeaturesForEditSuccess, getTenantFeaturesForEditFailure, updateTenantFeatureValues, getTenantUsers, getTenantUsersSuccess, getTenantUsersFailure, getTenantLogin, getTenantLoginSuccess, impersonatedAuthenticate, saveTenant } from "./tenant.actions";

@Injectable()
export class TenantEffects {
  constructor(private actions$: Actions, private tenantService: TenantServiceProxy, public alertService: AlertService,
     private editionService: EditionServiceProxy, private store: Store,private findTenantUsers:CommonLookupServiceProxy,
      private loginTenant:AccountServiceProxy, private tokenAuth:TokenAuthServiceProxy) { }
  getTenants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTenants),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.tenantService.getTenants(undefined,undefined,undefined,undefined,undefined,undefined,undefined,'id desc',1000,0)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((tenants: any) => {
            return getTenantSuccess({ tenants: tenants })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getTenantFailure({ error })))
        )
      )
    )
  );
  getEditionComboboxItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEditionComboboxItems),
      switchMap(() => {
        return (this.editionService.getEditionComboboxItems(undefined, undefined, undefined)).pipe(
          map((editions: any) => {
            return getEditionComboboxItemsSuccess({ editionComboboxItem: editions })
          }),
          catchError((error) => of(getEditionComboboxItemsFailure({ error })))
        )
      }
      )
    )
  );
  saveTenant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveTenant),
      switchMap((data) =>
        this.tenantService.createTenant(data.tenant).pipe(map((res: any) => {
          this.store.dispatch(getTenants());
          this.alertService.showAlert('Success', 'Tenant added successfully', 'success', )
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
  deleteTenant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTenant),
      mergeMap(({ id }) =>
        this.tenantService.deleteTenant(id).pipe(map(() => {
          this.alertService.showAlert('Success', 'Tenant deleted successfully', 'success');
          this.store.dispatch(getTenants());
        }
        ),
          catchError((error) => of())
        )
      )
    ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
  );
  updateTenant$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTenant),
      mergeMap((data) =>
        this.tenantService.updateTenant(data.tenant).pipe(map((res: any) => {
          this.store.dispatch(getTenants());
          this.alertService.showAlert('Success', 'Tenant updated successfully', 'success')

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

  getTenantForEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTenantForEdit),
      switchMap(({ id }) => {
        return (this.tenantService.getTenantForEdit(id)).pipe(
          map((tenant: any) => {
            return getTenantForEditSuccess({ tenantInfo: tenant })
          }),
          catchError((error) => of(getTenantForEditFailure({ error })))
        )
      }
      )
    )
  );
  getTenantFeaturesForEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTenantFeaturesForEdit),
      switchMap(({ id }) => {
        return (this.tenantService.getTenantFeaturesForEdit(id)).pipe(
          map((tenantFeature: any) => {
            return getTenantFeaturesForEditSuccess({ tenantFeature: tenantFeature })
          }),
          catchError((error) => of(getTenantFeaturesForEditFailure({ error })))
        )
      }
      )
    )
  );

  updateTenantFeatureValues$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTenantFeatureValues),
      mergeMap((data) =>
        this.tenantService.updateTenantFeatures(data.feature).pipe(map((res: any) => {
          this.alertService.showAlert('Success', 'Tenant features updated successfully', 'success');

          // this.store.dispatch(getTenants())
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

  getTenantUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTenantUsers),
      switchMap((data:any) => {
        return (this.findTenantUsers.findUsers(data.data)).pipe(
          map((tenantUsers: any) => {
            return getTenantUsersSuccess({ tenantUsers: tenantUsers})
          }),
          catchError((error) => of(getTenantUsersFailure({ error })))
        )
      }
      )      
    )
  );

  getTenantLogin$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getTenantLogin),
    switchMap((data:any) => {
      return (this.loginTenant.impersonateTenant(data.data)).pipe(
        map((tenantLogin: any) => {
          return getTenantLoginSuccess({ tenantLogin: tenantLogin})
        }),
        catchError((error) => of(getTenantUsersFailure({ error })))
      )
    }
    )
  )
);

impersonatedAuthenticate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(impersonatedAuthenticate),
      mergeMap(({ token}) =>
        this.tokenAuth.impersonatedAuthenticate(token).pipe(map(() => {
          // this.store.dispatch(getTenants());          

        }
        ),
          catchError((error) => of())
        )
      )
    ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
)
}
