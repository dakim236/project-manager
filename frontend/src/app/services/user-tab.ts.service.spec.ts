import { TestBed } from '@angular/core/testing';

import { UserTab.TsService } from './user-tab.ts.service';

describe('UserTab.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserTab.TsService = TestBed.get(UserTab.TsService);
    expect(service).toBeTruthy();
  });
});
