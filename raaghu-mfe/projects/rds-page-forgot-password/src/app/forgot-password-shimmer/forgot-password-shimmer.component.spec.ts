import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordShimmerComponent } from './forgot-password-shimmer.component';

describe('ForgotPasswordShimmerComponent', () => {
  let component: ForgotPasswordShimmerComponent;
  let fixture: ComponentFixture<ForgotPasswordShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
