import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdddataComponent } from './adddata/adddata.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewalldataComponent } from './viewalldata/viewalldata.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchbookComponent } from './searchbook/searchbook.component';

const appRoutes:Routes=[
  {
    path:"",component:AdddataComponent
  },
  {
    path:"viewdata",component:ViewalldataComponent
  },
  {
    path:"searchdata",component:SearchbookComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdddataComponent,
    ViewalldataComponent,
    SearchbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
