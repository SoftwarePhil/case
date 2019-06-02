import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './survey.component';
import { AboutComponent } from './about.component';
import { ResourcesComponent } from './resources.component';

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
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"resources",
    component: ResourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }