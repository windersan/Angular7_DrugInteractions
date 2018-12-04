import { TestBed } from '@angular/core/testing';

import { RxnormService } from './rxnorm.service';

describe('RxnormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxnormService = TestBed.get(RxnormService);
    expect(service).toBeTruthy();
  });
});
