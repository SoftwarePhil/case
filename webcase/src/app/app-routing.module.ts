import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey.component';

const routes: Routes = [
  //TODO: make landing page component
  {
    path:"start",
    component: SurveyComponent 
  },
  {
    path:"",
    redirectTo: "/start",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }