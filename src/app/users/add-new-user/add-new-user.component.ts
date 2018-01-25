import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  public newUserControl: FormGroup;
  public inputsTitles = ['Name', 'UserName', 'Email', 'Password', 'Country'];
  // public radioSex: FormControl;

  constructor() { }

  ngOnInit() {

    this.newUserControl = new FormGroup({
      newUser: new FormArray([
        new FormControl('Name'),
        new FormControl('UserName'),
        new FormControl('Email'),
        new FormControl('Password'),
        new FormControl('Country')
      ]),
      radioSex: new FormControl('')
    });

     this.newUserControl.valueChanges.subscribe((value) => console.log(value));

  }

  onSubmitNewUser() {
console.log(this.newUserControl);
  }

}
