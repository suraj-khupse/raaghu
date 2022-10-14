import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompUserBasicProfileRightComponent } from './rds-comp-user-basic-profile-right.component';

describe('RdsCompUserBasicProfileRightComponent', () => {
  let component: RdsCompUserBasicProfileRightComponent;
  let fixture: ComponentFixture<RdsCompUserBasicProfileRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompUserBasicProfileRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompUserBasicProfileRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
