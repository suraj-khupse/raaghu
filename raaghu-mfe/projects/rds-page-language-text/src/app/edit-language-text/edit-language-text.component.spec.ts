import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLanguageTextComponent } from './edit-language-text.component';

describe('EditLanguageTextComponent', () => {
  let component: EditLanguageTextComponent;
  let fixture: ComponentFixture<EditLanguageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLanguageTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLanguageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
