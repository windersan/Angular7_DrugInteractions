import { TestBed } from '@angular/core/testing';

import { DrugInteractionService } from './drug-interaction.service';

describe('DrugInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrugInteractionService = TestBed.get(DrugInteractionService);
    expect(service).toBeTruthy();
  });
});
