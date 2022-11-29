import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ProfileServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";

import { getProfileFailure, getProfilepic, getProfileSuccess, updateProfile, updateProfileFailure, updateProfileSuccess } from "./profile-settings.actions";

@Injectable()
export class ProfilePicEffects {
  constructor(
    private actions$: Actions, 
    private profilePic : ProfileServiceProxy,
    private store: Store, 
    // declare the service here
  ) {}

getProfile1$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfilepic),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.profilePic.getProfilePicture()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((profile) => {
            return getProfileSuccess({
              profile
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getProfileFailure({ error })))
        )
      )
    )
  );

  // UpdateProfile$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(updateProfile),
  //     mergeMap((data) =>
  //       this.profilePic.updateProfilePicture(data.data).pipe(
  //         map((res: any) => {
  //           return updateProfileSuccess({
  //             data
  //           });
  //         }),
  //         // Or... if it errors return a new failure action containing the error
  //         catchError((error) => of(updateProfileFailure({ error })))
  //       )
  //     )
  //   )
  // );


  updateProfile$ = createEffect(() =>
  this.actions$.pipe(
    ofType(updateProfile),
    mergeMap((data) =>
      this.profilePic.updateProfilePicture(data.data).pipe(map((res: any) => {
        this.store.dispatch(getProfilepic());
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

