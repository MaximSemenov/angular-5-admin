import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public start = 0;
  public end = 10;


  @Input() users;

  constructor() { }

  ngOnInit() {
  }

}
