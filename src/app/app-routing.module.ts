import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadMeComponent } from './features/stock-importer/read-me/read-me.component';
import { StockImporterComponent } from './features/stock-importer/stock-importer/stock-importer.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/read-me',
    pathMatch: 'full'
  },
  { path: 'read-me', component: ReadMeComponent },
    { path: 'stock-importer', component: StockImporterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
