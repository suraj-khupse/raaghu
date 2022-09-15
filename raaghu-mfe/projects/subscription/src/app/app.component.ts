import { Component, Input, OnInit } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { DatePipe } from '@angular/common';
import { getsubscription, getsubscriptioninformation } from 'projects/libs/state-management/src/lib/state/subscription/subscription.actions';
import { selectAllsubscription, selectAllsubscriptionInformation } from 'projects/libs/state-management/src/lib/state/subscription/subscription.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { selectDefaultLanguage } from '@libs/state-management';
import { TranslateService } from '@ngx-translate/core';

export interface EditionInfo {
  displayName: string;
  creationTimeString: string;
  subscriptionDateString: string;
  featureValues: any;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    DatePipe
  ]
})
export class AppComponent implements OnInit {
  EditionData: EditionInfo = {
    displayName: '',
    creationTimeString: '',
    subscriptionDateString: '',
    featureValues: []
  };
  rdsDataTableForPaymentHistoryMfeConfig: ComponentLoaderOptions;
  tableHeadersForPayment: TableHeader[] = [
    {
      displayName: 'Invoice',
      key: 'invoice',
      dataType: 'html',
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: 'Process Time',
      key: 'processTime',
      dataType: 'datetime',
      dataLength: 5,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Edition',
      key: 'editionDisplayName',
      dataType: 'text',
      dataLength: 5,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Gateway',
      key: 'gateway',
      dataType: 'text',
      dataLength: 5,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Amount',
      key: 'amount',
      dataType: 'text',
      dataLength: 5,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Status',
      key: 'status',
      dataType: 'html',
      dataLength: 5,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Period',
      key: 'period',
      dataType: 'datetime',
      dataLength: 5,
      required: true,
      sortable: true,
    },
    {
      displayName: 'Day Count',
      key: 'dayCount',
      dataType: 'text',
      dataLength: 5,
      required: true,
      sortable: false,
    },
    {
      displayName: 'Payment Id',
      key: 'externalPaymentId',
      dataType: 'text',
      dataLength: 5,
      required: true,
      sortable: false,
    },
  ];
  featuredata: any = [];
  tableDataForPayment = [
     { id: 1, invoice: "Invoice", processTime: "Date", editionDisplayName: "Edition", gateway: "Gateway", amount: "11", status: "active", period: "11", dayCount: "11", externalPaymentId: "11" }
  ];

  @Input()
  bodybackGroundColor?: string;
  @Input()
  HeaderbackGroundColor?: string;
  @Input()
  footerbackGroundColor?: string;
  @Input()
  borderRadious?: number;
  @Input()
  Paddig?: number;
  @Input()
  borderwidth?: number;

  navtabsItems: any = [
    {
      label: this.translate.instant('Subscription Information'),
      tablink: '#subscription-information',
      ariacontrols: 'subscription-information',
    },
    {
      label: this.translate.instant('Payment History'),
      tablink: '#payment-history',
      ariacontrols: 'payment-history',
    },
    {
      label: this.translate.instant('Upgrade Subscription'),
      tablink: '#upgrade-subscription',
      ariacontrols: 'subscription',
    },

  ];

  subscriptionData: any[] = [{
    name: "Basic",
    price: "23",
    duration: "5 days",
    iconurl: "basic_subscription",
    recommended: false,
    features: ["Maximum User Count", "Test Check feature", "Test check feature count 2"]
  },
  {
    name: "Standard",
    price: "25",
    duration: "15 days",
    iconurl: "professional_subscription",
    recommended: false,
    features: ["Maximum User Count", "Test Check feature", "Test check feature count 2"]
  },
  {
    name: "Premium",
    price: "24",
    duration: "1 year",
    iconurl: "premium_subscription",
    recommended: true,
    features: ["Maximum User Count", "Test Check feature", "Test check feature count 2"]
  },
  {
    name: "Professional",
    price: "22",
    duration: "1 month",
    iconurl: "standard_subscription",
    recommended: false,
    features: ["Maximum User Count", "Test Check feature", "Test check feature count 2"]
  }];
  constructor(public datepipe: DatePipe, private store: Store, public translate: TranslateService) { }

