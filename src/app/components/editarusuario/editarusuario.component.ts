import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.scss'],
  providers: [UsuariosService]
})
export class EditarusuarioComponent implements OnInit {

  public token;

  public usuariosModelGetId: Usuarios;


  constructor(public _usuariosService: UsuariosService) {

    this.usuariosModelGetId = new Usuarios('', '', '', '', '', '', '', 0);
    this.token = this._usuariosService.obtenerToken()

  }

  ngOnInit(): void {
    this.getUsuariosId(this._usuariosService.obtenerIdentidad()._id);

  }

  getUsuariosId(idUsuario){

    this._usuariosService.obtenerDoctoresId(idUsuario, this._usuariosService.obtenerToken()).subscribe(

      (response)=>{
        this.usuariosModelGetId = response.Usuario;
        console.log(this.usuariosModelGetId )
      },

    )
  }

  putUsuarios(){
    this._usuariosService.editarUsuarios(this.usuariosModelGetId, this._usuariosService.obtenerToken()).subscribe(

      (response)=>{
        console.log(response);

        Swal.fire(
          '¡Editado!',
          'El usuario fue editado exitosamente',
          'success'
        )

      },

    )
  }

  eliminarUsuarios(id){

    this._usuariosService.eliminarUsuarios(id, this.token).subscribe(

      (response)=>{
        console.log(response);

        Swal.fire(
          '¡Eliminado!',
          'El usuario fue eliminado correctamente',
          'success'
        )

      },
      (error)=>{
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'No se puede eliminar',
          text: error.error.message,
          footer: 'Revise sus datos y vuelvalo a intentar',

        })
    }
    )
  }

}
