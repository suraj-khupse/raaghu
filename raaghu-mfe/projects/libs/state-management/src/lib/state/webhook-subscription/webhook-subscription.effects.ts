import { Injectable } from "@angular/core";
import { AlertService } from "@libs/shared";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { LanguageServiceProxy, WebhookSubscriptionServiceProxy } from "projects/libs/shared/src/lib/service-proxies";
import { from, of } from "rxjs";
import { catchError, map, merge, mergeMap, switchMap } from "rxjs/operators";
import { getWebhookSubscription, getWebhookSubscriptionFailure, getWebhookSubscriptionSuccess, saveWebhookSubscription } from "./webhook-subscription.action";
declare var bootstrap: any;

@Injectable()
export class WebhookSubscriptionEffects {
  constructor(private actions$: Actions, private webhookSubscriptionService: WebhookSubscriptionServiceProxy, private alertService: AlertService, private store: Store) { }
  loadWebhookSubscriptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWebhookSubscription),
      switchMap(() => {
        return this.webhookSubscriptionService.getAllSubscriptions().pipe(
          // Take the returned value and return a new success action containing the todos
          map((webhookSubscriptions) => {
            return getWebhookSubscriptionSuccess({ webhookSubscriptions: webhookSubscriptions })
          }),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(getWebhookSubscriptionFailure({ error })))
        )
      }
        // Call the getTodos method, convert it to an observable

      )
    )
  );
  saveWebhookSubscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveWebhookSubscription),
      mergeMap((data) =>
        this.webhookSubscriptionService.addSubscription(data.webhookInfo).pipe(map((res: any) => {
          this.store.dispatch(getWebhookSubscription());
          this.alertService.showAlert('Success', 'Webhook added successfully', 'success');
          var offcanvasEl = document.getElementById('addwebhook');
          if (offcanvasEl) {
            var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
            if (offcanvas) {
              offcanvas.hide();
            }
          }
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