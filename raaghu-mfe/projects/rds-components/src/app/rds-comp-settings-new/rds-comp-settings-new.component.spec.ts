import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompSettingsNewComponent } from './rds-comp-settings-new.component';

describe('RdsCompSettingsNewComponent', () => {
  let component: RdsCompSettingsNewComponent;
  let fixture: ComponentFixture<RdsCompSettingsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompSettingsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompSettingsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
