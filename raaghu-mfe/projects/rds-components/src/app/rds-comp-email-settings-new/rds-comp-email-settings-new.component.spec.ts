import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompEmailSettingsNewComponent } from './rds-comp-email-settings-new.component';

describe('RdsCompEmailSettingsNewComponent', () => {
  let component: RdsCompEmailSettingsNewComponent;
  let fixture: ComponentFixture<RdsCompEmailSettingsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompEmailSettingsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompEmailSettingsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
