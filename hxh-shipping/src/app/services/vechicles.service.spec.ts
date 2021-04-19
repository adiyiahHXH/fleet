import { TestBed } from '@angular/core/testing';

import { VechiclesService } from './vechicles.service';

describe('VechiclesService', () => {
  let service: VechiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VechiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
