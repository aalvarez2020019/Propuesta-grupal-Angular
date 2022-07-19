import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';


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
    this._usuariosServices.login(this.usuariosModel).subscribe(
      (response)=>{

        this.getToken();
        localStorage.setItem("identidad",JSON.stringify(response.Usuario))
        console.log(response);

        this._router.navigate(['/inicio'])
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }




}
