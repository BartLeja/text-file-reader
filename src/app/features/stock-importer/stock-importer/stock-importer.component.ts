import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StockImporterService } from '../services/stock-importer/stock-importer.service';

@Component({
  selector: 'app-stock-importer',
  templateUrl: './stock-importer.component.html',
  styleUrls: ['./stock-importer.component.scss']
})
export class StockImporterComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  constructor(private stockImporterService: StockImporterService) { }

  public ngOnInit(): void {
  }

  public onChange(files: File[]){
    this.stockImporterService.onChange(files);
    this.fileInput.nativeElement.value = null;
  }
}
