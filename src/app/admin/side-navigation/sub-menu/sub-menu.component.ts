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
        animate('800ms cubic-bezier(0.0, 0.5, 0.5, 1.0)')
      ]),
      transition('* => void', [
        style({ transform: 'translateX(0)' }),
        animate(400)
      ])
    ]),
    trigger('fa', [
      transition('void => *', [
        style({ backgroundColor: 'red' }),
        animate(1300)
      ]),
      transition('* => void', [
        style({ backgroundColor: 'green' }),
        animate(1300)
      ])
    ])
  ]
})
export class SubMenuComponent implements OnInit, OnDestroy {

  public stateOfcaret = 'closed';

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
