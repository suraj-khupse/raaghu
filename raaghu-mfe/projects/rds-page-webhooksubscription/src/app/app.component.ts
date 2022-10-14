import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { AlertService, ComponentLoaderOptions, LanguageServiceProxy } from '@libs/shared';
import { getWebhookSubscription, selectAll, selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { transition, trigger, query, style, animate, } from '@angular/animations';

declare var bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('0.4s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('0.4s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isAnimation: boolean = true;
  buttonSpinnerForNewWebhook: boolean = true;
  title = 'webhooksubscription';
  public viewCanvas: boolean = false;
  currentAlerts: any = [];
  isShimmer:boolean=false;
  webhooksEvent:any;
  @Input() listItems = [
    { value: 'New Webhook Subscription', some: 'value', key: 'newwebhook', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
  ];
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts
    },
    output: {
      onAlertHide: (event: any) => {
        this.currentAlerts = event;
      }
    }
  }
  rdswebhookTableMfeConfig: ComponentLoaderOptions;
  constructor(private store: Store, private alertService: AlertService, public translate:TranslateService) { }
  webhookTableHeader: TableHeader[] = [
    { displayName: 'Webhook Endpoint', key: 'WebhookEndpoint', dataType: 'text', dataLength: 30, sortable: true, required: true,filterable:true },
    { displayName: 'Webhook Events', key: 'webhooksEvent', dataType: 'html', dataLength: 30, required: true, sortable: true },
    { displayName: 'Active', key: 'statusTemplate', dataType: 'html', dataLength: 30, required: true, sortable: true },
  ]

  webhookTableData: any = [] = [];
  @Output() onWebhookSave = new EventEmitter<any>()
  ngOnInit(): void {
    this.isAnimation = true;
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
    this.subscribeToAlerts();
    this.rdswebhookTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.webhookTableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.webhookTableData,
        recordsPerPage: 10,
        pagination: true,
        noDataTitle:'Currently you do not have webhook subscription',
        isShimmer : true
      },

    };
    this.store.dispatch(getWebhookSubscription());
    this.store.select(selectAll).subscribe((res: any) => {
      this.webhookTableData = [];
      if (res && res.webhookSubscriptions && res.webhookSubscriptions.items && res.status == "success") {
        this.isAnimation = false;
        res.webhookSubscriptions.items.forEach(element => {
          if (element && element.webhooks) {
            this.webhooksEvent = '';
            element.webhooks.forEach((e: any) => {
              if(this.webhooksEvent == '') {
                this.webhooksEvent = e;
              }
              else {
                this.webhooksEvent = this.webhooksEvent + '<br>' + e;
              }
            });
          }
          let statusTemplate;
           if (element.isActive){
            statusTemplate = `<div> <span class="badge badge-info">Yes</span></div>`;
          } else {
            statusTemplate = `<div><span class="badge badge-danger">No</span></div>`;
          }
          const item = {
            WebhookEndpoint: element.webhookUri,
            Active: element.isActive,
            WebhookEvents: element.webhooks,
            statusTemplate:statusTemplate,
            webhooksEvent:this.webhooksEvent
          }
          this.webhookTableData.push(item);
        });
        const mfeConfig = this.rdswebhookTableMfeConfig
        mfeConfig.input.tableData = this.webhookTableData
        mfeConfig.input.isShimmer = false;
        this.rdswebhookTableMfeConfig = mfeConfig
      }
    })
    // console.log(this.allTodos$ );

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.rdswebhookTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.webhookTableHeader,
        tableStyle: 'light',
        width: '100%',
        tableData: this.webhookTableData,
        recordsPerPage: 10,
        pagination: true,
      },

    };
  }
  Addsubcription(subscription: any) {
    this.webhookTableData.push(subscription.webhookSubscriptionData.webhookSubscriptionData.subscriptionData)
    this.onWebhookSave.emit({ webhookSubscriptionData: subscription.webhookSubscriptionData });
  }

  openCanvas(): void {
    this.buttonSpinnerForNewWebhook = true;
    this.viewCanvas = true;
    setTimeout(() => {
      var offcanvas = document.getElementById('addwebhook');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 1);
  }

  closeCanvas(): void {
    this.buttonSpinnerForNewWebhook =false;
    this.viewCanvas = false;
  }

  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
      };
      this.currentAlerts.push(currentAlert);
      const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
      this.rdsAlertMfeConfig = rdsAlertMfeConfig;
    });

  }

  // fabmenu mobile
  onSelectMenu(event:any){
    if(event.key==='newwebhook'){
      this.openCanvas();
    }
  }
}
