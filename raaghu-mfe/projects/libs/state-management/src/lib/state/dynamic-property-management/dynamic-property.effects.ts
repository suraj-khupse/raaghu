// import { Injectable } from '@angular/core';
// import { AlertService } from '@libs/shared';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Store } from '@ngrx/store';
// import {
//   DynamicEntityPropertyDefinitionServiceProxy,
//   DynamicEntityPropertyServiceProxy,
//   DynamicPropertyServiceProxy,
//   PermissionServiceProxy,
// } from 'projects/libs/shared/src/lib/service-proxies';
// import { from, of } from 'rxjs';
// import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
// import {
//   getDynamicPropertyFailure,
//   getDynamicProperty,
//   getDynamicPropertySuccess,
//   getDynamicEntity,
//   getDynamicEntitySuccess,
//   getDynamicEntityFailure,
//   deleteDynamicProperty,
//   deleteDynamicEntity,
//   saveDynamicProperty,
//   saveDynamicEntity,
//   editDynamicEntity,
//   editDynamicEntitySuccess,
//   getPermission,
//   getPermissionSuccess,
//   getAllEntities,
//   getAllEntitiesSuccess,
//   getAllEntitiesFailure,
//   getAllPropertiesOfAnEntity,
//   getAllPropertiesOfAnEntityFailure,
//   getAllPropertiesOfAnEntitySuccess,
//   getInputTypeNames,
//   getInputTypeNamesSuccess,
//   getInputTypeNamesFailure,
//   getDynamicPropertyByEdit,
//   getDynamicPropertyByEditSuccess,
//   getDynamicPropertyByEditFailure,
//   UpdateDynamicProperty,
//   editDynamicEntityFailure,
// } from './dynamic-property.actions';
// declare var bootstrap:any;
// @Injectable()
// export class DynamicPropertyEffects {
//   constructor(
//     private actions$: Actions,
//     private dynamicPropertyService: DynamicPropertyServiceProxy,
//     private permissionService: PermissionServiceProxy,
//     private alertService: AlertService,
//     private store: Store
//   ) {}
//   getDynamicProperty$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getDynamicProperty),
//       switchMap(() => {
//         // Call the getTodos method, convert it to an observable
//         return this.dynamicPropertyService.getAll().pipe(
//           // Take the returned value and return a new success action containing the todos
//           map((DynamicProperty) => {
//             return getDynamicPropertySuccess({
//               dynamicProperty: DynamicProperty,
//             });
//           }),
//           // Or... if it errors return a new failure action containing the error
//           catchError((error) => of(getDynamicPropertyFailure({ error })))
//         );
//       })
//     )
//   );

//   saveDynamicProperty$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(saveDynamicProperty),

//         switchMap((data) =>
//           this.dynamicPropertyService.add(data.DynamicProperty).pipe(
//             map((res: any) => {
//               this.store.dispatch(getDynamicProperty());
//               this.alertService.showAlert('Success', 'Dynamic property added successfully', 'success');
//               var myModalEl = document.getElementById('AddDynamic');
//               var modal = bootstrap.Offcanvas.getInstance(myModalEl)
//               modal.hide();
//             }),

//             catchError((error: any) => of(console.log(error)))
//           )
//         )
//       ),

//     {
//       dispatch: false,
//     }
//   );

//   UpdateDynamicProperty$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(UpdateDynamicProperty),

//         switchMap((data) =>
//           this.dynamicPropertyService.update(data.data).pipe(
//             map((res: any) => {
//               this.store.dispatch(getDynamicProperty());
//               this.alertService.showAlert('Success', 'Dynamic property updated successfully', 'success')
//             }),

//             catchError((error: any) => of(console.log(error)))
//           )
//         )
//       ),

//     {
//       dispatch: false,
//     }
//   );

//   getPermissions$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getPermission),
//       switchMap(() =>
//         // Call the getTodos method, convert it to an observable
//         from(this.permissionService.getAllPermissions()).pipe(
//           // Take the returned value and return a new success action containing the todos
//           map((DynanmicPermission) => {
//             return getPermissionSuccess({
//               DynanmicPermission: DynanmicPermission,
//             });
//           }),
//           // Or... if it errors return a new failure action containing the error
//           catchError((error) => of(getDynamicPropertyFailure({ error })))
//         )
//       )
//     )
//   );
//   // getDynamicPropertyByEdit$ = createEffect(() =>
//   //   this.actions$.pipe(
//   //     ofType(getDynamicPropertyByEdit),
//   //     switchMap(({ id }) =>
//   //       // Call the getTodos method, convert it to an observable
//   //       from(this.dynamicPropertyService.get(id)).pipe(
//   //         // Take the returned value and return a new success action containing the todos
//   //         map((RoleEditI) => {
//   //           return getDynamicPropertyByEditSuccess({
//   //             EditDynamicPropertSateI: RoleEditI,
//   //           });
//   //         }),
//   //         // Or... if it errors return a new failure action containing the error
//   //         catchError((error) => of(getDynamicPropertyByEditFailure({ error })))
//   //       )
//   //     )
//   //   )
//   // );
//   getDynamicPropertyByEdit$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(getDynamicPropertyByEdit),
//     switchMap(({ id }) => {
//       return (this.dynamicPropertyService.get(id)).pipe(
//         map((RoleEditI: any) => {
//           return getDynamicPropertyByEditSuccess({ EditDynamicPropertSateI: RoleEditI })
//         }),
//         catchError((error) => of(getDynamicPropertyByEditFailure({ error })))
//       )
//     }
//     )
//   )
// );
//   deleteDynamicProperty$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(deleteDynamicProperty),
//         switchMap(({ id }) =>
//           this.dynamicPropertyService.delete(id).pipe(
//             map(() => {
//               this.store.dispatch(getDynamicProperty());
//               this.alertService.showAlert('Success', 'Dynamic property deleted successfully', 'success')
//               // return deleteEditionSuccess(id);
//             }),
//             catchError((error) => of())
//           )
//         )
//       ),
//     // Most effects dispatch another action, but this one is just a "fire and forget" effect
//     { dispatch: false }
//   );
// }

