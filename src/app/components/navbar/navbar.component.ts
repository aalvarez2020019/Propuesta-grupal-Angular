import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public _usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {

  }

  clearToken(){
    localStorage.clear();

    Swal.fire({
      icon: 'success',
      title: 'Se ha cerrado la sesión',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
