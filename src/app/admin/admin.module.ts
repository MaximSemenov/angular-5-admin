import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';

import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { TopToolBarComponent } from './top-tool-bar/top-tool-bar.component';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';

import { ChartsModule } from '../charts/charts.module';
import { MailModule } from '../mail/mail.module';
import { PagesModule } from '../pages/pages.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { UserInterfaceModule } from '../user-interface/user-interface.module';
import { UsersModule } from '../users/users.module';
import { WidgetModule } from '../widget/widget.module';
import { SubMenuComponent } from './side-navigation/sub-menu/sub-menu.component';
import { SideNavigationService } from './side-navigation/side-navigation.service';

const routes: Routes = [


];

@NgModule({
  declarations: [
    AdminComponent,
    SideNavigationComponent,
    TopToolBarComponent,
    SubMenuComponent
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
    WidgetModule
  ],
  providers: [SideNavigationService],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
