import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ UsuariosService ]

})
export class LoginComponent implements OnInit {


  // imprimir
  public usuariosModel: Usuarios;

  constructor(private _usuariosServices: UsuariosService, private _router: Router) {

    this.usuariosModel = new Usuarios('', '', '', '', '', '', '', 0);

  }

  ngOnInit(): void {
  }

  getToken(){
    this._usuariosServices.login(this.usuariosModel,"true").subscribe(

      (response)=>{
        console.log(response.token);
        localStorage.setItem("token",response.token)

      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

  getTokenPromesa(): Promise<any> {

    return new Promise((resolve, reject) =>{

      this._usuariosServices.login(this.usuariosModel, "true").subscribe(

        (response) => {
          localStorage.setItem("token", response.token)
          resolve(response);
        },
          (error)=>{
            console.log(<any>error);
          }

      )
    })

  }

  login(){
    this._usuariosServices.login(this.usuariosModel, "false").subscribe(
      (response)=>{

        this.getTokenPromesa().then(respuesta=>{

          console.log(response);
          localStorage.setItem("identidad", JSON.stringify(response.Usuario))

          if (this._usuariosServices.obtenerIdentidad().rol === 'ROL_ADMIN') {
            this._router.navigate(['/admin/vistaadmin']);

          } else if (this._usuariosServices.obtenerIdentidad().rol === 'ROL_DOCTOR') {
            this._router.navigate(['/doctor/vistadoctor']);

          } else if (this._usuariosServices.obtenerIdentidad().rol === 'ROL_USUARIO') {
            this._router.navigate(['/usuario/vistausuario']);
          }

        })

        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: 'Logueado exitosamente',
          showConfirmButton: false,
          timer: 1500

        })
      },

      (error)=>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: error.error.mensaje,
          footer: '*Ingrese los datos de nuevo*',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }




}
