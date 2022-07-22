import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { VistaadminComponent } from './components/vistaadmin/vistaadmin.component';
import { VistausuarioComponent } from './components/vistausuario/vistausuario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'vistaadmin', component: VistaadminComponent},
  { path: 'vistausuario', component: VistausuarioComponent},

  { path: "**", component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
