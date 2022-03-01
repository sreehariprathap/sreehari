import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDarkComponent } from './portfolio-dark/portfolio-dark.component';
import { UiuxComponent } from './uiux/uiux.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'dark', component: PortfolioDarkComponent },
  { path: 'uiux', component: UiuxComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
