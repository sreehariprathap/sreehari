import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorksComponent } from './portfolio/works/works.component';
import { ExperienceComponent } from './portfolio/experience/experience.component';
import { EducationComponent } from './portfolio/education/education.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { PortfolioDarkComponent } from './portfolio-dark/portfolio-dark.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    WorksComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    PortfolioDarkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
