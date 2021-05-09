import { Component, OnInit } from '@angular/core';
import {Country} from '../domain/Country';
import {ApiHttpService} from '../api-http.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  countries: Country[] = [];
  name: string;

  constructor(private apiHttp: ApiHttpService) { }

  ngOnInit(): void {
  }

  searchByName(): void {
    this.apiHttp.getCountries(this.name).subscribe((r: Country[]) => this.countries = r);
  }

  chooseByCountry(name): void {
    this.countries = this.countries.filter(x => x.name === name);
  }
}
