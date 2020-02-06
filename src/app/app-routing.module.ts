import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { BindingComponent } from './binding/binding.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AdvancedCourseComponent } from './advanced-course/advanced-course.component';


const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'hero-list', component: HeroListComponent },
  { path: 'advanced-course', component: AdvancedCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
