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
  public token;

  constructor(public _doctorService: DoctorservicioService) {

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

  ngOnInit(): void {
    this.getCitas();
  }

}
