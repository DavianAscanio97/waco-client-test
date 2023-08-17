import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '@app/shareds/services/users.service';
import { lastValueFrom } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  form!: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _usersService: UsersService,
  ) { }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm() {
    this.form = this._fb.group({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i),
      ]),
      email: new FormControl(null, [
        Validators.required, Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required
      ]),
    })
  }

  get f(): any {
    return this.form.controls;
  }

  async createUser() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return
    }
    let response = await lastValueFrom(this._usersService.createUser(this.form.value))
    if (response.status == 'success') {
      Swal.fire('Se ha creado el usuario correctamente, por favor inicia sesión', '', 'success')
    } else {
      Swal.fire('Ha ocurrido un error inesperado', '', 'error')
    }
  }


}
