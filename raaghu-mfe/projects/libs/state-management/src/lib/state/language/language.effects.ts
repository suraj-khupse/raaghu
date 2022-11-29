import { Injectable } from "@angular/core";
import { AlertService } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { LanguageServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { deleteLanguage, getCountryList, getCountryListSuccess, getLanguageFailure, getLanguages, getLanguageSuccess, saveLanguage, saveLanguageSuccess, setDefaultLanguage, setDefaultLanguageForUI } from "./language.actions";

@Injectable()
export class LanguageEffects {
  constructor(private actions$: Actions, private languageService: LanguageServiceProxy, private store: Store, private alertService: AlertService) { }
  getLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLanguages),
      switchMap(() => {

        // Call the getTodos method, convert it to an observable
        return (this.languageService.getLanguages()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((languages) => {
            return getLanguageSuccess({ languages: languages })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getLanguageFailure({ error })))
        )
      }

      )
    )
  );
  getCountryList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCountryList),
      switchMap(() => {

        // Call the getTodos method, convert it to an observable
        return (this.languageService.getLanguageForEdit(undefined)).pipe(
          // Take the returned value and return a new success action containing the todos
          map((countries) => {
            return getCountryListSuccess({ countries: countries })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getLanguageFailure({ error })))
        )
      }

      )
    )
  );


  saveLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveLanguage),
      mergeMap((data) =>
        this.languageService.createOrUpdateLanguage(data.language).pipe(map((res: any) => {
          this.store.dispatch(getLanguages());
          this.alertService.showAlert('Success', 'Language added successfully', 'success')

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

  deleteLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteLanguage),
      switchMap(({ id }) =>
        this.languageService.deleteLanguage(id).pipe(map(() => {
          this.store.dispatch(getLanguages());
          this.alertService.showAlert('Success', 'Language deleted successfully', 'success')

        }
        ),
          catchError((error) => of())
        )
      )
    ),
    { dispatch: false }
  );

  setDefaultLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setDefaultLanguage),
      switchMap(({ name }) =>
        this.languageService.setDefaultLanguage(name).pipe(map(() => {
          this.store.dispatch(getLanguages());
          this.alertService.showAlert('Success', 'Default language set successfully', 'success')

        }
        ),
          catchError((error) => of())
        )
      )
    ),
    { dispatch: false }
  );

  // setDefaultLanguageForUI$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(setDefaultLanguageForUI),
  //     map(({ name }) => {
  //       return setDefaultLanguageForUISuccess(name)
  //     }

  //     )
  //   )
  // );
}