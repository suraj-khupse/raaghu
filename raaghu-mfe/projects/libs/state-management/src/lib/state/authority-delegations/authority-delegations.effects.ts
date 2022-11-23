import { Injectable } from "@angular/core";
import { CommonLookupServiceProxy, CreateUserDelegationDto, UserDelegationServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { deleteDelegations, getDelegations, getDelegationsFailure, getDelegationsSuccess, getUsername, getUsernameFailure, getUsernameSuccess, saveDelegations } from "./authority-delegations.action";
import { Store } from "@ngrx/store";
import { AlertService } from "@libs/shared";
@Injectable()
export class DelegationsEffects {
  constructor(private actions$: Actions,
    private commonproxyService: CommonLookupServiceProxy,
    private store: Store,
    private userDelegationServiceProxy: UserDelegationServiceProxy,
    private alertService: AlertService
  ) { }
  getDelegations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDelegations),
      switchMap(() =>
        from(this.userDelegationServiceProxy.getDelegatedUsers(100, 0,  "id desc",)).pipe(
          map((Delegation) => {
            return getDelegationsSuccess({ Delegation })
          }),
          catchError((error) => of(getDelegationsFailure({ error })))
        )
      )
    )
  );
  saveDelegations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveDelegations),
      mergeMap((data) =>
        this.userDelegationServiceProxy.delegateNewUser(data.Delegation).pipe(map((res: any) => {
          this.store.dispatch(getDelegations());
          this.alertService.showAlert('Success', 'Delegation added successfully', 'success')

        }),
          catchError((error: any) => of(
            console.log(error)
          ))
        )
      )
    ),
    {
      dispatch: false
    }
  );
  deleteDelegations$ = createEffect(() => this.actions$.pipe(
    ofType(deleteDelegations),
    mergeMap((action) =>
      this.userDelegationServiceProxy.removeDelegation(action.id).pipe(map(() => {
        this.store.dispatch(getDelegations());
        this.alertService.showAlert('Success', 'Delegation removed successfully', 'success')

      }
      ),
        catchError((error) => of())
      )
    )
  ),
    { dispatch: false }
  );

  getUsernames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsername),
      switchMap((data) =>
        from(this.commonproxyService.findUsers(data.usernameFilter)).pipe(
          map((usernames) => {
            return getUsernameSuccess({ usernames })
          }),
          catchError((error) => of(getUsernameFailure({ error })))
        )
      )
    )
  );
}