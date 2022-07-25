import { Component, OnInit } from '@angular/core';
import { Hospitales } from 'src/app/models/hospital.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [UsuariosService]
})
export class InicioComponent implements OnInit {

  public hospitalesModelGet: Hospitales;


  constructor(public _usuariosService: UsuariosService,
    ) {

    }

    ngOnInit(): void {
      this.getHospitales();
    }


    getHospitales(){
      this._usuariosService.hospitalesInicio().subscribe(

       (response) => {
        this.hospitalesModelGet = response.Usuario;
         console.log(this.hospitalesModelGet);

       },
       (error) =>{
        console.log(<any>error)
       }


      )
     }

}
