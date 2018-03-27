import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AssociateComponent } from './main/associate/associate.component';
import { UserAdminComponent } from './main/user-admin/user-admin.component';
import { LoginComponent } from './main/login/login.component';
import { AccountsComponent } from './main/accounts/accounts.component';
import { AddUserComponent } from './main/user-admin/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AssociateComponent,
    UserAdminComponent,
    LoginComponent,
    AccountsComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
