import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginShimmerComponent } from './login-shimmer.component';

describe('LoginShimmerComponent', () => {
  let component: LoginShimmerComponent;
  let fixture: ComponentFixture<LoginShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
