import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompEditionNewBasicComponent } from './rds-comp-edition-new-basic.component';

describe('RdsCompEditionNewBasicComponent', () => {
  let component: RdsCompEditionNewBasicComponent;
  let fixture: ComponentFixture<RdsCompEditionNewBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompEditionNewBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompEditionNewBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
