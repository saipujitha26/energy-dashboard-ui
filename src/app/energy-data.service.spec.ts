import { TestBed } from '@angular/core/testing';

import { EnergyDataService } from './energy-data.service';

describe('EnergyDataService', () => {
  let service: EnergyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
