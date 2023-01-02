import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { deleteIdentityResource, saveIdentityResource, getIdentityResource, getAllIdentityResources, getAllIdentityResourcesFailure, getAllIdentityResourcesSuccess, getIdentityResourceFailure, getIdentityResourceSuccess, saveIdentityResourceFailure, updateIdentityResource, updateIdentityResourceSuccess, saveIdentityResourceSuccess, updateIdentityResourceFailure , claimTypesAll, claimTypesAllSuccess} from './identity-resources.actions';


@Injectable()
export class IdentityResourcesEffects {
  constructor(
    private actions$: Actions,
    private identityResourceService: ServiceProxy,
    private alertService: AlertService,
    private store: Store
  ) { }
  getAllIdentityResources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllIdentityResources),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.identityResourceService.identityResourcesGET(undefined, undefined, 0, 1000)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((allIdentityResources) => {
            return getAllIdentityResourcesSuccess({
              allIdentityResources
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAllIdentityResourcesFailure({ error })))
        )
      )
    )
  );
  getIdentityResource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getIdentityResource),
      switchMap(({id}) =>
        // Call the getTodos method, convert it to an observable
        from(this.identityResourceService.identityResourcesGET2(id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((identityResource) => {
            return getIdentityResourceSuccess({
              identityResource
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getIdentityResourceFailure({ error })))
        )
      )
    )
  );
  claimTypesAll$ = createEffect(() =>
  this.actions$.pipe(
    ofType(claimTypesAll),
    switchMap(() =>
      // Call the getTodos method, convert it to an observable
      from(this.identityResourceService.claimTypesAll()).pipe(
        // Take the returned value and return a new success action containing the todos
        map((claims) => {
          return claimTypesAllSuccess({claims});
        }),
        // Or... if it errors return a new failure action containing the error
        catchError((error) => of(getAllIdentityResourcesFailure({ error })))
      )
    )
  )
);



  // saveIdentityResources$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(saveIdentityResource),
  //     switchMap((data) =>
  //       // Call the getTodos method, convert it to an observable
  //       from(this.identityResourceService.identityResourcesPOST(data)).pipe(
  //         // Take the returned value and return a new success action containing the todos
  //         map(() => {
  //           this.store.dispatch(getAllIdentityResources());
  //           return saveIdentityResourceSuccess();
  //         }),
  //         // Or... if it errors return a new failure action containing the error
  //         catchError((error) => of(saveIdentityResourceFailure({ error })))
  //       )
  //     )
  //   )
  // );

  saveIdentityResources$ = createEffect(() =>
  this.actions$.pipe(
      ofType(saveIdentityResource),
      switchMap((data) =>
        this.identityResourceService.identityResourcesPOST(data.data).pipe(map(() => {
          this.store.dispatch(getAllIdentityResources());
          this.alertService.showAlert('Success', 'Identity Resource Added successfully', 'success')
        }
        ),
          catchError((error) => of())
        )
      )
    ),
    { dispatch: false }

  );
  updateIdentityResource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateIdentityResource),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.identityResourceService.identityResourcesPUT(data.id, data.body)).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            this.store.dispatch(getAllIdentityResources());
            this.alertService.showAlert('Success', 'Identity Resource Updated successfully', 'success')

            return updateIdentityResourceSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(updateIdentityResourceFailure({ error })))
        )
      )
    )
  );

  deleteIdentityResource$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteIdentityResource),
      mergeMap(({data}) =>
        this.identityResourceService.identityResourcesDELETE(data).pipe(map((res: any) => {
          this.store.dispatch(getAllIdentityResources());
          this.alertService.showAlert('Success', 'Identity Resource deleted successfully', 'success')
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


}