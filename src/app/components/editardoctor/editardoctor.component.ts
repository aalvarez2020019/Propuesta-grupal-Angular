import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario.model';
import { DoctorservicioService } from 'src/app/services/doctorservicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editardoctor',
  templateUrl: './editardoctor.component.html',
  styleUrls: ['./editardoctor.component.scss'],
  providers: [DoctorservicioService]
})
export class EditardoctorComponent implements OnInit {

  public token;

  public doctoresModelGetId: Usuarios;


  constructor(public _doctorService: DoctorservicioService) {

    this.doctoresModelGetId = new Usuarios('', '', '', '', '', '', '', 0);

    this.token = this._doctorService.obtenerToken()

   }

  ngOnInit(): void {

    this.getDoctoresId(this._doctorService.obtenerIdentidad()._id);

  }

  getDoctoresId(idUsuario){
    this._doctorService.obtenerDoctoresId(idUsuario, this._doctorService.obtenerToken()).subscribe(

      (response)=>{
        this.doctoresModelGetId = response.Usuario;
        console.log(this.doctoresModelGetId )
      },

    )
  }

  putDoctores(){
    this._doctorService.editarDoctores(this.doctoresModelGetId, this._doctorService.obtenerToken()).subscribe(

      (response)=>{
        console.log(response);

        Swal.fire(
          '¡Editado!',
          'El doctor fue editado exitosamente',
          'success'
        )

      },

    )
  }

  eliminarDoctores(id){
    this._doctorService.eliminarUsuarios(id, this.token).subscribe(

      (response)=>{
        console.log(response);

        Swal.fire(
          '¡Eliminado!',
          'El doctor fue eliminado correctamente',
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
