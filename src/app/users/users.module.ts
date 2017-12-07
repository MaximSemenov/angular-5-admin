import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



const routes = [

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
