import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedCourseComponent } from './advanced-course.component';
import { HeroAllResolver } from '../resolvers/hero-all-resolver.service';
import { AuthenticationGuard } from '../guards/authentication.guard';

const routes: Routes = [
  { path: 'advanced-course', component: AdvancedCourseComponent, resolve: { heroList: HeroAllResolver }, canActivate: [ AuthenticationGuard ] },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
    exports: [RouterModule]
})
export class AdvancedCourseModule { }