// @Injectable()
// export class DynamicEntityEffects {
//   constructor(
//     private actions$: Actions,
//     private dynamicEntityService: DynamicEntityPropertyServiceProxy,
//     private dynamicEntityPropertyservice: DynamicEntityPropertyDefinitionServiceProxy,
//     private store: Store,
//     private alertService: AlertService,
//   ) {}

//   getDynamicEntity$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getDynamicEntity),
//       switchMap(() => {
//         // Call the getTodos method, convert it to an observable
//         return this.dynamicEntityService.getAll().pipe(
//           // Take the returned value and return a new success action containing the todos
//           map((DynamicEntity) => {
//             return getDynamicEntitySuccess({ dynamicEntity: DynamicEntity });
//           }),
//           // Or... if it errors return a new failure action containing the error
//           catchError((error) => of(getDynamicEntityFailure({ error })))
//         );
//       })
//     )
//   );

//   // get All entity
//   getAllEntity$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getAllEntities),
//       switchMap(() =>
//         // Call the getTodos method, convert it to an observable
//         from(this.dynamicEntityPropertyservice.getAllEntities()).pipe(
//           // Take the returned value and return a new success action containing the todos
//           map((Entities) => {
//             return getAllEntitiesSuccess({ Entities: Entities });
//           }),
//           // Or... if it errors return a new failure action containing the error
//           catchError((error) => of(getAllEntitiesFailure({ error })))
//         )
//       )
//     )
//   );

//   getAllPropertiesEntity$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getAllPropertiesOfAnEntity),
//       switchMap(({ entityFullName }) =>
//         // Call the getTodos method, convert it to an observable
//         from(
//           this.dynamicEntityService.getAllPropertiesOfAnEntity(entityFullName)
//         ).pipe(
//           // Take the returned value and return a new success action containing the todos
//           map((PropertiesEntitie) => {
//             return getAllPropertiesOfAnEntitySuccess({
//               PropertiesEntitie: PropertiesEntitie,
//             });
//           }),
//           // Or... if it errors return a new failure action containing the error
//           catchError((error) =>
//             of(getAllPropertiesOfAnEntityFailure({ error }))
//           )
//         )
//       )
//     )
//   );

//   saveDynamicEntity$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(saveDynamicEntity),

//         mergeMap((data) =>
//           this.dynamicEntityService.add(data.DynamicEntity).pipe(
//             map((res: any) => {
//               this.store.dispatch(getDynamicEntity());
//               this.alertService.showAlert('Success', 'Dynamic entity added successfully', 'success');
//               var myModalE2 = document.getElementById('AddEntity');
//               var modal2 = bootstrap.Offcanvas.getInstance(myModalE2)
//               modal2.hide();
//             }),

//             catchError((error: any) => of(console.log(error)))
//           )
//         )
//       ),

//     {
//       dispatch: false,
//     }
//   );

//   deleteDynamicEntity$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(deleteDynamicEntity),
//         mergeMap(({ id }) =>
//           this.dynamicEntityService.delete(id).pipe(
//             map(() => {
//               this.store.dispatch(getDynamicEntity());
//               this.alertService.showAlert('Success', 'Dynamic entity deleted successfully', 'success')
//               // return deleteEditionSuccess(id);
//             }),
//             catchError((error) => of())
//           )
//         )
//       ),
//     { dispatch: false }
//   );

//   editDynamicEntity$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(editDynamicEntity),
//       switchMap(({ dataEntity }) => {
//         // Call the getTodos method, convert it to an observable
//         return this.dynamicEntityService.update(dataEntity.dataEntity).pipe(
//           // Take the returned value and return a new success action containing the todos
//           map((DynamicEntity: any) => {
//             return editDynamicEntitySuccess({
//               editDynamicEntity: DynamicEntity,
//             });
//           }),
//           // Or... if it errors return a new failure action containing the error
//           catchError((error) => of(editDynamicEntityFailure({ error })))
//         );
//       })
//     )
//   );

//   getInputTypeName$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getInputTypeNames),
//       switchMap(() =>
//         // Call the getTodos method, convert it to an observable
//         from(
//           this.dynamicEntityPropertyservice.getAllAllowedInputTypeNames()
//         ).pipe(
//           // Take the returned value and return a new success action containing the todos
//           map((InputTypeNames) => {
//             return getInputTypeNamesSuccess({ InputTypeNames: InputTypeNames });
//           }),
//           // Or... if it errors return a new failure action containing the error
//           catchError((error) => of(getInputTypeNamesFailure({ error })))
//         )
//       )
//     )
//   );
// }
