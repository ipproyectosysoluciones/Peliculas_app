import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];

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
      } );
  }

}
