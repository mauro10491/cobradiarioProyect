import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  getClient():Observable<Client[]>{
    return this.http.get<Client[]>('http://127.0.0.1:3000/api/v1/clients')
  }

  getClientById(id: number | undefined):Observable<Client>{
    return this.http.get<Client>(`http://127.0.0.1:3000/api/v1/clients/findone/${id}`)
  }

  createClient(client: Client):Observable<any>{
    return this.http.post<Client>('http://127.0.0.1:3000/api/v1/clients', client)
  }

  deleteClient(id: number | undefined){
    return this.http.delete(`http://127.0.0.1:3000/api/v1/clients/${id}`)
  }

  updateClient(id: number | undefined, client: Client):Observable<Client>{
    return this.http.patch<Client>(`http://127.0.0.1:3000/api/v1/clients/${id}`, client)
  }
}
