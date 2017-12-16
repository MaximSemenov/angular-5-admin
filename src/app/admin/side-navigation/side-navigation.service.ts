import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/of';

export type menuLink = {

  title: string;
  routerLink: string;
  hasSubMenu: boolean;
  isSubMenuShown: boolean;
  iconClasses: iconClasses;
  spanClasses: spanClasses;

};

export type iconClasses = {
  [key: string]: boolean;

};
export type spanClasses = {
  [key: string]: boolean;

};


@Injectable()
export class SideNavigationService {

  public menuLinks: menuLink[] = [
    {
      title: 'Dashboard',
      routerLink: '/dashboard',
      hasSubMenu: false,
      isSubMenuShown: false,
      iconClasses: {
        'fa fa-desktop': true
      },
      spanClasses: {
        '': false
      }
    },
    {
      title: 'Widget',
      routerLink: '/widget',
      hasSubMenu: false,
      isSubMenuShown: false,
      iconClasses: {
        'fa fa-bullseye': true
      },
      spanClasses: {
        '': true
      }

    },

    {
      title: 'Charts',
      routerLink: '/charts',
      hasSubMenu: false,
      isSubMenuShown: false,
      iconClasses: {
        'fa fa-signal': true
      },
      spanClasses: {
        '': true
      }

    },

    {
      title: 'UI',
      routerLink: '/user-interface',
      hasSubMenu: false,
      isSubMenuShown: false,
      iconClasses: {
        'fa fa-wrench': true
      },
      spanClasses: {
        '': true
      }

    },

    {
      title: 'Pages',
      routerLink: '/pages',
      hasSubMenu: true,
      isSubMenuShown: false,
      iconClasses: {
        'fa fa-file': true,
      },
      spanClasses: {
        'nav-caret': true,
        'fa': true,
        'fa-caret-down': true,
        'fa-caret-up': false
      }
    },

    {
      title: 'Users',
      routerLink: '/users',
      hasSubMenu: false,
      isSubMenuShown: false,
      iconClasses: {
        'fa fa-user': true
      },
      spanClasses: {
        '': true
      }

    },

    {
      title: 'Mail',
      routerLink: '/mail',
      hasSubMenu: true,
      isSubMenuShown: false,
      iconClasses: {
        'fa fa-file': true,
      },
      spanClasses: {
        'nav-caret': true,
        'fa': true,
        'fa-caret-down': true,
        'fa-caret-up': false
      }
    }

  ];

  constructor() { }

  getNavigationLinks(): menuLink[] {
    return this.menuLinks;
  }

  getIconClasses(title) {
    return Observable.of(this.menuLinks
      .filter(menuLink => menuLink.title === title)[0].iconClasses)
      .map(iconClasse => {

        return Object.keys(iconClasse)[0];

      });

  }
}
