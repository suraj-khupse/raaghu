import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompIdentityManagementNewComponent } from './rds-comp-identity-management-new.component';

describe('RdsCompIdentityManagementNewComponent', () => {
  let component: RdsCompIdentityManagementNewComponent;
  let fixture: ComponentFixture<RdsCompIdentityManagementNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompIdentityManagementNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompIdentityManagementNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
