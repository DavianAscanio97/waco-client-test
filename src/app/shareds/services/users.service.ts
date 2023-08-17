import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '@environments/environment'
import { Observable } from 'rxjs'

interface User {
  _id: string,
  username: string;
  email: string;
  password? : string;
  city: string;
  birthdate: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL = `${environment.apiBaseUrl}/users`;

  constructor(private _httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this._httpClient.get<any>(`${this.API_URL}`)
  }

  getUserId(id: string): Observable<any> {
    return this._httpClient.get<any>(`${this.API_URL}/${id}`)
  }

  changeFavorites(action: string, data: { pokemonName : string}): Observable<any> {
    return this._httpClient.post<any>(`${this.API_URL}/favorites/${action}`, data)
  }

  updateUser(id: string, data: User): Observable<any> {
    return this._httpClient.put<any>(`${this.API_URL}/${id}`, data)
  }

  deleteUser(id: string): Observable<any> {
    return this._httpClient.delete<any>(`${this.API_URL}/${id}`)
  }

  createUser(data: User): Observable<any> {
    return this._httpClient.post<any>(`${this.API_URL}`, data)
  }
}
