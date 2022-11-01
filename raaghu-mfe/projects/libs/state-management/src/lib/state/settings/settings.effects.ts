import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {
    getAccountCaptchaSettings,
    getAccountCaptchaSettingsFailure,
    getAccountCaptchaSettingsSuccess,
    getAccountGenaralSettingsSuccess,
    getAccountGeneralSettings,
    getAccountGeneralSettingsFailure,
    getAccountTwoFactorSettings,
  getAccountTwoFactorSettingsFailure,
  getAccountTwoFactorSettingsSuccess,
  getEmailSettings,
  getEmailSettingsFailure,
  getEmailSettingsSuccess,
  getIdentityManagementSettings,
  getIdentityManagementSettingsFailure,
  getIdentityManagementSettingsSuccess,
  getThemeSettings,
  getThemeSettingsFailure,
  getThemeSettingsSuccess,
  saveAccountCaptchaSettings,
  saveAccountTwoFactorSettings,
  saveEmailSettings,
  saveIdentityManagementSettings,
  saveThemeSettings,
} from './settings.actions';

@Injectable()
export class SettingEffects {
  constructor(
    private actions$: Actions,
    private settingService: ServiceProxy,
    private alertService: AlertService
  ) {}
  getEmailSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEmailSettings),
      switchMap((data) =>
        // Call the getTodos method, convert i0t to an observable
        from(this.settingService.emailingGET()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((emailSettings) => {
            return getEmailSettingsSuccess({ emailSettings });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getEmailSettingsFailure({ error })))
        )
      )
    )
  );

  saveEmailSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveEmailSettings),
        mergeMap(({ data }) =>
          this.settingService.emailingPOST(data).pipe(
            map((res: any) => {
              this.alertService.showAlert(
                'Success',
                'Email Settings updated successfully',
                'success'
              );
            }),
            catchError((error: any) => of())
          )
        )
      ),
    {
      dispatch: false,
    }
  );

  getIdentityManagementSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getIdentityManagementSettings),
      switchMap((data) =>
        // Call the getTodos method, convert i0t to an observable
        from(this.settingService.settingsGET3()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((identityManagementSettings) => {
            return getIdentityManagementSettingsSuccess({ identityManagementSettings });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getIdentityManagementSettingsFailure({ error })))
        )
      )
    )
  );

  saveIdentityManagementSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveIdentityManagementSettings),
        mergeMap(({ data }) =>
          this.settingService.settingsPUT3(data).pipe(
            map((res: any) => {
              this.alertService.showAlert(
                'Success',
                'Identity Management Settings updated successfully',
                'success'
              );
            }),
            catchError((error: any) => of())
          )
        )
      ),
    {
      dispatch: false,
    }
  );


  getThemeSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getThemeSettings),
      switchMap((data) =>
        // Call the getTodos method, convert i0t to an observable
        from(this.settingService.ldapGET()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((themeSettings) => {
            return getThemeSettingsSuccess({ themeSettings });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getThemeSettingsFailure({ error })))
        )
      )
    )
  );

  saveThemeSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveThemeSettings),
        mergeMap(({ data }) =>
          this.settingService.ldapPUT(data).pipe(
            map((res: any) => {
              this.alertService.showAlert(
                'Success',
                'Email Settings updated successfully',
                'success'
              );
            }),
            catchError((error: any) => of())
          )
        )
      ),
    {
      dispatch: false,
    }
  );

  getAccountTwoFactorSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAccountTwoFactorSettings),
      switchMap((data) =>
        // Call the getTodos method, convert i0t to an observable
        from(this.settingService.twoFactorGET()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((twoFactorSettings) => {
            return getAccountTwoFactorSettingsSuccess({ twoFactorSettings });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAccountTwoFactorSettingsFailure({ error })))
        )
      )
    )
  );

  saveAccountTwoFactorSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveAccountTwoFactorSettings),
        mergeMap(({ data }) =>
          this.settingService.twoFactorPUT(data).pipe(
            map((res: any) => {
              this.alertService.showAlert(
                'Success',
                'Email Settings updated successfully',
                'success'
              );
            }),
            catchError((error: any) => of())
          )
        )
      ),
    {
      dispatch: false,
    }
  );

  getAccountCaptchaSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAccountCaptchaSettings),
      switchMap((data) =>
        // Call the getTodos method, convert i0t to an observable
        from(this.settingService.recaptchaGET()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((captchaSettings) => {
            return getAccountCaptchaSettingsSuccess({ captchaSettings });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAccountCaptchaSettingsFailure({ error })))
        )
      )
    )
  );


  saveAccountCaptchaSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveAccountCaptchaSettings),
        mergeMap(({ data }) =>
          this.settingService.recaptchaPUT(data).pipe(
            map((res: any) => {
              this.alertService.showAlert(
                'Success',
                'Email Settings updated successfully',
                'success'
              );
            }),
            catchError((error: any) => of())
          )
        )
      ),
    {
      dispatch: false,
    }
  );

  getAccountGeneralSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAccountGeneralSettings),
      switchMap((data) =>
        // Call the getTodos method, convert i0t to an observable
        from(this.settingService.settingsGET()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((generalSettings) => {
            return getAccountGenaralSettingsSuccess({ generalSettings });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAccountGeneralSettingsFailure({ error })))
        )
      )
    )
  );

  saveAccountGeneralSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveEmailSettings),
        mergeMap(({ data }) =>
          this.settingService.settingsPUT(data).pipe(
            map((res: any) => {
              this.alertService.showAlert(
                'Success',
                'Email Settings updated successfully',
                'success'
              );
            }),
            catchError((error: any) => of())
          )
        )
      ),
    {
      dispatch: false,
    }
  );

}
