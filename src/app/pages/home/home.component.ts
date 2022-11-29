import { Component, HostListener, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener( 'window: scroll', [ '$event' ] )

  onScroll () {
    const pos = ( document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );

    if ( pos > max ) {
      //TODO: llamar el servicio
      console.log( 'Llammar al servicio' );
      this.peliculasService.getCartelera()
        .subscribe( resp => {
          this.movies.push( ...resp.results );
      } );
    }

  }

  /**
   * @name constructor HomeComponent
   * @param peliculasService
   */
  constructor ( private peliculasService: PeliculasService ) { }

  /**
   * @name ngOnInit
   */
  ngOnInit (): void {
    this.peliculasService.getCartelera()
      .subscribe( resp => {
        // console.log( resp.results );
        this.movies = resp.results;
        this.moviesSlideshow = resp.results;
      } );
  }

}
