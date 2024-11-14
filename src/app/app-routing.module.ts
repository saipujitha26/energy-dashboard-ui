import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  {path: 'logout', component: LoginComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
