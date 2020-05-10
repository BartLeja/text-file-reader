import { Injectable } from '@angular/core';
import { Stock } from '../../models/stock.model';
import { StockWarehouse } from '../../models/stockWarehouse.model';
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class StockImporterService {
  public constructor() { }

  public async readUploadedFileAsText(inputFile: File) : Promise<{}> {
    const fileReader = new FileReader();
  
    let result = new Promise((resolve, reject) => {
      fileReader.onerror = () => {
        fileReader.abort();
      };
  
      fileReader.onload = () => {
        resolve(this.getStocks(fileReader.result.toString()));
      };
      fileReader.readAsText(inputFile);
    });
    return result;
  };

  private getStocks(stocksFile: string) : Array<Stock>{
      let stockWarehouses: Array<StockWarehouse> = [];
      let stocks : Array<Stock> = [];

      if(stocksFile){
        let fileSplitByRows = stocksFile.split('\n');
        fileSplitByRows.forEach(r => {
          if(r[0] != '#'){
            stockWarehouses = [];
            let stock = r.split(';');

            stock[2].split('|').forEach(sW=> { 
              let stockWarehouse = sW.split(',');
              stockWarehouses.push(new StockWarehouse(stockWarehouse[0], +stockWarehouse[1]))
             });

           stocks.push(
             new Stock(
                stock[0],
                stock[1],
                stockWarehouses)
              );
          }
        })
      }
      return stocks;
  }
}
