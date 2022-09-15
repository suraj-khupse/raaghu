import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { getsubscription } from 'projects/libs/state-management/src/lib/state/subscription/subscription.actions';
import { selectAllsubscriptionInformation } from 'projects/libs/state-management/src/lib/state/subscription/subscription.selector';

export interface EditionInfo {
  displayName: string;
  creationTimeString: string;
  subscriptionDateString: string;
  featureValues: any;
}

@Component({
  selector: 'app-rds-comp-plan-information',
  templateUrl: './rds-comp-plan-information.component.html',
  styleUrls: ['./rds-comp-plan-information.component.scss']
})
export class RdsCompPlanInformationComponent implements OnInit {
  EditionData: EditionInfo = {
    displayName: '',
    creationTimeString: '',
    subscriptionDateString: '',
    featureValues: []
  };

  constructor(private store: Store,public translate:TranslateService) { }

  ngOnInit(): void {
    this.store.dispatch(getsubscription());
    this.store.select(selectAllsubscriptionInformation).subscribe((res: any) => {

      if (res && res.SubscriptionInformation && res.SubscriptionInformation.tenant && res.SubscriptionInformation.tenant.edition) {
        let features = [];
        const editionDisplayName: string = res.SubscriptionInformation.tenant.edition.displayName;
        if (editionDisplayName == 'new edition') {
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

    
  }

}
