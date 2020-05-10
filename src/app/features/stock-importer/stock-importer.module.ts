import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockImporterComponent } from './stock-importer/stock-importer.component';
import { StockViewerComponent } from './stock-viewer/stock-viewer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TotalQuantityPipe } from './pipes/total-quantity.pipe';

@NgModule({
  declarations: [
    StockImporterComponent, 
    StockViewerComponent, TotalQuantityPipe, 
   ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    StockImporterComponent
  ]
})
export class StockImporterModule { }
