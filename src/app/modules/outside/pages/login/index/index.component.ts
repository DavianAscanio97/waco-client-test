import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shareds/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [AuthService]
})
export class IndexComponent implements OnInit {

  email = ''
  password = ''
  errorText = ''
  successfulText = ''

  constructor(
    private _authService: AuthService,
    private _jwtHelper: JwtHelperService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  sendLogin(){
    this.errorText = ''
    if (this.email == '' || this.password == '') {
      this.errorText = 'Llenar todos los campos obligatorios'
      alert('Llenar todos los campos obligatorios')
      return
    }

    const credentials: { email: string, password : string} = {
      email: this.email,
      password: this.password
    }
    this._authService.login(credentials).subscribe((res) => {
      if (res.status == 'success') {
        const token = res.data.token
        const user = res.data.user
        const decodeToken = this._jwtHelper.decodeToken(token)
        const isValidEmail = this.validateEmailToken(decodeToken)
        if (isValidEmail) this.storeToken(token, user)
      }
      if (res.status == 'error') {
        this.errorText = res.message
      }
    })
  }

  storeToken(token: string, user: any) {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
    this._router.navigateByUrl('/me')
  }

  validateEmailToken(decode: { email?: string } = {}) {
    if (decode.email !== this.email) {
      alert('Existe un problema con la autentificación')
      return false
    }
    return true
  }

}
