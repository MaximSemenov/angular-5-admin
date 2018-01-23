import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnChanges {

  public activePage: number;
  public userFilter: number;
  public filteredUsers;

  @Input() users;
  // @Input() filteredUsers;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.page) {
        this.userFilter = params.page * 10;
        this.users = this.filteredUsers;
        this.users = this.users.filter((item, index) => index < this.userFilter && index >= this.userFilter - 10);
      }
    });
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!changes['users'].isFirstChange()) {
      this.filteredUsers = Object.assign([], this.users);
      this.users = this.users.filter((item, index) => index <= 9);
    }

  }

}
