import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsCompTreeStructureComponent } from './rds-comp-tree-structure.component';

describe('RdsCompPermissionTreeComponent', () => {
  let component: RdsCompTreeStructureComponent;
  let fixture: ComponentFixture<RdsCompTreeStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsCompTreeStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsCompTreeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
