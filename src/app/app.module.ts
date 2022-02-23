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
import { WorksDarkComponent } from './portfolio-dark/works-dark/works-dark.component';
import { ExperinceDarkComponent } from './portfolio-dark/experince-dark/experince-dark.component';
import { EducationDarkComponent } from './portfolio-dark/education-dark/education-dark.component';
import { ContactDarkComponent } from './portfolio-dark/contact-dark/contact-dark.component';
// import { DarkmodeToggleComponent } from './darkmode-toggle/darkmode-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    WorksComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    PortfolioDarkComponent,
    WorksDarkComponent,
    ExperinceDarkComponent,
    EducationDarkComponent,
    ContactDarkComponent,
    // DarkmodeToggleComponent,
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
