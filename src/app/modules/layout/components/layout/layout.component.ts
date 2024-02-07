import { Component } from '@angular/core';
import { NavBarComponent } from '../../../../shared/components/nav-bar/nav-bar.component';
import { UserListComponent } from "../../../users/pages/list/user-list/user-list.component";
import { ModalComponent } from '../../../users/pages/update/modal/modal.component'; 
import { CommonModule } from '@angular/common';
import { ClientCarouselComponent } from '../../../../shared/components/client-carousel/client-carousel.component';
import { UserCarouselComponent } from '../../../../shared/components/user-carousel/user-carousel.component';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css',
    imports: [NavBarComponent, 
              UserListComponent, 
              ModalComponent, 
              CommonModule, 
              ClientCarouselComponent, 
              UserCarouselComponent]
})
export class LayoutComponent {
}
