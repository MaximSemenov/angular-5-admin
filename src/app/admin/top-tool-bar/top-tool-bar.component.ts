import { Component, OnInit } from '@angular/core';
import { SideNavigationService } from '../side-navigation/side-navigation.service';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-top-tool-bar',
  templateUrl: './top-tool-bar.component.html',
  styleUrls: ['./top-tool-bar.component.css']
})
export class TopToolBarComponent implements OnInit {

  constructor(public navigationService: SideNavigationService, public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {

    // this.router.events
    //   .filter(event => event instanceof NavigationStart)
    //   .map(() => this.router.routerState.root)
    //   .subscribe((event: Event) => {
    //     console.log(event);
    //   });
console.log (this.navigationService.provideTitle())


  }

}
