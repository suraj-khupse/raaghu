// import { Injectable } from '@angular/core';
// import { AlertService } from '@libs/shared';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Store } from '@ngrx/store';
// import { EntityDtoOfGuid, NotificationServiceProxy, UserLinkServiceProxy } from 'projects/libs/shared/src/lib/service-proxies';
// import { from, of } from 'rxjs';
// import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
// import { deleteAccount, getMLATenancyData, getMLATenancyDataFailure, getMLATenancyDataSuccess, getNotificationSettings, getNotificationSettingsFailure, getNotificationSettingsSuccess, getUserNotification, getUserNotificationFailure, getUserNotificationSuccess, linkToUser, SetAllNotificationsAsRead, SetNotificationRead, updateNotificationSettings } from './mla.actions';
// declare var bootstrap: any;

// @Injectable()
// export class MLAEffects {
//   constructor(
//     private actions$: Actions,
//     private UserLinkService: UserLinkServiceProxy,
//     private notificationService: NotificationServiceProxy,
//     private store: Store,
//     private alertService: AlertService
//   ) { }

//   getMLATenancyData$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getMLATenancyData),
//       switchMap(() => {
//         return (this.UserLinkService.getRecentlyUsedLinkedUsers()).pipe(
//           map((tenancyData) => {
//             return getMLATenancyDataSuccess({
//               tenancyData
//             });
//           }),
//           catchError((error) => of(getMLATenancyDataFailure({ error })))
//         )
//       }
//       )
//     )
//   );

//   deleteAccount$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(deleteAccount),
//       mergeMap((data) =>
//         this.UserLinkService.unlinkUser(data.user).pipe(map((res: any) => {
//           this.store.dispatch(getMLATenancyData())
//         }),
//           catchError((error: any) => of(
//           ))
//         )

//       )
//     ),
//     {
//       dispatch: false
//     }
//   );

//   linkToUser$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(linkToUser),
//       mergeMap((data) =>
//         this.UserLinkService.linkToUser(data.user).pipe(map((res: any) => {
//           this.store.dispatch(getMLATenancyData())
//         }),
//           catchError((error: any) => of(
//           ))
//         )
//       )
//     ),
//     {
//       dispatch: false
//     }
//   );

//   getUserNotification$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getUserNotification),
//       switchMap(() => {
//         return (this.notificationService.getUserNotifications(undefined, undefined, undefined, undefined, undefined)).pipe(
//           map((getNotificaitonsOutput) => {
//             return getUserNotificationSuccess({ getNotificaitonsOutput });
//           }),
//           catchError((error) => of(getUserNotificationFailure({ error })))
//         )
//       }
//       )
//     )
//   );

//   SetAllNotificationsAsRead$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(SetAllNotificationsAsRead),
//       mergeMap((data) =>
//         from(this.notificationService.setAllNotificationsAsRead()).pipe(
//           map((res) => {
//             this.alertService.showAlert('Success', 'All notifications marked as read successfully', 'success');
//             this.store.dispatch(getUserNotification());
//           }),
//           catchError((error: any) => of(
//           ))
//         )
//       )
//     ),
//     {
//       dispatch: false
//     }
//   );

//   SetNotificationRead$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(SetNotificationRead),
//       mergeMap((data) =>
//         this.notificationService.setNotificationAsRead(data).pipe(map((res) => {
//           this.alertService.showAlert('Success', 'Notification marked as read successfully', 'success');
//           this.store.dispatch(getUserNotification());
//         }),
//           catchError((error: any) => of(
//           ))
//         )
//       )
//     ),
//     {
//       dispatch: false
//     }
//   );

//   getNotificationSettings$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(getNotificationSettings),
//       switchMap(() => {
//         // Call the getTodos method, convert it to an observable
//         return (this.notificationService.getNotificationSettings()).pipe(
//           // Take the returned value and return a new success action containing the todos
//           map((notificationSettings) => {
//             return getNotificationSettingsSuccess({ notificationSettings: notificationSettings })
//           }),
//           // Or... if it errors return a new failure action containing the error
//           catchError((error) => of(getNotificationSettingsFailure({ error })))
//         )
//       }

//       )
//     )
//   );

//   updateNotificationSettings$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(updateNotificationSettings),
//       mergeMap((data) =>
//         this.notificationService.updateNotificationSettings(data.data).pipe(map((res) => {
//           this.alertService.showAlert('Success', 'Notification settings updated successfully', 'success');
//           this.store.dispatch(getNotificationSettings());
//           var myModalEl = document.getElementById('notification-settings');
//           var modal = bootstrap.Modal.getInstance(myModalEl)
//           modal.hide();
//         }),
//           catchError((error: any) => of(
//           ))
//         )
//       )
//     ),
//     {
//       dispatch: false
//     }
//   );

// }