import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { environment } from '../../../../environments/environment';
import { NbMenuBag } from '@nebular/theme/components/menu/menu.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Log out', data: { id: 'logout' } }];

  homeTitle: string;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private afAuth: AuthService,
              private router: Router) {

    this.homeTitle = environment.homeTitle;
  }

  ngOnInit() {
    this.user = { name: 'Exemple Name', picture: 'assets/images/tagwiser.png' };

    this.afAuth.isAuthenticated().pipe(
      tap(logged => {
        if (!logged) this.router.navigate(['/auth/login']);
      }),
    ).subscribe();

    this.menuService.onItemClick().subscribe((item: NbMenuBag) => {
        if (item.item.data && item.item.data.id === 'logout') {
          this.afAuth.signOut()
          .then(() => {
            console.log('log out');
            this.router.navigate(['/auth/login']);
          })
          .catch((error) => {
            // An error happened
          });
        }
    });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    console.log('search !');
  }
}
