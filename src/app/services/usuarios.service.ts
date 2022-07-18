import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { usuarios } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

    public url: String = 'http://localhost:3000/api';
    public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
    public identidad;
    public token;


    constructor(public _http: HttpClient) { }



    login(usuario, obtenerToken = null):Observable<any>{

      if(obtenerToken !=null){
          usuario.obtenerToken = obtenerToken;
      }

      let params = JSON.stringify(usuario);

      return this._http.post(this.url + '/login',params,{headers:this.headersVariable});

    }

    obtenerToken(){
      var token2 = localStorage.getItem("token");
      if(token2 !=undefined){
        this.token = token2;
      }else{
        this.token = null
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


     // Registrar usuarios
    registrarUsuarios(modeloUsuarios: usuarios): Observable<any> {

      let parametros = JSON.stringify(modeloUsuarios);

      return this._http.post(this.url + '/registrarUsuarios', parametros, {headers: this.headersVariable});

    }



}
