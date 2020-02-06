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
import { FeatureToggleDirective } from './feature-toggle.directive';
import { BorderDirective } from './border.directive';
import { AdvancedCourseComponent } from './advanced-course/advanced-course.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BindingComponent,
    HeroListComponent,
    FeatureToggleDirective,
    BorderDirective,
    AdvancedCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
