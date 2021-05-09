import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Country} from './domain/Country';

const BASE_URL_NAME = 'https://restcountries.eu/rest/v2/name';
const BASE_URL_CAPITAL = 'https://restcountries.eu/rest/v2/capital';
const BASE_URL_CURRENCY = 'https://restcountries.eu/rest/v2/currency';
const HTTP_OPTIONS = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiHttpService {

  constructor(private httpClient: HttpClient) { }

  getCountries(name: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${BASE_URL_NAME}/${name}`);
  }
  getCountriesCapitalCity(capital: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${BASE_URL_CAPITAL}/${capital}`);
  }
  getCountriesCurrency(currency: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${BASE_URL_CURRENCY}/${currency}`);
  }
}
