import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from './mail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MailComponent
  ],
  exports: [
    MailComponent
  ]
})
export class MailModule { }


