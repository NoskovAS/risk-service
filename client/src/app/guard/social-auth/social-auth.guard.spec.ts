import { TestBed, async, inject } from '@angular/core/testing';

import { SocialAuthGuard } from './social-auth.guard';

describe('SocialAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialAuthGuard]
    });
  });

  it('should ...', inject([SocialAuthGuard], (guard: SocialAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
