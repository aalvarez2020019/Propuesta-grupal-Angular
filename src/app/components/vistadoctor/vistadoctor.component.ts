import { Component, OnInit } from '@angular/core';
import { Citas } from 'src/app/models/cita.model';

import { Datos } from 'src/app/models/dato.model';

import { Hospitales } from 'src/app/models/hospital.model';

import { DoctorservicioService } from 'src/app/services/doctorservicio.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-vistadoctor',
  templateUrl: './vistadoctor.component.html',
  styleUrls: ['./vistadoctor.component.scss'],
  providers: [DoctorservicioService]
})
export class VistadoctorComponent implements OnInit {

  public citasModelGet: Citas;

  public citasModelGetId: Citas;


  // datos
  public datosModelGet: Datos;

  public datosModelPost: Datos
  public datosModelGetId: Datos;

  // hospitales
  public hospitalesModelGet: Hospitales;

  public token;

  constructor(public _doctorService: DoctorservicioService) {

    this.citasModelGetId = new Citas('', '', '', '', '', 0, '', '', '', 0, '', '', 0, '', '');

    this.datosModelPost = new Datos('', '', '', '', '', 0, '');

    this.datosModelGetId = new Datos('', '', '', '', '', 0, '');

    this.token = this._doctorService.obtenerToken();

  }

  verHospitales(){
    this._doctorService.getHospitales(this._doctorService.obtenerToken()).subscribe(

     (response) => {

       this.hospitalesModelGet = response.Usuario;

       console.log(this.hospitalesModelGet);

     },

    )
  }



  getCitas(){
    this._doctorService.getCitas(this._doctorService.obtenerToken()).subscribe(

     (response) => {

       this.citasModelGet = response.Usuario;

       console.log(this.citasModelGet);

     },

    )
  }

  // GET ID CITAS
getCitasId(idCita){

  this._doctorService.verCitasId(idCita, this.token).subscribe(

    (response)=>{
      console.log(response);

      this.citasModelGetId = response.Usuario;

    },

    (error)=>{
      console.log(error)

    }
  )
}

// editar turno
editarTurno(){

  this._doctorService.putCitas(this.citasModelGetId, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getCitas();

    },

  )
}

getDatos(){
  this._doctorService.getDatos(this._doctorService.obtenerToken()).subscribe(

   (response) => {

     this.datosModelGet = response.Usuario;

     console.log(this.datosModelGet);

   },

  )
}

// GET Datos por id
getDatosId(idDatos){

  this._doctorService.datosPorId(idDatos, this.token).subscribe(

    (response)=>{
      console.log(response);

      this.datosModelGetId = response.Usuario;

    },

    (error)=>{
      console.log(error)

    }
  )
}

// editar datos
putDatos(){

  this._doctorService.editarDatos(this.datosModelGetId, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getDatos();

    },

  )
}

// Agregar datos
postAgregarDatos(){
  this._doctorService.agregarDatos(this.datosModelPost, this._doctorService.obtenerToken()).subscribe(

    (response)=>{
      console.log(response);
      this.getDatos();

      Swal.fire(
        '¡Agregado!',
        'Los datos fueron agregado con éxito',
        'success'
      )
    },

    (error)=>{
      console.log(error)
      Swal.fire({
      icon: 'error',
      title: 'No se pudo agregar',
      text: error.error.message,
      footer: 'Revise sus datos, es posible que la habitación ya exista',

    })
  }
)
}

// eliminar datos
eliminarDatos(idDatos){

  this._doctorService.eliminarDatos(idDatos, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getDatos();


    },
    (error)=>{
      console.log(error)

  }
  )
}



  ngOnInit(): void {
    this.getCitas();
    this.getDatos();
    this.verHospitales();
  }

}
