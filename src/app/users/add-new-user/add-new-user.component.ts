import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  public newUserControl: FormGroup;
  public inputsTitles = ['Name', 'UserName', 'Email', 'Password'];


  constructor() { }

  ngOnInit() {

    this.newUserControl = new FormGroup({
      newUser: new FormArray([
        new FormControl('Name', [Validators.minLength(2), Validators.required]),
        new FormControl('UserName'),
        new FormControl('Email', Validators.email),
        new FormControl('Password', [Validators.minLength(6)])
      ]),
      role: new FormControl('')
    });

    this.newUserControl.valueChanges.subscribe((value) => console.log(value));
    this.newUserControl.statusChanges.subscribe((value) => console.log(value));

    // console.log (this.newUserControl.get('newUser').controls);

  }

  onSubmitNewUser() {
    console.log(this.newUserControl);
  }

  resetAddNewUserForm() {
    this.newUserControl.reset();
  }

}
