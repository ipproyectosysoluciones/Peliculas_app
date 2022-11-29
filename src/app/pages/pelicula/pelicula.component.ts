import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  constructor ( private activateRoute: ActivatedRoute,
                private peliculasService: PeliculasService) { }

  ngOnInit (): void {
    const id = this.activateRoute.snapshot.params[ 'id' ];

    this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => {
      console.log( movie );
    } )

    console.log(id);
  }

}
