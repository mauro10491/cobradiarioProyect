import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../../shared/services/user.service';
import { User } from '../../../../../shared/models/user.model';

@Component({
  selector: 'app-crete-user',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './crete-user.component.html',
  styleUrl: './crete-user.component.css'
})
export class CreteUserComponent {

  creatUserService = inject(UserService);
  menuVisible = false;
  selectedId: number | null = null; 
  selectedRole: string = 'Options';

  userName = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  cellphone = new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]);
  password = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/), Validators.minLength(8)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/), Validators.minLength(8)]);

  crearUsuario(){
    const user: User = { 
      username: this.userName.value,
      email: this.email.value,
      cellPhone: this.cellphone.value,
      password: this.password.value,
      role: {
        id: this.selectedId,
        name: this.selectedRole
      }
    };
    console.log(user)

    this.creatUserService.createUser(user).subscribe({
      next: data => {
        alert('Usuario creado con exito')
      },
      error: err => {
        if (err.status === 409 && err.error.message === 'SequelizeUniqueConstraintError') {
          console.error('Error: El nombre de usuario o el correo electrónico ya está en uso.');
          // Mostrar un mensaje al usuario o realizar otra acción aquí
        } else {
          console.error('Error en la creación de usuario:', err);
        }
      }
    });
  }

  toggleMenu(){
    this.menuVisible = !this.menuVisible;
  }

  obtenerId(id: number){
    this.selectedId = id;

    if(this.selectedId === 1){
      this.selectedRole = 'Admin';
    } else if(this.selectedId === 2){
      this.selectedRole = 'Supervisor';
    }else if(this.selectedId === 1){
      this.selectedRole = 'Cobrador';
    }
    this.toggleMenu()
    console.log(id)
  }
}
