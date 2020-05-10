import { TestBed } from '@angular/core/testing';

import { StockComperesService } from './stock-comperes.service';

describe('StockComperesService', () => {
  let service: StockComperesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockComperesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
