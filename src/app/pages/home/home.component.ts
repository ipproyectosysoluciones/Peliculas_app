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
      // console.log( 'Llammar al servicio' );
      if ( this.peliculasService.cargando ) { return; };

      this.peliculasService.getCartelera()
        .subscribe( movies => {
          this.movies.push( ...movies );
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
      .subscribe( movies => {
        // console.log( resp.results );
        this.movies = movies;
        this.moviesSlideshow = movies;
      } );
  }

}
