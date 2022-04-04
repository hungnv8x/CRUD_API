import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {MasterComponent} from './components/core/master/master.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserListComponent} from './components/users/user-list/user-list.component';
import {UserEditComponent} from './components/users/user-edit/user-edit.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: MasterComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: UserListComponent
      },
      {
        path: 'users/:id/edit',
        component: UserEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
