import { Injectable } from "@angular/core";
import { DynamicEntityPropertyServiceProxy, DynamicEntityPropertyDefinitionServiceProxy, AlertService } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { getInputTypeNames, getInputTypeNamesFailure, getInputTypeNamesSuccess } from "../dynamic-property-management/dynamic-property.actions";
import { deleteDynamicEntity, editDynamicEntity, editDynamicEntityFailure, editDynamicEntitySuccess, getAllEntities, getAllEntitiesFailure, getAllEntitiesSuccess, getDynamicEntity, getDynamicEntityFailure, getDynamicEntitySuccess, saveDynamicEntity } from "./dynamic-entity.actions";
declare var bootstrap:any;

@Injectable()
export class DynamicEntityEffects {
  constructor(
    private actions$: Actions,
    private dynamicEntityService: DynamicEntityPropertyServiceProxy,
    private dynamicEntityPropertyservice: DynamicEntityPropertyDefinitionServiceProxy,
    private store: Store,
    private alertService: AlertService,
  ) {}

  getDynamicEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDynamicEntity),
      switchMap(() => {
        // Call the getTodos method, convert it to an observable
        return this.dynamicEntityService.getAll().pipe(
          // Take the returned value and return a new success action containing the todos
          map((DynamicEntity) => {
            return getDynamicEntitySuccess({ dynamicEntity: DynamicEntity });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getDynamicEntityFailure({ error })))
        );
      })
    )
  );

  // get All entity
  getAllEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllEntities),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.dynamicEntityPropertyservice.getAllEntities()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((Entities) => {
            return getAllEntitiesSuccess({ Entities: Entities });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getAllEntitiesFailure({ error })))
        )
      )
    )
  );


  saveDynamicEntity$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(saveDynamicEntity),

        mergeMap((data) =>
          this.dynamicEntityService.add(data.DynamicEntity).pipe(
            map((res: any) => {
              this.store.dispatch(getDynamicEntity());
              this.alertService.showAlert('Success', 'Dynamic entity added successfully', 'success');
              var myModalE2 = document.getElementById('AddEntity');
              var modal2 = bootstrap.Offcanvas.getInstance(myModalE2)
              modal2.hide();
            }),

            catchError((error: any) => of(console.log(error)))
          )
        )
      ),

    {
      dispatch: false,
    }
  );

  deleteDynamicEntity$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteDynamicEntity),
        mergeMap(({ id }) =>
          this.dynamicEntityService.delete(id).pipe(
            map(() => {
              this.store.dispatch(getDynamicEntity());
              this.alertService.showAlert('Success', 'Dynamic entity deleted successfully', 'success')
              // return deleteEditionSuccess(id);
            }),
            catchError((error) => of())
          )
        )
      ),
    { dispatch: false }
  );

  editDynamicEntity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editDynamicEntity),
      switchMap(({ dataEntity }) => {
        // Call the getTodos method, convert it to an observable
        return this.dynamicEntityService.update(dataEntity.dataEntity).pipe(
          // Take the returned value and return a new success action containing the todos
          map((DynamicEntity: any) => {
            return editDynamicEntitySuccess({
              editDynamicEntity: DynamicEntity,
            });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(editDynamicEntityFailure({ error })))
        );
      })
    )
  );

  getInputTypeName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getInputTypeNames),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(
          this.dynamicEntityPropertyservice.getAllAllowedInputTypeNames()
        ).pipe(
          // Take the returned value and return a new success action containing the todos
          map((InputTypeNames) => {
            return getInputTypeNamesSuccess({ InputTypeNames: InputTypeNames });
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getInputTypeNamesFailure({ error })))
        )
      )
    )
  );
}