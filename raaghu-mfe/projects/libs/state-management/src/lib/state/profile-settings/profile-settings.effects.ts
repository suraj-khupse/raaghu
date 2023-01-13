import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy, SharedService } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { deletePersonalData, deletePersonalDataFailure, deletePersonalDataSuccess, downloadData, downloadDataFailure, downloadDataSuccess, getLinkUserData, getLinkUserDataFailure, getLinkUserDataSuccess, getPersonalData, getPersonalDataFailure, getPersonalDataSuccess, getProfilePictureData, getProfilePictureDataFailure, getProfilePictureDataSuccess, getProfileSettings, getProfileSettingsError, getProfileSettingsSuccess, getTwoFactor, getTwoFactorFailure, getTwoFactorSuccess, logout, logoutFailure, logoutSuccess, requestPersonalData, requestPersonalDataFailure, requestPersonalDataSuccess, saveChangedPassWord, saveProfile, saveProfilePicture, saveProfilePictureFailure, saveProfilePictureSuccess, saveProfileScopeFailure, saveProfileScopeSuccess, saveTwoFactor, saveTwoFactorFailure, saveTwoFactorSuccess } from './profile-settings.actions';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private clientsService: ServiceProxy,
    private alertService: AlertService,
    private store: Store,
    private sharedService: SharedService
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
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.myProfileGET()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((profile) => {
            return getProfileSettingsSuccess({ profile });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getProfileSettingsError({ error })))
        )
      )
    )
  );

  getTwoFactor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTwoFactor),
      switchMap((id) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.twoFactorEnabled()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((twoFactor) => {
            return getTwoFactorSuccess({
              twoFactor
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getTwoFactorFailure({ error })))
        )
      )
    )
  );

  getPersonalData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPersonalData),
      switchMap(({ id }) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.list(id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((personalData) => {
            return getPersonalDataSuccess({
              personalData
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getPersonalDataFailure({ error })))
        )
      )
    )
  );

  getLinkUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLinkUserData),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.linkUser()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((user) => {
            return getLinkUserDataSuccess({
              user
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getLinkUserDataFailure({ error })))
        )
      )
    )
  );


  saveProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveProfile),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.myProfilePUT(data.myAccount)).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            return saveProfileScopeSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(saveProfileScopeFailure({ error })))
        )
      )
    )
  );

  saveProfilePicture$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveProfilePicture),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.profilePicturePOST(2, data.data)).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            this.store.dispatch(getProfilePictureData(data));
            return saveProfilePictureSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(saveProfilePictureFailure({ error })))
        )
      )
    )
  );

  getProfilePictureData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfilePictureData),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.profilePictureGET(data.id)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((profilePicData) => {
            return getProfilePictureDataSuccess({ profilePicData });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getProfilePictureDataFailure({ error })))
        )
      )
    )
  );

  saveChangedPassWord$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveChangedPassWord),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.changePasswordPOST(data.changedPassword)).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            this.store.dispatch(saveTwoFactor(data));
            return saveProfileScopeSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => {
            this.sharedService.setPasswordStatus(error);
            return of(saveProfileScopeFailure({ error }))
          })
        )
      )
    )
  );
  saveTwoFactor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveTwoFactor),
      switchMap((value) =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.setTwoFactorEnabled(value.twoFactorEnabled)).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            this.store.dispatch(saveProfile(value));
            return saveTwoFactorSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(saveTwoFactorFailure({ error })))
        )
      )
    )
  );

  requestPersonalData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestPersonalData),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.prepareData()).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            return requestPersonalDataSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(requestPersonalDataFailure({ error })))
        )
      )
    )
  );

  deletePersonalData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePersonalData),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.requests()).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            return deletePersonalDataSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(deletePersonalDataFailure({ error })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.clientsService.logout()).pipe(
          // Take the returned value and return a new success action containing the todos
          map(() => {
            return logoutSuccess();
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(logoutFailure({ error })))
        )
      )
    )
  );

  //   downloadData$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(downloadData),
  //     switchMap((data) =>
  //       // Call the getTodos method, convert it to an observable
  //       from(this.clientsService.data(data.id)).pipe(
  //         // Take the returned value and return a new success action containing the todos
  //         map((downloadData) => {
  //           return downloadDataSuccess(downloadData);
  //         }),
  //         // Or... if it errors return a new failure action containing the error
  //         catchError((error) => of(downloadDataFailure({ error })))
  //       )
  //     )
  //   )
  // );

}