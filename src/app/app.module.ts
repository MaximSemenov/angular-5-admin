import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ViewContainerComponent } from './view-container/view-container.component';
import { TopToolBarComponent } from './top-tool-bar/top-tool-bar.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { WidgetComponent } from './view-container/widget/widget.component';
import { ChartsComponent } from './view-container/charts/charts.component';
import { UserInterfaceComponent } from './view-container/user-interface/user-interface.component';
import { PagesComponent } from './view-container/pages/pages.component';
import { UsersComponent } from './view-container/users/users.component';
import { MailComponent } from './view-container/mail/mail.component';
import { CalendarComponent } from './view-container/pages/calendar/calendar.component';
import { DashboardComponent } from './view-container/dashboard/dashboard.component';

const routes: Routes = [

  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'widget', component: WidgetComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'mail', component: MailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user-interface', component: UserInterfaceComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'calendar', component: CalendarComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    ViewContainerComponent,
    TopToolBarComponent,
    WidgetComponent,
    ChartsComponent,
    UserInterfaceComponent,
    PagesComponent,
    UsersComponent,
    MailComponent,
    CalendarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
