import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Carousel {
  slides = [
    { img: "/assets/backgrounds/slider-1.jpg" },
    { img: "/assets/backgrounds/slider-2.jpg" },
    { img: "/assets/backgrounds/slider-3.jpg" },
  ];
}
