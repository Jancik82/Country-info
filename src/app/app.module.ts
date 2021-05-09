import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchByCurrencyComponent } from './search-by-currency/search-by-currency.component';
import { SearchByCapitalCityComponent} from './search-by-capital-city/search-by-capital-city.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SearchByNameComponent,
    SearchByCurrencyComponent,
    SearchByCapitalCityComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
