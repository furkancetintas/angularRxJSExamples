import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterExamplesComponent } from './modules/filter-examples/filter-examples.component';

const routes: Routes = [
  { path: 'examples', component: FilterExamplesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
