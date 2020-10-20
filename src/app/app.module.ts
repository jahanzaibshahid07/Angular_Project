import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListemployeesComponent } from './employees/listemployees/listemployees.component';
import { CreateemployeeComponent } from './employees/createemployee/createemployee.component';


const routeApp: Routes = [
  {path: 'list', component: ListemployeesComponent},
  {path: 'create', component: CreateemployeeComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListemployeesComponent,
    CreateemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routeApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
