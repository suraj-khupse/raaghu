import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { deleteApiScope, getAllApiScope, getAllApiScopeFailure, getAllApiScopeSuccess, getApiScope, getApiScopeError, getApiScopeSuccess, saveApiScope, saveApiScopeFailure, saveApiScopeSuccess, updateApiScope } from './api-scope-action';

@Injectable()
export class ApiScopeEffects {
  constructor(
    private actions$: Actions,
    private clientsService: ServiceProxy,
    private alertService: AlertService,
    private store: Store
  ) { }
  getAllApiScope$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllApiScope),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.apiScopesGET(undefined,undefined,undefined,undefined)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((allScope) => {
            return getAllApiScopeSuccess({
                allScope
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAllApiScopeFailure({ error })))
        )
      )
    )
  );
  getApiScope$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getApiScope),
      switchMap((id) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.apiScopesGET2(id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((apiScope) => {
            return getApiScopeSuccess({
                apiScope
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getApiScopeError({ error })))
        )
      )
    )
  );
  saveApiScope$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveApiScope),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.apiScopesPOST(data)).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            // this.store.dispatch(getAllClients());
            return saveApiScopeSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(saveApiScopeFailure({ error })))
        )
      )
    )
  );
  updateApiScope$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateApiScope),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.apiScopesPUT(data.id, data.body)).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            this.store.dispatch(getAllApiScope());
            return saveApiScopeSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(saveApiScopeFailure({ error })))
        )
      )
    )
  );
  
  deleteApiScope$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteApiScope),
      mergeMap((data) =>
      this.clientsService.apiScopesDELETE(data).pipe(map((res: any) => {
        this.store.dispatch(getAllApiScope());
          this.alertService.showAlert('Success', 'Api Scope deleted successfully','success' )
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