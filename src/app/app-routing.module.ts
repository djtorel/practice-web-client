import { LoginComponent } from './main/login/login.component';
import { AccountsComponent } from './main/accounts/accounts.component';
import { AssociateComponent } from './main/associate/associate.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { UserAdminComponent } from './main/user-admin/user-admin.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'associate', component: AssociateComponent },
  { path: 'admin', component: UserAdminComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // for debugging purposes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
