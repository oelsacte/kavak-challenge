import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private URL_COUNTRIES = `https://restcountries.eu/rest/v2/all`;

  private MSG_ERROR_LOAD_COUNTRIES = `Error Inesperado`;

  private MSG_TITLE_ERROR = `No se pudo cargar la lista de paises`;

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get(this.URL_COUNTRIES).pipe(
      map((objs: Object[]) => objs.map(
        (item: Object) => Country.fromJson(item)
      )),
      catchError( e => {
        Swal.fire(this.MSG_ERROR_LOAD_COUNTRIES, this.MSG_TITLE_ERROR, 'error');
        return throwError(e);
      })
    )
  }
}
