import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioDarkComponent } from './portfolio-dark/portfolio-dark.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'dark', component: PortfolioDarkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
