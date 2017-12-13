import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsersComponent
  ],
  exports: [
    UsersComponent
  ]
})

export class UsersModule { }
