import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsToggleComponent } from './rds-toggle.component';

describe('RdsToggleComponent', () => {
  let component: RdsToggleComponent;
  let fixture: ComponentFixture<RdsToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
