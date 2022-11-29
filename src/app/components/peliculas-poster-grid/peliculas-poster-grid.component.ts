import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { StarRatingComponent } from 'ng-starrating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  /**
   * @name constructor PeliculasPosterGridComponent
   * @param router
   */
  constructor( private router: Router ) { }

  ngOnInit (): void {
    // console.log( this.movies );
  }

  /**
   * @name onMovieClick PeliculasPosterGridComponent
   * @param movie
   */
  onMovieClick ( movie: Movie ) {
    // console.log( movie );
    this.router.navigate( [ '/pelicula', movie.id ] );
  }

  /**
   * @name onRate PeliculasPosterGridComponent
   * @param $event
   */
  onRate ( $event: { oldValue: number, newValue: number, starRating: StarRatingComponent; } ) {
    alert( `Old Value:${ $event.oldValue },
      New Value: ${ $event.newValue },
      Checked Color: ${ $event.starRating.checkedcolor },
      Unchecked Color: ${ $event.starRating.uncheckedcolor }` );
  }

}
