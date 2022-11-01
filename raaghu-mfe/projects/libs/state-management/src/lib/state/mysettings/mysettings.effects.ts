// import { Injectable } from "@angular/core";
// import { UserAuthService } from "@libs/shared";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { ProfileServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
// import { from, of } from "rxjs";
// import { catchError, map, switchMap } from "rxjs/operators";
// import { changePassword, getProfile, getProfileFailure, getProfileSuccess } from "./mysettings.action";


// @Injectable()
// export class ProfileEffects {
//   constructor(private actions$: Actions, private profileService: ProfileServiceProxy,private userAuthService:UserAuthService) { }
//   getProfile$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getProfile),
//       switchMap(() =>
//         // Call the getTodos method, convert it to an observable
//         from(this.profileService.getCurrentUserProfileForEdit()).pipe(
//           // Take the returned value and return a new success action containing the todos
//           map((profile) => {
//             return getProfileSuccess({ profile: profile })
//           }),
//           // Or... if it errors return a new failure action containing the error
//           catchError((error) => of(getProfileFailure({ error })))
//         )
//       )
//     )
//   );
//   changePassword$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(changePassword),
//       switchMap((data) =>
//         this.profileService.changePassword(data.passwordInfo).pipe(map((res: any) => {
//           this.userAuthService.unauthenticateUser();
//         }),
//           catchError((error: any) => of(
//           ))
//         )
//       )
//     ),
//     {
//       dispatch: false
//     }
//   );
// }