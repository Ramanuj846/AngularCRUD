import { TestBed } from '@angular/core/testing';

import { RoutessGuardGuard } from './routess-guard.guard';

describe('RoutessGuardGuard', () => {
  let guard: RoutessGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoutessGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
