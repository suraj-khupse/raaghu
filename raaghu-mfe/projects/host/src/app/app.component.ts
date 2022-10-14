import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { RdsCookieConsentService } from 'projects/libs/rds-cookieconsent/src/lib/service/cookieconsent.service';
import { RdsInitializingEvent } from 'projects/libs/rds-cookieconsent/src/lib/event/initializing.event';
import { RdsInitializationErrorEvent } from 'projects/libs/rds-cookieconsent/src/lib/event/initialization-error.event';
import { RdsStatusChangeEvent } from 'projects/libs/rds-cookieconsent/src/lib/event/status-change.event';
import { RdsNoCookieLawEvent } from 'projects/libs/rds-cookieconsent/src/lib/event/no-cookie-law.event';
import { RdsCookieConsentConfig } from 'projects/libs/rds-cookieconsent/src/lib/service/cookieconsent-config';
 import { CookieService} from 'ngx-cookie-service'

 const IS_COOKIE_ALLOWED: string = 'IS_COOKIE_ALLOWED'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public translate: TranslateService,   
    private store: Store, 
    private ccService: RdsCookieConsentService,  
    public config: RdsCookieConsentConfig,
    private cookieService : CookieService
    ) {}
  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private initializingSubscription!: Subscription;
  private initializedSubscription!: Subscription;
  private initializationErrorSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;
   ngOnInit() {   
    this.ccService.statusChange$.subscribe((res:any)=>{
      console.log('res status',res)    
    })  
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => { });
    this.popupCloseSubscription = this.ccService.popupClose$.subscribe( () => {});
    this.initializingSubscription = this.ccService.initializing$.subscribe((event: RdsInitializingEvent) => {    
    });
    this.initializedSubscription = this.ccService.initialized$.subscribe(() => {});
    this.initializationErrorSubscription = this.ccService.initializationError$.subscribe((event: RdsInitializationErrorEvent) => { });
    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: RdsStatusChangeEvent) => { 
        
        if (event.status === 'allow') {
          this.cookieService.set(IS_COOKIE_ALLOWED, 'true');
          this.ccService.destroy();
        } else {
        this.cookieService.delete(IS_COOKIE_ALLOWED);
      }
    });
  let isCookieAllowed = this.cookieService.get(IS_COOKIE_ALLOWED);
  if (isCookieAllowed == 'true') {
    this.ccService.destroy();
  }
    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe( () => { 
    });
    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe((event: RdsNoCookieLawEvent) => {});  
   }
  ngOnDestroy() { 
    this.popupOpenSubscription.unsubscribe();
    this.popupCloseSubscription.unsubscribe();
    this.initializingSubscription.unsubscribe();
    this.initializedSubscription.unsubscribe();
    this.initializationErrorSubscription.unsubscribe();
    this.statusChangeSubscription.unsubscribe();
    this.revokeChoiceSubscription.unsubscribe();
    this.noCookieLawSubscription.unsubscribe();
  }
}







