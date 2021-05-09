import {Currency} from './Currency';
import {Language} from './Language';

export class Country {
  name: string;
  flag: string;
  topLevelDomain: string;
  capital: string;
  region: string;
  subregion: string;
  population: string;
  area: string;
  timezones: string;
  borders: string;
  currencies: Currency[];
  languages: Language[];
}
