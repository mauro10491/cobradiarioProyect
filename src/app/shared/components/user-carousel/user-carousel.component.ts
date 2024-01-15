import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-user-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-carousel.component.html',
  styleUrl: './user-carousel.component.css'
})
export class UserCarouselComponent {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  private initSwiper(){
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 4,
      slidesPerGroup: 3, 
      centeredSlides: true,
      loop: false,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    })
  }

}
