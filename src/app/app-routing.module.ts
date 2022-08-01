import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { VistaadminComponent } from './components/vistaadmin/vistaadmin.component';
import { VistausuarioComponent } from './components/vistausuario/vistausuario.component';
import { VistadoctorComponent } from './components/vistadoctor/vistadoctor.component';
import { InfodoctorComponent } from './components/infodoctor/infodoctor.component';
import { InfodoctoradminComponent } from './components/infodoctoradmin/infodoctoradmin.component';

// ROL ADMIN
import { RoladminGuard } from './services/roladmin.guard';
import { AdmincompoComponent } from './components/admincompo/admincompo.component';

// ROL USUARIO
import { RolusuarioGuard } from './services/rolusuario.guard';
import { UsuariocompoComponent } from './components/usuariocompo/usuariocompo.component';

// ROL DOCTOR
import { RoldoctorGuard } from './services/roldoctor.guard';
import { DoctorcompoComponent } from './components/doctorcompo/doctorcompo.component';
import { EditardoctorComponent } from './components/editardoctor/editardoctor.component';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'registrar', component: RegistrarComponent},

  // ROL ADMIN

  { path: 'admin', component: AdmincompoComponent, canActivate: [RoladminGuard], children:[


  { path: 'vistaadmin', component: VistaadminComponent},
  { path: 'infodoctoradmin/:idDoctor', component: InfodoctoradminComponent},

]},

// ROL USUARIO

{ path: 'usuario', component: UsuariocompoComponent, canActivate: [RolusuarioGuard], children:[

  { path: 'vistausuario', component: VistausuarioComponent},
  { path: 'infodoctor/:idDoctor', component: InfodoctorComponent},
  { path: 'editarusuario', component: EditarusuarioComponent},


]},

// ROL DOCTOR

{ path: 'doctor', component: DoctorcompoComponent, canActivate: [RoldoctorGuard], children:[

  { path: 'vistadoctor', component: VistadoctorComponent},
  { path: 'editardoctor', component: EditardoctorComponent},


]},


  { path: "**", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
