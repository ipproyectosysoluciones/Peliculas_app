import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

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
  getCartelera (): Observable<Movie[]> {

    if ( this.cargando ) {
      //Cargando peliculas
      return of([]);
    }

    // console.log( 'Cargando API' );

    this.cargando = true;
    return this.http.get<CarteleraResponse>( ` ${ this.baseUrl }/movie/now_playing?`, { params: this.params } ).pipe(
      map( ( resp ) => resp.results ),
      tap( () => {
        this.carteleraPage += 1;
        this.cargando = false;
      } )
    );
  }

}
