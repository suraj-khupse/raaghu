import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { saveWebhookSubscription } from '@libs/state-management';
import { Store } from '@ngrx/store';
export class webhookadditonal {
  public additionalheaderKey: string;
  public additionalheadervalue: string;
}
export class subscription {
  public WebhookEndpoint: string;
  public WebhookEvents: string;
}

export class Webhooksubscription {
  public subscriptionData: subscription;
  public AdditionHeader: webhookadditonal[];
  
}

@Component({
  selector: 'app-webhooksubscription',
  templateUrl: './webhooksubscription.component.html',
  styleUrls: ['./webhooksubscription.component.scss'],
 
})
export class WebhooksubscriptionComponent implements OnInit {

  public rdswebhookSubscriptionMfeConfig: ComponentLoaderOptions;


  @Output()
  onSubcriptionSave = new EventEmitter<{ webhookSubscriptionData: any }>()
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.rdswebhookSubscriptionMfeConfig = {
      name: 'RdsCompWebhookSubscription',
      input: {

      },
      output: {
        onSubcriptionSave: (webhookSubscriptionData) => {
          if (webhookSubscriptionData) {
            const body: any = { webhookUri: webhookSubscriptionData.subscriptionData.WebhookEndpoint, webhooks: [], headers: {} };
            webhookSubscriptionData.additionalHeaders.forEach((item: any) => {
              body.headers[item.additionalheaderKey] = item.additionalheadervalue;
            })
            body.webhooks.push(webhookSubscriptionData.subscriptionData.WebhookEvents);
            this.store.dispatch(saveWebhookSubscription(body));

          }
        },
      }
    };

  }

}
