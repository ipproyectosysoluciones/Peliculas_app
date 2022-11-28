import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';

// import Swiper core and required modules
// import SwiperCore, { Navigation, SwiperOptions } from "swiper";

// install Swiper modules
// SwiperCore.use( [ Navigation ] );

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  // swiperConfig: SwiperOptions = {
  //   slidesPerView: 1,
  //   spaceBetween: 20,
  //   navigation: true,
  //   breakpoints: {
  //     992: {
  //       spaceBetween: 20
  //     }
  //   }
  // };

  constructor () { }

/**
 * @name ngAfterViewInit SlideshowComponent
 */
  ngAfterViewInit (): void {
    const swiper = new Swiper( '.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,

    } );
  }

  ngOnInit (): void {
    console.log( this.movies );
  }

}
