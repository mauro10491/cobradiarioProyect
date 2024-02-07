import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { ClientServiceService } from '../../services/client-service.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-carousel',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './client-carousel.component.html',
  styleUrl: './client-carousel.component.css'
})
export class ClientCarouselComponent {

  constructor(private clientService: ClientServiceService, private router: Router){

  }

  clients: Client[] = [];

  @ViewChild('swiperContainer') swiperContainer!: ElementRef

  ngAfterViewInit(): void {
    this.initSwiper();
    this.getClients();
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

  getClients(){
    return this.clientService.getClient().subscribe((data: Client[]) => {
      this.clients = data;
      console.log(this.clients,  'este es ')
    });
  }

  
  openClientDetails(Id: string | null | undefined){
    this.router.navigate(['/client', Id]);
  }

}
