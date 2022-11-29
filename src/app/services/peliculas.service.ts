import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;

  /**
   * @name constructor PeliculasService
   * @param http
   */
  constructor ( private http: HttpClient ) { }

  /**
   * @returns
   */
  get params () {
    return {
      api_key: '62144bbb1f8e893f156e6e7db29a8d51',
      language: 'es-ES',
      page: this.carteleraPage
    }
  }

  /**
   * @name getCartelera
   * @returns
   */
  getCartelera ():Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>( ` ${ this.baseUrl }/movie/now_playing?`, { params: this.params } ).pipe(
      tap( () => {
        this.carteleraPage += 1;
      } )
    );
  }

}
