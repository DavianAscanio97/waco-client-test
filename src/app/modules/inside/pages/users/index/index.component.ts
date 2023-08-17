import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PokemonService } from '@app/shareds/services/pokemon.service';
import { UsersService } from '@app/shareds/services/users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { lastValueFrom } from 'rxjs';
import { FormComponent } from '../form/form.component';
import Swal from 'sweetalert2'


interface Users {
  _id: string,
  username: string;
  email: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [PokemonService]
})
export class IndexComponent implements OnInit {

  @ViewChild("myModalConf", { static: false }) myModalConf!: TemplateRef<any>;
  public loading = false;
  allUsers: Users[] = [];
  users: Users[] = [];
  page: number = 1
  collection = [];
  searchTerm!: string;
  pageSize = 4;
  collectionSize!: number;
  modal: any;

  constructor(
    private _usersService: UsersService,
    private _modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadGetAllUsers()
  }

  updateUserModal(id: string) {
    this.modal = this._modalService.open(FormComponent, { size: 'md', backdrop: 'static', keyboard: false });
    this.modal.componentInstance.id = id;
  }

  async loadGetAllUsers() {
    this.users = []
    this.loading = true;
    this.users = await lastValueFrom(
      this._usersService.getAllUsers()
    )
    this.allUsers = this.users
    this.loading = false;
  }

  search(event: any): void {
    if (!event.target.value.length){
      this.users = this.allUsers
    }
    this.collectionSize = this.users.length;
  }


  async deleteUser(id: string){
    Swal.fire({
      title: '¿Quieres eliminar el usuario?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No Eliminar`,
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        const response = await lastValueFrom(
          this._usersService.deleteUser(id)
        )
          if(response) {
            Swal.fire('Se ha eliminado el usuario correctamente', '', 'success')
            this.loadGetAllUsers()
          }
      } else if (result.isDenied) {
        Swal.fire('No se han modificado cambios', '', 'info')
      }
    })

  }

}
