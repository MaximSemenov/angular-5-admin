import { Component, OnInit } from '@angular/core';
import { SideNavigationService, menuLink } from './side-navigation.service';


@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
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

  showSubMenu(link): void {

    if (!link.hasSubMenu && this.lastSubMenuOpened === undefined) {
      return;
    }

    if (!link.hasSubMenu) {
      this.lastSubMenuOpened.isSubMenuShown = false;
      return;
    }

    link.isSubMenuShown = !link.isSubMenuShown;
    this.lastSubMenuOpened = link;

  }

}
