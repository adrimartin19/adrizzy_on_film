import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CarreteComponent } from './components/carrete/carrete.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarreteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ {
    provide: APP_INITIALIZER, useFactory: LoadData, deps: [ApiService], multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function LoadData(dataService: ApiService){
  return () => dataService.loadData();
}
