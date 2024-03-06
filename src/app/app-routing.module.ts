import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'login',component:LoginComponent},
  {path:'users',component:UsersComponent},
  {path:'',redirectTo:'login', pathMatch:'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
