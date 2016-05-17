import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { SnapsComponent } from './+snaps';
import { RouteConfig , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'progressive-app',
  template: `
    <div class="">
      <header class="header">
        <button tabindex="1" class="header__menu">
          Toggle nav menu
            </button>
          <a style="color:white; text-decoration:none" [routerLink]="['/Home']"><h1 class="header__title">Cherry</h1></a>
      </header>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [MdToolbar, APP_SHELL_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/snaps/...', component: SnapsComponent, as: 'Home', useAsDefault: true}
])
export class ProgressiveAppComponent {

}

