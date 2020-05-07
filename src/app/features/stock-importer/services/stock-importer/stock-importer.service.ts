import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockImporterService {
  private stockFile: string;
  public constructor() { }



  public onChange(files: File[]) {
    if(files[0]){
      console.log(files[0]);
      let myReader: FileReader = new FileReader();
    
      myReader.onload = (e) => {
        this.stockFile = myReader.result.toString();
        console.log( this.stockFile);
      }
      myReader.readAsText(files[0]);
    }
  }
}
