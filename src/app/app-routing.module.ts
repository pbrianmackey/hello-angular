import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { TableComponent } from './table/table.component';
import { BindingComponent } from './binding/binding.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'hero-list', component: HeroListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
