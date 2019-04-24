import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { NbLoginComponent, NB_AUTH_OPTIONS, NbAuthService } from '@nebular/auth';

import { Router } from '@angular/router';
import { AuthService, AuthPersistanceType } from '../services/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends NbLoginComponent implements OnInit {

  constructor(
    private afAuth: AuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected nbAuthService: NbAuthService,
    ) {
    super(nbAuthService, options, cd, router);

    this.socialLinks = [
      {url: 'https://www.facebook.com/tagwiser/', target: '_blank', icon: 'socicon-facebook'},
      {url: 'https://twitter.com/tagwiser', target: '_blank', icon: 'socicon-twitter'},
    ];
  }

  ngOnInit() {

  }

  login() {
    this.messages = [];
    this.errors = [];
    this.submitted = true;
    this.showMessages.success = false;
    this.showMessages.error = false;

    this.afAuth.signInWithEmailAndPassword(this.user.email, this.user.password).then(() => {
      this.router.navigate(['/']);
    }).catch(err => {
      this.submitted = false;
      this.errors.push(err.message);
      this.showMessages.error = true;
    });
  }

}
