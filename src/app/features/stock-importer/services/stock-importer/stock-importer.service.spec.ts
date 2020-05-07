import { TestBed } from '@angular/core/testing';

import { StockImporterService } from './stock-importer.service';

describe('StockImporterService', () => {
  let service: StockImporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockImporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
