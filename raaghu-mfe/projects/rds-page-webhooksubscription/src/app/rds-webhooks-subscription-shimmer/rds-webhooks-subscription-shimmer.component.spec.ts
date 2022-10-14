import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsWebhooksSubscriptionShimmerComponent } from './rds-webhooks-subscription-shimmer.component';

describe('RdsWebhooksSubscriptionShimmerComponent', () => {
  let component: RdsWebhooksSubscriptionShimmerComponent;
  let fixture: ComponentFixture<RdsWebhooksSubscriptionShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsWebhooksSubscriptionShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsWebhooksSubscriptionShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
