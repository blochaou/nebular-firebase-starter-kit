import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RequestPasswordComponent } from './request-password/request-password.component';
import { AuthGuard } from './auth.guard';
import { NoAuthGuard } from './noauth.guard';

const routes: Routes = [

  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NoAuthGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NoAuthGuard],
      },
      {
        path: 'request-password',
        component: RequestPasswordComponent,
        canActivate: [NoAuthGuard],
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
