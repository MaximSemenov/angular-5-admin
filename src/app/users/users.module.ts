import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsersComponent,
    AddNewUserComponent,
    UsersListComponent,
    EditUserComponent,
    AddNewUserComponent

  ],
  exports: [
    UsersComponent
  ]
})

export class UsersModule { }
