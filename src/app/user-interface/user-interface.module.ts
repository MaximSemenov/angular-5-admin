import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserInterfaceComponent } from './user-interface.component';


const routes = [

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


