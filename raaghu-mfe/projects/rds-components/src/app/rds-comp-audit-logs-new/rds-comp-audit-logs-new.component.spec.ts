import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompAuditLogsNewComponent } from './rds-comp-audit-logs-new.component';

describe('RdsCompAuditLogsNewComponent', () => {
  let component: RdsCompAuditLogsNewComponent;
  let fixture: ComponentFixture<RdsCompAuditLogsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompAuditLogsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompAuditLogsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
