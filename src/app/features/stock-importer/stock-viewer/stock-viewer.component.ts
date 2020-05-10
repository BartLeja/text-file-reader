import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StockImporterService } from '../services/stock-importer/stock-importer.service';
import * as _ from "lodash";
import { Stock } from '../models/stock.model';

@Component({
  selector: 'app-stock-viewer',
  templateUrl: './stock-viewer.component.html',
  styleUrls: ['./stock-viewer.component.scss']
})
export class StockViewerComponent implements OnInit, OnChanges {
  public sortedStocks: any;
  @Input() public stocks: Stock[];

  public constructor(public stockImporterService: StockImporterService) { }

  public ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {
      this.sortedStocks =  this.getSortedStocks();
  }

  private getSortedStocks(): any{
    if(this.stocks){
      let stocksWithNameOfWarehouse = this.stocks.map(s=>{
        return s.stockWarehouse
        .map(sw=>{ return {
          warehouseName: sw.warehouseName, stockQuantity: sw.stockQuantity, stockId: s.stockId}
        })
      }).reduce((a,b)=>{
        return a.concat(b);
      } );
  
      return _(stocksWithNameOfWarehouse)
        .groupBy(s=>s.warehouseName)
        .map((stock,warehouseName)=>({
            stock: stock.sort(this.compareStockes), 
            warehouseName:warehouseName, stockQuantityTotal: 
            stock.map(s=>s.stockQuantity).reduce((q1,q2)=>{return q1 + q2})
        })).value()
        .sort(this.compareWarehousesByStockQuantity);
    }
  }

  private compareWarehousesByStockQuantity(a,b){
    if (a.stockQuantityTotal > b.stockQuantityTotal) {
      return -1;
    }
    if (b.stockQuantityTotal > a.stockQuantityTotal) {
      return 1;
    }
    if(b.stockQuantityTotal = a.stockQuantityTotal){
          if (a.warehouseName > b.warehouseName) {
            return -1;
          }
          if (b.warehouseName > a.warehouseName) {
            return 1;
          }
          return 0;
        }
    return 0;
  }

  private compareStockes(a,b){
    if (a.stockId > b.stockId) {
      return 1;
    }
    if (b.stockId > a.stockId) {
      return -1;
    }
    return 0;
  }
}
