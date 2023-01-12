import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompIconComponent } from './rds-comp-icon.component';

describe('RdsCompIconComponent', () => {
  let component: RdsCompIconComponent;
  let fixture: ComponentFixture<RdsCompIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdsCompIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
