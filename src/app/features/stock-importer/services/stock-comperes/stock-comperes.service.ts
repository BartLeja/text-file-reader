import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockComperesService {

  constructor() { }

  public compareWarehouses(a,b){
    if (a.stockQuantityTotal > b.stockQuantityTotal) {
      return -1;
    }
    if (b.stockQuantityTotal > a.stockQuantityTotal) {
      return 1;
    }
    if(b.stockQuantityTotal = a.stockQuantityTotal){
      return this.compareWarehousesByWarehouseName(a,b)
    }
    return 0;
  }

  public compareStockes(a,b){
    if (a.stockId > b.stockId) {
      return 1;
    }
    if (b.stockId > a.stockId) {
      return -1;
    }
    return 0;
  }
  
  private compareWarehousesByWarehouseName(a,b){
    if (a.warehouseName > b.warehouseName) {
      return -1;
    }

    if (b.warehouseName > a.warehouseName) {
      return 1;
    }
    return 0;
  }

 
}
