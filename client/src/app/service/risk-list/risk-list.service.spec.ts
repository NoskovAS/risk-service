import { TestBed, inject } from '@angular/core/testing';

import { RiskListService } from './risk-list.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

describe('RiskListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      providers: [RiskListService]
    });
  });

  it('should be created', inject([RiskListService], (service: RiskListService) => {
    expect(service).toBeTruthy();
  }));
});
