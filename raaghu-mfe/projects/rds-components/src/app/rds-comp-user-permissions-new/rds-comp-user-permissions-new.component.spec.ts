import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompUserPermissionsNewComponent } from './rds-comp-user-permissions-new.component';

describe('RdsCompUserPermissionsNewComponent', () => {
  let component: RdsCompUserPermissionsNewComponent;
  let fixture: ComponentFixture<RdsCompUserPermissionsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompUserPermissionsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompUserPermissionsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
