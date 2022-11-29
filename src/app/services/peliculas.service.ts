import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { MovieResponse } from './../interfaces/movie-response';

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
   * @name getters params PeliculasService
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
   * @name resetCarteleraPage PeliculasService
   */
  resetCarteleraPage () {
    this.carteleraPage = 1;
  }

  /**
   * @name getCartelera PeliculasService
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

  /**
   * @name buscarPelicula PeliculasService
   * @param texto
   * @returns
   */
  buscarPelicula ( texto: string ): Observable<Movie[]> {

    const params = { ...this.params, page: 1, query: texto };

    //https://api.themoviedb.org/3/search/movie?
    return this.http.get<CarteleraResponse>( `${ this.baseUrl }/search/movie?`, {
      params
    } ).pipe(
      map( resp => resp.results )
    );
  }

  /**
   * @name getPeliculaDetalle PeliculasService
   * @param id
   * @returns
   */
  getPeliculaDetalle ( id: number ) {
    //https://api.themoviedb.org/3/movie/436270?
    return this.http.get<MovieResponse>( `${ this.baseUrl }/movie/${ id }?`, { params: this.params } );
  }

}
