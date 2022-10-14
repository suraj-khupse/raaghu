import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiClaimsComponent } from './api-claims.component';

describe('ApiClaimsComponent', () => {
  let component: ApiClaimsComponent;
  let fixture: ComponentFixture<ApiClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiClaimsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
