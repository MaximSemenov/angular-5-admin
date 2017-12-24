import { CustomEventHandlerDirective } from './side-navigation/side-navigation.directive';
import { MailComponent } from './../mail/mail.component';
import { PagesComponent } from './../pages/pages.component';
import { ChartsComponent } from './../dashboard/charts/charts.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';

import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { TopToolBarComponent } from './top-tool-bar/top-tool-bar.component';

import { RouterModule, Routes } from '@angular/router';
// import { Routes } from '@angular/router/src/config';

import { ChartsModule } from '../charts/charts.module';
import { MailModule } from '../mail/mail.module';
import { PagesModule } from '../pages/pages.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { UserInterfaceModule } from '../user-interface/user-interface.module';
import { UsersModule } from '../users/users.module';
import { WidgetModule } from '../widget/widget.module';
import { SubMenuComponent } from './side-navigation/sub-menu/sub-menu.component';
import { SideNavigationService } from './side-navigation/side-navigation.service';
import { AppRootComponent } from './app-root.component';
import { WidgetComponent } from '../widget/widget.component';
import { UserInterfaceComponent } from '../user-interface/user-interface.component';
import { UsersComponent } from '../users/users.component';
import { CalendarComponent } from '../pages/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [

  {
    path: '', component: AdminComponent, children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', data: { title: 'Dashboard' }, component: DashboardComponent },
      { path: 'widget', data: { title: 'Widget' }, component: WidgetComponent },
      { path: 'charts', data: { title: 'Charts' }, component: ChartsComponent },
      { path: 'user-interface', data: { title: 'User Interface' }, component: UserInterfaceComponent },
      { path: 'pages', data: { title: 'Pages' }, component: PagesComponent },
      { path: 'users', data: { title: 'Users' }, component: UsersComponent },
      { path: 'mail', data: { title: 'Mail' }, component: MailComponent }

    ]
  }
];


@NgModule({
  declarations: [
    AdminComponent,
    SideNavigationComponent,
    TopToolBarComponent,
    SubMenuComponent,
    AppRootComponent,
    CustomEventHandlerDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DashboardModule,
    ChartsModule,
    MailModule,
    PagesModule,
    UserInterfaceModule,
    UsersModule,
    WidgetModule,
    BrowserAnimationsModule
  ],
  providers: [SideNavigationService],
  bootstrap: [AppRootComponent]
})
export class AdminModule { }
