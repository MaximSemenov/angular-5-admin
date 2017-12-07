import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserInterfaceComponent } from './user-interface.component';
import { Routes } from '@angular/router/src/config';


const routes: Routes = [

  { path: 'user-interface', component: UserInterfaceComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    UserInterfaceComponent
  ],
  exports: [
    UserInterfaceComponent
  ]
})
export class UserInterfaceModule { }


