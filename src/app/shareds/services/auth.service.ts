import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable, lastValueFrom } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public jwtHelper: JwtHelperService = new JwtHelperService()
  url: string = `${environment.apiBaseUrl}/auth`;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    ) { }

  login(data: any): Observable<any> {
    return this._http.post(`${this.url}/login`, data);
  }

  public isAuthenticated(): boolean {
    try {
      const token = localStorage.getItem('token')
      return !this.jwtHelper.isTokenExpired(token ? token : '')
    } catch (error) {
      this.logout()
      return false
    }
  }

  async logout(removeTokenBackend = true): Promise<void> {
    if (removeTokenBackend)
    await lastValueFrom(this._http.get(`${this.url}/revoke-token`))
    localStorage.removeItem('token')
    this._router.navigateByUrl('login')
  }

}
