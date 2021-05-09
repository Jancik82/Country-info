import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {Country} from '../domain/Country';

@Component({
  selector: 'app-search-by-currency',
  templateUrl: './search-by-currency.component.html',
  styleUrls: ['./search-by-currency.component.css']
})
export class SearchByCurrencyComponent implements OnInit {
  countries: Country[] = [];
  currency: string;

  constructor(private apiHttp: ApiHttpService) { }

  ngOnInit(): void {
  }
  searchByCurrency(): void {
    this.apiHttp.getCountriesCurrency(this.currency).subscribe((r: Country[]) => this.countries = r);
  }
  chooseByCountry(name): void {
    this.countries = this.countries.filter(x => x.name === name);
  }
}
