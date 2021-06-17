import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesService } from './heroes.service';
import { HttpClientModule } from '@angular/common/http';
import { BorderDirective } from './border.directive';
import { AdvancedCourseComponent } from './advanced-course/advanced-course.component';
import { SharedModule } from './shared.module';
import { LoginComponent } from './login/login.component';
import { AdvancedCourseModule } from './advanced-course/advanced-course.module';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BindingComponent,
    HeroListComponent,
    BorderDirective,
    AdvancedCourseComponent,
    LoginComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AdvancedCourseModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
