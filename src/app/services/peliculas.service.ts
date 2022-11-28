import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  /**
   * @name constructor PeliculasService
   * @param http
   */
  constructor ( private http: HttpClient ) { }

  /**
   * @name getCartelera
   * @returns
   */
  getCartelera ():Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>( 'https://api.themoviedb.org/3/movie/now_playing?api_key=62144bbb1f8e893f156e6e7db29a8d51&language=es-ES&page=1' );
  }

}
