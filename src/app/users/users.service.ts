import { UsersComponent } from './users.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
export type User = {
  userName: string;
  name: string;
  email: string;
  dateJoined: string;
  role: string;

};

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {

    if (!localStorage.users) {
      return this.http.get<User[]>('./assets/data/users.json').map(users => {
        localStorage.users = JSON.stringify(users);
        return JSON.parse(localStorage.users);
      });
    }

    return Observable.of(JSON.parse(localStorage.users));
  }
}
