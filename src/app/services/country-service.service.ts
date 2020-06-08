import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private URL_COUNTRIES = `https://restcountries.eu/rest/v2/all`;

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get(this.URL_COUNTRIES).pipe(
      map((objs: Object[]) => objs.map(
        (item: Object) => Country.fromJson(item)
      ))
    )
  }
}
