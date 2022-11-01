import { Injectable } from '@angular/core';
import { AlertService, ServiceProxy } from '@libs/shared';
//import { deleteLanguage } from "@libs/state-management";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { from, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  deleteLanguage,
  getCountryList,
  getCountryListSuccess,
  getLanguageFailure,
  getLanguages,
  getLanguageSuccess,
  saveLanguage,
  saveLanguageSuccess,
  setDefaultLanguage,
  setDefaultLanguageForUI,
} from './language.actions';

@Injectable()
export class LanguageEffects {
  constructor(
    private actions$: Actions,
    private languageService: ServiceProxy,
    private store: Store,
    private alertService: AlertService
  ) {}
  // getProducts$ = createEffect(() =>
  //   this.actions$.pipe(
  //       ofType(ProductActions.getProducts),
  //       mergeMap(() => {
  //           return this.productService.getProducts().pipe(
  //               map(products => ProductActions.getProductsSuccess({ products }))
  //           );
  //       }),
  //   )
  // );

  getLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLanguages),
      switchMap(() => {

        // Call the getTodos method, convert it to an observable
        return (this.languageService.all()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((languages) => {
            return getLanguageSuccess({ languages })
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
      switchMap(() =>

        // Call the getTodos method, convert it to an observable
        from (this.languageService.cultureList()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((countries) => {
            return getCountryListSuccess({ countries })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getLanguageFailure({ error })))
        )
      )
    )
  );

//   getLanguages$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(getLanguages),
//         switchMap(() =>
//           this.languageService.all().pipe(
//             map((languages) => {
//               return getLanguageSuccess({languages})
//               //this.store.dispatch(getLanguages());
//               //this.alertService.showAlert('Success', 'Language added successfully', 'success')
//             }),
//             catchError((error: any) => of(getLanguageFailure(error
//               )))
//           )
//         )
//       ),
//     // {
//     //   dispatch: false,
//     // }
//   );

  deleteLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteLanguage),
      switchMap(({ id }) =>
        this.languageService.languagesDELETE(undefined).pipe(map(() => {

          return deleteLanguage({id})
          // this.store.dispatch(getLanguages());
          // this.alertService.showAlert('Success', 'Language deleted successfully', 'success')

        }
        ),
          catchError((error) => of())
        )
      )
    ),
    { 
      dispatch: false 
    }
  );

  // setDefaultLanguage$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(setDefaultLanguage),
  //     switchMap(({ name }) =>
  //       this.languageService.setDefaultLanguage(name).pipe(map(() => {
  //         this.store.dispatch(getLanguages());
  //         this.alertService.showAlert('Success', 'Default language set successfully', 'success')

  //       }
  //       ),
  //         catchError((error) => of())
  //       )
  //     )
  //   ),
  //   { dispatch: false }
  // );

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
