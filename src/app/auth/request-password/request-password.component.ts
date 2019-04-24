import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { NbRequestPasswordComponent, NB_AUTH_OPTIONS, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ngx-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class RequestPasswordComponent extends NbRequestPasswordComponent implements OnInit {

  constructor(
    private afAuth: AuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected nbAuthService: NbAuthService,
    ) {
    super(nbAuthService, options, cd, router);
  }

  ngOnInit() {
  }

  async requestPass() {
    this.messages = [];
    this.errors = [];
    this.submitted = true;
    this.showMessages.success = false;
    this.showMessages.error = false;

    this.afAuth.requestpassword(this.user.email).then(() => {
      this.submitted = false;
      this.messages.push(`Un email a été envoyé à l'adresse ${this.user.email}`);
      this.showMessages.success = true;
    }).catch(err => {
      this.submitted = false;
      this.errors.push(err.message);
      this.showMessages.error = true;
    });
  }
}
