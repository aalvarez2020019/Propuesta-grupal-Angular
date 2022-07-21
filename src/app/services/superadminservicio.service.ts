import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SuperadminservicioService {

  public url: String = 'http://localhost:3000/api';
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



}
