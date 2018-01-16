import { CustomEventHandlerDirective } from './side-navigation.directive';
import { Component, OnInit, Directive } from '@angular/core';
import { SideNavigationService, menuLink } from './side-navigation.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css'],
  animations: [

    trigger('caret', [
      state('closed', style({
        transform: 'translateX(0)',
        backgroundColor: 'red'
      })),
      state('opened', style({
        transform: 'translateX(-100%)',
        backgroundColor: 'green'
      })),
      transition('false => true', [
        style({ transform: 'rotate(-180deg)' }),
        animate(200)
      ]),
      transition('true => false', [
        style({ transform: 'rotate(180deg)' }),
        animate(200)
      ])
    ]),

  ]
  // directives: [CustomEventHandlerDirective]

})

export class SideNavigationComponent implements OnInit {

  public menuLinks: menuLink[];
  public lastSubMenuOpened;
  public iconClasses;
  public spanClasses;
  public subMenus;



  constructor(public navigationService: SideNavigationService) { }

  ngOnInit() {

    this.menuLinks = this.navigationService.getNavigationLinks();
    this.iconClasses = this.navigationService.getClasses('titleIconsClasses');
    this.spanClasses = this.navigationService.getClasses('spanClasses');
    this.subMenus = this.navigationService.getClasses('subMenus');


  }

  toggleSubMenu(link): void {
    const isOpenedLastTime = link.isSubMenuShown;
    this.closeSubMenus();
    if (isOpenedLastTime) {
      return;
    }
    link.isSubMenuShown = !link.isSubMenuShown;
  }

  closeSubMenus(): void {
    this.menuLinks.forEach((mmenuLink: menuLink) => {
      mmenuLink.isSubMenuShown = false;
    });
  }

}



