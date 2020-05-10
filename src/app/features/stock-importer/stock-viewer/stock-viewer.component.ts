import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StockImporterService } from '../services/stock-importer/stock-importer.service';
import * as _ from "lodash";
import { Stock } from '../models/stock.model';
import { StockComperesService } from '../services/stock-comperes/stock-comperes.service';

@Component({
  selector: 'app-stock-viewer',
  templateUrl: './stock-viewer.component.html',
  styleUrls: ['./stock-viewer.component.scss']
})
export class StockViewerComponent implements OnInit, OnChanges {
  public sortedStocks: any;
  @Input() public stocks: Stock[];

  public constructor(
    public stockImporterService: StockImporterService,
    public stockComperesService: StockComperesService) { }

  public ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {
      this.sortedStocks = this.getGroupedStocks();
  }

  private getGroupedStocks(): any{
    if(this.stocks){
      let stocksWithNameOfWarehouse = this.getListOfStockWithNameOfWarehouse();
  
      return _(stocksWithNameOfWarehouse)
        .groupBy(s=>s.warehouseName)
        .map((stock,warehouseName)=>({
            stock: stock.sort(this.stockComperesService.compareStockes), 
            warehouseName:warehouseName, stockQuantityTotal: 
            stock.map(s=>s.stockQuantity).reduce((q1,q2)=>{return q1 + q2})
        })).value()
        .sort((a,b) => this.stockComperesService.compareWarehouses(a,b));
    }
  }

  private getListOfStockWithNameOfWarehouse(): any {
    return this.stocks.map(s=>{
      return s.stockWarehouse
      .map(sw=>{ return {
        warehouseName: sw.warehouseName, stockQuantity: sw.stockQuantity, stockId: s.stockId}
      })
    }).reduce((a,b)=>{
      return a.concat(b);
    } );
  }
}
