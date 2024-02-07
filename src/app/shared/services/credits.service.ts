import { Injectable } from '@angular/core';
import { Credit } from '../models/client.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditsService {

  constructor(private http: HttpClient) { }

  crearCredito(credito: Credit):Observable<Credit>{
    return this.http.post<Credit>('http://127.0.0.1:3000/api/v1/credits', credito)
  }
}
