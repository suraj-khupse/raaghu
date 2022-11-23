import { Injectable } from "@angular/core";
import { AlertService } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { CachingServiceProxy,WebLogServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { getmaintenances, getmaintenanceSuccess, getmaintenanceFailure,
  getWebsitelog,getWebsitelogSuccess,getWebsitelogFailure,deletecache, deletecacheSuccess, deletecacheFailure, clearcache, clearSuccess
 } from "./maintenance.actions";


@Injectable()
export class MaintenanceEffects {
    constructor(private actions$: Actions, private Cacheservice: CachingServiceProxy,private WebLogService:WebLogServiceProxy,private store:Store,private alertService: AlertService,) { }
    getMaintenance$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getmaintenances),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.Cacheservice.getAllCaches()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((Maintenances) => {
              return getmaintenanceSuccess({ maintenances: Maintenances })
            }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getmaintenanceFailure({ error })))
        )
      )
    )
  );
  deleteCache$ = createEffect(() =>
  this.actions$.pipe(
    ofType(deletecache),
    switchMap(({ id }) =>
      this.Cacheservice.clearCache(id).pipe(map(() => {
        this.store.dispatch(getmaintenances());
        this.alertService.showAlert('Success', 'Cache deleted successfully', 'success')
      }
      ),
        catchError((error) => of())
      )
    )
  ),
  { dispatch: false }
);

// deleteCache$ = createEffect ( () =>{
//   return this.actions$.pipe(
//     ofType(deletecache),
//     switchMap((action) =>{
//       return this.Cacheservice.clearCache(action.id).pipe(
//         map((data)=>{
//           return deletecacheSuccess({cache: action.id});
//         }),
//       );
//       }
//     )
//   )
// })


clearCache$ = createEffect ( () =>{
  return this.actions$.pipe(
    ofType(clearcache),
    switchMap((action) =>{
      return this.Cacheservice.clearAllCaches().pipe(
        map((data)=>{
          this.alertService.showAlert('Success', 'All Cache deleted successfully', 'success')
          return clearSuccess();
        }),
      );
      }
    )
  )
})

  getWebsitelog$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getWebsitelog),
    switchMap(() =>
      // Call the getTodos method, convert it to an observable
      from(this.WebLogService.getLatestWebLogs()).pipe(
        // Take the returned value and return a new success action containing the todos
        map((Websitelog) => {
            return getWebsitelogSuccess({ Websitelogs:Websitelog  });
           
          }),
        // Or... if it errors return a new failure action containing the error
        catchError((error) => of(getWebsitelogFailure({ error })))
      )
    )
  )
);
}