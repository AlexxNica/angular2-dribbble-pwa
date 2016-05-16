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
      <nav class="navbar navbar-dark navbar-fixed-top bg-primary bg-faded">
        <div class="navbar-toggleable-xs container" id="navbar-header">
          <a class="navbar-brand" [routerLink]="['/Home']">Berry</a>
        </div>
      </nav>
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
