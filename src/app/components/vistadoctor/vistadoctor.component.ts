import { Component, OnInit } from '@angular/core';
import { Citas } from 'src/app/models/cita.model';

import { DoctorservicioService } from 'src/app/services/doctorservicio.service';

@Component({
  selector: 'app-vistadoctor',
  templateUrl: './vistadoctor.component.html',
  styleUrls: ['./vistadoctor.component.scss'],
  providers: [DoctorservicioService]
})
export class VistadoctorComponent implements OnInit {

  public citasModelGet: Citas;

  public citasModelGetId: Citas;

  public token;

  constructor(public _doctorService: DoctorservicioService) {

    this.citasModelGetId = new Citas('', '', '', '', '', 0, '', '', '', 0, '', '', 0, '', '');

    this.token = this._doctorService.obtenerToken();

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




  ngOnInit(): void {
    this.getCitas();
  }

}
