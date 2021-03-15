import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarreteComponent } from './components/carrete/carrete.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutme',
    component: CurriculumComponent
  },
  {
    path: 'carrete/:id',
    component: CarreteComponent
  },
  {
    path: '',   redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
