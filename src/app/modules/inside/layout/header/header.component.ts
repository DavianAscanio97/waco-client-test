import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shareds/services/auth.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'layout-inside-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class InsideHeaderComponent implements OnInit {
  username: string = ''
  apiDocs: string = environment.apiBaseUrl + '/api-docs'
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userCurrent()
  }

  logout(){
    this._authService.logout()
  }

  userCurrent(): any {
    let user: any = localStorage.getItem('user')
    user = user ? JSON.parse(user) : null
    if (user) {
      this.username = user.username
    }
    console.log(this.username)
  }
}
