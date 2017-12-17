import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/of';
import { error } from 'selenium-webdriver';

export type menuLink = {

  title: string;
  key: string;
  routerLink: string;
  hasSubMenu: boolean;
  isSubMenuShown?: boolean;
  // isSubMenuShown: boolean;
  // spanClasses: spanClasses;

};

export type iconClasses = {
  [key: string]: boolean;

};
export type spanClasses = {
  [key: string]: boolean;

};


@Injectable()
export class SideNavigationService {

  public titleIconsClasses = {
    dashboard: 'fa-desktop',
    widget: 'fa-bullseye',
    charts: 'fa-signal',
    ui: 'fa-wrench',
    pages: 'fa-file',
    users: 'fa-user',
    mail: 'fa-file'
  };

  public spanClasses = {
    dashboard: '',
    widget: '',
    charts: '',
    ui: '',
    pages: 'fa nav-caret fa-caret-down',
    user: '',
    mail: 'fa nav-caret fa-caret-down',

  };

  public menuLinks: menuLink[] = [
    {
      title: 'Dashboard',
      key: 'dashboard',
      routerLink: '/dashboard',
      hasSubMenu: false
      // isSubMenuShown: false
      // spanClasses: {
      //   '': false
      // }
    },
    {
      title: 'Widget',
      key: 'widget',
      routerLink: '/widget',
      hasSubMenu: false
      // spanClasses: {
      //   '': true
      // }

    },

    {
      title: 'Charts',
      key: 'charts',
      routerLink: '/charts',
      hasSubMenu: false
      // isSubMenuShown: false
      // spanClasses: {
      //   '': true
      // }

    },

    {
      title: 'UI',
      key: 'ui',
      routerLink: '/user-interface',
      hasSubMenu: false
      // isSubMenuShown: false
      // spanClasses: {
      //   '': true
      // }

    },

    {
      title: 'Pages',
      key: 'pages',
      routerLink: '/pages',
      hasSubMenu: true,
      isSubMenuShown: false
      // spanClasses: {
      //   'nav-caret': true,
      //   'fa': true,
      //   'fa-caret-down': true,
      //   'fa-caret-up': false
      // }
    },

    {
      title: 'Users',
      key: 'users',
      routerLink: '/users',
      hasSubMenu: false
      // isSubMenuShown: false
      // spanClasses: {
      //   '': true
      // }

    },

    {
      title: 'Mail',
      key: 'mail',
      routerLink: '/mail',
      hasSubMenu: true,
      isSubMenuShown: false
      // spanClasses: {
      //   'nav-caret': true,
      //   'fa': true,
      //   'fa-caret-down': true,
      //   'fa-caret-up': false
      // }
    }

  ];

  constructor() { }

  getNavigationLinks(): menuLink[] {
    return this.menuLinks;

  }
  getClasses(classRequest): {any} {

    if (!this[classRequest]) {
      throw Error (
        `"SideNavigationService" does not have "${classRequest}" object you have requested. Check spelling or if that object even exists"`);
    }

    return this[classRequest];

  }



  getIconClass(title: string): string {

    return this.titleIconsClasses[this.menuLinks.find(link => link.title === title).key];


  }
}