  ngOnInit(): void {
    this.navtabsItems = [
      {
        label: this.translate.instant('Subscription Information'),
        tablink: '#subscription-information',
        ariacontrols: 'subscription-information',
      },
      {
        label: this.translate.instant('Payment History'),
        tablink: '#payment-history',
        ariacontrols: 'payment-history',
      },
      {
        label: this.translate.instant('Upgrade Subscription'),
        tablink: '#upgrade-subscription',
        ariacontrols: 'subscription',
      },

    ];
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
        this.navtabsItems[0].label=this.translate.instant('Subscription Information');
        this.navtabsItems[0].label=this.translate.instant('Payment History');
        this.navtabsItems[0].label=this.translate.instant('Subscription Information');
      }
    })
    this.rdsDataTableForPaymentHistoryMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableData: this.tableDataForPayment,
        tableHeaders: this.tableHeadersForPayment,
        recordsPerPage: 10,
        width: '100%',
        pagination: true,
      },
    };



    this.store.dispatch(getsubscription());
    this.store.select(selectAllsubscriptionInformation).subscribe((res: any) => {

      if (res && res.SubscriptionInformation && res.SubscriptionInformation.tenant && res.SubscriptionInformation.tenant.edition) {
        //   this.EditionData={ displayName: '',
        //   creationTimeString: '',
        //   subscriptionDateString: '',
        //   featureValues: features
        // }
        let features = [];
        const editionDisplayName: string = res.SubscriptionInformation.tenant.edition.displayName;
        if (editionDisplayName == 'Basic') {
          features = ["Maximum User Count", "Test Check feature", "Test check feature count 1"];
        } else if (editionDisplayName == 'Standard') {
          features = ["Maximum User Count", "Test Check feature", "Test check feature count 2"];
        } else if (editionDisplayName == 'Premium') {
          features = ["Maximum User Count", "Test Check feature", "Test check feature count 3"];
        } else if (editionDisplayName == 'Professional') {
          features = ["Maximum User Count", "Test Check feature", "Test check feature count 4"];
        }
        this.EditionData = {
          displayName: res.SubscriptionInformation.tenant.edition.displayName,
          creationTimeString: res.SubscriptionInformation.tenant.creationTimeString,
          subscriptionDateString: res.SubscriptionInformation.tenant.subscriptionDateString,
          featureValues: features
        }


        // if (res.SubscriptionInformation.tenant.featureValues) {
        //   res.SubscriptionInformation.tenant.featureValues.forEach((element: any) => {
        //     const item: any = {
        //       name: element.name,
        //       value: element.value,
        //     }
        //     this.EditionData.featureValues.push(item);
        //   });

        // }

      }
    })
    this.store.dispatch(getsubscriptioninformation());
    this.store.select(selectAllsubscription).subscribe((res: any) => {
      if (res && res.subscriptions && res.subscriptions.items && res.subscriptions.items.length) {
        res.items.forEach((element: any) => {
          const item: any = {
            editionDisplayName: element.editionDisplayName,
            gateway: element.gateway,
            amount: element.amount,
            status: element.status,
            payerId: element.payerId,
            dayCount: element.dayCount,
            externalPaymentId: element.externalPaymentId,
            lastModificationTime: this.datepipe.transform(new Date(element.lastModificationTime), 'dd-MM-yyyy h:mm:ss a')
          }
          this.tableDataForPayment.push(item);
        });
        const mfeConfig = this.rdsDataTableForPaymentHistoryMfeConfig
        mfeConfig.input.tableData = [... this.tableDataForPayment];
        this.rdsDataTableForPaymentHistoryMfeConfig = mfeConfig;
        console.log(this.tableDataForPayment);
      }
    })

  }
  rdsPlanInformationMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompPlanInformation',
  };


  rdscompSubscriptionMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompSubscription',
    input: {
      subscriptionData: this.subscriptionData,
      HeaderbackGroundColor: "#5272C5",
      bodybackGroundColor: "#DFE5F6",
      footerbackGroundColor: "#DFE5F6",
      topLinePadding: "0",
      cardBorderWidth: "1",
      borderRadious: "2",
      Paddig: "5",
      borderwidth: "0"
    }
  };
getNavTabItems():any{
  this.navtabsItems[0].label=this.translate.instant('Subscription Information');
  this.navtabsItems[0].label=this.translate.instant('Payment History');
  this.navtabsItems[0].label=this.translate.instant('Subscription Information');
  return this.navtabsItems;
}

}
