import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsPageComponent } from './pages/results-page/results-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'results' },
  { path: 'results', component: ResultsPageComponent },
  { path: '**', redirectTo: 'results' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
