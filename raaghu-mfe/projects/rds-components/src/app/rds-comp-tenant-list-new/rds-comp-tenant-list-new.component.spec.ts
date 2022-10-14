import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTenantListNewComponent } from './rds-comp-tenant-list-new.component';

describe('RdsCompTenantListNewComponent', () => {
  let component: RdsCompTenantListNewComponent;
  let fixture: ComponentFixture<RdsCompTenantListNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTenantListNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTenantListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
