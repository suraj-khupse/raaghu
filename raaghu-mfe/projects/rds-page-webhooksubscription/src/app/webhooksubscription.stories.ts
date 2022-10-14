import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsBannerModule, RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsFabMenuModule, RdsIconModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsSearchInputModule, RdsSelectListModule, RdsTextareaModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
import { RdsDataTableComponent } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.component';
import { StoreModule } from '@ngrx/store';
import { AppComponent as WebHookSubscriptionComponent } from './app.component';
import { RdsCompWebhookSubscriptionComponent } from '../../../rds-components/src/app/rds-comp-webhook-subscription/rds-comp-webhook-subscription.component';



export default {
  title: 'Pages/Webhook Subscriptions',
  component: WebHookSubscriptionComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        RdsCompWebhookSubscriptionComponent,
        RdsCompAlertComponent,
        RdsDataTableComponent,
       
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RdsIconModule,
        RdsNavTabModule,
        RdsButtonModule,
        RdsPaginationModule,
        RdsModalModule,
        RdsFabMenuModule,
        CommonModule,
        SharedModule,       
        RdsOffcanvasModule,
        NgxTranslateModule.forRoot(),
        StoreModule.forRoot({}),        
        RdsInputModule,
        RdsBannerModule,
        RdsTextareaModule
      ],
      providers: [
        FormBuilder
      ]
    })
  ]
} as Meta;
const Template: Story<WebHookSubscriptionComponent> = (args: WebHookSubscriptionComponent) => ({
  props: {
    ...args
  },
  template:`
 
    <div class="row">
        <div class="col-md-12 text-end pb-3 desktop-btn">
            <rds-button [id]="'yes'" [size]="'small'" [tooltipPlacement]="'top'" [colorVariant]="'primary'"
                [label]="'NEW WEBHOOK SUBSCRIPTION'" [showLoadingSpinner]="buttonSpinnerForNewWebhook" (click)="openCanvas()"
                [attr.data-bs-target]="'#addwebhook'" [attr.aria-controls]="'addwebhook'" icon="plus" iconHeight="12px"
                iconWidth="12px">
            </rds-button>
        </div>
        <div class="col-md-12">
            <!-- <rds-banner
        [alignCenter]="false"
        [bannerText]="'Webhooks allow external services to be notified when certain events happen. When the specified events happen, we’ll send a POST request to each of the URLs you provide.'"
        [sticky]="false"
        position="top"
        colorVariant="primary"
      ></rds-banner> -->
        </div>
        <div class="col-md-12">
            <div class="card p-2 h-100 border-0 rounded-0 card-full-stretch">
                <div class="row" *ngIf="!webhookTableData||webhookTableData.length===0">
                    <div class="col-md-12">
                        <rds-banner [alignCenter]="false"
                            [bannerText]="'Webhooks allow external services to be notified when certain events happen. When the specified events happen, we’ll send a POST request to each of the URLs you provide.'"
                            [sticky]="false" position="top" colorVariant="primary">
                            <span class="text-white" left>
                                <rds-icon name="info" class="pe-1 " [width]="'20px'" [stroke]="true" [height]="'20px'">
                                </rds-icon>
                            </span>
                        </rds-banner>
                    </div>
                </div>

               
            </div>
        </div>
    </div>

    

    <rds-offcanvas [canvasTitle]="'NEW WEBHOOK SUBSCRIPTION'" [offId]="'addwebhook'"
        *ngIf="viewCanvas" [placement]="'end'"  [offcanvaswidth]="600" (onClose)="closeCanvas()">
        <app-webhooksubscription (onSubcriptionSave)="Addsubcription($event)"
          [tableData]="additionalheaders" [tableHeaders]="HeaderTableHeader" [pagination]="true"
          [recordsPerPage]="10"[actions]=" [{ id: 'edit', displayName: 'Edit' }]"></app-webhooksubscription>
    </rds-offcanvas>

<ng-container *ngIf="currentAlerts&&currentAlerts.length>0">
    <mfe-loader [config]="rdsAlertMfeConfig"></mfe-loader>
</ng-container>

`
});

export const Default = Template.bind({});
Default.args = {
  navtabsItems: [
    {
      label: 'Dynamic Properties',
      tablink: '#dynamic-properties',
      ariacontrols: 'dynamic-properties',
    },
    {
      label: 'Dynamic Entity Properties',
      tablink: '#dynamic-entity-properties',
      ariacontrols: 'dynamic-entity-properties',
    },   
  ]
}
