import { TestBed } from '@angular/core/testing';

import { StockUploaderService } from './stock-uploader.service';

describe('StockUploaderService', () => {
  let service: StockUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
