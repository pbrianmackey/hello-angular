import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';


const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'binding', component: BindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
