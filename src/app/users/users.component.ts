import { UsersService, User } from './users.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { FormControl } from '@angular/forms';


// type users = {
//   username: string;
//   name: string;
//   email: string;
//   dateJoined: string;
//   role: string;

// };

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('search', [
      state('void', style({ transform: 'translateX(-5%)' })),
      state('*', style({ width: '245px' })),
      transition('void => *', animate('500ms ease-in')
      )
    ])
  ]
})


export class UsersComponent implements OnInit {


  public users: User[];
  public isSearchBarShown: boolean = false;
  public filteredUsers;
  public pagination;
  public pageLinks;
  public totalPages;
  public startPage;
  public endPage;
  public currentPage;

  public searchControl = new FormControl('');



  // public users: users[] = [
  //   {
  //     username: 'arska.kram.1990 - 1',
  //     name: 'Arska Kumar',
  //     email: 'arska.kram.1990@gmail.com',
  //     dateJoined: '25.2.1990',
  //     role: 'Moderator'
  //   },
  //   {
  //     username: 'ska.kakma',
  //     name: 'Ska Kakma',
  //     email: 'ska.kakma@gmail.com',
  //     dateJoined: '13.5.2005',
  //     role: 'Admin'
  //   },
  //   {
  //     username: 'mundri.packoda - 3',
  //     name: '	Mundri Packoda',
  //     email: 'mundri.packoda@gmail.com',
  //     dateJoined: '12.4.2004',
  //     role: 'Author'
  //   },
  //   {
  //     username: 'james.bond.007',
  //     name: 'James Bond',
  //     email: 'james.bond.007@gmail.com',
  //     dateJoined: '18.6.2003',
  //     role: 'Temp'
  //   },
  //   {
  //     username: 'billa.boy',
  //     name: 'Billa Boy',
  //     email: 'billa.boy@gmail.com',
  //     dateJoined: '09.2.2013',
  //     role: 'User'
  //   },
  //   {
  //     username: 'kattu.poochi.2013',
  //     name: 'Kattu Poochi',
  //     email: 'kattu.poochi.2013@gmail.com',
  //     dateJoined: '18.12.1999',
  //     role: 'Admin'
  //   },
  //   {
  //     username: 'arska.kram.1990',
  //     name: 'Arska Kumar',
  //     email: 'arska.kram.1990@gmail.com',
  //     dateJoined: '22.12.2000',
  //     role: 'Author'
  //   },
  //   {
  //     username: 'mamu.mami.1990',
  //     name: 'Mamu Mami',
  //     email: 'mamu.mami.1990@gmail.com',
  //     dateJoined: '15.4.1994',
  //     role: 'User'
  //   },
  //   {
  //     username: 'arska.kram.1990',
  //     name: 'Arska Kumar',
  //     email: 'arska.kram.1990@gmail.com',
  //     dateJoined: '25.2.1990',
  //     role: 'Moderator'
  //   },
  //   {
  //     username: 'ska.kakma - 10',
  //     name: 'Ska Kakma',
  //     email: 'ska.kakma@gmail.com',
  //     dateJoined: '13.5.2005',
  //     role: 'Admin'
  //   },
  //   {
  //     username: 'mundri.packoda - 11',
  //     name: '	Mundri Packoda',
  //     email: 'mundri.packoda@gmail.com',
  //     dateJoined: '12.4.2004',
  //     role: 'Author'
  //   },
  //   {
  //     username: 'james.bond.007',
  //     name: 'James Bond',
  //     email: 'james.bond.007@gmail.com',
  //     dateJoined: '18.6.2003',
  //     role: 'Temp'
  //   },
  //   {
  //     username: 'billa.boy',
  //     name: 'Billa Boy',
  //     email: 'billa.boy@gmail.com',
  //     dateJoined: '09.2.2013',
  //     role: 'User'
  //   },
  //   {
  //     username: 'kattu.poochi.2013',
  //     name: 'Kattu Poochi',
  //     email: 'kattu.poochi.2013@gmail.com',
  //     dateJoined: '18.12.1999',
  //     role: 'Admin'
  //   },
  //   {
  //     username: 'arska.kram.1990',
  //     name: 'Arska Kumar',
  //     email: 'arska.kram.1990@gmail.com',
  //     dateJoined: '22.12.2000',
  //     role: 'Author'
  //   },
  //   {
  //     username: 'mamu.mami.1990',
  //     name: 'Mamu Mami',
  //     email: 'mamu.mami.1990@gmail.com',
  //     dateJoined: '15.4.1994',
  //     role: 'User'
  //   },
  //   {
  //     username: 'arska.kram.1990',
  //     name: 'Arska Kumar',
  //     email: 'arska.kram.1990@gmail.com',
  //     dateJoined: '25.2.1990',
  //     role: 'Moderator'
  //   },
  //   {
  //     username: 'ska.kakma',
  //     name: 'Ska Kakma',
  //     email: 'ska.kakma@gmail.com',
  //     dateJoined: '13.5.2005',
  //     role: 'Admin'
  //   },
  //   {
  //     username: 'mundri.packoda',
  //     name: '	Mundri Packoda',
  //     email: 'mundri.packoda@gmail.com',
  //     dateJoined: '12.4.2004',
  //     role: 'Author'
  //   },
  //   {
  //     username: 'james.bond.007',
  //     name: 'James Bond',
  //     email: 'james.bond.007@gmail.com',
  //     dateJoined: '18.6.2003',
  //     role: 'Temp'
  //   },
  //   {
  //     username: 'billa.boy',
  //     name: 'Billa Boy',
  //     email: 'billa.boy@gmail.com',
  //     dateJoined: '09.2.2013',
  //     role: 'User'
  //   },
  //   {
  //     username: 'kattu.poochi.2013',
  //     name: 'Kattu Poochi',
  //     email: 'kattu.poochi.2013@gmail.com',
  //     dateJoined: '18.12.1999',
  //     role: 'Admin'
  //   },
  //   {
  //     username: 'arska.kram.1990',
  //     name: 'Arska Kumar',
  //     email: 'arska.kram.1990@gmail.com',
  //     dateJoined: '22.12.2000',
  //     role: 'Author'
  //   },
  //   {
  //     username: 'mamu.mami.1990',
  //     name: 'Mamu Mami',
  //     email: 'mamu.mami.1990@gmail.com',
  //     dateJoined: '15.4.1994',
  //     role: 'User'
  //   },
  //   {
  //     username: 'arska.kram.1990',
  //     name: 'Arska Kumar',
  //     email: 'arska.kram.1990@gmail.com',
  //     dateJoined: '25.2.1990',
  //     role: 'Moderator'
  //   },
  //   {
  //     username: 'ska.kakma',
  //     name: 'Ska Kakma',
  //     email: 'ska.kakma@gmail.com',
  //     dateJoined: '13.5.2005',
  //     role: 'Admin'
  //   },
  //   {
  //     username: 'mundri.packoda',
  //     name: '	Mundri Packoda',
  //     email: 'mundri.packoda@gmail.com',
  //     dateJoined: '12.4.2004',
  //     role: 'Author'
  //   },
  //   {
  //     username: 'james.bond.007',
  //     name: 'James Bond',
  //     email: 'james.bond.007@gmail.com',
  //     dateJoined: '18.6.2003',
  //     role: 'Temp'
  //   },
  //   {
  //     username: 'billa.boy',
  //     name: 'Billa Boy',
  //     email: 'billa.boy@gmail.com',
  //     dateJoined: '09.2.2013',
  //     role: 'User'
  //   },
  //   {
  //     username: 'billa.boy',
  //     name: 'Billa Boy',
  //     email: 'billa.boy@gmail.com',
  //     dateJoined: '09.2.2013',
  //     role: 'User'
  //   },
  //   {
  //     username: 'billa.boy',
  //     name: 'Billa Boy',
  //     email: 'billa.boy@gmail.com',
  //     dateJoined: '09.2.2013',
  //     role: 'User'
  //   },
  //   {
  //     username: 'billa.boy',
  //     name: 'Billa Boy',
  //     email: 'billa.boy@gmail.com',
  //     dateJoined: '09.2.2013',
  //     role: 'User'
  //   }

  // ];


  constructor(private usersService: UsersService) {

  }

  ngOnInit() {

    this.usersService.getUsers().subscribe((users) => this.users = users);
    this.searchControl.valueChanges.subscribe((value: string) => this.liveSearch(value));
    this.filteredUsers = Object.assign([], this.users);

  }

  liveSearch(value: string): void {


    if (!value) {
      this.users = this.filteredUsers;
      return;
    }

    this.users = this.filteredUsers.filter(item => {
      let result = false;
      ['username', 'name', 'email', 'dateJoined', 'role'].forEach(key => {

        if (item[key].toLowerCase().includes(value.toLowerCase())) {
          result = true;
        }

      });

      return result;
    });

  }
}
