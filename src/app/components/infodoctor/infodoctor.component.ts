import { Component, OnInit } from '@angular/core';
import { Citas } from 'src/app/models/cita.model';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-infodoctor',
  templateUrl: './infodoctor.component.html',
  styleUrls: ['./infodoctor.component.scss'],
  providers: [UsuariosService]
})
export class InfodoctorComponent implements OnInit {

  public horasModelGet: Citas;
  public token;

  constructor(
    public _usuariosService: UsuariosService,
    public _activatedRoute: ActivatedRoute,

  ) {

    // this.horasModelGet = new Citas('', '', '', '', '', 0, '', '', '', 0, '', '', 0, '', '');

    this.token = this._usuariosService.obtenerToken();
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idDoctor'));

      this.getHorasDoc(dataRuta.get('idDoctor'));

      // this.getHotelesTodos();

    })
  }

  // Ver citas del doctor
  getHorasDoc(idDoc){

    this._usuariosService.verCitasDoc(idDoc, this.token).subscribe(

      (response)=>{
        console.log(response);

        this.horasModelGet = response.Usuario;

      },

      (error)=>{
        console.log(error)

      }
    )
  }

}
