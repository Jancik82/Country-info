import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../api-http.service';
import {Country} from '../domain/Country';

@Component({
  selector: 'app-search-by-capital-city',
  templateUrl: './search-by-capital-city.component.html',
  styleUrls: ['./search-by-capital-city.component.css']
})
export class SearchByCapitalCityComponent implements OnInit {

  countries: Country[] = [];
  capitalCity: string;

  constructor(private apiHttp: ApiHttpService) { }

  ngOnInit(): void {
  }
  searchByCapitalCity(): void {
    this.apiHttp.getCountriesCapitalCity(this.capitalCity).subscribe((r: Country[]) => this.countries = r);
  }
  chooseByCountry(name): void {
    this.countries = this.countries.filter(x => x.name === name);
  }
}
