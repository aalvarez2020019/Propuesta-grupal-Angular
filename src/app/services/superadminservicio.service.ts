import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuario.model';
import { Hospitales } from '../models/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class SuperadminservicioService {

  public url: String = 'https://propuestawellness.herokuapp.com/api';
  
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;

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

  // obtener usuarios ROL_USUARIO
  obtenerUsuarios(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerUsuarios', { headers: headersToken});

  }

  // obtener usuarios ROL_USUARIO
  obtenerDoctores(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/obtenerDoctores', { headers: headersToken});

  }

  // agregar Doctores
  agregarDoctor(modeloAdmin: Usuarios, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    let parametros = JSON.stringify(modeloAdmin);

    return this._http.post(this.url + '/registrarDoctor', parametros, {headers: headersToken});

  }


  // obtener doctores id
  obtenerDoctoresId(idDoctor, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/buscarDoctorId/' + idDoctor, { headers: headersToken});

  }

  // Ver citas doc
  getCitasDoc(idDoc, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verCitasDoctor/' + idDoc, { headers: headersToken});

  }


  // Eliminar Usuarios
  eliminarUsuarios( idUsuario, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/eliminarUsuarios/' +  idUsuario, { headers: headersToken});

  }


  // Eliminar Usuarios
  eliminarDoctores( idUsuario, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/eliminarUsuarios/' +  idUsuario, { headers: headersToken});

  }


   // editar usuarios
   editarUsuarios(modeloUsuarios: Usuarios, token): Observable<any> {

    let parametros = JSON.stringify(modeloUsuarios);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarUsuarios/' + modeloUsuarios._id, parametros, { headers: headersToken })

  }

  // editar doctores
  editarDoctores(modeloUsuarios: Usuarios, token): Observable<any> {

    let parametros = JSON.stringify(modeloUsuarios);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarUsuarios/' + modeloUsuarios._id, parametros, { headers: headersToken })

  }

  // Ver doctores ROL_ADMIN
  verhospitalesAdmin(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verhospitalesAdmin', { headers: headersToken});

  }

   // obtener hospital id
   hospitalesId(idHospital, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/hospitalesId/' + idHospital, { headers: headersToken});

  }

   // agregar Doctores
   agregarHospital(modeloAdmin: Hospitales, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    let parametros = JSON.stringify(modeloAdmin);

    return this._http.post(this.url + '/agregarHospital', parametros, {headers: headersToken});

  }

  // editar hospitales
  editarHospitales(modeloUsuarios: Hospitales, token): Observable<any> {

    let parametros = JSON.stringify(modeloUsuarios);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarHospitales/' + modeloUsuarios._id, parametros, { headers: headersToken })

  }

  // Eliminar Hospitales
  eliminarHospitales( idUsuario, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/eliminarHospitales/' +  idUsuario, { headers: headersToken});

  }

  // obtener datos del doc
  datosDoctorAdmin(idDoctor, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/datosDoctorId/' + idDoctor, { headers: headersToken});

  }







}
