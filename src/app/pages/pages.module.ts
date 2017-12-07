import { CalendarComponent } from './calendar/calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes = [
  { path: 'pages', component: PagesComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CalendarComponent,
    PagesComponent
  ],
  exports: [
    CalendarComponent,
    PagesComponent
  ]
})
export class PagesModule { }
