import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { RdsBadgeModule, RdsBannerModule, RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsFabMenuModule, RdsInputModule, RdsModalModule, RdsNavTabModule, RdsOffcanvasModule, RdsPaginationModule, RdsSearchInputModule, RdsSelectListModule, RdsTextareaModule } from '@libs/rds-elements';
import { RdsIconModule } from 'raaghu-themes/rds-icons'
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
  ],
  webhookTableHeader:  [
    { displayName: 'Webhook Endpoint', key: 'WebhookEndpoint', dataType: 'text', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Webhook Events', key: 'webhooksEvent', dataType: 'html', dataLength: 30, required: true, sortable: true },
    { displayName: 'Active', key: 'statusTemplate', dataType: 'html', dataLength: 30, required: true, sortable: true },
  ],
  webhookTableData:[
    {WebhookEndpoint: 'https://anzstageui.raaghu.io/pages/webhooksubscription777	', webhooksEvent: 'test21', statusTemplate: '<div> <span class="badge badge-info">Yes</span></div>'},
    {WebhookEndpoint: 'https://anzstageui.raaghu.io/pages/webhooksubscription44		', webhooksEvent: 'test21', statusTemplate: '<div> <span class="badge badge-info">Yes</span></div>'},
    {WebhookEndpoint: 'https://anzstageui.com		', webhooksEvent: 'test21', statusTemplate: '<div> <span class="badge badge-info">Yes</span></div>'},
    {WebhookEndpoint: 'http://localhost:8080/dgdr		', webhooksEvent: 'test21', statusTemplate: '<div> <span class="badge badge-info">Yes</span></div>'},

  ],
  showLoadingSpinner:false
}
