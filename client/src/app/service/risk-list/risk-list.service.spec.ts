import { TestBed, inject } from '@angular/core/testing';

import { RiskListService } from './risk-list.service';

describe('RiskListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiskListService]
    });
  });

  it('should be created', inject([RiskListService], (service: RiskListService) => {
    expect(service).toBeTruthy();
  }));
});
