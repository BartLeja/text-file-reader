import { StockWarehouse } from './stockWarehouse.model';

export class Stock {
    constructor(
        public stockName: string,
        public stockId: string,
        public stockWarehouse: StockWarehouse[]
    ){}
}