import { Injectable } from "@angular/core";
import { ServiceProxy, AlertService } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { getManageLinkedAccountsFailure, getManageLinkedAccounts, getManageLinkedAccountsSuccess, unLinkaccount, unLinkAccountSuccess, linkAccount, generateLinkToken, generateLinkTokenSuccess } from "./manage-linked-accounts.actions";


@Injectable()
export class ManageLinkedAccountsEffects {
    constructor(private store: Store,private actions$: Actions,private alertService: AlertService, private UserLinkService: ServiceProxy) { }
    getManageLinkedAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getManageLinkedAccounts),
      switchMap(() =>{
        // Call the getTodos method, convert it to an observable
        return this.UserLinkService.linkUser().pipe(
          // Take the returned value and return a new success action containing the todos
          map((linkedAccounts) => {
              return getManageLinkedAccountsSuccess({ linkedAccounts })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getManageLinkedAccountsFailure({ error })))
        )
      }
        
      )
    )
  );
  uninkaccounts$ = createEffect ( () =>{
    return this.actions$.pipe(
      ofType(unLinkaccount),
      switchMap(({user}) =>{
        return this.UserLinkService.unlink(user).pipe(
          map(()=>{
            this.alertService.showAlert('Success', 'user unlinked successfully','success' )
            return unLinkAccountSuccess();
          }),
        );
        }
      )
    )
  })

  generateLinkToken$ = createEffect ( () =>{
    return this.actions$.pipe(
      ofType(generateLinkToken),
      switchMap(() =>{
        return this.UserLinkService.generateLinkToken().pipe(
          map(()=>{
            this.alertService.showAlert('Success', 'user unlinked successfully','success' )
            return generateLinkTokenSuccess();
          }),
        );
        }
      )
    )
  })


linkaccount$= createEffect(() => this.actions$.pipe(
    ofType(linkAccount),
    mergeMap((body) =>
        this.UserLinkService.link(body).pipe(map(()=> {
        this.store.dispatch(getManageLinkedAccounts());
        this.alertService.showAlert('Success', 'user linked successfully','success' )

        }
      ),
    catchError((error)=> of())
  )
)
),
    {dispatch: false }
);
}