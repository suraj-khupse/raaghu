import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSecretsComponent } from './api-secrets.component';

describe('ApiSecretsComponent', () => {
  let component: ApiSecretsComponent;
  let fixture: ComponentFixture<ApiSecretsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiSecretsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSecretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
