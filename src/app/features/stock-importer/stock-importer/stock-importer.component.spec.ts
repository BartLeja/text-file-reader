import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockImporterComponent } from './stock-importer.component';

describe('StockImporterComponent', () => {
  let component: StockImporterComponent;
  let fixture: ComponentFixture<StockImporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockImporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
