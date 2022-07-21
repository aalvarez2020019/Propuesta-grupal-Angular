import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  providers: [ UsuariosService ]
})
export class RegistrarComponent implements OnInit {

  public usuariosModel: Usuarios;

  constructor(
    private _usuarioService: UsuariosService,
    private _router: Router
  ) {
    this.usuariosModel = new Usuarios('', '', '', '', '', '', '', 0);
  }

  ngOnInit(): void {

  }

  registrar() {
    this._usuarioService.registrarUsuarios(this.usuariosModel).subscribe(

      (response) => {
        console.log(response);
        this._router.navigate(["login"]);

        Swal.fire(
          '¡Registrado!',
          'El usuario fue agregado con éxito',
          'success'
        )
      },
      (error) =>{
        console.log(error)
        Swal.fire({
        icon: 'error',
        title: 'No se pudo agregar',
        text: error.error.message,
        footer: 'Llene todos los datos',

      })
      }
    );
  }


}
