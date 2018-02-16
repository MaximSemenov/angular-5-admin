import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { UsersService } from '../users.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { combineLatest } from 'rxjs/observable/combineLatest';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnChanges {

  public activePage: number;
  public userFilter: number;
  public filteredUsers;
  public users;


  // @Input() users;

  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {




    this.usersService.getUsers().switchMap(users => {

      this.users = users;
      this.filteredUsers = this.users.slice(0, 10);
      return this.activatedRoute.queryParams;

    }).subscribe(params => {
      if (params.page) {
        this.userFilter = +params.page * 10;
        this.filteredUsers = this.users.slice(this.userFilter - 10, this.userFilter);

      }


    });

    this.usersService.loadUsers();



    // this.filteredUsers = this.users.slice(0, 10);

    // combineLatest(this.usersService.getUsers(), this.activatedRoute.queryParams)
    //   .subscribe(([users, params]) => {
    //     this.userFilter = +params.page * 10;
    //     this.filteredUsers = users.slice(this.userFilter - 10, this.userFilter);
    //     console.log(users, params);
    //   });


    // this.usersService.getUsers().switchMap(users => {

    //   this.activatedRoute.queryParams.subscribe((params) => {

    //       if (!params || !params.page || !this.users) {
    //         this.router.navigateByUrl('/users?page=1');
    //         return false;
    //       }
    //       this.userFilter = +params.page * 10;
    //       this.filteredUsers = this.users.slice(this.userFilter - 10, this.userFilter);
    //     });



    // })

    // this.usersService.getUsers().subscribe((users) => {
    //   this.users = users;


    // this.activatedRoute.queryParams.subscribe((params) => {

    //   if (!params || !params.page || !this.users) {
    //     this.router.navigateByUrl('/users?page=1');
    //     return false;
    //   }
    //   this.userFilter = +params.page * 10;
    //   this.filteredUsers = this.users.slice(this.userFilter - 10, this.userFilter);
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {

    // if (!changes['usersss'].isFirstChange()) {
    //   this.filteredUsers = this.users.slice(0, 10);
    // }
  }
}

