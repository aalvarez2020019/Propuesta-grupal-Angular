import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario.model';
import { Citas } from 'src/app/models/cita.model';


// servicios
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-vistausuario',
  templateUrl: './vistausuario.component.html',
  styleUrls: ['./vistausuario.component.scss'],
  providers: [UsuariosService]
})
export class VistausuarioComponent implements OnInit {

  public doctoresModelGet: Usuarios;

  public citasModelGet: Citas;

  public citasModelPost: Citas;

  public token;


  constructor(public _usuarioService: UsuariosService) {

    this.citasModelPost = new Citas('', '', '', '', '', 0, '', '', '', 0, '', '', 0, '', '');
    this.token = this._usuarioService.obtenerToken();

  }

  getDoctores(){
    this._usuarioService.verDoctores(this._usuarioService.obtenerToken()).subscribe(

     (response) => {

       this.doctoresModelGet = response.Usuario;

       console.log(this.doctoresModelGet);

     },

    )
  }

  getCitas(){
    this._usuarioService.verCitas(this._usuarioService.obtenerToken()).subscribe(

     (response) => {

       this.citasModelGet = response.Usuario;

       console.log(this.citasModelGet);

     },

    )
  }

  // Agregar admin hotel
  postAgregarCitas(){
    this._usuarioService.agregarCita(this.citasModelPost, this._usuarioService.obtenerToken()).subscribe(

      (response)=>{
        console.log(response);
        this.getCitas();

      (error)=>{
        console.log(error)

      }


    }
  )
}


  ngOnInit(): void {
    this.getDoctores();
    this.getCitas();
  }


}
