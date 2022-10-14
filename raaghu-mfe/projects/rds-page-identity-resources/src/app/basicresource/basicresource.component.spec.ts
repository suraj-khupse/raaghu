import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicresourceComponent } from './basicresource.component';

describe('BasicresourceComponent', () => {
  let component: BasicresourceComponent;
  let fixture: ComponentFixture<BasicresourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicresourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
