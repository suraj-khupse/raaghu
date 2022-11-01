// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { DatePipe } from '@angular/common';
// import { UserLoginServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
// import { from, of } from "rxjs";
// import { catchError, map, switchMap } from "rxjs/operators";
// import { getLoginAttemptsFailure, getLoginAttempts, getLoginAttemptsSuccess } from "./login-attempts.actions";
// import { DateTime } from "luxon";




// @Injectable()
// export class LoginAttemptsEffects {
//     constructor(private actions$: Actions, private loginAttemptsService: UserLoginServiceProxy,public datepipe: DatePipe,) { }
//     date=DateTime.now();
     
//     getLoginAttempts$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getLoginAttempts),
//       switchMap((data) =>
//         // Call the getTodos method, convert it to an observable
//         from(this.loginAttemptsService.getUserLoginAttempts(undefined,data.loginAttempts.StartDate,data.loginAttempts.EndDate,
//           data.loginAttempts.Result,data.loginAttempts.Sorting,data.loginAttempts.MaxResultCount,data.loginAttempts.SkipCount )).pipe(
//           // Take the returned value and return a new success action containing the todos
//           map((loginAttempts) => {
//               return getLoginAttemptsSuccess({ loginAttempts: loginAttempts })
//             }),
//           // Or... if it errors return a new failure action containing the error
//           catchError((error) => of(getLoginAttemptsFailure({ error })))
//         )
//       )
//     )
//   );
// }