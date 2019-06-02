import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey.component';
import { LandingPageComponent } from './landingpage.component';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { CaseService } from './case.service'
import { ResultsComponent } from './results.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    LandingPageComponent,
    HeaderComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CaseService],
  bootstrap: [AppComponent]
})

export class AppModule { }
