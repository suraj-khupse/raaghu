import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompEntityChangesComponent } from './rds-comp-entity-changes.component';

describe('RdsCompEntityChangesComponent', () => {
  let component: RdsCompEntityChangesComponent;
  let fixture: ComponentFixture<RdsCompEntityChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompEntityChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompEntityChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
