import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
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
  public cast: Cast[] = [];

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
    const  id  = this.activateRoute.snapshot.params[ 'id' ];

    combineLatest( [
      this.peliculasService.getPeliculaDetalle( id ),
      this.peliculasService.getCast( id )
    ] ).subscribe( ( [ movie, cast ] ) => {
      if ( !movie ) {
        this.router.navigateByUrl( '/home' );
        return;
      }

      this.movie = movie;
      this.cast = cast.filter( actor => actor.profile_path !== null );
    } );

    // this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
    //   // console.log( movie );
    //   if ( !movie ) {
    //     this.router.navigateByUrl( '/home' );
    //     return;
    //   }
    //   this.movie = movie;
    // } );
    // // console.log(id);
    // this.peliculasService.getCast( id ).subscribe( cast => {
    //   console.log( cast );
    //   this.cast = cast.filter( actor => actor.profile_path !== null );
    // } );
  }

  /**
   * @name onRegresar PeliculaComponent
   */
  onRegresar () {
    this.location.back();
  }

}
