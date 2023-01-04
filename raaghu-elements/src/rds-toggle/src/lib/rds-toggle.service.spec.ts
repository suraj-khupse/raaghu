import { TestBed } from '@angular/core/testing';

import { RdsToggleService } from './rds-toggle.service';

describe('RdsToggleService', () => {
  let service: RdsToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
