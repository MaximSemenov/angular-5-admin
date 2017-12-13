import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'

})
export class AppRootComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // return this.router.events
    // .filter((event: NavigationEnd) => event instanceof NavigationEnd)
    // .map(() => {
    //   let route: ActivatedRoute = this.activatedRoute;
    //   while (route.firstChild) {
    //     route = route.firstChild;
    //   }
    //   return route;
    // })
    // .switchMap((currentRoute: ActivatedRoute) => currentRoute.data)
    // .pluck('title')
    // .subscribe(console.log);
  }

}
