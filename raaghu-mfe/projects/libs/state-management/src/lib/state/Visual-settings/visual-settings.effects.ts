import { Injectable } from "@angular/core";
import { AlertService } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { UiCustomizationSettingsServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { getVisualsettings, getVisualsettingsFailure, getVisualsettingsSuccess, UpdateUiManagementSettings } from "./visual-settings.actions";


@Injectable()
export class visualsettingEffects {
    constructor(private actions$: Actions, private Visualsettingservice: UiCustomizationSettingsServiceProxy,private alertService:AlertService,private store:Store) { }
    getVisualSetting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVisualsettings),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.Visualsettingservice.getUiManagementSettings()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((visualsetting) => {
              return getVisualsettingsSuccess({visualsettings: visualsetting})
            }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getVisualsettingsFailure({ error })))
        )
      )
    )
  );
  updateUiManagementSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateUiManagementSettings),
      mergeMap((data) =>
        this.Visualsettingservice.updateUiManagementSettings(data.visualsettings).pipe(map((res: any) => {
          this.store.dispatch(getVisualsettings());
          this.alertService.showAlert('Success', 'Visual settings updated successfully','success' )
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