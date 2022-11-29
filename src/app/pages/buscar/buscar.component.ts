import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

 /**
  * @name constructor BuscarComponent
  * @param activateRoute
  * @param peliculasService
  */
  constructor ( private activateRoute: ActivatedRoute,
                private peliculasService: PeliculasService ) { }

  ngOnInit (): void {
    this.activateRoute.params.subscribe( params => {
      console.log( params[ 'texto' ] );
      this.peliculasService.buscarPelicula( params[ 'texto' ] )
        .subscribe( movies => {
          console.log( movies );
      } )
    } )
  }

}
