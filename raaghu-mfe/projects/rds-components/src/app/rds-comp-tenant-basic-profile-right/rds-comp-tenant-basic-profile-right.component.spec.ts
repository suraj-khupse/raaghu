import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTenantBasicProfileRightComponent } from './rds-comp-tenant-basic-profile-right.component';

describe('RdsCompTenantBasicProfileRightComponent', () => {
  let component: RdsCompTenantBasicProfileRightComponent;
  let fixture: ComponentFixture<RdsCompTenantBasicProfileRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTenantBasicProfileRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTenantBasicProfileRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
