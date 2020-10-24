import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarreteComponent } from './components/carrete/carrete.component';

const routes: Routes = [
  
  {
    path: 'carrete/:id',
    component: CarreteComponent
  }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
