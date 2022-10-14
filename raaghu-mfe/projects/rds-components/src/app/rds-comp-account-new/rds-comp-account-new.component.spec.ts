import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompAccountNewComponent } from './rds-comp-account-new.component';

describe('RdsCompAccountNewComponent', () => {
  let component: RdsCompAccountNewComponent;
  let fixture: ComponentFixture<RdsCompAccountNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompAccountNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompAccountNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
