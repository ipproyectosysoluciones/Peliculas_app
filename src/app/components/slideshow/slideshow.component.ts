import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit (): void {
    console.log(this.movies);
  }

}
