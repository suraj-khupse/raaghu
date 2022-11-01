import { Injectable } from "@angular/core";
import { AlertService} from "@libs/shared";
//import { selectAllEditions } from "@libs/state-management";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { PrepareCollectedData } from "./download-data.action";

@Injectable()
export class DownloadEffects {
  constructor(private actions$: Actions, private store: Store, private alertService: AlertService) { }
  
  //   PrepareCollectedData$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(PrepareCollectedData),
  //     mergeMap(() =>
  //       this.downloadservice.prepareCollectedData().pipe(map((res: any) => {
  //        }),
  //         catchError((error: any) => of(
  //         ))
  //       )
  //     )
  //   ),
  //   {
  //     dispatch: false
  //   }
  // );

}


