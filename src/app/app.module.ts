import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AssociateComponent } from './main/associate/associate.component';
import { UserAdminComponent } from './main/user-admin/user-admin.component';
import { LoginComponent } from './main/login/login.component';
import { AccountsComponent } from './main/accounts/accounts.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent,
    NavbarComponent,
    AssociateComponent,
    UserAdminComponent,
    LoginComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
