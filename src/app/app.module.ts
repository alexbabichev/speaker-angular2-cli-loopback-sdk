import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { routing } from './app.routes'; // ROUTING HERE!

import { AppComponent } from './app.component';
import { LangingComponent } from './langing/langing.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    LangingComponent,
    LoginComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
