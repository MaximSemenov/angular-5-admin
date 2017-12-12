import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/of';

@Injectable()
export class SideNavigationService {

  public title;
  private menuLinks = [
    {
      id: 0,
      title: 'Dashboard',
      routerLink: '/dashboard',
      classes: {
        iconClasses: 'fa fa-desktop',
      }
    },
    {
      id: 1,
      title: 'Widget',
      routerLink: '/widget',
      classes: {
        iconClasses: 'fa fa-bullseye',
      }
    },
    {
      id: 2,
      title: 'Charts',
      routerLink: 'charts',
      classes: {
        iconClasses: 'fa fa-signal',
      }
    },
    {
      id: 3,
      title: 'UI',
      routerLink: 'user-interface',
      classes: {
        iconClasses: 'fa fa-wrench',
      }
    },
    {
      id: 4,
      title: 'Pages',
      routerLink: 'pages',
      classes: {
        iconClasses: 'fa fa-file',
      }
    },
    {
      id: 5,
      title: 'Users',
      routerLink: 'users',
      classes: {
        iconClasses: 'fa fa-user',

      }
    },
    {
      id: 6,
      title: 'Mail',
      routerLink: 'mail',
      classes: {
        iconClasses: 'fa fa-envelope',

      }
    }
  ];

  constructor() { }

  getNavigationLinks() {
    return this.menuLinks;
  }



}
