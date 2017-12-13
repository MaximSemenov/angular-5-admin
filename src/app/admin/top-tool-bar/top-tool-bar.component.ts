import { Component, OnInit } from '@angular/core';
import { SideNavigationService } from '../side-navigation/side-navigation.service';
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

  // type for navigationTitle...
  public navigationTitle;

  constructor(public navigationService: SideNavigationService, public activatedRoute: ActivatedRoute, public router: Router) {
  }

  ngOnInit() {
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
      .subscribe(title => this.navigationTitle = title);


  }

}
