import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompPersonalDataComponent } from './rds-comp-personal-data.component';

describe('RdsCompPersonalDataComponent', () => {
  let component: RdsCompPersonalDataComponent;
  let fixture: ComponentFixture<RdsCompPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompPersonalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdsCompPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
