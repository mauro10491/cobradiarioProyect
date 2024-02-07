import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ClientServiceService } from '../../../../../shared/services/client-service.service';
import { Client } from '../../../../../shared/models/client.model';

@Component({
  selector: 'app-update-client',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './update-client.component.html',
  styleUrl: './update-client.component.css'
})
export class UpdateClientComponent {

  client: Client | undefined;

  userId: number | undefined;

  countries: string[] = [];

  name = new FormControl('', Validators.required);
  documentId = new FormControl('', [Validators.required]);
  pais = new FormControl('', Validators.required);
  routeId = new FormControl('', Validators.required);
  direccion = new FormControl('', Validators.required);
  longitud = new FormControl('', Validators.required);
  latitud = new FormControl('', Validators.required);
  phone1 = new FormControl('', Validators.required);
  phone2 = new FormControl('', Validators.required);
  comments = new FormControl('');

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private clienteService: ClientServiceService,
    private router: Router) { }

  ngOnInit() {
    this.http.get('https://restcountries.com/v3.1/all')
      .pipe(
        map((data: any) => (data as any[]).map(country => country.name.common)),
        map((sortName: string[]) => sortName.sort())
      )
      .subscribe(
        (names: string[]) => {
          this.countries = names;
          console.log(this.countries)
        },
        (error) => {
          console.error('Error al cargar los países:', error);
        }
      );

    this.route.params.subscribe(params => {
      this.userId = +params['id']
    });
    console.log(this.userId);
    this.getClient()
  }

  getClient() {
    this.clienteService.getClientById(this.userId).subscribe({
      next: data => {
        this.client = data;
        console.log(this.client)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  deleteClient() {
    this.clienteService.deleteClient(this.userId).subscribe({
      next: data => {
        alert('Usuario eliminado')
        console.log(data)
        this.router.navigate(['/']);
      },
      error: err => {
        console.log(err)
      }
    })
  }

  updateClient() {
    const client = {
      name: this.name.value || this.client?.name,
      documentId: this.documentId.value || this.client?.documentId,
      pais: this.pais.value || this.client?.pais,
      direccion: this.direccion.value || this.client?.direccion,
      longitud: this.longitud.value || this.client?.longitud,
      latitud: this.latitud.value || this.client?.latitud,
      phone1: this.phone1.value || this.client?.phone1,
      phone2: this.phone2.value || this.client?.phone2,
      comments: this.comments.value || this.client?.comments
    }

    this.clienteService.updateClient(this.userId, client).subscribe({
      next: data => {
        alert('Usuario Actualizado con exito')
        console.log(client)
      }, 
      error: err => {
        console.log(err);
      }
    })
  }

  verCreditos(){
    this.router.navigate(['/credit', this.userId]);
  }

}
