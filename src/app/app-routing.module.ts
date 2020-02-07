import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { TableComponent } from './table/table.component';
import { BindingComponent } from './binding/binding.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AdvancedCourseComponent } from './advanced-course/advanced-course.component';
import { HeroAllResolver } from './resolvers/hero-all-resolver.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'hero-list', component: HeroListComponent },
  { path: 'advanced-course', component: AdvancedCourseComponent, resolve: { heroList: HeroAllResolver }, canActivate: [ AuthenticationGuard ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
