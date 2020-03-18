import { TestBed } from '@angular/core/testing';

import { UpdattimeService } from './updattime.service';

describe('UpdattimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdattimeService = TestBed.get(UpdattimeService);
    expect(service).toBeTruthy();
  });
});
