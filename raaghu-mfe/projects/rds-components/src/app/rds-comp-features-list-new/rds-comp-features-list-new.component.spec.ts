import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompFeaturesListNewComponent } from './rds-comp-features-list-new.component';

describe('RdsCompFeaturesListNewComponent', () => {
  let component: RdsCompFeaturesListNewComponent;
  let fixture: ComponentFixture<RdsCompFeaturesListNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompFeaturesListNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompFeaturesListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
