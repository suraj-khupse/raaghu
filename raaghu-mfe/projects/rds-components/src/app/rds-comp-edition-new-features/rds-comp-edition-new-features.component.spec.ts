import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompEditionNewFeaturesComponent } from './rds-comp-edition-new-features.component';

describe('RdsCompEditionNewFeaturesComponent', () => {
  let component: RdsCompEditionNewFeaturesComponent;
  let fixture: ComponentFixture<RdsCompEditionNewFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompEditionNewFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompEditionNewFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
