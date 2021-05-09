import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {SearchByNameComponent} from './search-by-name/search-by-name.component';
import {SearchByCurrencyComponent} from './search-by-currency/search-by-currency.component';
import {SearchByCapitalCityComponent} from './search-by-capital-city/search-by-capital-city.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'searchByName', component: SearchByNameComponent},
  {path: 'searchByCapitalCity', component: SearchByCapitalCityComponent},
  {path: 'searchByCurrency', component: SearchByCurrencyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
