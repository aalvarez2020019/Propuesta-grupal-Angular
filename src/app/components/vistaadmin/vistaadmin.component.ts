import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario.model';
import { Hospitales } from 'src/app/models/hospital.model';

import Swal from 'sweetalert2';

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

  // hospitales
  public hospitalesModelGet: Hospitales;

  public hospitalModelPost: Hospitales;

  public hospitalesModelGetId: Hospitales;



  public token;


  constructor(public _usuarioService: SuperadminservicioService) {

    this.usuariosModelPost = new Usuarios('', '', '', '', '', '', '', 0);
    this.doctoresModelGetId = new Usuarios('', '', '', '', '', '', '', 0);

    this.hospitalModelPost = new Hospitales('', '', '', '', '', 0);
    this.hospitalesModelGetId = new Hospitales('', '', '', '', '', 0);

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

          Swal.fire(
            '¡Agregado!',
            'El doctor fue agregado con éxito',
            'success'
          )
        },
        (error)=>{
          console.log(error)
          Swal.fire({
          icon: 'error',
          title: 'No se pudo agregar',
          text: error.error.message,
          footer: 'El correo ya existe, ingrese otro',

        })
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


 // eliminar usuarios
 eliminarUsuarios(idServicio){

  this._usuarioService.eliminarUsuarios(idServicio, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getUsuarios();


    },
    (error)=>{
      console.log(error)

  }
  )
}

 // eliminar doctores
 eliminarDoctores(idServicio){

  this._usuarioService.eliminarDoctores(idServicio, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getDoctores();


    },
    (error)=>{
      console.log(error)

  }
  )
}

 // editar usuarios
 putUsuarios(){

  this._usuarioService.editarUsuarios(this.doctoresModelGetId, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getUsuarios();

    },


  )
}

// editar doctores
putDoctores(){

  this._usuarioService.editarDoctores(this.doctoresModelGetId, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getDoctores();

    },

  )
}

getHospitales(){
  this._usuarioService.verhospitalesAdmin(this._usuarioService.obtenerToken()).subscribe(

   (response) => {

     this.hospitalesModelGet = response.Usuario;

     console.log(this.hospitalesModelGet);

   },

  )
}

 // Agregar hospital
 agregarHospital(){
  this._usuarioService.agregarHospital(this.hospitalModelPost, this._usuarioService.obtenerToken()).subscribe(

    (response)=>{
      console.log(response);
      this.getHospitales();

      Swal.fire(
        '¡Agregado!',
        'El hospital fue agregado con éxito',
        'success'
      )
    },
    (error)=>{
      console.log(error)
      Swal.fire({
      icon: 'error',
      title: 'No se pudo agregar',
      text: error.error.message,
      footer: 'Revise sus datos',

    })
  }
)
}


 // Ver hospital id
 verHospitalId(idHospital){

  this._usuarioService.hospitalesId(idHospital, this.token).subscribe(

    (response)=>{
      console.log(response);

      this.hospitalesModelGetId = response.Usuario;

    },

    (error)=>{
      console.log(error)

    }
  )
}

// editar hospitales
editarHospitales(){

  this._usuarioService.editarHospitales(this.hospitalesModelGetId, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getHospitales();

    },

  )
}

// eliminar hospitales
eliminarHospitales(idHospital){

  this._usuarioService.eliminarHospitales(idHospital, this.token).subscribe(

    (response)=>{

      console.log(response);

      this.getHospitales();


    },
    (error)=>{
      console.log(error)

  }
  )
}




  ngOnInit(): void {

    this.getUsuarios();
    this.getDoctores();
    this.getHospitales();
  }

}
