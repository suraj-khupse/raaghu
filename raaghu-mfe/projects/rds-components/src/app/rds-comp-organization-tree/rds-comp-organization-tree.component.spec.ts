import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompOrganizationTreeComponent } from './rds-comp-organization-tree.component';

describe('RdsCompOrganizationTreeComponent', () => {
  let component: RdsCompOrganizationTreeComponent;
  let fixture: ComponentFixture<RdsCompOrganizationTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompOrganizationTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompOrganizationTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
