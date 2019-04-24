import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NbAuthModule } from '@nebular/auth';
import { ThemeModule } from '../@theme/theme.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RequestPasswordComponent } from './request-password/request-password.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, RequestPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ThemeModule,
    NbAuthModule,
  ],

})
export class AuthModule { }
