
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


 /// { path: 'users/:userId', component: UsersListComponent }


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UsersComponent,
    AddNewUserComponent,
    UsersListComponent,
    EditUserComponent,
    AddNewUserComponent,
    PaginationComponent

  ],
  exports: [
    UsersComponent
  ],
  providers: [UsersService]
})

export class UsersModule { }
