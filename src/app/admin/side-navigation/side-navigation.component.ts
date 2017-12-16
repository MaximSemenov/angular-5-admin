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


  constructor(public navigationService: SideNavigationService) { }

  ngOnInit() {

    this.menuLinks = this.navigationService.getNavigationLinks();

  }

  showSubMenu(link): void {

    // если у ссылки нет сабменю и подменю ранее не открывалось = сразу return;
    if (!link.hasSubMenu && this.lastSubMenuOpened === undefined) {
      return;
    }

    // открытие и закрытие меню при клике на него повторно
    if (this.lastSubMenuOpened === link) {

      this.lastSubMenuOpened.isSubMenuShown = !this.lastSubMenuOpened.isSubMenuShown;
      this.flipCaret(link, false);
      this.lastSubMenuOpened = link;
      return;
    }

    // сабменю ранее открывалось и произошел клик по обычной ссылке без сабменю = закрытие ранее открытого сабменю
    if (this.lastSubMenuOpened && !link.hasSubMenu) {

      this.lastSubMenuOpened.isSubMenuShown = false;
      this.flipCaret(this.lastSubMenuOpened, true);
      return;
    }
    // клик по ссылке с сабменю, предыдущий клик был осуществелн по сабменю = закрытие предыдущего сабменю
    if (this.lastSubMenuOpened) {

      this.lastSubMenuOpened.isSubMenuShown = false;
      this.flipCaret(this.lastSubMenuOpened, true);
    }


    // открытие сабменю с текущего клика
    link.isSubMenuShown = !link.isSubMenuShown;
    // переворот каретки
    this.flipCaret(link, false);
    // запись объекта в переменную (ссылка на объект!) у которого открылось самменю
    this.lastSubMenuOpened = link;
  }

  flipCaret(toggle, toDefault): void {

    if (toDefault) {
      toggle.spanClasses['fa-caret-down'] = true;
      toggle.spanClasses['fa-caret-up'] = false;
      return;
    }

    toggle.spanClasses['fa-caret-down'] = !toggle.spanClasses['fa-caret-down'];
    toggle.spanClasses['fa-caret-up'] = !toggle.spanClasses['fa-caret-up'];

  }

}
