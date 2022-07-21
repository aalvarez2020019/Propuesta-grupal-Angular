import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario.model';

// importacion servicios
import { SuperadminservicioService } from 'src/app/services/superadminservicio.service';


@Component({
  selector: 'app-vistaadmin',
  templateUrl: './vistaadmin.component.html',
  styleUrls: ['./vistaadmin.component.scss'],
  providers: [SuperadminservicioService]
})

export class VistaadminComponent implements OnInit {

  // get usuarios

  public usuariosModelGet: Usuarios;

  public doctoresModelGet: Usuarios;

  public usuariosModelPost: Usuarios;

  public doctoresModelGetId: Usuarios;



  public token;


  constructor(public _usuarioService: SuperadminservicioService) {

    this.usuariosModelPost = new Usuarios('', '', '', '', '', '', '', 0);
    this.doctoresModelGetId = new Usuarios('', '', '', '', '', '', '', 0);
    this.token = this._usuarioService.obtenerToken();

  }


  getUsuarios(){
    this._usuarioService.obtenerUsuarios(this._usuarioService.obtenerToken()).subscribe(

     (response) => {

       this.usuariosModelGet = response.Usuario;

       console.log(this.usuariosModelGet);
     },

    )
  }

  getDoctores(){
    this._usuarioService.obtenerDoctores(this._usuarioService.obtenerToken()).subscribe(

     (response) => {

       this.doctoresModelGet = response.Usuario;

       console.log(this.doctoresModelGet);
     },

    )
  }

    // Agregar admin hotel
    postAdminAgregar(){
      this._usuarioService.agregarDoctor(this.usuariosModelPost, this._usuarioService.obtenerToken()).subscribe(

        (response)=>{
          console.log(response);
          this.getDoctores();

        (error)=>{
          console.log(error)

        }


      }
    )
  }

  // GET ID HOTEL
verDoctorid(idUser){

  this._usuarioService.obtenerDoctoresId(idUser, this.token).subscribe(

    (response)=>{
      console.log(response);

      this.doctoresModelGetId = response.Usuario;

    },

    (error)=>{
      console.log(error)

    }
  )
}



  ngOnInit(): void {

    this.getUsuarios();
    this.getDoctores();
  }

}
