import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component'
import { ResetPasswordComponent } from './component/reset-password/reset-password.component'

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "login",
  //   pathMatch: "full"
  // },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'resetpassword/:token',
    component: ResetPasswordComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
  // {
  //   path: "**",
  //   redirectTo: "reset-password",
  //   pathMatch: "full"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
