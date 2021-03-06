
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { UsersService } from './users.service';


const routes: Routes = [


//  / { path: 'users/:userId', component: UsersListComponent }
// { path: 'users/add-new-user', component: AddNewUserComponent }



];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UsersComponent,
    UsersListComponent,
    EditUserComponent,
    PaginationComponent,
    AddNewUserComponent

  ],
  exports: [
    UsersComponent
  ],
  providers: [UsersService]
})

export class UsersModule { }
