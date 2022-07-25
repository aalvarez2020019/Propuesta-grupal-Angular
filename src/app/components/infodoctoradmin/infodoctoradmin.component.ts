import { Component, OnInit } from '@angular/core';
import { Citas } from 'src/app/models/cita.model';
import { Datos } from 'src/app/models/dato.model';
import { ActivatedRoute } from '@angular/router';
import { SuperadminservicioService } from 'src/app/services/superadminservicio.service';

@Component({
  selector: 'app-infodoctoradmin',
  templateUrl: './infodoctoradmin.component.html',
  styleUrls: ['./infodoctoradmin.component.scss'],
  providers: [SuperadminservicioService]
})
export class InfodoctoradminComponent implements OnInit {

  public getCitasDoctor: Citas;

  public getDatosDoctor: Datos;

  public token;

  constructor(
    public _usuariosService: SuperadminservicioService,
    public _activatedRoute: ActivatedRoute,
  ) {

    // this.getCitasDoctor = new Citas('', '', '', '', '', 0, '', '', '', 0, '', '', 0, '', '');

    this.token = this._usuariosService.obtenerToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idDoctor'));

      this.verCitasDoc(dataRuta.get('idDoctor'));
      this.getDatosDoc(dataRuta.get('idDoctor'));


    })
  }

  // Ver citas del doctor
  verCitasDoc(idDoc){

    this._usuariosService.getCitasDoc(idDoc, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.getCitasDoctor = response.Usuario;

      },

      (error)=>{
        console.log(error)

      }
    )
  }

  // get datos del doctor
  getDatosDoc(idUser){
    this._usuariosService.datosDoctorAdmin(idUser, this.token).subscribe(

      (response)=>{
        this.getDatosDoctor = response.Usuario;

        console.log(this.getDatosDoctor)
      },
      (error)=>{
        console.log(<any>error);
      }
    )
  };

}
