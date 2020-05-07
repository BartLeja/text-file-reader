import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockImporterComponent } from './stock-importer/stock-importer.component';
import { StockViewerComponent } from './stock-viewer/stock-viewer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    StockImporterComponent, 
    StockViewerComponent, 
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
