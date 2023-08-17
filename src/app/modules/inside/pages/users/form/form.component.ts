import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '@app/shareds/services/users.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { lastValueFrom } from 'rxjs';
import Swal from 'sweetalert2'

interface User {
  _id: string,
  username: string;
  email: string;
  city: string;
  birthdate: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: []
})
export class FormComponent implements OnInit {
  @Input() id!: string;
  user!: User
  form!: FormGroup
  loading = false
  constructor(
    private _usersService: UsersService,
    private _fb: FormBuilder,
    private _activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.loadForm()
    this.loadInfoUser()
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
        Validators.required
      ]),
      city: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1]*$/i),
      ]),
      birthdate: new FormControl(null, [
        Validators.required
      ])
    })
  }

  async loadInfoUser(){
    this.loading = true
    this.user = await lastValueFrom(
      this._usersService.getUserId(this.id)
    )
    this.form.controls['username'].setValue(this.user.username);
    this.form.controls['email'].setValue(this.user.email);
    this.form.controls['city'].setValue(this.user.city);
    this.form.controls['birthdate'].setValue(this.user.birthdate);
    this.loading = false
  }

  async updateUser(){
    let response = await lastValueFrom(this._usersService.updateUser(this.id, this.form.value))
    if(response.status == 'success') {
      Swal.fire('Se ha actualizado el usuario correctamente', '', 'success')
      this.cerrarModal()
    } else {
      Swal.fire('Ha ocurrido un error inesperado', '', 'error')
    }
  }


  cerrarModal() {
    this._activeModal.close()
  }

}
