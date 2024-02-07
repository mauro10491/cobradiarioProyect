import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Client } from '../../../../../shared/models/client.model';
import { ClientServiceService } from '../../../../../shared/services/client-service.service';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent implements OnInit{

  createClientService = inject(ClientServiceService);

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

  constructor(private http: HttpClient){

  }

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
  }

  createClient(){
    const Client: Client = {
      name: this.name.value,
      documentId: this.documentId.value,
      pais: this.pais.value,
      routeId: this.routeId.value,
      direccion: this.direccion.value,
      longitud: this.longitud.value,
      latitud: this.latitud.value,
      phone1: this.phone1.value,
      phone2: this.phone2.value,
      comments: this.comments.value
    }
    console.log(Client);

    this.createClientService.createClient(Client).subscribe({
      next: data => {
        alert('usario creado con exito')
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
