import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { haschangeguardGuard } from './haschangeguard.guard';

describe('haschangeguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => haschangeguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
