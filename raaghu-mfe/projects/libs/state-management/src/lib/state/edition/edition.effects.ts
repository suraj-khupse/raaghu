import { Injectable } from "@angular/core";
import { AlertService, CommonLookupServiceProxy, EditionServiceProxy } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { deleteEdition, deleteEditionFailure, getEditionFailure, getEditionInfo, getEditionInfoFailure, getEditionInfoSuccess, getEditionPageComboboxItems, getEditionPageComboboxItemsFailure, getEditionPageComboboxItemsSuccess, getEditions, getEditionSuccess, getTenantCount, getTenantCountFailure, getTenantCountSuccess, moveTenant, saveEdition, updateEdition } from "./edition.action";

@Injectable()
export class EditionEffects {
  constructor(private actions$: Actions, private editionService: EditionServiceProxy, private store: Store, private alertService: AlertService,
    private commonService: CommonLookupServiceProxy) { }
  getEditions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEditions),
      switchMap(() => {
        return (this.editionService.getEditions()).pipe(
          map((editions: any) => {
            return getEditionSuccess({ editions: editions })
          }),
          catchError((error) => of(getEditionFailure({ error })))
        )
      }
      )
    )
  );

  getEditionFeatures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEditionInfo),
      switchMap(({ id }) => {
        return (this.editionService.getEditionForEdit(id)).pipe(
          map((feature: any) => {
            return getEditionInfoSuccess({ editionInfo: feature })
          }),
          catchError((error) => of(getEditionInfoFailure({ error })))
        )
      }
      )
    )
  );

  deleteEdition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteEdition),
      mergeMap(({ id }) =>
        this.editionService.deleteEdition(id).pipe(map(() => {
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

  saveEdition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveEdition),
      mergeMap((data) =>
        this.editionService.createEdition(data.edition).pipe(map((res: any) => {
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

  updateEdition$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateEdition),
      mergeMap((data) =>
        this.editionService.updateEdition(data.edition).pipe(map((res: any) => {
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
    // this.actions$.pipe(
    //   ofType(updateEdition),
    //   switchMap((data) => {
    //     return (this.editionService.updateEdition(data.edition)).pipe(
    //       map((res: any) => {
    //         return getEditionUpdateSuccess({edition:data.edition.edition })
    //       }),
    //       catchError((error) => of(getEditionFailure({ error })))
    //     )
    //   }
    //   )
    // )
  );

  getEditionPageComboboxItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getEditionPageComboboxItems),
      switchMap(() => {
        return (this.editionService.getEditionComboboxItems(undefined, undefined, undefined)).pipe(
          map((editions: any) => {
            return getEditionPageComboboxItemsSuccess({ editionComboboxItem: editions })
          }),
          catchError((error) => of(getEditionPageComboboxItemsFailure({ error })))
        )
      }
      )
    )
  );

  //getDefaultEditionName$ = createEffect(() =>
  //  this.actions$.pipe(
  //    ofType(getDefaultEditionName),
  //    switchMap(() => {
  //      return (this.commonService.getDefaultEditionName()).pipe(
  //        map((editions: any) => {
  //          return getDefaultEditionNameSuccess({ defaultEditionNameItem: editions })
  //        }),
  //        catchError((error) => of(getDefaultEditionNameFailure({ error })))
  //      )
  //    }
  //    )
  //  )
  //);
  getTenantCount = createEffect(() =>
    this.actions$.pipe(
      ofType(getTenantCount),
      switchMap(({editionId } ) => {
        return (this.editionService.getTenantCount(editionId)).pipe(
          map((count: any) => {
            return getTenantCountSuccess({ tenantCount: count })
          }),
          catchError((error) => of(getTenantCountFailure({ error })))
        )
      }
      )
    )
  );

  moveTenant = createEffect(() =>
    this.actions$.pipe(
      ofType(moveTenant),
      mergeMap((data) =>
        this.editionService.moveTenantsToAnotherEdition(data.data).pipe(map((res: any) => {
          this.store.dispatch(getEditions());
          this.alertService.showAlert('Success', 'Tenant moved successfully', 'success')
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






