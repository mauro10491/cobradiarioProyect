import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './modules/users/pages/list/user-list/user-list.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserListComponent, NavBarComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cobradiarioProyect';
}
