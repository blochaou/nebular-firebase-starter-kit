import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { NbResetPasswordComponent, NB_AUTH_OPTIONS, NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ngx-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends NbResetPasswordComponent implements OnInit {

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

  resetPass() {
    this.messages = [];
    this.errors = [];
    this.submitted = true;
    this.showMessages.success = false;
    this.showMessages.error = false;

    return this.afAuth.signInWithEmailAndPassword(this.afAuth.getCurrentUser().email, this.user.oldPassword).then(() => {
      return this.afAuth.updatePassword(this.user.password).then(() => {
        this.showMessages.success = true;
        this.submitted = false;
        this.messages.push('Mot de passe modifié avec succes');
        this.afAuth.signOut();
      }).catch(err => {
        this.submitted = false;
        this.showMessages.error = true;
        this.errors.push(err.message);
      });
    }).catch(err => {
      this.submitted = false;
      this.showMessages.error = true;
      this.errors.push(err.message);
    });
  }
}
