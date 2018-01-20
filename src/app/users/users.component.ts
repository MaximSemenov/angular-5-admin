import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


type users = {
  username: string;
  name: string;
  email: string;
  dateJoined: string;
  role: string;

};

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

  public isSearchBarShown: boolean = false;
  public savedUsers;
  public filteredUsers;


  public users: users[] = [
    {
      username: 'arska.kram.1990',
      name: 'Arska Kumar',
      email: 'arska.kram.1990@gmail.com',
      dateJoined: '25.2.1990',
      role: 'Moderator'
    },
    {
      username: 'ska.kakma',
      name: 'Ska Kakma',
      email: 'ska.kakma@gmail.com',
      dateJoined: '13.5.2005',
      role: 'Admin'
    },
    {
      username: 'mundri.packoda',
      name: '	Mundri Packoda',
      email: 'mundri.packoda@gmail.com',
      dateJoined: '12.4.2004',
      role: 'Author'
    },
    {
      username: 'james.bond.007',
      name: 'James Bond',
      email: 'james.bond.007@gmail.com',
      dateJoined: '18.6.2003',
      role: 'Temp'
    },
    {
      username: 'billa.boy',
      name: 'Billa Boy',
      email: 'billa.boy@gmail.com',
      dateJoined: '09.2.2013',
      role: 'User'
    },
    {
      username: 'kattu.poochi.2013',
      name: 'Kattu Poochi',
      email: 'kattu.poochi.2013@gmail.com',
      dateJoined: '18.12.1999',
      role: 'Admin'
    },
    {
      username: 'arska.kram.1990',
      name: 'Arska Kumar',
      email: 'arska.kram.1990@gmail.com',
      dateJoined: '22.12.2000',
      role: 'Author'
    },
    {
      username: 'mamu.mami.1990',
      name: 'Mamu Mami',
      email: 'mamu.mami.1990@gmail.com',
      dateJoined: '15.4.1994',
      role: 'User'
    },
    {
      username: 'arska.kram.1990',
      name: 'Arska Kumar',
      email: 'arska.kram.1990@gmail.com',
      dateJoined: '25.2.1990',
      role: 'Moderator'
    },
    {
      username: 'ska.kakma',
      name: 'Ska Kakma',
      email: 'ska.kakma@gmail.com',
      dateJoined: '13.5.2005',
      role: 'Admin'
    },
    {
      username: 'mundri.packoda',
      name: '	Mundri Packoda',
      email: 'mundri.packoda@gmail.com',
      dateJoined: '12.4.2004',
      role: 'Author'
    },
    {
      username: 'james.bond.007',
      name: 'James Bond',
      email: 'james.bond.007@gmail.com',
      dateJoined: '18.6.2003',
      role: 'Temp'
    },
    {
      username: 'billa.boy',
      name: 'Billa Boy',
      email: 'billa.boy@gmail.com',
      dateJoined: '09.2.2013',
      role: 'User'
    },
    {
      username: 'kattu.poochi.2013',
      name: 'Kattu Poochi',
      email: 'kattu.poochi.2013@gmail.com',
      dateJoined: '18.12.1999',
      role: 'Admin'
    },
    {
      username: 'arska.kram.1990',
      name: 'Arska Kumar',
      email: 'arska.kram.1990@gmail.com',
      dateJoined: '22.12.2000',
      role: 'Author'
    },
    {
      username: 'mamu.mami.1990',
      name: 'Mamu Mami',
      email: 'mamu.mami.1990@gmail.com',
      dateJoined: '15.4.1994',
      role: 'User'
    },
    {
      username: 'arska.kram.1990',
      name: 'Arska Kumar',
      email: 'arska.kram.1990@gmail.com',
      dateJoined: '25.2.1990',
      role: 'Moderator'
    },
    {
      username: 'ska.kakma',
      name: 'Ska Kakma',
      email: 'ska.kakma@gmail.com',
      dateJoined: '13.5.2005',
      role: 'Admin'
    },
    {
      username: 'mundri.packoda',
      name: '	Mundri Packoda',
      email: 'mundri.packoda@gmail.com',
      dateJoined: '12.4.2004',
      role: 'Author'
    },
    {
      username: 'james.bond.007',
      name: 'James Bond',
      email: 'james.bond.007@gmail.com',
      dateJoined: '18.6.2003',
      role: 'Temp'
    },
    {
      username: 'billa.boy',
      name: 'Billa Boy',
      email: 'billa.boy@gmail.com',
      dateJoined: '09.2.2013',
      role: 'User'
    },
    {
      username: 'kattu.poochi.2013',
      name: 'Kattu Poochi',
      email: 'kattu.poochi.2013@gmail.com',
      dateJoined: '18.12.1999',
      role: 'Admin'
    },
    {
      username: 'arska.kram.1990',
      name: 'Arska Kumar',
      email: 'arska.kram.1990@gmail.com',
      dateJoined: '22.12.2000',
      role: 'Author'
    },
    {
      username: 'mamu.mami.1990',
      name: 'Mamu Mami',
      email: 'mamu.mami.1990@gmail.com',
      dateJoined: '15.4.1994',
      role: 'User'
    },
    {
      username: 'arska.kram.1990',
      name: 'Arska Kumar',
      email: 'arska.kram.1990@gmail.com',
      dateJoined: '25.2.1990',
      role: 'Moderator'
    },
    {
      username: 'ska.kakma',
      name: 'Ska Kakma',
      email: 'ska.kakma@gmail.com',
      dateJoined: '13.5.2005',
      role: 'Admin'
    },
    {
      username: 'mundri.packoda',
      name: '	Mundri Packoda',
      email: 'mundri.packoda@gmail.com',
      dateJoined: '12.4.2004',
      role: 'Author'
    },
    {
      username: 'james.bond.007',
      name: 'James Bond',
      email: 'james.bond.007@gmail.com',
      dateJoined: '18.6.2003',
      role: 'Temp'
    },
    {
      username: 'billa.boy',
      name: 'Billa Boy',
      email: 'billa.boy@gmail.com',
      dateJoined: '09.2.2013',
      role: 'User'
    }

  ];


  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => console.log(params));
  }

  ngOnInit() {
    this.filteredUsers = Object.assign([], this.users);
  }

  liveSearch(value: string): void {

    this.users = this.filteredUsers;

    if (!value) {
      this.users = this.filteredUsers;
      return;
    }

    this.users = this.users.filter(item => {
      let result = [];
      for (let key in item) {

        if (item.hasOwnProperty(key)) {

          result.push(item[key].toLowerCase().indexOf(value.toLowerCase()) > -1);
        }

      }
      for (let i of result) {
        if (i === true) {
          return result;
        }
      }
      return false;
    });

  }
}
