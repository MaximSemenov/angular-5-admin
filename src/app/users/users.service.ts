import { UsersComponent } from './users.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
export type User = {
  userName: string;
  name: string;
  email: string;
  dateJoined: string;
  role: string;

};

@Injectable()

export class UsersService {

  private _users$$: Subject<User[]>;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {

    return this._users$$.asObservable();

  }

  search(query: string) {

    this._users$$.next()
  }

  loadUsers() {

    this._users$$.next([{
      'userName': 'mwestmorland0',
      'name': 'Monte Westmorland',
      'email': 'mwestmorland0@ocn.ne.jp',
      'dateJoined': '12.1.2018',
      'role': 'Moderator'
    },
    {
      'userName': 'tdilke1',
      'name': 'Tommie Dilke',
      'email': 'tdilke1@yale.edu',
      'dateJoined': '20.4.2017',
      'role': 'Admin'
    },
    {
      'userName': 'bliddiard2',
      'name': 'Bernardina Liddiard',
      'email': 'bliddiard2@liveinternet.ru',
      'dateJoined': '24.5.2017',
      'role': 'Moderator'
    }]);



    // if (!localStorage.users) {
    //   return this.http.get<User[]>('./assets/data/users.json').map(users => {
    //     localStorage.users = JSON.stringify(users);
    //     return JSON.parse(localStorage.users);
    //   });
    // }

    // return Observable.of(JSON.parse(localStorage.users))
    //  Observable.of(JSON.parse(localStorage.users));

  }



}

