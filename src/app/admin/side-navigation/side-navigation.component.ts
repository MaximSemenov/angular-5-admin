import { CustomEventHandlerDirective } from './side-navigation.directive';
import { Component, OnInit, Directive } from '@angular/core';
import { SideNavigationService, menuLink } from './side-navigation.service';


@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
  // directives: [CustomEventHandlerDirective]

})

export class SideNavigationComponent implements OnInit {

  public menuLinks: menuLink[];
  public lastSubMenuOpened;
  public iconClasses;
  public spanClasses;


  constructor(public navigationService: SideNavigationService) { }

  ngOnInit() {

    this.menuLinks = this.navigationService.getNavigationLinks();
    this.iconClasses = this.navigationService.getClasses('titleIconsClasses');
    this.spanClasses = this.navigationService.getClasses('spanClasses');

  }

  toggleSubMenu(link): void {
    const isOpenedLastTime = link.isSubMenuShown;
    this.closeSubMenus();
    if (isOpenedLastTime) {
      return;
    }
    link.isSubMenuShown = !link.isSubMenuShown;
  }

  closeSubMenus() {
    this.menuLinks.forEach((mmenuLink: menuLink) => {
      mmenuLink.isSubMenuShown = false;
    });
  }

}



