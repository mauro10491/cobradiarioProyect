import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserCarouselComponent } from '../../../../../shared/components/user-carousel/user-carousel.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserCarouselComponent],
  templateUrl: './user-list.component.html',
  styles: ``
})
export class UserListComponent {

}
