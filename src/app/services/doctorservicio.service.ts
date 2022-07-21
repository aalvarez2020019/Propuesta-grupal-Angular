import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class DoctorservicioService {

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
   getCitas(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/citasDoctor', { headers: headersToken});

  }



}
