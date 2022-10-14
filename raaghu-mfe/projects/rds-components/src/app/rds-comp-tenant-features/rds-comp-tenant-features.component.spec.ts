import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTenantFeaturesComponent } from './rds-comp-tenant-features.component';

describe('RdsCompTenantFeaturesComponent', () => {
  let component: RdsCompTenantFeaturesComponent;
  let fixture: ComponentFixture<RdsCompTenantFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTenantFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTenantFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
