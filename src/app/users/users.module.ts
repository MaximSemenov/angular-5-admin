
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [


  { path: 'userslist', component: UsersListComponent }




];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
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
