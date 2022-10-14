import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebhooksubscriptionComponent } from './webhooksubscription.component';

describe('WebhooksubscriptionComponent', () => {
  let component: WebhooksubscriptionComponent;
  let fixture: ComponentFixture<WebhooksubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebhooksubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebhooksubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
