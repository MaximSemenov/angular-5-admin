import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {

      if (!params || !params.page || !this.users) {
        this.router.navigateByUrl('/users?page=1');
        return false;
      }
      this.userFilter = +params.page * 10;
      console.log(this.userFilter);
      this.filteredUsers = this.users.slice(this.userFilter - 10, this.userFilter);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!changes['users'].isFirstChange()) {
      this.filteredUsers = this.users.slice(0, 10);
    }
  }
}
