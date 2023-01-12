import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompSecurityComponent } from './rds-comp-security.component';

describe('RdsCompSecurityComponent', () => {
  let component: RdsCompSecurityComponent;
  let fixture: ComponentFixture<RdsCompSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
