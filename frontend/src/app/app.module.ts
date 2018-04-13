import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketService } from './socket.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {ActivatedRoute} from '@angular/router';


import { AppComponent } from './app.component';
import { Viikko2Component } from './viikko2/viikko2.component';
import { HomeComponent } from './home/home.component';
import { Viikko2CreateComponent } from './viikko2-create/viikko2-create.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'viikko2', component: Viikko2Component },
  { path: 'viikko2/create', component: Viikko2CreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Viikko2Component,
    HomeComponent,
    Viikko2CreateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
