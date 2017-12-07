import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MailComponent } from './mail.component';
import { Routes } from '@angular/router/src/config';

const routes: Routes = [

  { path: 'mail', component: MailComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    MailComponent
  ],
  exports: [
    MailComponent
  ]
})
export class MailModule { }


