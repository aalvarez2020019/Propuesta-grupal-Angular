import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuario.model';
import { Citas } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

    public url: String = 'https://propuestawellness.herokuapp.com/api';

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
    registrarUsuarios(modeloUsuarios: Usuarios): Observable<any> {

      let parametros = JSON.stringify(modeloUsuarios);

      return this._http.post(this.url + '/registrarUsuarios', parametros, {headers: this.headersVariable});

    }

     // obtener usuarios ROL_USUARIO

    verDoctores(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verDoctoresUser', { headers: headersToken});

  }

    // obtener citas
    verCitas(token) : Observable<any> {

      let headersToken = this.headersVariable.set('Authorization', token );

      return this._http.get(this.url + '/obtenerCitasUser', { headers: headersToken});

    }

    // agregar Doctores
    agregarCita(modeloCita: Citas, token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    let parametros = JSON.stringify(modeloCita);

    return this._http.post(this.url + '/agregarCita', parametros, {headers: headersToken});

  }

  // obtener doctores id
  obtenerDoctoresId(idDoctor, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/buscarDoctorId/' + idDoctor, { headers: headersToken});

  }

  // Ver citas de un doctor ROL_USER
  verCitasDoc(idDoc, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verCitasDoctor/' + idDoc, { headers: headersToken});

  }

   // obtener citas id
   obtenerCitasId(idCita, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/buscarCitaId/' + idCita, { headers: headersToken});

  }

  // editar citas
  editarCitas(modeloCitas: Citas, token): Observable<any> {

    let parametros = JSON.stringify(modeloCitas);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarCita/' + modeloCitas._id, parametros, { headers: headersToken })

  }

  // Eliminar Citas
  eliminarCitas( idCita, token ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.delete(this.url + '/eliminarCitas/' +  idCita, { headers: headersToken});

  }

  // obtener datos por doctor
  verHospitales(token) : Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );

    return this._http.get(this.url + '/verHospitales', { headers: headersToken});

  }



// obtener datos del doc
doctorDatosUsuario(idDoctor, token) : Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token )

  return this._http.get(this.url + '/datosDoctorId/' + idDoctor, { headers: headersToken});

}


// editar usuarios
editarUsuarios(modeloUsuarios: Usuarios, token): Observable<any> {

  let parametros = JSON.stringify(modeloUsuarios);

  let headersToken = this.headersVariable.set('Authorization', token);

  return this._http.put(this.url + '/editarUsuarios/' + modeloUsuarios._id, parametros, { headers: headersToken })

}

 // Eliminar Usuarios
 eliminarUsuarios( idUsuario, token ): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token );

  return this._http.delete(this.url + '/eliminarUsuarios/' +  idUsuario, { headers: headersToken});

}

// obtener doctores id
getUsuarioId(idDoctor, token): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token );

  return this._http.get(this.url + '/buscarDoctorId/' + idDoctor, { headers: headersToken});

}

// HOSPITALES inicio
hospitalesInicio(): Observable<any> {


  return this._http.get(this.url + '/hospitalesInicio', {headers: this.headersVariable});

}






}
