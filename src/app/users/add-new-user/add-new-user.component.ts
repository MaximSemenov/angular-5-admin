import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { isArray } from 'util';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  public newUserControlGroup: FormGroup;
  public inputsTitles = ['Name', 'UserName', 'Email', 'Password'];
  public isSuccessMessageShown: boolean = false;


  constructor() { }

  ngOnInit() {

    this.newUserControlGroup = new FormGroup({
      'name': new FormControl('', [Validators.minLength(2), Validators.required]),
      'userName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'role': new FormControl('User')
    });

  }

  onSubmitNewUser(): void {

    let users = JSON.parse(localStorage.getItem('users'));
    users.unshift(this.newUserControlGroup.value);
    localStorage.users = JSON.stringify(users);
    this.resetAddNewUserForm();

  }

  resetAddNewUserForm(): void {
    this.newUserControlGroup.reset();
  }

}