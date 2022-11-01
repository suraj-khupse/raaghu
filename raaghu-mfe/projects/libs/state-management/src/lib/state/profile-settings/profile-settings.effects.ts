import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { getProfileSettings, getProfileSettingsError, getProfileSettingsSuccess, saveChangedPassWord, savePersonalInfo, saveProfile, saveProfileScopeFailure, saveProfileScopeSuccess, saveTwoFactor, saveTwoFactorFailure, saveTwoFactorSuccess } from './profile-settings.actions';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private clientsService: ServiceProxy,
    private alertService: AlertService,
    private store: Store
  ) { }
  // getAllApiScope$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(getAllApiScope),
  //     switchMap(() =>
  //       // Call the getTodos method, convert it to an observable
  //       from(this.clientsService.apiScopesGET(undefined,undefined,undefined,undefined)).pipe(
  //         // Take the returned value and return a new success action containing the todos
  //         map((allScope) => {
  //           return getAllApiScopeSuccess({
  //               allScope
  //           });
  //         }),
  //         // Or... if it errors return a new failure action containing the error
  //         catchError((error) => of(getAllApiScopeFailure({ error })))
  //       )
  //     )
  //   )
  // );
  getProfileSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfileSettings),
      switchMap((id) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.myProfileGET()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((profile) => {
            return getProfileSettingsSuccess({
              profile
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getProfileSettingsError({ error })))
        )
      )
    )
  );
  saveProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveProfile),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.myProfilePUT(data)).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            // this.store.dispatch(getAllClients());
            return saveProfileScopeSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(saveProfileScopeFailure({ error })))
        )
      )
    )
  );

  saveChangedPassWord$ = createEffect(() =>
  this.actions$.pipe(
    ofType(saveChangedPassWord),
    switchMap((data) =>
      // Call the getTodos method, convert it to an observable
      from(this.clientsService.changePasswordPOST(data)).pipe(
        // Take the returned value and return a new success action containing the todos
        map(() => {
          // this.store.dispatch(getAllClients());
          return saveProfileScopeSuccess();
        }),
        // Or... if it errors return a new failure action containing the error
        catchError((error) => of(saveProfileScopeFailure({ error })))
      )
    )
  )
);
saveTwoFactor$ = createEffect(() =>
this.actions$.pipe(
  ofType(saveTwoFactor),
  switchMap(() =>
    // Call the getTodos method, convert it to an observable
    from(this.clientsService.twoFactorEnabled()).pipe(
      // Take the returned value and return a new success action containing the todos
      map(() => {
        // this.store.dispatch(getAllClients());
        return saveTwoFactorSuccess();
      }),
      // Or... if it errors return a new failure action containing the error
      catchError((error) => of(saveTwoFactorFailure({ error })))
    )
  )
)
);

savePersonalInfo$ = createEffect(() =>
this.actions$.pipe(
  ofType(savePersonalInfo),
  switchMap(() =>
    // Call the getTodos method, convert it to an observable
    from(this.clientsService.myProfilePUT(undefined)).pipe(
      // Take the returned value and return a new success action containing the todos
      map(() => {
        // this.store.dispatch(getAllClients());
        return saveTwoFactorSuccess();
      }),
      // Or... if it errors return a new failure action containing the error
      catchError((error) => of(saveTwoFactorFailure({ error })))
    )
  )
)
);
  
}