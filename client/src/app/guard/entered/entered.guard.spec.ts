import { TestBed, async, inject } from '@angular/core/testing';

import { EnteredGuard } from './entered.guard';

describe('EnteredGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnteredGuard]
    });
  });

  it('should ...', inject([EnteredGuard], (guard: EnteredGuard) => {
    expect(guard).toBeTruthy();
  }));
});
