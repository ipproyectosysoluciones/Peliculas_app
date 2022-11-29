import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast } from '../../interfaces/credits-response';
import { MovieResponse } from '../../interfaces/movie-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public movie: MovieResponse;
  public cast: Cast[];

  /**
   * @name constructor PeliculaComponent
   * @param activateRoute
   * @param peliculasService
   * @param location
   */
  constructor ( private activateRoute: ActivatedRoute,
                private peliculasService: PeliculasService,
                private location: Location,
                private router: Router ) { }

  /**
   * @name ngOnInit PeliculaComponent
   */
  ngOnInit (): void {
    const id = this.activateRoute.snapshot.params[ 'id' ];

    this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
      // console.log( movie );
      if ( !movie ) {
        this.router.navigateByUrl( '/home' );
        return;
      }
      this.movie = movie;
    } );
    // console.log(id);
    this.peliculasService.getCast( id ).subscribe( cast => {
      console.log( cast );
      this.cast = cast;
    } );
  }

  /**
   * @name onRegresar PeliculaComponent
   */
  onRegresar () {
    this.location.back();
  }

}
