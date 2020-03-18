import { TestBed } from '@angular/core/testing';

import { GetpostservicesService } from './getpostservices.service';

describe('GetpostservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetpostservicesService = TestBed.get(GetpostservicesService);
    expect(service).toBeTruthy();
  });
});
