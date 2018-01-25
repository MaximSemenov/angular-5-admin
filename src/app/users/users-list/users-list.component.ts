import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public activePage: number;
  public userFilter: number;
  public filteredUsers;

  @Input() users;
  // @Input() filteredUsers;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe((params) => {
   
    //   if (!params || !params.page) {
    //     this.router.navigateByUrl('/users?page=1');
    //     return false;
    //   }
    //   const page = +params.page;

    //   this.userFilter = page * 10;
    //   this.filteredUsers = this.users.filter((item, index) => index < this.userFilter && index >= this.userFilter - 10);

    // });
  }

}
