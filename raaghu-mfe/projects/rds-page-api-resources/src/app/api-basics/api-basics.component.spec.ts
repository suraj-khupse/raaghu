import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBasicsComponent } from './api-basics.component';

describe('ApiBasicsComponent', () => {
  let component: ApiBasicsComponent;
  let fixture: ComponentFixture<ApiBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
