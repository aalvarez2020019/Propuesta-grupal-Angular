import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'registrar', component: RegistrarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
