import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  public newUserControlGroup: FormGroup;
  public inputsTitles = ['Name', 'UserName', 'Email', 'Password'];


  constructor() { }

  ngOnInit() {

    this.newUserControlGroup = new FormGroup({
      'name': new FormControl('', [Validators.minLength(2), Validators.required]),
      'userName': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'role': new FormControl('User')
    });

    // this.newUserControl.valueChanges.subscribe((value) => console.log(value));
    // this.newUserControl.statusChanges.subscribe((value) => console.log(value));
    // console.log (this.newUserControl.get('newUser').controls);

  }

  onSubmitNewUser() {



  }

  resetAddNewUserForm(): void {
    this.newUserControlGroup.reset();
  }

}
