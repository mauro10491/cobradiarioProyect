import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../../shared/services/user.service';
import { User } from '../../../../../shared/models/user.model';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  userId: number | undefined;

  mostrarPassword = false;

  userName = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  cellphone = new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]);
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/), Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/), Validators.minLength(8)]);
  user: User | undefined;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private userService: UserService) {}


  ngOnInit(){
    this.route.params.subscribe(params => {
      this.userId = +params['id'] 
    });
    console.log(this.userId);
    this.getUser();
  }

  getUser(){
    return this.userService.getUserById(this.userId).subscribe((data: User) => {
      this.user = data;
      console.log(this.user);
    });
  }

  updateUser(){
    const updatedUser = {
      username: this.userName.value || this.user?.username,
      email: this.email.value || this.user?.email,
      password: this.password.value || this.user?.password,
    };
    console.log(updatedUser)
    this.userService.updateUser(this.userId, updatedUser).subscribe({
      next: data => {
        alert('Usuario actualizado con exito')
      },
      error: err => {
        if (err.status === 409 && err.error.message === 'SequelizeUniqueConstraintError') {
          console.error('Error: El nombre de usuario o el correo electrónico ya está en uso.');
          // Mostrar un mensaje al usuario o realizar otra acción aquí
        } else {
          console.error('Error en la creación de usuario:', err);
        }
      }
    })
  }
  deleteUser(){
    this.userService.deleteUser(this.userId).subscribe({
      next: data => {
        alert('usuario con id: ' +  this.userId + ' eliminado');
        this.router.navigate(['/']);
      },
      error: err => {
        console.log(err);
      }
    })
  }

  verCreditos(){
    this.router.navigate(['/credit-user', this.userId]);
  }

  showPassword(){
    this.mostrarPassword = !this.mostrarPassword;
  }
}
