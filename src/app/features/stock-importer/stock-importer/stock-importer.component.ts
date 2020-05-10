import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StockImporterService } from '../services/stock-importer/stock-importer.service';
import { Stock } from '../models/stock.model';

@Component({
  selector: 'app-stock-importer',
  templateUrl: './stock-importer.component.html',
  styleUrls: ['./stock-importer.component.scss']
})
export class StockImporterComponent implements OnInit {
  public stocks: Stock[];
  @ViewChild('fileInput') public fileInput: ElementRef;

  constructor(public stockImporterService: StockImporterService) { }

  public ngOnInit(): void {}

  public onChange(files: File[]){
    this.stockImporterService.readUploadedFileAsText(files[0]).then((s:Stock[])=>{
      this.stocks = [];
      s.forEach(s=> {
        this.stocks.push(s);
      });
    });
    this.fileInput.nativeElement.value = null;
  }
}
