import { TestBed } from '@angular/core/testing';

import { BusDataService } from './bus-data.service';

describe('BusDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusDataService = TestBed.get(BusDataService);
    expect(service).toBeTruthy();
  });
});
