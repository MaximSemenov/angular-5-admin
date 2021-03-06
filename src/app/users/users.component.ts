import { UsersService, User } from './users.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],

  animations: [
    trigger('search', [
      state('false', style({ transform: 'translateX(-5%)' })),
      state('true', style({ width: '300px' })),
      transition('false <=> true', animate('600ms ease-in')
      )
    ])
  ]

})


export class UsersComponent implements OnInit {


  public users: User[];
  public isSearchBarShown: boolean = false;
  public filteredUsers;
  public searchControl = new FormControl('');
  public isSearchBarExpanded: boolean = false;

  constructor(private usersService: UsersService) { }

  ngOnInit() {

    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
      this.filteredUsers = Object.assign([], this.users);

    });
    this.searchControl.valueChanges.subscribe((value: string) => this.liveSearch(value));

  }

  liveSearch(value: string): void {

    
    if (!value) {
      this.users = this.filteredUsers;
      return;
    }

    this.users = this.filteredUsers.filter(item => {
      let result = false;
      ['userName', 'name', 'email', 'dateJoined', 'role'].forEach(key => {

        // console.log (item);
        if (item[key].toLowerCase().includes(value.toLowerCase())) {
          result = true;
        }

      });

      return result;
    });

  }

  // do() {
  //   console.log('sdasd');
  // }
}
