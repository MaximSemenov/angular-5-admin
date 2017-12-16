import { Component, OnInit } from '@angular/core';
import { SideNavigationService, menuLink, iconClasses } from '../side-navigation/side-navigation.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-top-tool-bar',
  templateUrl: './top-tool-bar.component.html',
  styleUrls: ['./top-tool-bar.component.css']
})
export class TopToolBarComponent implements OnInit {


  public menuLinks: menuLink[];
      // type for navigationTitle...
  public navigationTitle;
    // type for iconClasses...
  public iconClasses: iconClasses = {
    'lblue': false
  };


  constructor(public navigationService: SideNavigationService, public activatedRoute: ActivatedRoute, public router: Router) {
  }

  ngOnInit() {

    // this.menuLinks = this.navigationService.getNavigationLinks();

    this.router.events
      .filter((event: NavigationEnd) => event instanceof NavigationEnd)
      .map(() => {
        let route: ActivatedRoute = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .switchMap((currentRoute: ActivatedRoute) => currentRoute.data)
      .pluck('title')
      .switchMap(title => {
        this.navigationTitle = title;
        return this.navigationService.getIconClasses(title);
      })
      .subscribe(iconClasse => {
        this.iconClasses[iconClasse] = true;
        this.iconClasses.lblue = true;
      });


  }

}
