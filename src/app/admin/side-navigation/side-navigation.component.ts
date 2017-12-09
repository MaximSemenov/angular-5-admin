import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { SideNavigationService } from './side-navigation.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit, AfterViewInit {

  public menuLinks;
  public classNames = {};

  constructor(public navigationService: SideNavigationService) { }



  getTitle (title: string) {

this.navigationService.storeTitle(title);

  }

  toggleDropDownMenu(id) {

    alert('Works!' + id);

  }

  setClassName(className: string) {

    if (this.classNames[className]) {
      this.classNames[className] = false;
      return;
    }
    this.classNames[className] = true;
  }

  ngOnInit() {


    this.menuLinks = this.navigationService.getNavigationLinks();

    this.navigationService.storeTitle('abc');
  }

  ngAfterViewInit() { }
  // $(document).ready(function() {


  //   $('.has_submenu > a').click(function (e) {
  //     e.preventDefault();
  //     const menu_li = $(this).parent('li');
  //     const menu_ul = $(this).next('ul');

  //     if (menu_li.hasClass('open')) {
  //       menu_ul.slideUp(150);
  //       menu_li.removeClass('open');
  //       $(this).find('span').removeClass('fa-caret-up').addClass('fa-caret-down');
  //     } else {
  //       $('.side-nav > li > ul').slideUp(150);
  //       $('.side-nav > li').removeClass('open');
  //       menu_ul.slideDown(150);
  //       menu_li.addClass('open');
  //       $(this).find('span').removeClass('fa-caret-down').addClass('fa-caret-up');
  //     }
  //   });

  // });
  // }

}
