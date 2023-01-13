import { Injectable } from "@angular/core";
import { AlertService, ServiceProxy } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { deleteEdition, deleteEditionFailure, getEditionFailure, getEditionFeature, getEditionFeatureFailure, getEditionFeatureSuccess, getEditionInfo, getEditionInfoFailure, getEditionInfoSuccess, getEditions, getEditionSuccess, getPlanLookupFailure, getplanLookupInfo, getPlanLookupSuccess, saveEdition, updateEdition, updateEditionFeatureValues } from "./edition.action";

@Injectable()
export class EditionEffects {
  constructor(private actions$: Actions, private store: Store, private alertService: AlertService,
    private commonService: ServiceProxy) { }
  getEditions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEditions),
      switchMap(() => {
        return (this.commonService.editionsGET2(undefined,undefined,0,1000)).pipe(
          map((editions: any) => {
            return getEditionSuccess({ editions: editions })
          }),
          catchError((error) => of(getEditionFailure({ error })))
        )
      }
      )
    )
  );
  getplanLookupInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getplanLookupInfo),
      switchMap(() => {
        return (this.commonService.planLookup()).pipe(
          map((planLookup: any) => {
            return getPlanLookupSuccess({ planLookup })
          }),
          catchError((error) => of(getPlanLookupFailure({ error })))
        )
      }
      )
    )
  );

  getEditionInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEditionInfo),
      switchMap(({id}) => {
        return (this.commonService.editionsGET(id)).pipe(
          map((editionInfo) => {
            return getEditionInfoSuccess({ editionInfo })
          }),
          catchError((error) => of(getEditionInfoFailure({ error })))
        )
      }
      )
    )
  );

  getEditionFeatures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEditionFeature),
      switchMap(({id}) => {
        return (this.commonService.featuresGET("E",id)).pipe(
          map((feature) => {
            return getEditionFeatureSuccess({ feature })
          }),
          catchError((error) => of(getEditionInfoFailure({ error })))
        )}
      )
    )
  );

  saveEdition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveEdition),
      mergeMap((data) =>
        this.commonService.editionsPOST(data.edition).pipe(map((res: any) => {
          this.store.dispatch(getEditions());
          this.alertService.showAlert('Success', 'Edition added successfully', 'success');

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


  deleteEdition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEdition),
      mergeMap(({ id }) =>
        this.commonService.editionsDELETE(id).pipe(map(() => {
          this.store.dispatch(getEditions());
          this.alertService.showAlert('Success', 'Edition deleted successfully', 'success')
          // return deleteEditionSuccess(id);
        }
        ),
          catchError((error) => of(deleteEditionFailure({ error })))
        )
      )
    ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
  );

  

  updateEdition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEdition),
      mergeMap(({data}) =>
        this.commonService.editionsPUT(data.id, data.body).pipe(map((res: any) => {
          this.store.dispatch(getEditions());
          this.alertService.showAlert('Success', 'Edition updated successfully', 'success')

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

//   updateEditionFeatureValues$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(updateEditionFeatureValues),
//     mergeMap(({data}) =>
//       this.commonService.featuresPUT("E",data.id ,data.feature ).pipe(map((res: any) => {
//         this.alertService.showAlert('Success', 'Edition features updated successfully', 'success');

//         this.store.dispatch(getEditions());
//       }),
//         catchError((error: any) => of(
//         ))
//       )
//     )
//   ),
//   {
//     dispatch: false
//   }
// );



updateEditionFeatureValues$ = createEffect(() =>
this.actions$.pipe(
  ofType(updateEditionFeatureValues),
  switchMap(({data}) => {
    return (this.commonService.featuresPUT("E",data.id, data.body)).pipe(
      map((feature) => {
        return getEditionFeatureSuccess({ feature })
      }),
      catchError((error) => of(getEditionInfoFailure({ error })))
    )}
  )
)
);
 
}






