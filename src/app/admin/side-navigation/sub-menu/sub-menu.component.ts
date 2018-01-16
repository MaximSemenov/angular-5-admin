import { subMenus } from './../side-navigation.service';
import { Component, OnInit, Input, OnDestroy, Host } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css'],
  animations: [
    trigger('slide', [
      state('open', style({ transform: 'translateX(0)' })),
      state('close', style({ transform: 'translateX(-100%)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        style({ transform: 'translateX(0)' }),
        animate(300)
      ])
    ])

  ]

  // animations: [trigger('slide', [
  //   state('open', style({
  //     transform: 'translateX(0)'
  //   })),

  //   state('void', style({
  //     transform: 'translateX(100%)'

  //   })),
  //   state('*', style({
  //     transform: 'translateX(-100%)'
  //   })),

  //   transition('* => void', animate('1500ms ease-out')),
  //   transition('void => *', animate('1500ms ease-out'))

  // ])]
  // animations: [
  //   trigger('slide', [
  //     transition('void => *', [
  //       style({
  //         transform: 'translateX(-100%)'
  //       }),
  //       animate('600ms ease-out', style({
  //         transform: 'translateX(0)'
  //       }))
  //     ]),
  //     transition('* => void', [
  //       style({
  //         transform: 'translateX(0%)'
  //       }),
  //       animate('600ms ease-out', style({
  //         transform: 'translateX(-100%)'
  //       }))
  //     ]),

  //   ])

  // ]
})
export class SubMenuComponent implements OnInit, OnDestroy {

  public stateOfcaret = 'closed';

  @Input() keyForSubMenu;
  @Input() subMenus;

  constructor() { }

  ngOnInit() {


    this.stateOfcaret = 'opened';
    console.log(this.stateOfcaret);

  }

  ngOnDestroy() {

    // this.stateOfSubMenu = 'close';
    // console.log(this.stateOfSubMenu);

  }

  // 3) рефакторинг сабменю (@input submenu items + ngFor)

}
