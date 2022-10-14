import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompThemeNewComponent } from './rds-comp-theme-new.component';

describe('RdsCompThemeNewComponent', () => {
  let component: RdsCompThemeNewComponent;
  let fixture: ComponentFixture<RdsCompThemeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompThemeNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompThemeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
