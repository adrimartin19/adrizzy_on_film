import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { Carrete1Component } from './components/carrete1/carrete1.component';
import { MatGridListModule } from '@angular/material/grid-list';


const routes: Routes = [
  
  {
    path: 'carrete1',
    component: Carrete1Component
  }

]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Carrete1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }