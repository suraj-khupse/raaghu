import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPropertiesComponent } from './api-properties.component';

describe('ApiPropertiesComponent', () => {
  let component: ApiPropertiesComponent;
  let fixture: ComponentFixture<ApiPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
