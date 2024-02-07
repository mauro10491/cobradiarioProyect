import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser():Observable<User[]>{
    return this.http.get<User[]>('http://127.0.0.1:3000/api/v1/users');
  }

  getUserById(id: number | undefined):Observable<User>{
    return this.http.get<User>(`http://127.0.0.1:3000/api/v1/users/findone/${id}`);
  }

  createUser(user: User):Observable<User>{
    return this.http.post<User>('http://127.0.0.1:3000/api/v1/users', user)
  }

  updateUser(id: number | undefined, user: User):Observable<User>{
    return this.http.patch<User>(`http://127.0.0.1:3000/api/v1/users/${id}`, user)
  }

  deleteUser(id: number | undefined){
    return this.http.delete(`http://127.0.0.1:3000/api/v1/users/${id}`)
  }
}
