import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdProgressCircle } from '@angular2-material/progress-circle';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import { SnapsComponent } from './+snaps';
import { RouteConfig , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
  moduleId: module.id,
  selector: 'progressive-app',
  styles: [`
md-toolbar[color=primary] {
  background: #673AB7;
  margin-top: -70px;
  will-change: transform;
  position: fixed;
  z-index: 5;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,.14),0 2px 9px 1px rgba(0,0,0,.12),0 4px 2px -2px rgba(0,0,0,.2);
}

md-toolbar a {
  color: white;
}

md-progress-circle[mode="indeterminate"] {
  width: 64px;
  height: 64px;
  margin: 0 8px;
}

.indicator-container {
  height: 0;
  margin-top: 50%;
}
.indicator-container md-progress-circle {
  margin: -50px auto 0;
}
.indicator-container md-progress-circle[mode="indeterminate"] /deep/ circle {
  stroke: #512DA8 !important;
}

`],
  template: `
  <md-toolbar color="primary">
    <span><a [routerLink]="['/Home']">Berry</a></span>
  </md-toolbar>
  <div class="indicator-container" *shellRender>
    <md-progress-circle mode="indeterminate"></md-progress-circle>
  </div>
  <div class="">
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [MdToolbar, MdProgressCircle, APP_SHELL_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/snaps/...', component: SnapsComponent, as: 'Home', useAsDefault: true}
])
export class ProgressiveAppComponent {

}

