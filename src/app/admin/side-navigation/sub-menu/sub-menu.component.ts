import { Component, OnInit, Input } from '@angular/core';
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
      transition('void => *', [
        style({
          transform: 'translateY(-10%)',
          opacity: 0.5
        }),
        animate(600, style({
          transform: 'translateY(0)',
          opacity: 1

        }))
      ])
    ])

  ]
})
export class SubMenuComponent implements OnInit {

  @Input() subMenuStatus;

  constructor() { }

  ngOnInit() {

  }

}
