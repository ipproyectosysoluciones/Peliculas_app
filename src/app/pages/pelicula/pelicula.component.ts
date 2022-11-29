import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResponse } from '../../interfaces/movie-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public movie: MovieResponse;

  /**
   * @name constructor PeliculaComponent
   * @param activateRoute
   * @param peliculasService
   * @param location
   */
  constructor ( private activateRoute: ActivatedRoute,
                private peliculasService: PeliculasService,
                private location: Location) { }

  ngOnInit (): void {
    const id = this.activateRoute.snapshot.params[ 'id' ];

    this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
      console.log( movie );
      this.movie = movie;
    } )
    // console.log(id);
  }

  /**
   * @name onRegresar PeliculaComponent
   */
  onRegresar () {
    this.location.back();
  }

}
