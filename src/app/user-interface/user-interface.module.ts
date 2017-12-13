import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInterfaceComponent } from './user-interface.component';





@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserInterfaceComponent
  ],
  exports: [
    UserInterfaceComponent
  ]
})
export class UserInterfaceModule { }


