import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimTypesComponent } from './claim-types.component';

describe('ClaimTypesComponent', () => {
  let component: ClaimTypesComponent;
  let fixture: ComponentFixture<ClaimTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
