import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by"><a href="https://tagwiser.com" target="_blank">Tagwiser</a> {{year}}</span>
    <div class="socials">
      <a href="https://www.facebook.com/tagwiser/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/tagwiser" target="_blank" class="ion ion-social-twitter"></a>
    </div>
  `,
})
export class FooterComponent {
  year: string;

  constructor() {
    this.year = environment.productionYear;
  }
}
