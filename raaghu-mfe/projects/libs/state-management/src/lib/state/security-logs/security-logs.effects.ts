import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy } from '@libs/shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { data } from 'autoprefixer';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { getSecuritylogs, getSecuritylogsFailure, getSecuritylogsSuccess } from './security-logs.actions';


@Injectable()
export class SecurityLogEffects {
  constructor(
    private actions$: Actions,
    private securityLogs: ServiceProxy,
    private alertService: AlertService,
    private store: Store
  ) { }
  getSecuritylogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSecuritylogs),
      switchMap((data) =>
        // Call the getTodos method, convert it to an observable
        from(this.securityLogs.securityLogs2(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,0,1000)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((logs) => {
            return getSecuritylogsSuccess({
                logs
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getSecuritylogsFailure({ error })))
        )
      )
    )
  );
}