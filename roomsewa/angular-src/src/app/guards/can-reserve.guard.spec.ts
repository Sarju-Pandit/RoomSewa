import { TestBed, async, inject } from '@angular/core/testing';

import { CanReserveGuard } from './can-reserve.guard';

describe('CanReserveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanReserveGuard]
    });
  });

  it('should ...', inject([CanReserveGuard], (guard: CanReserveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
