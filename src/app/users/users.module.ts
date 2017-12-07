import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';



const routes: Routes = [

  { path: 'users', component: UsersComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    UsersComponent
  ],
  exports: [
    UsersComponent
  ]
})

export class UsersModule { }
