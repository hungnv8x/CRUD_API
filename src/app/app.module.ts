import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { MasterComponent } from './components/core/master/master.component';
import { HeaderComponent } from './components/core/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterComponent,
    HeaderComponent,
    DashboardComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
