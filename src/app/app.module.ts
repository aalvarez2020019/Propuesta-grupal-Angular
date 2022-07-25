import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { VistaadminComponent } from './components/vistaadmin/vistaadmin.component';
import { VistausuarioComponent } from './components/vistausuario/vistausuario.component';
import { VistadoctorComponent } from './components/vistadoctor/vistadoctor.component';
import { InfodoctorComponent } from './components/infodoctor/infodoctor.component';
import { InfodoctoradminComponent } from './components/infodoctoradmin/infodoctoradmin.component';
import { DoctorcompoComponent } from './components/doctorcompo/doctorcompo.component';
import { AdmincompoComponent } from './components/admincompo/admincompo.component';
import { UsuariocompoComponent } from './components/usuariocompo/usuariocompo.component';
import { EditardoctorComponent } from './components/editardoctor/editardoctor.component';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavbarComponent,
    HeroDetailComponent,
    RegistrarComponent,
    VistaadminComponent,
    VistausuarioComponent,
    VistadoctorComponent,
    InfodoctorComponent,
    InfodoctoradminComponent,
    DoctorcompoComponent,
    AdmincompoComponent,
    UsuariocompoComponent,
    EditardoctorComponent,
    EditarusuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
