import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
// import { Usuarios } from '../models/usuario.model';
import { Citas } from '../models/cita.model';
import { Usuarios } from '../models/usuario.model';

import { Datos } from '../models/dato.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorservicioService {

  public url: String = 'https://propuestawellness.herokuapp.com/api';

  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) { }

  obtenerToken(){
    var token2 = localStorage.getItem("token");
    if(token2 != undefined){
      this.token = token2;
    } else {
      this.token = '';
    }

    return this.token;
  }

  obtenerIdentidad(){
    var identidad2=JSON.parse(localStorage.getItem('identidad'));
    if(identidad2!=undefined){
      this.identidad=identidad2;
    }else if(identidad2==undefined){
      this.identidad=null;
    }

    return this.identidad;

  }

   // obtener usuarios ROL_USUARIO
   getCitas(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/citasDoctor', { headers: headersToken});

  }

  // obtener citas id
  verCitasId(idCita, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/buscarCitaId/' + idCita, { headers: headersToken});

  }

  // editar citas
  putCitas(modeloCitas: Citas, token): Observable<any> {

    let parametros = JSON.stringify(modeloCitas);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarCita/' + modeloCitas._id, parametros, { headers: headersToken })

  }

  // obtener datos por doctor
  getDatos(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerDatosDoctor', { headers: headersToken});

  }

  // editar datos
  editarDatos(modeloUsuarios: Datos, token): Observable<any> {

    let parametros = JSON.stringify(modeloUsuarios);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarDatos/' + modeloUsuarios._id, parametros, { headers: headersToken })

  }

  // datos por id
  datosPorId(idDatos, token): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token );

  return this._http.get(this.url + '/buscarDatosId/' + idDatos, { headers: headersToken});

}

// agregar Datos
agregarDatos(modeloCita: Datos, token) : Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token )

  let parametros = JSON.stringify(modeloCita);

  return this._http.post(this.url + '/agregarDatos', parametros, {headers: headersToken});

}

// Eliminar datos
eliminarDatos( idDatos, token ): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token );

  return this._http.delete(this.url + '/eliminarDatos/' +  idDatos, { headers: headersToken});

}

// obtener datos por doctor
getHospitales(token) : Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token );

  return this._http.get(this.url + '/verHospitales', { headers: headersToken});

}

// obtener doctores id
obtenerDoctoresId(idDoctor, token): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token );

  return this._http.get(this.url + '/buscarDoctorId/' + idDoctor, { headers: headersToken});

}

// editar usuarios
editarDoctores(modeloUsuarios: Usuarios, token): Observable<any> {

  let parametros = JSON.stringify(modeloUsuarios);

  let headersToken = this.headersVariable.set('Authorization', token);

  return this._http.put(this.url + '/editarUsuarios/' + modeloUsuarios._id, parametros, { headers: headersToken })

}

 // Eliminar Usuarios
 eliminarUsuarios( idUsuario, token ): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token );

  return this._http.delete(this.url + '/eliminarUsuarios/' +  idUsuario, { headers: headersToken});

}


}
