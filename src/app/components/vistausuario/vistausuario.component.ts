import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario.model';
import { Citas } from 'src/app/models/cita.model';
import { Hospitales } from 'src/app/models/hospital.model';

import Swal from 'sweetalert2';


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

  public doctoresModelGetId: Usuarios;

  // ver citas por id
  public citasModelGetId: Citas;

  // ver hospitales
  public hospitalesModelGet: Hospitales;

  public token;


  constructor(public _usuarioService: UsuariosService) {

    this.citasModelPost = new Citas('', '', '', '', '', 0, '', '', '', 0, '', '', 0, '', '');
    this.doctoresModelGetId = new Usuarios('', '', '', '', '', '', '', 0);


    this.citasModelGetId = new Citas('', '', '', '', '', 0, '', '', '', 0, '', '', 0, '', '');

    this.token = this._usuarioService.obtenerToken();

  }


  clasificacion=[
    {tipo: "7 a 8 AM"},
    {tipo: "8 a 9 AM"},
    {tipo: "9 a 10 AM"},
    {tipo: "10 a 11 AM"},
    {tipo: "11 a 12 PM"},
    {tipo: "12 a 1 PM"},
    {tipo: "1 a 2 PM"},
    {tipo: "2 a 3 PM"},
    {tipo: "3 a 4 PM"},
    {tipo: "4 a 5 PM"},
    {tipo: "5 a 6 PM"},
    {tipo: "6 a 7 PM"},
  ]

  getHospitales(){

    this._usuarioService.verHospitales(this._usuarioService.obtenerToken()).subscribe(

     (response) => {

       this.hospitalesModelGet = response.Usuario;

       console.log(this.hospitalesModelGet);

     },

    )
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

        Swal.fire(
          '¡Agregado!',
          'La cita fue agregada con éxito',
          'success'
        )
    }, (error)=>{

      console.log(error)
      Swal.fire({
      icon: 'error',
      title: 'No se pudo agregar',
      text: error.error.message,
      footer: 'Datos incompletos o ya esta reservada esa hora',

    })
    }
  )
}

// GET ID HOTEL
getDoctorId(idUser){

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

// GET ID CITAS
getCitasId(idCita){

  this._usuarioService.obtenerCitasId(idCita, this.token).subscribe(

    (response)=>{
      console.log(response);

      this.citasModelGetId = response.Usuario;

    },

    (error)=>{
      console.log(error)

    }
  )
}


// editar citas
putCitas(){

  this._usuarioService.editarCitas(this.citasModelGetId, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getCitas();

    },

  )
}


 // eliminar citas
 eliminarCitas(idCita){

  this._usuarioService.eliminarCitas(idCita, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getCitas();

    },
    (error)=>{
      console.log(error)

  }
  )
}




  ngOnInit(): void {
    this.getDoctores();
    this.getCitas();
    this.getHospitales();
  }


}
