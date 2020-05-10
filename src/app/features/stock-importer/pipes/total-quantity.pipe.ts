import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalQuantity'
})
export class TotalQuantityPipe implements PipeTransform {

  transform(stockes:any ): number {
    return stockes
      .map(s=>s.stockQuantity)
      .reduce((q1,q2)=>{return q1 + q2});
  }

}
